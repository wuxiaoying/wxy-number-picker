(function() {
  Polymer({
    ready: function() {
      this.stepsize = parseInt(this.stepsize);
    },
    incrementValue: function() {
      this.value += this.stepsize;
    },
    decrementValue: function() {
      this.value -= this.stepsize;
    }
  });

}).call(this);
