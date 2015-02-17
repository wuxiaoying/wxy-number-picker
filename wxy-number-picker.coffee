Polymer
  ready: ->
    @stepsize = parseInt @stepsize
    return

  incrementValue: ->
    @value += @stepsize
    return

  decrementValue: ->
    @value -= @stepsize
    return
