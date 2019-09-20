import { workspace } from "vscode";

class Settings {
    public get keyvaults(): string[] | undefined {
        return workspace.getConfiguration('azkeyvaulthelper').get('keyvaults');
    }

    public set keyvaults(val: string[] | undefined) {
        workspace.getConfiguration('azkeyvaulthelper').update('keyvaults', val);
    }

    public async updateKeyvaults(val: string[] | undefined): Promise<void> {
        return await workspace.getConfiguration('azkeyvaulthelper').update('keyvaults', val);
    }
}

export const ExtensionSettings: Settings = new Settings();