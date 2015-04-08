
/**
 *
 *
 * @author fuyg
 * @date  2015-04-08
 */
define(function (require) {
    var AppView = require('./AppView'),
        appView = new AppView();
        //appView2 = new AppView();

    document.body.appendChild(appView.el);
    //document.body.appendChild(appView2.el);

});
