import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});


/* app.get(/^(?:task3A\/)?(.*?)(?:\/)?$/, function(req, res) {
    let path = req.params[0]; */
	
/* app.get('task3A/:param', function(req, res) { */

/* app.get('/volumes', (req, res) => some code);
   app.get('*', (req, res) => some code); */
   
var pc = {};
const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	.then(async (response) => {
		pc = await response.json();
	  })
	  .catch(err => {
		console.log('Чтото пошло не так:', err);
	  });

app.get(/^(?:task3A\/)?(.*?)(?:\/)?$/, (req, res) => { 
	
	var path = req.path; 
	path = path.replace('/task3A/', "");
	path = path.split('/');

  /* var jsonLength = Object.keys(result).length; */ //длина json объекта
	
	/* for (var key in pc) {
		console.log(key, pc[key]);
	} */
	
	console.log(path.length);
	
	for (var i = 0; i < path.length; i++) {
		for (var key in pc) {
			if (path[i] == key) {
				console.log(pc[key]);
			}
		}
	}
	
	res.send(pc);	   
});


/* app.get('/task3A/board', (req, res) => {

	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(result.board);
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

app.get('/task3A/ram', (req, res) => {

	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(result.ram);
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

app.get('/task3A/os', (req, res) => {

	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.os));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

app.get('/task3A/hdd', (req, res) => {

	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.hdd));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

app.get('/task3A/board/vendor', (req, res) => {

	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.board.vendor));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

app.get('/task3A/board/model', (req, res) => {

	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.board.model));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

app.get('/task3A/board/cpu', (req, res) => { console.log(req.path);

	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.board.cpu));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
}); */

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});


/*{
	"board":
	{
		"vendor":"IBM",
		"model":"IBM-PC S-100",
		"cpu":{
			"model":"80286",
			"hz":12000
		},
		"image":"http://www.s100computers.com/My%20System%20Pages/80286%20Board/Picture%20of%2080286%20V2%20BoardJPG.jpg",
		"video":"http://www.s100computers.com/My%20System%20Pages/80286%20Board/80286-Demo3.mp4"
	},
	"ram":
	{
		"vendor":"CTS",
		"volume":1048576,
		"pins":30
	},
	"os":"MS-DOS 1.25",
	"floppy":0,
	"hdd":
	[
		{
			"vendor":"Samsung",
			"size":33554432,
			"volume":"C:"
		},
		{
			"vendor":"Maxtor",
			"size":16777216,
			"volume":"D:"
		},
		{
			"vendor":"Maxtor",
			"size":8388608,
			"volume":"C:"
		}
	],
	"monitor":null,
	"length":42,
	"height":21,
	"width":54
}*/

