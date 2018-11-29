import { serializeAs, deserializeAs, Serialize } from 'cerialize';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { Time } from '@angular/common';

export class FormMaster {
  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

  @serializeAs('email')
  @deserializeAs('email')
  private _email: string;

  @serializeAs('mobileno')
  @deserializeAs('mobileno')
  private _mobileno: string;

  @serializeAs('job')
  @deserializeAs('job')
  private _job: string;

  @serializeAs('password')
  @deserializeAs('password')
  private _password: string;

  @serializeAs('confpassword')
  @deserializeAs('confpassword')
  private _confpassword: string;

  @serializeAs('isAuthenticated')
  @deserializeAs('isAuthenticated')
  private _isAuthenticated: boolean;

  constructor() {
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter mobileno
   * @return {string}
   */
  public get mobileno(): string {
    return this._mobileno;
  }

  /**
   * Getter job
   * @return {string}
   */
  public get job(): string {
    return this._job;
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
   * Setter mobileno
   * @param {string} value
   */
  public set mobileno(value: string) {
    this._mobileno = value;
  }

  /**
   * Setter job
   * @param {string} value
   */
  public set job(value: string) {
    this._job = value;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set password(value: string) {
    this._password = value;
  }

  /**
   * Getter confpassword
   * @return {string}
   */
  public get confpassword(): string {
    return this._confpassword;
  }

  /**
   * Setter confpassword
   * @param {string} value
   */
  public set confpassword(value: string) {
    this._confpassword = value;
  }

  /**
   * Getter isAuthenticated
   * @return {boolean}
   */
  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  /**
   * Setter isAuthenticated
   * @param {boolean} value
   */
  public set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }
}
