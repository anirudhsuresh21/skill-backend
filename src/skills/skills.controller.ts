import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { ID } from 'node-appwrite';
import { AppwriteService } from 'src/appwrite/appwrite.service';

@Controller('skills')
export class SkillsController {
  private readonly databaseId = '67542bcb00025daa7449';
  private collectionId = '67542cfe0005efa451ae';
  private documentId = ID.unique();
  constructor(private readonly appwriteService: AppwriteService) { }

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.appwriteService.createDocument(
      this.databaseId,
      this.collectionId,
      ID.unique(),
      createSkillDto,
    );
  }

  @Get()
  findAll() {
    return this.appwriteService.listDocuments(
      this.databaseId,
      this.collectionId,
      [],
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appwriteService.getDocument(
      this.databaseId,
      this.collectionId,
      id,
    );
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
  //   return this.skillsService.update(+id, updateSkillDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.skillsService.remove(+id);
  // }
}
