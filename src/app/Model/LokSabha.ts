import { serializeAs, deserializeAs, serialize } from 'cerialize';

export class LokSabha {
    @serializeAs('id')
    @deserializeAs('id')
    private _id: string;

    @serializeAs('code')
    @deserializeAs('code')
    private _code: string;

    @serializeAs('name')
    @deserializeAs('name')
    private _name: string;

    @serializeAs('description')
    @deserializeAs('description')
    private _description: string;


    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter code
     * @return {string}
     */
    public get code(): string {
        return this._code;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter code
     * @param {string} value
     */
    public set code(value: string) {
        this._code = value;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

}