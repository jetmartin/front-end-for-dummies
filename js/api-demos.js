/**
 * FULL SCREEN API
 */
var pfx = ["webkit", "moz", "ms", "o", ""];
function RunPrefixMethod(obj, method) {
	var p = 0, m, t;
	while (p < pfx.length && !obj[m]) {
		m = method;
		if (pfx[p] == "") {
			m = m.substr(0,1).toLowerCase() + m.substr(1);
		}
		m = pfx[p] + m;
		t = typeof obj[m];
		if (t != "undefined") {
			pfx = [pfx[p]];
			return (t == "function" ? obj[m]() : obj[m]);
		}
		p++;
	}
}

var e = document.getElementById("fullscreenElement");
e.onclick = function() {

	if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
	//	RunPrefixMethod(document, "CancelFullScreen");
	}
	else {
		RunPrefixMethod(e, "RequestFullScreen");
	}

}

/**
 * Battery Status API
 */
var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
function updateBatteryStatus() {
  document.getElementById('batteryStatus').value="Battery status: " + battery.level * 100 + " %";
  if (battery.charging) {
    document.getElementById('batteryStatus').value="Battery is charging"; 
  }
}
if(battery != undefined){
	battery.addEventListener("chargingchange", updateBatteryStatus);
	battery.addEventListener("levelchange", updateBatteryStatus);
	updateBatteryStatus();
}
else{
	document.getElementById('batteryStatus').value="Battery is not supported by you'r browser."; 
}
