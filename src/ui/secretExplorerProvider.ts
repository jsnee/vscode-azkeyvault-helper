import { Event, TreeDataProvider, EventEmitter, TreeItem } from "vscode";
import { ITreeItem } from "./ITreeItem";
import { ExtensionSettings } from "../ExtensionSettings";
import { KeyVaultTreeItem } from "./KeyVaultTreeItem";

class SecretExplorerProvider implements TreeDataProvider<ITreeItem> {
    public readonly onDidChangeTreeData: Event<ITreeItem>;
    private _onDidChangeTreeData: EventEmitter<ITreeItem>;

    constructor() {
        this._onDidChangeTreeData = new EventEmitter<ITreeItem>();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.refresh();
    }
    
    public getTreeItem(element: ITreeItem): TreeItem | Thenable<TreeItem> {
        return Promise.resolve(element.getTreeItem()).then(item => {
            item.contextValue = element.getContextValue();
            return item;
        });
    }

    public async getChildren(element?: ITreeItem): Promise<ITreeItem[] | null | undefined> {
        if (element === undefined) {
            const keyVaults = ExtensionSettings.keyvaults;
            if (keyVaults && keyVaults.length) {
                let results: KeyVaultTreeItem[] = [];
                for (let vault of keyVaults) {
                    results.push(new KeyVaultTreeItem(vault));
                }
                return results;
            }
        } else {
            return element.getChildren && element.getChildren();
        }
    }

    public refresh(item?: ITreeItem): void {
        this._onDidChangeTreeData.fire(item);
    }
}

export const secretExplorerProvider = new SecretExplorerProvider();