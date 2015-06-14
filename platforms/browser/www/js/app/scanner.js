/* global cordova */
define(function () {
	var APPKEY = "IYf33eXKmj8IogOtEUwOxq96l3o07BatpBLBosxiK04"; //scandit appkey
	var scanner = {
		model : {},
		initialize: function (scanModel) {
			scanner.setModel(scanModel);
            cordova.exec(scanner.success, scanner.failure, "ScanditSDK", "scan", [APPKEY, scanner.options]);
        },
		options: {
			"beep": false,
			"vibrate": false,
			"1DScanning": true,
			"2DScanning": true
		},
		success: function (resultArray) {
			scanner.model.set({
				"scanned" : resultArray[0],
				"code" : resultArray[1],
				"failed": false});
		},
		failure: function () {
			//scanner.model.set({"failed": true});
		},
		setModel: function(scanModel){
			scanner.model = scanModel;
		}
	};

	return scanner.initialize;
});