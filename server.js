var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
// app.use('/store', function (req, res, next) {
// 	console.log('Jestem pośrednikiem przy żądaniu do /store');
// 	next();
// });

app.get('/', function (req, res) {
	res.send('Hello world!');
});

// app.get('/store', function (req, res) {
// 	res.send('To jest sklep');
// });

// app.get('/first-template', function (req,res) {
// 	res.render('first-template');
// });

// app.get('/dynamic-view', function(req, res){
//     res.render('dynamic', {
//        user: 
//        	{name:'Paweł'}
//     });
// });

app.get('/login', function (req,res) {
	res.render('google');
});

app.get('/userform', function (req, res) {
	const response = {
		user: req.query.user,
		pass: req.query.pass
	};
	res.render('welcome', {
		response
	});
});

app.listen(3000);

app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego , czego żądasz!')
});