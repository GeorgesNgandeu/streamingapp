const express = require('express');

var app = express();

app.use(express.static(__dirname ));

app.get('/', (req,res) => {
	res.send('Hello Express')
});

app.listen(3000, () => {
	console.log('server up and running on port 3000');
});