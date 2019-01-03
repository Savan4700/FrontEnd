import { serializeAs, deserializeAs, serialize } from 'cerialize';
import { Role } from './Role';

export class User {

    @serializeAs('id')
    @deserializeAs('id')
    private _id: string;


  
    @serializeAs('email')
    @deserializeAs('email')
    private _email: string; 
  
    @serializeAs('username')
    @deserializeAs('username')
    private _username: string;
    
    @serializeAs('password')
    private _password: string;

    private _confPassword: string;
    
    @serializeAs('role')
    @deserializeAs('role')
    private _role: Array<string>;

    

 

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
     * Setter username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}


    /**
     * Getter _confPassword
     * @return {string}
     */
	public get confPassword(): string {
		return this._confPassword;
	}

    /**
     * Setter _confPassword
     * @param {string} value
     */
	public set confPassword(value: string) {
		this._confPassword = value;
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
    

    /**
     * Getter role
     * @return {Array<string>}
     */
	public get role(): Array<string> {
		return this._role;
	}

    /**
     * Setter role
     * @param {Array<string>} value
     */
	public set role(value: Array<string>) {
		this._role = value;
	}


}   