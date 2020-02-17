const axios = require('axios');

const token = 'paste-token-here'; // Paste token from Lumia Stream (Settings > Advanced > API > Rest API > Show Token)

axios.get(`http://localhost:39231/api/retrieve?token=${token}`)
	.then((res) => {
		console.log('Api option res: ', res.data.data);

		// Retrieve Chat Colors from the returned array
		const chatColors = res.data.data.find((command) => command.type === 'chat-color');

		console.log('chatColors: ', chatColors);
		const firstColor = chatColors.values[0];
		console.log('firstColor: ', firstColor);
		sendCommand({ type: chatColors.type, value: firstColor });
	}).catch((err) => {
		console.log('err: ', err);
	});


const sendCommand = ({ type, value }) => {
	axios.post(`http://localhost:39231/api/send?token=${token}`, { type, value })
		.then((res) => {
			console.log('res: ', res.data);
		}).catch((err) => {
			console.log('err: ', err);
		});
}
