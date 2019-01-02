import { serializeAs, deserializeAs, serialize } from 'cerialize';

export class User {

    @serializeAs('id')
    @deserializeAs('id')
    private _id: string;

    @serializeAs('name')
    @deserializeAs('name')
    private _name: string;

  
    @serializeAs('email')
    @deserializeAs('email')
    private _email: string; 
  
    @serializeAs('username')
    @deserializeAs('username')
    private _username: string;
    
    @serializeAs('password')
    private _password: string;
    
    @serializeAs('authorities')
    @deserializeAs('authorities')
    private _authorities: Array<object>;

    

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}


    

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}


    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}


    /**
     * Getter username
     * @return {string}
     */
	public get username(): string {
		return this._username;
	}

    /**
     * Getter authorities
     * @return {Array<object>}
     */
	public get authorities(): Array<object> {
		return this._authorities;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}

    /**
     * Setter authorities
     * @param {Array<object>} value
     */
	public set authorities(value: Array<object>) {
		this._authorities = value;
	}
  

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}
    
}   