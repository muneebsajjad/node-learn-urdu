var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource helssssssssssop');
});

/* GET users listing. */
router.get('/help', function(req, res, next) {
	//console.log("hellllllllllllllllll");
  res.send('Pure files are here');
});

router.post('/get_sync_data', function (req, res) {
    console.log(JSON.stringify(req.body));
    var resData = {success: "ok"};
    res.send(resData);
});

module.exports = router;
