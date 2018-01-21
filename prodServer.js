const express = require('express');
const app = new express();


app.use('/static', express.static('dist'));

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html')
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server listening port ${port}`);
});