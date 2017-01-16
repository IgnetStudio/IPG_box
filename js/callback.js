function getData(callback) {
    var data = [1, 2, 3]; // async
    callback(data);
}
var log = function (data) {
    console.log(data);
}
var write = function (data) {
    document.body.innerHTML = data;
}
getData(log);
getData(write);