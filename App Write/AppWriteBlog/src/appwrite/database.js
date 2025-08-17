import { Client, Databases, ID, Query, Storage } from "appwrite";
import { appWriteConfig } from "../config";

class DatabaseService {
  constructor() {
    this.client = new Client()
      .setEndpoint(appWriteConfig.appwriteURL)
      .setProject(appWriteConfig.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        appWriteConfig.appwriteDatabaseId,
        appWriteConfig.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Error creating post:", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        appWriteConfig.appwriteDatabaseId,
        appWriteConfig.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Error updating post:", error);
    }
  }
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        appWriteConfig.appwriteDatabaseId,
        appWriteConfig.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        appWriteConfig.appwriteDatabaseId,
        appWriteConfig.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        appWriteConfig.appwriteDatabaseId,
        appWriteConfig.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        appWriteConfig.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Error uploading file", error);
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(
        appWriteConfig.appwriteBucketId,
        fileId
      );
      return true;
    } catch (error) {
      console.log("Error deleting file", error);
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(
        appWriteConfig.appwriteBucketId,
        fileId
      );
    } catch (error) {
      console.log("Error getting file preview", error);
    }
  }
}
const databaseService = new DatabaseService();
export default databaseService;
