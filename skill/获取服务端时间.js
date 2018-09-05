var req = new XMLHttpRequest();
req.open('GET', location, false);
req.send(null);
console.log(req.getResponseHeader('Date'));