import { serializeAs, deserializeAs } from 'cerialize';
export class ResponseWrapperDTO {

    @serializeAs('status')
    @deserializeAs('status')
    private _status: boolean;

    @serializeAs('msg')
    @deserializeAs('msg')
    private _msg: string;

    @serializeAs('data')
    @deserializeAs('data')
    private _data: object;


    /**
     * Getter status
     * @return {boolean}
     */
    public get status(): boolean {
        return this._status;
    }

    /**
     * Getter msg
     * @return {string}
     */
    public get msg(): string {
        return this._msg;
    }

    /**
     * Getter data
     * @return {object}
     */
    public get data(): object {
        return this._data;
    }

    /**
     * Setter status
     * @param {boolean} value
     */
    public set status(value: boolean) {
        this._status = value;
    }

    /**
     * Setter msg
     * @param {string} value
     */
    public set msg(value: string) {
        this._msg = value;
    }

    /**
     * Setter data
     * @param {object} value
     */
    public set data(value: object) {
        this._data = value;
    }

}
