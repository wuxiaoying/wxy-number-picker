Polymer
  ready: ->
    @stepSize = parseInt @stepSize
    return

  incrementValue: ->
    @value += @stepSize
    @value = @max if @max isnt undefined and @value > @max
    return

  decrementValue: ->
    @value -= @stepSize
    @value = @min if @min isnt undefined and @value < @min
    return
