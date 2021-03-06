const express = require('express');

var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname ));

app.get('/', (req,res) => {
	res.send('Hello Express')
});

app.listen(port, () => {
	console.log(`server up and running on port ${port}`);
});