import { serializeAs, deserializeAs, serialize } from 'cerialize';

export class UserMaster {
  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;

  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

  @serializeAs('firstName')
  @deserializeAs('firstName')
  private _firstName: string;

  @serializeAs('lastName')
  @deserializeAs('lastName')
  private _lastName: string;

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


  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
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
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
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
   * Getter confPassword
   * @return {string}
   */
  public get confPassword(): string {
    return this._confPassword;
  }

  /**
   * Setter confPassword
   * @param {string} value
   */
  public set confPassword(value: string) {
    this._confPassword = value;
  }
}
