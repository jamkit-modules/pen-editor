var _$_editor = new Pen(document.getElementById('editor'));

function getContent(onResult, onError) {
    try {
        onResult({
            "content": _$_editor.getContent()
        });
    } catch (error) {
        onError(error);
    }
}

function getMarkdown(onResult, onError) {
    try {
        onResult({
            "markdown": _$_editor.toMd()
        });
    } catch (error) {
        onError(error);
    }
}

function execCommand(name, value, onResult, onError) {
    try {
        _$_editor.execCommand(name, value);

        onResult();
    } catch (error) {
        onError(error);
    }
}
