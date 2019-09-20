import { window, workspace, ViewColumn } from "vscode";
import { ITreeItem } from "./ui/ITreeItem";
import { KeyVaultHelper } from "./KeyVaultHelper";

export namespace ExtensionCommands {
    
    export async function getAllSecrets(): Promise<void> {
    }

    async function promptVaultName(): Promise<string | undefined> {
        return await window.showInputBox({ placeHolder: "Vault Name" });
    }

    export async function showSecret(item?: ITreeItem): Promise<void> {
        if (item && item.getSecretValue) {
            const doc = await workspace.openTextDocument({
                content: item.getSecretValue()
            });
            await window.showTextDocument(doc, ViewColumn.Active);
        }
    }
}