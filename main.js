const axios = require('axios');

const token = 'paste-token-here'; // Paste token from Lumia Stream (Settings > Advanced > API > Rest API > Show Token)

// Get Possible Types and Values
axios.get(`http://localhost:39231/api/retrieve?token=${token}`)
	.then((res) => {
		console.log('Api option res: ', res.data);
	}).catch((err) => {
		console.log('err: ', err);
	});

// Trigger Chat Color Blue
axios.post(`http://localhost:39231/api/send?token=${token}`, { type: 'chat-color', value: 'blue' })
	.then((res) => {
		console.log('res: ', res.data);
	}).catch((err) => {
		console.log('err: ', err);
	});
