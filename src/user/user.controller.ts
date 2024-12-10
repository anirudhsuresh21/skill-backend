import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
// import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { AppwriteService } from '../appwrite/appwrite.service';
import { ID } from 'node-appwrite';

@Controller('users')
export class UserController {
  private readonly databaseId = '674355ad001fc1414206';
  private collectiond = '674355c70013fd688fbc';
  private documentId = ID.unique();
  constructor(private readonly appwriteService: AppwriteService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.appwriteService.createDocument(
      this.databaseId,
      this.collectiond,
      this.documentId,
      createUserDto,
    );
  }

  // @Get()
  // findAll() {
  //   return this.appwriteService.getDatabases();
  // }

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

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
