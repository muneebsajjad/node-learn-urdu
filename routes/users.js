var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:muneeb123@localhost:5432/learn_urdu_development');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource helssssssssssop');
});

/* GET users listing. */
router.get('/help', function(req, res, next) {
	 res.send('Pure files are here');
	return sequelize.transaction(function (t) {
  			return sequelize.query(`INSERT INTO game_logs (device_id, sound_played, sound_selected, device_timestamp, status, score, lives) 
					VALUES('B6717', 'Tampopo', 'Bampopo', '2017-04-03 21:20:20.638255+05', true,23,9),
			    	('T6717', 'Tampopo', 'Bampopo', '2017-04-03 21:20:20.638255+05', false,23,9)`).spread(function(results, metadata) {
  					console.log(">>>>>>>>>>>>>>>>>>>"+results);
  
		}).then(function (result) {
		  // Transaction has been committed
		  // result is whatever the result of the promise chain returned to the transaction callback 
		  var resData = {success: "ok"};
		}).catch(function (err) {
		  // Transaction has been rolled back
		  // err is whatever rejected the promise chain returned to the transaction callback
		  var resData = {error: "fail"};
		});
	
})
  res.send('Pure files are here');
});

router.post('/get_sync_data', function (req, res) {
    console.log(JSON.stringify(req.body));
    var resData
    return sequelize.transaction(function (t) {
  			return sequelize.query(`INSERT INTO game_logs (device_id, sound_played, sound_selected, device_timestamp, status, score, lives) 
					VALUES('B6717', 'Tampopo', 'Bampopo', '2017-04-03 21:20:20.638255+05', true,23,9),
			    	('T6717', 'Tampopo', 'Bampopo', '2017-04-03 21:20:20.638255+05', false,23,9)`).spread(function(results, metadata) {
  					console.log(">>>>>>>>>>>>>>>>>>>"+results);
  
		}).then(function (result) {
		  // Transaction has been committed
		  // result is whatever the result of the promise chain returned to the transaction callback 
		   resData = {success: "ok"};
		   res.send(resData);
		}).catch(function (err) {
		  // Transaction has been rolled back
		  // err is whatever rejected the promise chain returned to the transaction callback
		   resData = {error: "fail"};
		   res.send(resData);
		});
	
})
    
});

module.exports = router;
