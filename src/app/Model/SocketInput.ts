import { deserializeAs } from 'cerialize';
import { serializeAs } from 'cerialize';
export class SocketInput {
  @serializeAs('token')
  @deserializeAs('token')
  private _token: string;

  @serializeAs('status')
  @deserializeAs('status')
  private _status: string;

  @serializeAs('usernameOrEmail')
  @deserializeAs('usernameOrEmail')
  private _usernameOrEmail: string;

  @serializeAs('password')
  @deserializeAs('password')
  private _password: string;

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

  /**
   * Getter usernameOrEmail
   * @return {string}
   */
  public get usernameOrEmail(): string {
    return this._usernameOrEmail;
  }

  /**
   * Getter password
   * @return {string}
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Setter usernameOrEmail
   * @param {string} value
   */
  public set usernameOrEmail(value: string) {
    this._usernameOrEmail = value;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set password(value: string) {
    this._password = value;
  }
}
