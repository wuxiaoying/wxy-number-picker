(function() {
  Polymer({
    ready: function() {
      this.stepSize = parseInt(this.stepSize);
    },
    incrementValue: function() {
      this.value += this.stepSize;
      if (this.max !== void 0 && this.value > this.max) {
        this.value = this.max;
      }
    },
    decrementValue: function() {
      this.value -= this.stepSize;
      if (this.min !== void 0 && this.value < this.min) {
        this.value = this.min;
      }
    }
  });

}).call(this);
