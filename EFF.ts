var shape = {
    name: "rectangle",
    popup: function() {
    console.log('Esta ventana popup(): ' + this.name);
    setTimeout( () => {
    console.log('Esta ventana setTimeout(): ' + this.name);
    console.log("yo soy un " + this.name + "!");
    }, 3000);
    }
    };
    shape.popup();
    