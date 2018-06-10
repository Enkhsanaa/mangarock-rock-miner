let request = require('request')


// Headers
let clientID = 'lpY0gkLg4LOtrTAtNT1L1vwC1llTWkr0F8wusC5i';
let headers = {
	'X-Parse-Session-Token': 'r:c165f59eaf8fb7ffa0f096ab600edd02',
	'X-Parse-Application-Id': 'DOTecsAUU0hHsVe50hQqCltNmpzx5hbwJB60FfyM',
	'X-Parse-Client-Key': clientID
};

// Request options
let spinWheelOptions = {
	url: 'https://api.mangarockhd.com/parse/functions/spinWheel',
	method: 'POST',
	headers: headers,
	json: {"wheelConfig":"rofmr_ios_wheel_410"}
};
let confirmSpinWheelOptions = {
	url: 'https://api.mangarockhd.com/parse/functions/confirmWheelTransaction',
	method: 'POST',
	headers: headers
};


let doneApprovementRequest = (error, response, body) => {
	if (!error && response.statusCode == 200) {
		console.log(body.result.slot, body.result.transactionId);
	} else {
		console.log(error);
	}
};

let getApprovementId = (error, response, body) => {
	if (!error && response.statusCode == 200) {
		console.log('Got spin transactionId', body.result.transactionId);
		confirmSpinWheelOptions.json = {
			"transactionId":body.result.transactionId
		};
		request(confirmSpinWheelOptions, doneApprovementRequest);
	} else {
		console.log(error);
	}
};

let startMining = () => {
	var mineCount = 100;
	var miningProcess = null;

	let mine = () => {
		if (mineCount-- == 0) {
			clearInterval(miningProcess);
		}
		else request(spinWheelOptions, getApprovementId)
	}

	miningProcess = setInterval(mine, 1000);
};

startMining();