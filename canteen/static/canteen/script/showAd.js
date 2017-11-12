window.addEventListener("load", showAd);
function detectOS() {
    var ua = (window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : '';
    var iosReg = /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i;  // UAParser.js @ https://github.com/faisalman/ua-parser-js
    if(iosReg.test(ua))
        return 'iOS';
    return '';  //Todo: differ other operating systems
}
function showAd() {
    if(detectOS() === 'iOS')  return;
    document.getElementById('clientDownload').style.display = "inline";
}
