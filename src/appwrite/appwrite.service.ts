import { Injectable } from '@nestjs/common';
import {
  Client,
  Databases,
  Storage,
  ImageGravity,
  ImageFormat,
} from 'node-appwrite';
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
@Injectable()
export class AppwriteService {
  private client: Client;
  private databases: Databases;
  private storage: Storage;
  ImageGravity: ImageGravity;
  ImageFormat: ImageFormat;


  constructor() {
    this.client = new Client(); //Initialize the appwrite client

    this.client
      .setEndpoint(process.env.ENDPOINT) // Your API Endpoint
      .setProject(process.env.PROJECT_ID) // Your project ID
      .setKey(
        process.env.API_KEY,
      ); // Your secret API key

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  getDatabases() {
    return this.databases;
  }

  async getDocument(databaseId: string, collectionId: string, documentId: any) {
    return this.databases.getDocument(databaseId, collectionId, documentId);
  }

  async createDocument(
    databaseId: string,
    collectionId: string,
    documentId: string,
    data: any,
    permissions?: string[],
  ) {
    return this.databases.createDocument(
      databaseId,
      collectionId,
      documentId,
      data,
      permissions,
    );
  }
  async listDocuments(
    databaseId: string,
    collectionId: string,
    filters: string[],
  ) {
    return this.databases.listDocuments(databaseId, collectionId, filters);
  }

  async updateDocument(
    databaseId: string,
    collectionId: string,
    documentId: string,
    data: any,
  ) {
    return this.databases.updateDocument(
      databaseId,
      collectionId,
      documentId,
      data,
    );
  }

  async deleteDocument(
    databaseId: string,
    collectionId: string,
    documentId: string,
  ) {
    return this.databases.deleteDocument(databaseId, collectionId, documentId);
  }

  async listBucketFiles(bucketId: string) {
    return this.storage.listFiles(bucketId);
  }

  async getFile(bucketId: string, fileId: string) {
    return this.storage.getFilePreview(
      bucketId,
      fileId, // fileId
      0, // width (optional)
      0, // height (optional)
      this.ImageGravity, // gravity (optional)
      0, // quality (optional)
      0, // borderWidth (optional)
      'ffffff', // borderColor (optional)
      0, // borderRadius (optional)
      0, // opacity (optional)
      -360, // rotation (optional)
      'ffffff', // background (optional)
      this.ImageFormat, // output (optional)
    );
  }
}
