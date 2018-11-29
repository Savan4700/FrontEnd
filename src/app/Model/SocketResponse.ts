import { deserializeAs } from 'cerialize';
import { serializeAs } from 'cerialize';
export class SocketResponse {

    @serializeAs('responseToken')
    @deserializeAs('responseToken')
    private _responseToken: string;

    @serializeAs('status')
    @deserializeAs('status')
    private _status: string;


    /**
     * Getter responseToken
     * @return {string}
     */
    public get responseToken(): string {
        return this._responseToken;
    }

    /**
     * Setter responseToken
     * @param {string} value
     */
    public set responseToken(value: string) {
        this._responseToken = value;
    }


    /**
     * Getter status
     * @return {string}
     */
    public get status(): string {
        return this._status;
    }

    /**
     * Setter status
     * @param {string} value
     */
    public set status(value: string) {
        this._status = value;
    }
}
