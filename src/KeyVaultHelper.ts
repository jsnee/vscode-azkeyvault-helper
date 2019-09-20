import { SecretAttributes } from "@azure/keyvault-secrets";
import { execSync } from "child_process";

export namespace KeyVaultHelper {
    export function listSecrets(vaultName: string): SecretAttributes[] {
        let results: SecretAttributes[] = [];
        let buf = execSync(`az keyvault secret list --vault-name "${vaultName}"`);
        console.log(buf.toString());
        let secretsStr = buf.toString();
        if (secretsStr) {
            let secrets = JSON.parse(secretsStr) as SecretAttributes[];
            if (secrets.length) {
                for (let secret of secrets) {
                    results.push(secret);
                }
            }
        }
        return results;
    }

    export function getSecret(vaultName: string, secretName: string): any {
        let buf = execSync(`az keyvault secret show --vault-name "${vaultName}" --name "${secretName}"`);
        let secretsStr = buf.toString();
        if (secretsStr) {
            return JSON.parse(secretsStr);
        }
    }

    export function parseKeyValueSecret(value: string): string {
        let matches = value.match(/^['"]((?:[^\s=]+=[^\s]+ )*[^\s=]+=[^\s]+)['"]$/);
        if (matches && matches.length) {
            let val = matches[1];
            let resultMatches = val.match(/([^\s=]+)=([^\s]+)/g);
            if (resultMatches) {
                let result: any = {};
                for (let each of resultMatches) {
                    let eachMatches = each.match(/^([^\s=]+)=([^\s]+)$/);
                    if (eachMatches) {
                        result[eachMatches[1]] = eachMatches[2];
                    }
                }
                return JSON.stringify(result, null, 4);
            }
        }
        return value;
    }
}