var title = document.getElementById("topTitle");
var intervalTime = 150;
var initialPause = 1000;
var callbackPause = 500;
function deleteContent(callback) {
    var intervalId = setInterval(function() {
        if(title.innerHTML.length == 0) {
            clearInterval(intervalId);
            if (callback) {
                
            }
        }
    })
}