import { Injectable } from '@angular/core';
import { INVALID } from '@angular/forms/src/model';

@Injectable()
export class ValidationService {
  constructor() {}

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
  PATTERN_FOR_PASSWORD =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,32}$/;
    // '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$';
  PATTERN_FOR_GST_NO = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d[Z]{1}[A-Z\d]{1}/;
  /* End pattern use for validation */

  // validation message start
  // SIGN UP START
  REQUIRED_PANCARD_NO = 'PAN Card No. is required.';
  REQUIRED_GST_NO = 'GST No. is required.';
  REQUIRED_AADHAR_NO = 'Aadhaar No. is required.';

  INVALID_PANCARD_NO = 'Please enter valid PAN Card No.';
  INVALID_GST_NO = 'Please enter valid GST No.';
  INVALID_AADHAR_NO = 'Please enter valid Aadhaar No.';
  INVALID_DATE_OF_BIRTH = 'Please select valid Date of Birth.';
  // SIGN UP END

  // LOGIN
  USERNAME_OR_EMAIL = 'Please enter valid Email or User Name.';
  INVALID_LOGIN_PASSWORD = 'Please enter valid Password.';
  // LOGIN END

  /* Use for Masters  */
  REQUIRED_CATEGORY_NAME = 'Category Name is required.';
  REQUIRED_CITY_NAME = 'City Name is required.';
  REQUIRED_STATE_NAME = 'State Name is required.';
  REQUIED_LAB_REPORT_NAME = 'Lab Report Name is required.';
  REQUIED_TREATMENT_NAME = 'Treatement Name is required.';
  REQUIRED_SERVICE_NAME = 'Service Name is required.';
  REQUIRED_LANGUAGE_NAME = 'Language Name is required.';
  REQUIRED_SPECIALIST_NAME = 'Name is required.';
  REQUIRED_ASSIGN_ROLE_NAME = 'Role name is required.';
  REQUIRED_ROLE_NAME = 'User Role Name is required.';
  REQUIRED_USER_ROLE_FOR_SYSTEM_ACCESS = 'Please select User Role.';

  // validation message start

  INVALID_NAME = 'Please enter valid Name.';
  INVALID_SERVICE_NAME = 'Please enter valid Service Name.';
  INVALID_CATEGORY_NAME = 'Please enter valid Category Name.';
  INVALIDE_STATE_NAME = 'Please enter valid State Name.';
  INVALIDE_CITY_NAME = 'Please enter valid City Name.';
  INVALIDE_USER_ROLE_NAME = 'Please enter valid User Role Name.';
  INVALIDE_LANGUAGE_NAME = 'Please enter valid Language Name.';
  INVALID_LAB_REPORT_NAME = 'Please enter valid Lab Report Name.';
  INVALID_TREATMENT_NAME = 'Please enter valid Treatement Name.';
  INVALID_MOBILE_OR_EMAIL = 'Please enter your registered Mobile No./Email Id.';
  INVALID_OTP = 'Please enter valid OTP.';
  /* End Masters Message */

  // validation message for add medicine
  REQUIRED_MEDICINE_CODE = 'Medicine Code is requied.';
  REQUIRED_MEDICINE_NAME = 'Medicine Name is requied.';
  REQUIRED_GENERIC_NAME = 'Generic Name is requied.';
  REQUIRED_BRAND_NAME = 'Brand Name is requied.';
  REQUIRED_EXPIRY_DATE = 'Expiry Date is required.';
  REQUIRED_MFG_DATE = 'Manufacture Date is required.';
  REQUIRED_QTY = 'Qty is required.';
  REQUIRED_PRICE = 'Price is required.';

  INVALID_MEDICINE_CODE = 'Medicine Code allow only alphanumeric value.';
  INVALID_MEDICINE_NAME = 'Medicine Name allow only alphanumeric value.';
  INVALID_GENERIC_NAME = 'Generic Name allow only alphanumeric value.';
  INVALID_BRAND_NAME = 'Please enter valid Brand Name.';
  INVALID_EXPIRY_DATE = 'Expiry Date is required.';
  INVALID_MFG_DATE = 'Manufacture Date is required.';
  INVALID_QTY = 'Qty allow only numeric value.';
  INVALID_PRICE = 'Price allow only numeric value.';

  // end add medicine
  // validation msg for add clinic
  REQUIRED_CLINIC_NAME = 'Clinic Name is required.';
  REQUIRED_SERVICES_PROVIDED = 'Plaese select Service Proveded.';
  REQUIRED_SERVICES_PROVIDE_SERVICE_SINCE =
    'Provide Service Since is required.';
  REQUIRED_CLINIC_STAFF_STRENGTH = 'Clinic Staff Strength is required.';
  REQUIRED_FEES = 'Fees is required.';
  REQUIRED_LandLine_NUMBER = 'LandLine No. is required.';
  INVALID_LANDLINE_NUMBER = 'Please enter valid LandLine No.';
  REQUIRED_ADDRESS = 'Address is required.';
  REQUIRED_CLINIC_ADDRESS = 'Address is required.';
  INVALID_CLINIC_NAME = 'Clinic Name allow only alphanumeric value.';
  INVALID_ERVICES_PROVIDE_SERVICE_SINCE =
    'Provide Service Since allow only numeric value.';
  INVALID_CLINIC_STAFF_STRENGTH =
    'Clinic Staff Strength allow only numeric value.';
  INVALID_FEES = 'Fees allow only numeric value.';
  INVALID_ADDRESS = 'Please enter valid Address.';
  // end add clinic

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

  // validation msg for doctor registration Step 3
  REQUIRED_QUALIFICATION = 'Qualification is required.';
  REQUIRED_PRACTICESINCE = 'Practice Since is required.';
  REQUIRED_AWARDSANDACHIEVEMENTS = 'Awards/Achievements is required.';
  REQUIRED_PROFESSIONALEXPERIENCE = 'Prodessional Experience is required.';
  REQUIRED_AFFILIATEDANDASSOCIATED = 'Affiliated/Associated is required.';
  REQUIRED_MINUTE_PER_PATIENT = 'Minute Per Patient is required.';

  INVALID_QUALIFICATION = 'Please enter valid Qualification.';
  INVALID_PRACTICESINCE = 'Please enter valid Practice Since.';
  INVALID_AWARDSANDACHIEVEMENTS = 'Please enter valid Awards/Achievements.';
  INVALID_PROFESSIONALEXPERIENCE =
    'Please enter valid Professional Experience.';
  INVALID_AFFILIATEDANDASSOCIATED =
    'Please enter valid Affiliated/Associated With.';
  INVALID_MINUTE_PER_PATIENT = 'Minute Per Patient allow only numeric value.';

  // end  validation msg for doctor registration Step 3
  // validation Message for Timeslot Modal

  REQUIRED_HOSPITAL = 'Please select Clinic.';
  REQUIRED_USER = 'Please select Doctor.';
  // validation Message for Timeslot Modal

  REQUIRED_SYSTEM_ACCESS = 'Please select System Access.';
  REQUIRED_CLINIC = 'Please select Clinic.';
  REQUIRED_USER_ROLE = 'Please select System Access.';
  REQUIRED_TYPE = 'Please select Type.';
  REQUIRED_MENU = 'Please select Menu.';

  REQUIRED_PREFFERED_LANGUAGE = 'Please select Preffered Language.';
  REQUIRED_AGE = 'Age is required.';
  REQUIRED_CITY = 'Please select City.';
  REQUIRED_STATE = 'Please select State.';
  REQUIRED_PINCODE = 'Pin Code is required.';
  REQUIRED_CATEGORY = 'Please select Category';
  REQUIRED_SPECIALIST = 'Please select Specialist.';

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

  // validation msg for view patient FEES start
  REQUIRED_FEES_AMOUNT = 'Fees Amount is required.';
  REQUIRED_PAYMENT_MODE = 'Please select Payment Mode.';
  REQUIRED_DATE = 'Please select valid Date.';
  REQUIRED_PAYMENT_DATE = 'Please select valid Payment Date.';
  REQUIRED_PAYMENT_AMOUNT = 'Payment Amount is required.';
  REQUIRED_PAYMENT_DUE_AMOUNT = 'Payment Due Amount is required.';

  INVALID_FEES_AMOUNT = 'Please enter valid Fees Amount.';
  INVALID_PAYMENT_AMOUNT = 'Please enter valid Payment Amount.';
  INVALID_PAYMENT_AMOUNT_GRETER_AMOUNT =
    'Payment Amount should be less then Fees Amount.';
  INVALID_PAYMENT_DUE_AMOUNT = 'Please enter valid Payment Due Amount.';
  // validation msg for view patient end

  // validation message end

  /* Use for create case*/
  SELECT_PATIENT_NAME = 'Please select Patient Name.';
  CASE_DATE = 'Please select Date.';
  REQUIRED_PROBLEM_DESCRIPTION_NAME = 'Problem Description is required.';
  INVALID_PROBLEM_DESCRIPTION_NAME = 'Please enter valid Problem Description.';
  /* End create case*/
}
