const fs = require('fs');
const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://develop:develop@localhost:5432/test_django')

const app = express();
const router = express.Router();

class UserDataError extends Error {
  constructor(message) {
  	super(message);
  	this.name = "UserDataError";
  }
}

async function connect() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

connect();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({
  type: ['application/json', 'text/plain']
}));

router.post("/users/new", function(request, response) {
	console.log(request.body);
	console.log(request);
	// response.sendFile(__dirname + "/index.html");
	let status = 'logged out';
	let username = '';
	let password = '';
	try {
		username = request.body["username"];
		password = request.body["password"];
		if (password.length < 4) {
			throw new UserDataError("Password is too short!");
		}
		status = 'logged in';
		response.send('{"status":"' + status + '"}');
	} catch (e) {
		if (e instanceof UserDataError) {
			console.log(e);
			response.send('{"status":"' + status + '", "error":"Пароль слишком короткий!"}');
		} else if (e instanceof TypeError) {
			console.log(e);
			response.send('{"status":"' + status + '", "error":"Данные не пришли!"}');
		} else {
			throw e;
		}
	}
	// if (request.body["username"] == 'Asdfg' && request.body["password"] == '123') {
		// status = 'logged in';
	// }
});

router.get("/", function(request, response) {
    // отправляем ответ
    response.sendFile(__dirname + "/views/index.html");
    // response.render("index", {title: "Test NodeJS template engine"});
});

app.use("/", router);
app.use("/static", express.static(__dirname + "/static"));// use it

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
