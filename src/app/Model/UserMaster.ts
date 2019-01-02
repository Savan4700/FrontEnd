import { serializeAs, deserializeAs, serialize } from 'cerialize';

export class UserMaster {
  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;

  @serializeAs('firstName')
  @deserializeAs('firstName')
  private _firstName: string;

  @serializeAs('lastName')
  @deserializeAs('lastName')
  private _lastName: string;
  
  @serializeAs('middleName')
  @deserializeAs('middleName')
  private _middleName: string;

  @serializeAs('mobileNo')
  @deserializeAs('mobileNo')
  private _mobileNo: string;

  @serializeAs('address')
  @deserializeAs('address')
  private _address: string;

  @serializeAs('email')
  @deserializeAs('email')
  private _email: string;

  @serializeAs('userName')
  @deserializeAs('userName')
  private _userName: string;

  @serializeAs('password')
  @deserializeAs('password')
  private _password: string;
  
  private _confPassword: string;
  
  @serializeAs('role')
  @deserializeAs('role')
  private _role: string;


    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter firstName
     * @return {string}
     */
	public get firstName(): string {
		return this._firstName;
	}

    /**
     * Getter lastName
     * @return {string}
     */
	public get lastName(): string {
		return this._lastName;
	}

    /**
     * Getter middleName
     * @return {string}
     */
	public get middleName(): string {
		return this._middleName;
	}

    /**
     * Getter mobileNo
     * @return {string}
     */
	public get mobileNo(): string {
		return this._mobileNo;
	}

    /**
     * Getter address
     * @return {string}
     */
	public get address(): string {
		return this._address;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter userName
     * @return {string}
     */
	public get userName(): string {
		return this._userName;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Getter confPassword
     * @return {string}
     */
	public get confPassword(): string {
		return this._confPassword;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter firstName
     * @param {string} value
     */
	public set firstName(value: string) {
		this._firstName = value;
	}

    /**
     * Setter lastName
     * @param {string} value
     */
	public set lastName(value: string) {
		this._lastName = value;
	}

    /**
     * Setter middleName
     * @param {string} value
     */
	public set middleName(value: string) {
		this._middleName = value;
	}

    /**
     * Setter mobileNo
     * @param {string} value
     */
	public set mobileNo(value: string) {
		this._mobileNo = value;
	}

    /**
     * Setter address
     * @param {string} value
     */
	public set address(value: string) {
		this._address = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter userName
     * @param {string} value
     */
	public set userName(value: string) {
		this._userName = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Setter confPassword
     * @param {string} value
     */
	public set confPassword(value: string) {
		this._confPassword = value;
  }
  


    /**
     * Getter role
     * @return {string}
     */
	public get role(): string {
		return this._role;
	}

    /**
     * Setter role
     * @param {string} value
     */
	public set role(value: string) {
		this._role = value;
	}

  
  
}
