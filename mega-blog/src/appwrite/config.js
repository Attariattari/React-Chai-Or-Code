import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";
export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwrite) // Your Appwrite Endpoint
      .setProject(conf.projectId); // Your project ID
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createpost(title, slug, content, featuredImage, ststus, userId) {
    try {
      return await this.database.createDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          ststus,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service Create Post Error:", error);
    }
  }
  async updartePost(slug, { title, content, featuredImage, ststus }) {
    try {
      return await this.database.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          ststus,
        }
      );
    } catch (error) {
      console.log("Appwrite Service Update Post Error:", error);
    }
  }
  async detelePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service Delete Post Error:", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service Get Post Error:", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("ststus", "avtive")]) {
    try {
      return await this.database.listDocuments(
        conf.databaseId,
        conf.collectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service Get Posts Error:", error);
      return false;
    }
  }

  //   Upload File
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite Service Upload File Error:", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite Service Delete File Error:", error);
      return false;
    }
  }
  async getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.bucketId, fileId, 400, 400);
    } catch (error) {
      console.log("Appwrite Service Get File Preview Error:", error);
      return null;
    }
  }
}

const service = new Service();
export default service;
