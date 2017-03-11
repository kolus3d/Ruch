function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
    console.log(navigator.accelerometer);
}


function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

