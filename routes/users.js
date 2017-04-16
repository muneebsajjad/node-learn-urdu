var express = require('express');
var router = express.Router();
var moment = require('moment');
var Sequelize = require('sequelize');
// var sequelize = new Sequelize('postgres://postgres:muneeb49@localhost:5432/learn_urdu_production');
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
   	
    var logData = req.body;
	var valueString = [];
	var returnIds = [];
	logData.forEach( function (Item)
	{
	    //console.log(Item.LIVES)
	   valueString.push(`('${moment().format()}','${moment().format()}','${Item.SESSION_ID}','${Item.DEVICE_ID}','${Item.SOUND_PLAYED}', '${Item.SOUND_SELECTED}', '${Item.TIMESTAMP}', ${Item.STATUS},${Item.SCORE},${Item.LIVES})`);
	   returnIds.push(Item.ID);
	});

	valueString = valueString.join();
	returnIds = returnIds.join();
	//console.log(valueString);

    var resData
    return sequelize.transaction(function (t) {
    	/*console.log(`INSERT INTO game_logs ("createdAt","updatedAt",device_id, sound_played, sound_selected, device_timestamp, status, score, lives) 
					VALUES ${valueString}`);*/
  			return sequelize.query(`INSERT INTO game_logs ("createdAt", "updatedAt", session_id, device_id, sound_played, sound_selected, device_timestamp, status, score, lives) 
					VALUES ${valueString}`).spread(function(results, metadata) {
  					console.log(">>>>>>>>>>>>>>>>>>>"+results);
  
		}).then(function (result) {
		  // Transaction has been committed
		  // result is whatever the result of the promise chain returned to the transaction callback 
		   resData = {success: "ok",returnIds:returnIds};
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
