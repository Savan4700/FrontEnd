import { Injectable } from '@angular/core';
import { INVALID } from '@angular/forms/src/model';

@Injectable()
export class ValidationService {
  constructor() { }

  /* Variables for set Max Length  */
  // AMOUNT START
  AMOUNTPOINTLEFT = 7;
  AMOUNTPOINTRIGHT = 2;
  // AMOUNT END
  HOSPITALNAME = 30;
  FIRSTNAME = 30;
  LASTNAME = 30;
  MIDDLENAME = 30;
  FULLNAME = 90;
  MOBILENO = 13;
  LANDLINENO = 11;
  USERNAME = 12;
  ADDRESS = 300;
  EMAIL = 50;
  PASSWORD = 32; // 700 at java side
  QUALIFICATION = 30; // 100 at java side
  PRACTICESINCE = 30;
  AWARDSACHIEVEMENTS = 30; // 500 at java side
  PROFESSIONALEXPEREINCE = 30;
  AFFILIATEDASSOCIATEDWITH = 30;
  PROVIDESERVICESINCE = 4;
  STAFFSTRENGTH = 5;
  FEES = 7;
  MOBILEANDEMAIL = 50;
  OTPINPUT = 8;
  EMAILORUSERNAME = 50;
  AGE = 3;
  BLOODGROUP = 5;
  REMARK = 300;
  PINCODE = 6;
  RECOMMENDEDBY = 30;
  MEDICALHISTORY = 30;
  USERTYPENAME = 30;
  USERROLENAME = 30;
  MINUTEPERPATIENT = 3;
  PANCARDNO = 10;
  GSTNO = 15;
  ADHARNO = 12;
  SEARCHTEXT = 50;
  /* End variable for set Max Length  */

  /* Variable for Min Length*/

  MIN_HOSPITALNAME = 30;
  MIN_FIRSTNAME = 2;
  MIN_LASTNAME = 2;
  MIN_MIDDLENAME = 2;
  MIN_MOBILENO = 10;
  MIN_USERNAME = 4;
  MIN_ADDRESS = 50;
  MIN_LANDLINENO = 11;
  MIN_EMAIL = 50;
  MIN_PASSWORD = 6;
  MIN_QUALIFICATION = 30;
  MIN_PRACTICESINCE = 30;
  MIN_AWARDSACHIEVEMENTS = 30;
  MIN_PROFESSIONALEXPEREINCE = 30;
  MIN_AFFILIATEDASSOCIATEDWITH = 30;
  MIN_PROVIDESERVICESINCE = 15;
  MIN_STAFFSTRENGTH = 10;
  MIN_FEES = 15;
  MIN_MOBILEANDEMAIL = 18;
  MIN_OTPINPUT = 8;
  MIN_EMAILORUSERNAME = 30;
  MIN_AGE = 3;
  MIN_BLOODGROUP = 5;
  MIN_REMARK = 25;
  MIN_PINCODE = 6;
  MIN_RECOMMENDEDBY = 30;
  MIN_MEDICALHISTORY = 30;
  MIN_USERTYPENAME = 30;
  MIN_USERROLENAME = 30;
  /* End Variable for Min Length*/

