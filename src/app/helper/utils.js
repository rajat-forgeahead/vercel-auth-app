import { Client, Account } from 'appwrite';

//create client
const client = new Client();
client.setEndpoint(process.env._APP_END_POINT_URL).setProject(process.env._APP_PROJECT_ID);

//create account
const account = new Account(client);

//authenticate user with phone number
export const phoneAuth = (phone_number) => {
  return account.createPhoneSession('unique()', phone_number,);
};

//validate phone session
export const validateSMS = (userID, secret) => {
  return account.updatePhoneSession(userID, secret);
}