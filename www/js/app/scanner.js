/* global cordova */
define(function () {
	var APPKEY = "IYf33eXKmj8IogOtEUwOxq96l3o07BatpBLBosxiK04"; //scandit appkey
	var scanner = {
		model : {},
		initialize: function (scanModel) {
			this.setModel(scanModel);
            cordova.exec(this.success, this.failure, "ScanditSDK", "scan", [APPKEY, this.options]);
        },
		options: {
			"beep": false,
			"vibrate": false,
			"1DScanning": true,
			"2DScanning": true
		},
		success: function (resultArray) {
			this.model.set({
				"scanned" : resultArray[0],
				"code" : resultArray[1],
				"failed": false});
		},
		failure: function () {
			this.model.set({"failed": true});
		},
		setModel: function(scanModel){
			this.model = scanModel;
		}
	};

	return scanner.initialize;
});