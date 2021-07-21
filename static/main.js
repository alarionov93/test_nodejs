
;

console.log("Hello!");
$(document).ready(function() {
	$('#submit').click(async (evt) => {
		evt.preventDefault();
		// $.params()
		let data = {
			username: $('#form1 input[name=username]').val(),
			password: $('#form1 input[name=password]').val()
		};
		// $.post('users/new/', data)
		// .then(function (resp) {
		// 	let res = JSON.parse(resp);
		// 	console.log(res);
		// }).fail().always();

		let resp = await fetch('users/new/', {method: 'POST', body: JSON.stringify(data)});
		let obj = await resp.json();
		
			// .then(resp => resp.json())
			// .then(function(obj) {
			// 	console.log(obj.status);
			// 	if (obj.hasOwnProperty('error')) {
			// 		console.log(obj.error);
			// 	}
			// });
	});
});

function Clock({ template }) {
    let timer;
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
}

// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);


// new Promise((res, rej) => setTimeout(() => res(1), 1000))
// .then(function(res) {console.log(res); return new Promise((resolve,rej) => {setTimeout(() => resolve(res*2), 1000);});}).then(function(result) {console.log(result)});



// Promise.all([
// 	new Promise((res, rej) =>
// 		setTimeout(() => res(1), 1000)
// 	),
// 	new Promise((res, rej) =>
// 		setTimeout(() => rej(new Error('ERR')), 1000)
// 	),
// 	new Promise((res, rej) =>
// 		setTimeout(() => res(3), 1000)
// 	)
// ]).catch(console.log).then(function(results) {console.log(results);});

function onTimeoutEnd(err, res) {
	if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
}

function load(cb) {
	let val = Math.random();
	if (val > 0.5) {
		setTimeout(() => cb(null, "Success"), 2000);
	} else {
		setTimeout(() => cb(new Error("Error")), 2000);
	}
}

let loadPromise = function() {
	return new Promise((resolve, reject) => {
		load((err,res) => {
			if (err) reject(err)
			else resolve(res);
		});
	});
}

// loadPromise().then((res) => console.log(res)).catch((err) => console.warn(err))


