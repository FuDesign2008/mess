/**
 * @param {String} name
 * @param {Array} params
 */
var callExtApis = function (name, params) {
    var ExtApis = window.ExtApis;
    params = params || [];
    if (ExtApis && ExtApis[name]) {
        switch (params.length) {
            case 0:
                ExtApis[name]();
                break;
            case 1:
                ExtApis[name](params[0]);
                break;
            case 2:
                ExtApis[name](params[0], params[1]);
                break;
            case 3:
                ExtApis[name](params[0], params[1], params[2]);
                break;
            case 4:
                ExtApis[name](params[0], params[1], params[2], params[4]);
                break;
        }
    }
};

var appendMsg = function (msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.body.appendChild(div);
};

document.addEventListener('touchend', function () {
    appendMsg((new Date()).getTime());
    callExtApis('showToast', ['touch end...']);
    callExtApis('vibrate');
}, false);


window.onerror = function () {
    appendMsg('js error');
};