  /* pattern use for validation */
  // newpaat = /^([A-Za-z0-9][+-*/%])*$/;
  NAME = /^([a-zA-Z][a-zA-Z\s]*)$/; // use in specilstMaster and CategoryMaster
  STATE_NAME = /^([a-zA-Z][a-zA-Z\s]*)$/;
  CITY_NAME = /^([a-zA-Z][a-zA-Z\s]*)$/;
  LANGUAGE_NAME = /^([a-zA-Z][a-zA-Z\s]*)$/;
  ONLY_NUMBERS = '^[0-9]*$';
  // ONLY_NUMBERS_AND_DOT = /^[0-9.]{1,15}$/;
  ONLY_NUMBERS_AND_DOT = /^[0-9]+(?:\.[0-9]+)?$/;
  PATTERN_FOR_ALPHABATES_AND_SPACE_AND_DASH_DIGIT = '^[a-zA-Z0-9- ]*$';
  LAB_MASTER_NAME = /.*\S.*/;
  ONLY_SPACE_NOT_ALLOW = /.*\S.*/;
  // ONLY_SPACE_NOT_ALLOWsp = '^[0-9a-zA-Z \b]+$';
  ONLY_SPACE_AND_SPACIAL_CHARACTER_NOT_ALLOW = /^(?=.*[A-Za-z\d])[A-Za-z\d$@$!%*#?_\-& ]{1,}$/;
  PATTERN_FOR_ALPHANUMERIC_DIGIT_SPECIAL_ESCAPE_CHARS = /.*\S.*/;
  PATTERN_FOR_ONLY_ALPHABATES = '^[a-zA-Z]*$';
  PATTERN_FOR_ALPHABATES_AND_SPACE_AND_DIGIT = '^[a-zA-Z0-9 ]*$';
  PATTERN_FOR_ALPHABATES_AND_DIGIT = '^[a-zA-Z0-9]*$';
  PATTERN_FOR_ALPHABATES_AND_SPACE = '^([a-zA-Z][a-zA-Z ]*)$';
  PATTERN_FOR_ALPHABATES_NUMBER_AND_SPACE = '^([a-zA-Z0-9][a-zA-Z0-9 ]*)';
  PATTERN_FOR_EMAIL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // PATTERN_FOR_EMAIL = /^([a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$/;
  // PATTERN_FOR_EMAIL = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';
  PATTERN_FOR_EMAIL_OR_PHONE_NO =
    '^(?:([a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})|([0-9]{10,13}))$';
  PATTERN_FOR_EMAIL_OR_USERNAME =
    '^(?:([a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})|([a-zA-Z0-9]*))$';
  PATTERN_FOR_PHONE_NO = '^[0-9]{10,13}$';
  PATTERN_FOR_NUMBER = '^[0-9]*$';
  PATTERN_FOR_PINCODE = '^[0-9]{6}$';
  PATTERN_FOR_LANDLINE_NO = '^[0-9]{11}$';
  PATTERN_FOR_ADHARCARD_NO = '^[0-9]{12}$';
  PATTERN_FOR_PANCARD_NO = '^[A-Z]{5}[0-9]{4}[A-Z]{1}$';
  // PATTERN_FOR_PASSWORD =
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,32}$/;
  PATTERN_FOR_PASSWORD =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,32}$/;
  PATTERN_FOR_GST_NO = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d[Z]{1}[A-Z\d]{1}/;
  /* End pattern use for validation */

  // loksabha start
  REQUIRED_CODE = 'Code is required.';
  REQUIRED_NAME = 'Name is required.';
  REQUIRED_DESCRIPTION = 'Description is required.';

  INVALID_CODE = 'Please enter valid Code.';
  INVALID_NAME = 'Please enter valid Name.';
  INVALID_DESCRIPTION = 'Please enter valid Description.';
  // loksabha end

  // use for comman
  REQUIRED_FIRST_NAME = 'First Name is required.';
  REQUIRED_LAST_NAME = 'Last Name is required.';
  REQUIRED_EMAIL = 'Email is required.';
  REQUIRED_JOB = 'Please select Job.';
  REQUIRED_PASSWORD = 'Password is required.';
  REQUIRED_CURRENT_PASSWORD = 'Current Password is required.';
  REQUIRED_CONFIRM_PASSWORD = 'Confirm Password is required.';
  REQUIRED_NEW_PASSWORD = 'New Password is required.';
  REQUIRED_MOBILE_NO = 'Mobile No. is required.';
  REQUIRED_USER_NAME = 'User Name is required.';
  REQUIRED_MIDDLE_NAME = 'Middle Name is required.';
  REQUIRED_PATIENT = 'Patient is required.';
  REQUIRED_PATIENT_OR_VISITOR_NAME = 'Patient/Visitor Name is required.';

  // validation msg for add staff

  //  use For common msg for Invalid
  INVALID_FIRST_NAME = 'First Name allow only alphabetic value.';
  INVALID_LAST_NAME = 'Last Name allow only alphabetic value.';
  INVALID_MIDDLE_NAME = 'Middle Name allow only alphabetic value.';
  INVALID_USERNAME = 'User Name allow only alphanumerical value.';
  INVALID_EMAIL = 'Please enter valid Email.';
  INVALID_CURRENT_PASSWORD = 'Please enter valid Current Password.';
  INVALID_PASSWORD =
    'Should contains atleast 6 characters,one upper case letter,lower case letter,digit and special character like *,@,$.';
  INVALID_CONFIRM_PASSOWRD = 'Confirm Password not matched.';
  INVALID_MOBILE_NO = 'Please enter valid Mobile No.';
  INVALID_ALTERNATIVE_NO = 'Please enter valid Alternate Mobile No.';
  INVALID_TELEPHONE_NO = 'Please enter valid Telephone No.';
  INVALID_AGE = 'Please enter valid Age.';
  INVALID_BLOOD_GROUP = 'Please enter valid Blood Group.';
  INVALID_REMARK = 'Please enter valid Remark.';
  INVALID_PINCODE = 'Please enter valid Pin Code.';
  INVALID_RECOMMENDEDBY = 'Please enter valid Recommended By.';
  INVALID_TIMESLOT = 'Please enter valid Timeslot.';
  REQUIRED_TIMESLOT = 'Timeslot is required.';
  RETYPE_NEW_PASSWORD = 'Please Confirm Password.';
  RETYPE_PASSWORD_NOT_MATCHED = 'Confirm Password not matched.';
  INVALID_PATIENT_OR_VISITOR_NAME = 'Please enter valid Patient/Visitor Name.';

  // end  use For common msg for Invalid

}
