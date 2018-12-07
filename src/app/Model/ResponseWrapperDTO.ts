import { serializeAs, deserializeAs } from 'cerialize';
export class ResponseWrapperDTO {

    @serializeAs('status')
    @deserializeAs('status')
    private _status: number;

    @serializeAs('message')
    @deserializeAs('message')
    private _message: string;

    @serializeAs('path')
    @deserializeAs('path')
    private _path: string;

    @serializeAs('error')
    @deserializeAs('error')
    private _error: string;

    @serializeAs('data')
    @deserializeAs('data')
    private _data: object;


    @serializeAs('isResponseOnPage')
    @deserializeAs('isResponseOnPage')
    private _isResponseOnPage: boolean;

    /**
     * Getter data
     * @return {object}
     */
    public get data(): object {
        return this._data;
    }

    /**
     * Getter status
     * @return {number}
     */
    public get status(): number {
        return this._status;
    }

    /**
     * Setter status
     * @param {number} value
     */
    public set status(value: number) {
        this._status = value;
    }

    /**
     * Getter message
     * @return {string}
     */
    public get message(): string {
        return this._message;
    }

    /**
     * Setter message
     * @param {string} value
     */
    public set message(value: string) {
        this._message = value;
    }


    /**
     * Setter data
     * @param {object} value
     */
    public set data(value: object) {
        this._data = value;
    }


    /**
     * Getter path
     * @return {string}
     */
    public get path(): string {
        return this._path;
    }


    /**
     * Setter path
     * @param {string} value
     */
    public set path(value: string) {
        this._path = value;
    }


    /**
     * Getter error
     * @return {string}
     */
    public get error(): string {
        return this._error;
    }

    /**
     * Setter error
     * @param {string} value
     */
    public set error(value: string) {
        this._error = value;
    }



    /**
     * Getter isResponseOnPage
     * @return {boolean}
     */
    public get isResponseOnPage(): boolean {
        return this._isResponseOnPage;
    }

    /**
     * Setter isResponseOnPage
     * @param {boolean} value
     */
    public set isResponseOnPage(value: boolean) {
        this._isResponseOnPage = value;
    }



}
