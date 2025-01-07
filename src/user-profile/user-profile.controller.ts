import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ID } from 'node-appwrite';
import { AppwriteService } from 'src/appwrite/appwrite.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Controller('user-profile')
export class UserProfileController {
  private readonly databaseId = '67542bcb00025daa7449';
  private collectiond = '67543258002526125593';
  private documentId = ID.unique();
  constructor(private readonly appwriteService: AppwriteService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.appwriteService.createDocument(
      this.databaseId,
      this.collectiond,
      ID.unique(),
      createUserDto,
    );
  }

  @Get()
  async findAll() {
    const result = await this.appwriteService.listDocuments(
      this.databaseId,
      this.collectiond,
      // this.documentId,
      [],
    );

    // Extract only the 'documents' field from the response
    return result.documents; // Return only the documents array
  }

  @Get()
  async listUsers(@Query('filter') filter: string) {
    const filters = filter ? [filter] : [];
    const result = await this.appwriteService.listDocuments(
      this.databaseId,
      this.collectiond,
      filters,
    );

    return { message: 'Users retrieved successfully', data: result };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appwriteService.getDocument(
      this.databaseId,
      this.collectiond,
      id,
    );
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    await this.appwriteService.updateDocument(
      this.databaseId,
      this.collectiond,
      id,
      updateUserDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.appwriteService.deleteDocument(
      this.databaseId,
      this.collectiond,
      id,
    );
  }
}
