import { serializeAs, deserializeAs } from 'cerialize';
import { UserMaster } from '../Model/UserMaster';


export class LoginResponse {

    @deserializeAs('user')
    private _user: UserMaster;

    @deserializeAs('token')
    private _token: string;

    @deserializeAs('isAuthenticate')
    private _isAuthenticate: Boolean;

    /**
     * Getter user
     * @return {UserMaster}
     */
    public get user(): UserMaster {
        return this._user;
    }

    /**
     * Setter user
     * @param {UserMaster} value
     */
    public set user(value: UserMaster) {
        this._user = value;
    }


    /**
     * Getter token
     * @return {string}
     */
    public get token(): string {
        return this._token;
    }

    /**
     * Setter token
     * @param {string} value
     */
    public set token(value: string) {
        this._token = value;
    }


    /**
     * Getter isAuthenticate
     * @return {Boolean}
     */
    public get isAuthenticate(): Boolean {
        return this._isAuthenticate;
    }

    /**
     * Setter isAuthenticate
     * @param {Boolean} value
     */
    public set isAuthenticate(value: Boolean) {
        this._isAuthenticate = value;
    }

}
