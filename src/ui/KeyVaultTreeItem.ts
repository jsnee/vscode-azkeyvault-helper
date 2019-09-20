import { ITreeItem } from "./ITreeItem";
import { TreeItem, TreeItemCollapsibleState } from "vscode";
import { KeyVaultSecretTreeItem } from "./KeyVaultSecretTreeItem";
import { KeyVaultHelper } from "../KeyVaultHelper";

export class KeyVaultTreeItem implements ITreeItem {
    private _vaultName: string;

    constructor(vaultName: string) {
        this._vaultName = vaultName;
    }

    public getContextValue(): string {
        return "KeyVault";
    }

    public getTreeItem(): TreeItem | Thenable<TreeItem> {
        return new TreeItem(this._vaultName, TreeItemCollapsibleState.Collapsed);
    }

    public getChildren(): ITreeItem[] {
        let results: KeyVaultSecretTreeItem[] = [];
        for (let secret of KeyVaultHelper.listSecrets(this._vaultName)) {
            results.push(new KeyVaultSecretTreeItem(this._vaultName, secret));
        }
        return results;
    }
}