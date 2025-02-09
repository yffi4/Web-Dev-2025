let calculator = {
    read: function(){
        this.a = +prompt("first");
        this.b = +prompt("second");
    },
    sum: function(){
        return this.a + this.b;
    },
    mul: function(){
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );