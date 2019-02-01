import { serializeAs, deserializeAs, serialize } from 'cerialize';
import { LokSabha } from './LokSabha';

export class VidhanSabha {
@serializeAs('id')
@deserializeAs('id')
private _id: string;

@serializeAs('code')
@deserializeAs('code')
private _code: string;

@serializeAs('name')
@deserializeAs('name')
private _name: string;

@serializeAs('loksabha')
@deserializeAs('loksabha')
private _loksabha: Array<LokSabha>;


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
     * Getter loksabha
     * @return {Array<LokSabha>}
     */
	public get loksabha(): Array<LokSabha> {
		return this._loksabha;
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
     * Setter loksabha
     * @param {Array<LokSabha>} value
     */
	public set loksabha(value: Array<LokSabha>) {
		this._loksabha = value;
	}





}
