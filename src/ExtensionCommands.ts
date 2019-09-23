import { window, workspace, ViewColumn, TextDocumentShowOptions } from "vscode";
import { ITreeItem } from "./ui/ITreeItem";

export namespace ExtensionCommands {
    export async function showSecret(item?: ITreeItem): Promise<void> {
        if (item && item.getSecretValue) {
            const doc = await workspace.openTextDocument({
                content: item.getSecretValue()
            });
            await window.showTextDocument(doc, ViewColumn.Active);
        }
    }
}