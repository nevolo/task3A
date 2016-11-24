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


var pc = {};
var result = {};
var count;
var path;

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	.then(async (response) => {
		pc = await response.json();
	  })
	  .catch(err => {
		console.log('Чтото пошло не так:', err);
	  });

app.get(/^(?:task3A\/)?(.*?)(?:\/)?$/, (req, res) => { 

	count = 0;
	path = req.path; 
	path = path.replace('/task3A/', "");
	path = path.split('/'); //массив путей

	for (var i = 0; i < path.length; i++) {
		if ((path.length > 1) && (path[i] == '')) {
			path.splice(i, 1);
		}
	}
	
	if (path[0] == '') { 
		res.send(pc);
	} else if (path[0] == 'volumes') {
		res.send(getVolumes(pc.hdd));
	} else {
	
		for (var key in pc) {
			if (path[0] == key) {
				result = getResult(path.length, pc);
			} 
		}

		if (result == 'Not Found') {
			res.status(404).send(result);	
		} else {
			result = JSON.stringify(result);
			res.send(result);
		}
	} 
});

	function getResult (length, json) { 
	
		if (typeof json === 'string') {
			var tmp = {};
			tmp[count] = json;
			json = tmp;
		}
	
		if (Array.isArray(json)) {
			var tmp = {};
			for (var i = 0; i < json.length; i++) {
				tmp[i] = json[i];
			}
			
			json = tmp;
		}
	
		if (length == 1) {
		
			if (path[count] in json) { 
				return json[path[count]];
			} else return 'Not Found';	
	
		} else if (json.hasOwnProperty(path[count])) { 
			return getResult(--length, json[path[count++]]); 	
		} else return 'Not Found';		
	}
	
	function getVolumes (hdd) {
		var volumeRes = {};
		
		for (var key in hdd) {
			if (!volumeRes[hdd[key].volume]) {
				volumeRes[hdd[key].volume] = 0;	
			}
			if (hdd[key].volume in volumeRes) {
				volumeRes[hdd[key].volume] += hdd[key].size;
			}
		}

		for (var key in volumeRes) { 
			volumeRes[key] += 'B';
		}
		return volumeRes;
	}

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});


/* app.get(/^(?:task3A\/)?(.*?)(?:\/)?$/, function(req, res) {
    let path = req.params[0]; */
	
/* app.get('task3A/:param', function(req, res) { */

/* app.get('/volumes', (req, res) => some code);
   app.get('*', (req, res) => some code); */
   
   
/* var jsonLength = Object.keys(result).length; */ //длина json объекта

/* for (var key in pc) {
console.log(key, pc[key]);
} */


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

