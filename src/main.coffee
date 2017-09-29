window.addEventListener 'load', () ->

    ContentTools.StylePalette.add [
        new ContentTools.Style('Author', 'author', ['p'])
    ]

    editor = ContentTools.EditorApp.get()
    editor.init '*[data-editable]', 'data-name'

    return