import { serializeAs, deserializeAs, serialize } from 'cerialize';

export class User {

    @serializeAs('id')
    @deserializeAs('id')
    private _id: string;

    @serializeAs('FirstName')
    @deserializeAs('FirstName')
    private _FirstName: string;
  
    @serializeAs('MiddleName')
    @deserializeAs('MiddleName')
    private _MiddleName: string;

    @serializeAs('LastName')
    @deserializeAs('LastName')
    private _LastName: string;

    @serializeAs('Gender')
    @deserializeAs('Gender')
    private _Gender: string;

    @serializeAs('DateOfBirth')
    @deserializeAs('DateOfBirth')
    private _DateOfBirth: Date;

    @serializeAs('Email')
    @deserializeAs('Email')
    private _Email: string;

}