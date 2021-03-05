chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var data = {
      url: extractUrl(),
      description: extractDescription(),
      code: extractCode(),
      fileName : extractFileName()
    };
    sendResponse(data);
  });

function extractUrl() {
  var base = 'https://www.freecodecamp.org/learn/';
  var url = window.location.href;
  var end = url.substring(base.length).indexOf('/') + 1 + base.length;
  url = url.substring(0, end);
  return url;
}

function extractTitle() {
  var title = document.getElementsByClassName('text-center challenge-title')[0];
}

function extractFileName() {
  const re = new RegExp('(https:\/\/www\.freecodecamp\.org\/learn\/)(.*)');
  var toMatch = window.location.href;;
  var fileName = re.exec(toMatch);
  console.log(fileName.length);
  for(var i = 0; i < fileName.length; i++)
    alert(fileName[i]);
  return fileName[2];
}

function extractCode() {
  var code = document.getElementsByClassName('view-lines')[0];
  var list = code.innerText.split('\n');
  var text = '';
  for (var i = 0; i < list.length; i ++) {
    text += list[i];
    text += '\n';
  }
  return text;
}

function extractDescription() {
  var description = document.getElementById("description");
  var contentHtml = description.innerHTML;
  return contentHtml;
}
