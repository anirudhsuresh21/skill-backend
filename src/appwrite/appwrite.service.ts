import { Injectable } from '@nestjs/common';
import { Client, Databases } from 'node-appwrite';

@Injectable()
export class AppwriteService {
  private client: Client;
  private databases: Databases;

  constructor() {
    this.client = new Client(); //Initialize the appwrite client

    this.client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('674ac68000019c905d35') // Your project ID
      .setKey(
        'standard_b0587a53283a8298a5844fc47fa1fc81506aa44bdbc803b793690b687c6e7cbcd23af9949570898160d75d52260c103e56e5d259aec36f14bb0fe593e2f79264fde1c9d7444a7123785be174913c4aa98378914d18210a807eac281936d362858c14695cb4725a48894f35d1ef66079d48c9110dbf1f180cc8e8245068cd70ec',
      ); // Your secret API key

    this.databases = new Databases(this.client);
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
}
