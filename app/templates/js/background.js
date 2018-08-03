chrome.runtime.onInstalled.addListener(function() {
  // from official documentation
  console.log("Application installed");
  // https://developer.chrome.com/extensions/getstarted
 //  chrome.storage.sync.set({color: '#3aa757'}, function() {
 //   console.log("The color is green.");
 //  });
});