import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const addMarker = (color: string) => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            const markerText = `{{< marker ${color} >}}${text}{{< /marker >}}`;
            editor.edit(editBuilder => {
                editBuilder.replace(selection, markerText);
            });
        }
    };

    context.subscriptions.push(vscode.commands.registerCommand('extension.addMarkerYellow', () => addMarker('yellow')));
    context.subscriptions.push(vscode.commands.registerCommand('extension.addMarkerBlue', () => addMarker('blue')));
    context.subscriptions.push(vscode.commands.registerCommand('extension.addMarkerRed', () => addMarker('red')));
    context.subscriptions.push(vscode.commands.registerCommand('extension.addMarkerGreen', () => addMarker('green')));
}

export function deactivate() {}
