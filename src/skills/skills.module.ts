import { Module } from '@nestjs/common';
// import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { AppwriteService } from 'src/appwrite/appwrite.service';

@Module({
  controllers: [SkillsController],
  providers: [AppwriteService],
})
export class SkillsModule { }
