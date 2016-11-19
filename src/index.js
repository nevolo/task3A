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

// -------------№ 1 --------------
app.get('/task3A', (req, res) => {
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(result);
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 2 --------------
app.get('/task3A/board', (req, res) => {

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

// -------------№ 3 --------------
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

// -------------№ 4 --------------
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

// -------------№ 5 --------------
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

// -------------№ 6 --------------
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

// -------------№ 7 --------------
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

// -------------№ 8 --------------
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
});

// -------------№ 9 --------------
app.get('/task3A/board/image', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.board.image));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 10 --------------
app.get('/task3A/board/video', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.board.video));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 11 --------------
app.get('/task3A/ram/vendor', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.ram.vendor));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 12 --------------
app.get('/task3A/ram/volume', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.ram.volume));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 13 --------------
app.get('/task3A/ram/pins', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.ram.pins));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 14 --------------
app.get('/task3A/volumes', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
		
		function getVolumes(hdd) {
			let v = {};
			for (let key in hdd) {
				const d = hdd[key].volume; //строка с именем диска
				if (!v[d])
					v[d] = 0;
				v[d] += hdd[key].size;
			}
			for (let key in v) {
				v[key] = v[key] + 'B';
			}
			return v;
		}
		
	    res.send(getVolumes(result.hdd));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 15 --------------
app.get('/task3A/floppy', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.floppy));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 16 --------------
app.get('/task3A/hdd/0', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.hdd[0]));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 17 --------------
app.get('/task3A/hdd/0/vendor', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.hdd[0].vendor));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 18 --------------
app.get('/task3A/hdd/0/size', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.hdd[0].size));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 19 --------------
app.get('/task3A/hdd/0/volume', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.hdd[0].volume));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 20 --------------
app.get('/task3A/hdd/1', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.hdd[1]));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 21 --------------
app.get('/task3A/hdd/1/volume', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.hdd[1].volume));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------№ 22 --------------
app.get('/task3A/hdd/22', (req, res) => { console.log(req.path);
	
	res.status(404).send("Not Found");
	
});

// -------------№ 23 --------------
app.get('/task3A/hdd/222', (req, res) => { console.log(req.path);
	
	res.status(404).send("Not Found");
	
});

// -------------№ 24 --------------
app.get('/task3A/other', (req, res) => { console.log(req.path);
	
	res.status(404).send("Not Found");
	
});

// -------------№ 25 --------------
app.get('/task3A/some/other', (req, res) => { console.log(req.path);
	
	res.status(404).send("Not Found");
	
});

// -------------№ 26 --------------
app.get('/task3A/hdd/some/other', (req, res) => { console.log(req.path);
	
	res.status(404).send("Not Found");
	
});

// -------------№ 27 --------------
app.get('/task3A/hdd/-1', (req, res) => { console.log(req.path);
	
	res.status(404).send("Not Found");
	
});

// -------------- № 28 --------------
app.get('/task3A/hdd.0', (req, res) => { console.log(req.path);
	
	res.status(404).send("Not Found");
	
});

// -------------- № 30 --------------
app.get('/task3A/monitor', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.monitor));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------- № 35 --------------
app.get('/task3A/length', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.length));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------- № 36 --------------
app.get('/task3A/height', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.height));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------- № 37 --------------
app.get('/task3A/width', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.width));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});

// -------------- № 39 --------------
app.get('/task3A/board/cpu/hz', (req, res) => { console.log(req.path);
	
	const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

	fetch(pcUrl)
	  .then(async (response) => {
	    
	    var result = await response.json();
	    res.send(JSON.stringify(result.board.cpu.hz));
	  })
	  .catch(err => {
	    console.log('Чтото пошло не так:', err);
	  });
});


// -------------- № 29 --------------
app.get('*', (req, res) => { console.log(req.path);
	
	res.status(404).send("Not Found");
	
});

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

