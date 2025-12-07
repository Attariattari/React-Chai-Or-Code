import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwrite) // Appwrite Endpoint
      .setProject(conf.projectId); // Project ID

    this.account = new Account(this.client);
  }

  // Create Account + Auto Login
  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login(email, password); // auto login
      }
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  // LOGIN (Updated for latest Appwrite)
  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // Get Current Logged User
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      return null;
    }
  }

  // Logout (all sessions)
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
