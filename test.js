var Firer = Classes.BaseClass.extend({
    run: function() {
        this.fire("Fired!");
    }
});

var Alerter = Firer.extend({
    fire: function(msg) {
        window.alert(msg);
    }
});

var a = new Firer;
var b = new Alerter;

b.run();
try {
    a.run();
} catch(e) {
    console.log("a.run() failed as expected: " + e);
}
