module.exports = function(msg) {
    var header = document.createElement('h1');
    header.textContent = 'hello ' + msg;
    document.body.appendChild(header);
}