import { ExtensionCommands } from './ExtensionCommands';
import { ExtensionContext, window, commands } from 'vscode';
import { secretExplorerProvider } from './ui/secretExplorerProvider';

export function activate(context: ExtensionContext) {
    window.createTreeView('azkeyvaulthelper', { treeDataProvider: secretExplorerProvider });
    let refreshDisposable = commands.registerCommand("azkeyvaulthelper.refresh", secretExplorerProvider.refresh, secretExplorerProvider);
    context.subscriptions.push(refreshDisposable);

    let showSecretDisposable = commands.registerCommand("azkeyvaulthelper.showSecret", ExtensionCommands.showSecret);
    context.subscriptions.push(showSecretDisposable);
}

export function deactivate() {}
