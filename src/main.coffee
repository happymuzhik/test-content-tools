initMain  = require './init-main.coffee'
initHeaderRules  = require './init-header-rules.coffee'

window.addEventListener 'load', ->
    do initHeaderRules
    do initMain
