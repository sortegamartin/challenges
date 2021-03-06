import { IChallenge } from "../model/IChallenge";

export class FormService {
    public static Save(data: IChallenge) {
        return new Promise<{ id: number }>((resolve, reject) => {
            fetch('http://localhost:10010/challenge', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data),
            }).then(async response => {
                if (response.ok) {
                    resolve(await response.json());
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

    public static Get() {
        return new Promise<IChallenge[]>((resolve, reject) => {
            fetch('http://localhost:10010/challenges', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                method: 'GET',
            }).then(async response => {
                if (response.ok) {
                    resolve((await response.json()).challenges);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }
}
