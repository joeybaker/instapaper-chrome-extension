chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});

var s = document.createElement('script')
s.src = chrome.extension.getURL('js/script.js')
s.onload = function() {
  this.parentNode.removeChild(this)
};
(document.head||document.documentElement).appendChild(s)
