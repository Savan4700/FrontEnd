import { serializeAs, deserializeAs, Serialize } from 'cerialize';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { Time } from '@angular/common';

export class ContentMaster {
  @serializeAs('title')
  @deserializeAs('title')
  private _title: string;

  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;

  @serializeAs('description')
  @deserializeAs('description')
  private _description: string;

  constructor() {}

  /**
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
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
