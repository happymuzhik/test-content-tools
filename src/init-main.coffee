initMain = ->
    ContentTools.StylePalette.add [
        new ContentTools.Style('Author', 'author', ['p'])
    ]

    editor = ContentTools.EditorApp.get()
    editor.init '*[data-editable]', 'data-name'

    editor.addEventListener 'saved', (ev) ->
        regions = ev.detail().regions
        return if !Object.keys(regions).length

        @.busy true

        payload = {}
        for own name of regions
            payload[name] = regions[name]

        console.log 'pending...'

        onStateChange = ->
            editor.busy false
            new ContentTools.FlashUI 'ok'
            console.log 'done', payload
        
        setTimeout onStateChange, 2000

module.exports = initMain