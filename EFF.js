var shape = {
    name: "rectangle",
    popup: function () {
        var _this = this;
        console.log('Esta ventana popup(): ' + this.name);
        setTimeout(function () {
            console.log('Esta ventana setTimeout(): ' + _this.name);
            console.log("yo soy un " + _this.name + "!");
        }, 3000);
    }
};
shape.popup();
