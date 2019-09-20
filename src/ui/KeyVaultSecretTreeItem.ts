import { ITreeItem } from "./ITreeItem";
import { TreeItem } from "vscode";
import { SecretAttributes } from "@azure/keyvault-secrets";
import { KeyVaultHelper } from "../KeyVaultHelper";

export class KeyVaultSecretTreeItem implements ITreeItem {
    private _name: string;
    private _vaultName: string;

    constructor(vaultName: string, secretAttributes: SecretAttributes) {
        if (secretAttributes.id && !secretAttributes.name) {
            let matches = secretAttributes.id.match(/secrets\/(.*)$/);
            if (matches) {
                this._name = matches[1];
            } else {
                this._name = secretAttributes.name;
            }
        } else {
            this._name = secretAttributes.name;
        }
        this._vaultName = vaultName;
    }

    public getContextValue(): string {
        return "KeyVaultSecret";
    }

    public getTreeItem(): TreeItem | Thenable<TreeItem> {
        return new TreeItem(this._name);
    }

    public getSecretValue(): string {
        let secret = KeyVaultHelper.getSecret(this._vaultName, this._name);
        if (secret) {
            return secret.value;
        }
        return "";
    }
}