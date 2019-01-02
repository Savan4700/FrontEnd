import { serializeAs, deserializeAs, serialize } from 'cerialize';

export class Student {


    @serializeAs('studentName')
    @deserializeAs('studentName')
    private _studentName: string;

    @serializeAs('dob')
    @deserializeAs('dob')
    private _dob: Date;

    @serializeAs('marks')
    @deserializeAs('marks')
    private _marks: number;
    @serializeAs('passed')
    @deserializeAs('passed')
    private _passed: number;


    /**
     * Getter studentName
     * @return {string}
     */
	public get studentName(): string {
		return this._studentName;
	}

    /**
     * Getter dob
     * @return {Date}
     */
	public get dob(): Date {
		return this._dob;
	}

    /**
     * Getter marks
     * @return {number}
     */
	public get marks(): number {
		return this._marks;
	}


    /**
     * Setter studentName
     * @param {string} value
     */
	public set studentName(value: string) {
		this._studentName = value;
	}

    /**
     * Setter dob
     * @param {Date} value
     */
	public set dob(value: Date) {
		this._dob = value;
	}

    /**
     * Setter marks
     * @param {number} value
     */
	public set marks(value: number) {
		this._marks = value;
	}

    /**
     * Getter passed
     * @return {number}
     */
	public get passed(): number {
		return this._passed;
	}

    /**
     * Setter passed
     * @param {number} value
     */
	public set passed(value: number) {
		this._passed = value;
	}




}
