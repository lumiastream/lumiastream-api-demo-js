const axios = require('axios');

const token = 'paste-token-here'; // Paste token from Lumia Stream (Settings > Advanced > Developers API > Show Token)

const run = async () => {
	try {
		if (!token) {
			throw new Error('Token is required');
		}

		// Get Possible Types and Values
		const retrieveRes = await axios.get(`http://localhost:39231/api/retrieve?token=${token}`);

		console.log('API Retrieve response: ', retrieveRes.data);

		// Senc Chat Command Blue
		const commandRes = await axios.post(`http://localhost:39231/api/send?token=${token}`, {
			type: 'chat-command',
			params: {
				value: 'blue',
			},
		});

		console.log('API Command response: ', commandRes.data);

		// Send Alert
		const alertRes = await axios.post(`http://localhost:39231/api/send?token=${token}`, {
			type: 'alert',
			params: {
				value: 'twitch-follower',
			},
		});

		console.log('API Alert response: ', alertRes.data);

		// Send RGB Colors with Brightness
		const genericRes = await axios.post(`http://localhost:39231/api/send?token=${token}`, {
			type: 'rgb-color',
			params: { value: { r: 20, g: 100, b: 10 }, brightness: 100, transition: 0, duration: 5000 },
		});

		console.log('API Generic response: ', genericRes.data);

		// Send Text To Speech
		const ttsRes = await axios.post(`http://localhost:39231/api/send?token=${token}`, {
			type: 'tts',
			params: { value: 'Wow, this tutorial is so cool' },
		});

		console.log('API TTS response: ', ttsRes.data);

		// Send Chatbot message
		const chatbotRes = await axios.post(`http://localhost:39231/api/send?token=${token}`, {
			type: 'chatbot-message',
			params: { value: 'Wow, this tutorial is so cool', platform: 'twitch' },
		});

		console.log('API Chatbot response: ', chatbotRes.data);
	} catch (err) {
		console.error('API run err: ', err);
	}
};

run();
