// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

 const Base_Url = 'http://65.1.139.72:8080/'; //old
export const BASE_URL = 'http://65.1.139.72:8080/';
export const local = 'http://localhost:8080/'
export const environment = {
  production: false,

  signup: Base_Url + 'BeautoWebsiteLogin/auth/signup',
  login: Base_Url + 'BeautoWebsiteLogin/auth/signin',
  forgetPassword:Base_Url + 'BeautoWebsiteLogin/auth/forgetPassword',
  validateOtp:Base_Url + 'BeautoWebsiteLogin/auth/validateOtp',
  resetPassword:Base_Url + 'BeautoWebsiteLogin/auth/resetpassword',
  changePassword:Base_Url +'BeautoWebsiteLogin/users/changepassword',
  listofJobDetails:Base_Url +'BeautoWebsiteLogin/users/listofJobDetails',
  addTeamMember:Base_Url+'BeautoWebsiteLogin/users/addmember',
  submitJobApplication:Base_Url +'BeautoWebsiteLogin/candidate/submitJobApplication',
  designationList:Base_Url+'BeautoWebsiteLogin/designation/getlist',
  departmentList:Base_Url +'BeautoWebsiteLogin/users/getlistdepartment',
  addjob:Base_Url +'BeautoWebsiteLogin/users/addjob',
  updatejob:Base_Url +'BeautoWebsiteLogin/users/updatejob',
  deletejob:Base_Url +'BeautoWebsiteLogin/users/deletjob',
  getteammember:Base_Url+'BeautoWebsiteLogin/users/listofteammember',
  contactUS:Base_Url +'BeautoWebsiteLogin/auth/contactUS',
  getContactUsList:Base_Url+'BeautoWebsiteLogin/users/contactusList',
  deleteContactUsMessage:Base_Url+'BeautoWebsiteLogin/users/deletcontactusMessage',
  contactUsById:Base_Url+'BeautoWebsiteLogin/users/contactusbyid',
  jobApplicationList:Base_Url+'BeautoWebsiteLogin/users/jobApplicationList',
  deleteTeamaMember:Base_Url+'BeautoWebsiteLogin/users/deletemember',
  updateTeamMember:Base_Url+'BeautoWebsiteLogin/users/updatemember',
  clientRegistration:Base_Url+'BeautoWebsiteLogin/client/registration',
  // clientRegistration:'BeautoWebsiteLogin/client/registration',
  clientList:Base_Url+'BeautoWebsiteLogin/client/clientlist',
  clientAdminList:Base_Url+'BeautoWebsiteLogin/client/clientoflist',
  clientUpdate:Base_Url+'BeautoWebsiteLogin/client/update',
  clientDelete:Base_Url+'BeautoWebsiteLogin/client/delete',
  getTeamMmberByEmpID:Base_Url+'BeautoWebsiteLogin/users/teamMemberById',
  getEmployee:Base_Url+'BeautoWebsiteLogin/employee/getemployeelist',



  getAllCollageListRecords:Base_Url+'BeautoWebsiteLogin/college/getCollegeList',
  addCollageRecords:Base_Url+'BeautoWebsiteLogin/college/saveCollege',
  deleteCollageListRecordBYID:Base_Url+'BeautoWebsiteLogin/college/deleteCollegeByCollegenameAndId',
  getCollageListRecordBYID:Base_Url+'BeautoWebsiteLogin/college/getCollegeDetails',

getCountryList:Base_Url+"BeautoWebsiteLogin/exam/getCountryList",
getStateList:Base_Url+"BeautoWebsiteLogin/state/getStateList",
getuniversityList:Base_Url+"BeautoWebsiteLogin/university/getList",
AddUniversity:Base_Url+"BeautoWebsiteLogin/university/add",
uploadCollageLogo:Base_Url+'BeautoWebsiteLogin/college/uploadCollegeLogo',

saveCollageTemparory:Base_Url+'BeautoWebsiteLogin/college/savetempCollege',
getStateBySelctCountry:Base_Url+'BeautoWebsiteLogin/state/getStateListBycountry'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

