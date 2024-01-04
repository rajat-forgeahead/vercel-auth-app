import { Client, Account } from 'appwrite';

//create client
const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65966e7a7e1287ea679b');

//create account
const account = new Account(client);

//authenticate user with phone number
export const phoneAuth = (phone_number) => {
  return account.createPhoneSession('unique()', phone_number);
};

//validate phone session
export const validateSMS = (userID, secret) => {
  return account.updatePhoneSession(userID, secret);
}