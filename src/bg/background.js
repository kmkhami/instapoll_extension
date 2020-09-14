// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

function buttonclick(){
	$("button").each(function() {
		if($(this).text() == "Launch Poll") {
			var button = $(this); 
			button.click();  
		}
	})
	var pagebutton= document.getElementById("selfclick");
	pagebutton.click();
}