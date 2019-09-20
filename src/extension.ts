import { ExtensionCommands } from './ExtensionCommands';
import { ExtensionContext, window, commands } from 'vscode';
import { secretExplorerProvider } from './ui/secretExplorerProvider';

export function activate(context: ExtensionContext) {
    const treeView = window.createTreeView('azkeyvaulthelper', { treeDataProvider: secretExplorerProvider });
    let getSecretsisposable = commands.registerCommand("azkeyvaulthelper.getSecrets", ExtensionCommands.getAllSecrets);
    context.subscriptions.push(getSecretsisposable);

    let refreshDisposable = commands.registerCommand("azkeyvaulthelper.refresh", secretExplorerProvider.refresh, secretExplorerProvider);
    context.subscriptions.push(refreshDisposable);

    let showSecretDisposable = commands.registerCommand("azkeyvaulthelper.showSecret", ExtensionCommands.showSecret);
    context.subscriptions.push(showSecretDisposable);
}

export function deactivate() {}
