const Base_Url = 'http://65.1.139.72:8080/'; //new
export const BASE_URL = 'http://65.1.139.72:8080/';
export const environment = {
  production: true,

  signup: Base_Url + 'BeautoWebsiteLogin/auth/signup',
  login: Base_Url + 'BeautoWebsiteLogin/auth/signin',
  forgetPassword: Base_Url + 'BeautoWebsiteLogin/auth/forgetPassword',
  validateOtp: Base_Url + 'BeautoWebsiteLogin/auth/validateOtp',
  resetpassword: Base_Url + 'BeautoWebsiteLogin/auth/resetpassword',
  listofJobDetails: Base_Url + 'BeautoWebsiteLogin/users/listofJobDetails',
  submitJobApplication: Base_Url + 'BeautoWebsiteLogin/candidate/submitJobApplication',
  designationList:Base_Url +'BeautoWebsiteLogin/designation/getlist',
  departmentList: Base_Url + 'BeautoWebsiteLogin/users/getlistdepartment',
  addjob: Base_Url + 'BeautoWebsiteLogin/users/addjob',
  updatejob: Base_Url + 'BeautoWebsiteLogin/users/updatejob',
  deletejob: Base_Url + 'BeautoWebsiteLogin/users/deletjob',
  getteammember: Base_Url + 'BeautoWebsiteLogin/users/listofteammember',
  contactUS: Base_Url + 'BeautoWebsiteLogin/auth/contactUS',
  getContactUsList: Base_Url + 'BeautoWebsiteLogin/users/contactusList',
  deleteContactUsMessage: Base_Url + 'BeautoWebsiteLogin/users/deletcontactusMessage',
  contactUsById: Base_Url + 'BeautoWebsiteLogin/users/contactusbyid',
  jobApplicationList: Base_Url + 'BeautoWebsiteLogin/users/jobApplicationList',
  addTeamMember: Base_Url + 'BeautoWebsiteLogin/users/addmember',
  deleteTeamaMember: Base_Url + 'BeautoWebsiteLogin/users/deletemember',
  updateTeamMember: Base_Url + 'BeautoWebsiteLogin/users/updatemember',
  // clientRegistration: Base_Url + 'BeautoWebsiteLogin/client/registration',
  clientRegistration:Base_Url+'BeautoWebsiteLogin/client/registration',
  clientList: Base_Url + 'BeautoWebsiteLogin/client/clientlist',
  clientAdminList:Base_Url+'BeautoWebsiteLogin/client/clientoflist',
  clientUpdate: Base_Url + 'BeautoWebsiteLogin/client/update',
  clientDelete: Base_Url + 'BeautoWebsiteLogin/client/delete',
  getTeamMmberByEmpID:Base_Url+'BeautoWebsiteLogin/users/teamMemberById',
  getEmployee:Base_Url+'BeautoWebsiteLogin/employee/getemployeelist',

  
  getAllCollageListRecords:Base_Url+'BeautoWebsiteLogin/college/getCollegeList',
  addCollageRecords:Base_Url+'BeautoWebsiteLogin/college/saveCollege',
  deleteCollageListRecordBYID:Base_Url+'BeautoWebsiteLogin/college/deleteCollegeByCollegeName?collegeName=cocsit',
  getCollageListRecordBYID:Base_Url+'BeautoWebsiteLogin/college/getCollegeDetails?collegeName=asmv',

  getCountryList:Base_Url+"BeautoWebsiteLogin/exam/getCountryList",

  getuniversityList:Base_Url+"BeautoWebsiteLogin/university/getList",
AddUniversity:Base_Url+"BeautoWebsiteLogin/university/add"
}
