import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppUserModule } from './app_user/app_user.module';
// import { AppUser } from './app_user/entities/app_user.entity';
import { AppwriteService } from './appwrite/appwrite.service';
// import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
import { UserModule } from './user/user.module';
import { SkillsController } from './skills/skills.controller';
import { SkillsModule } from './skills/skills.module';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url: 'postgresql://neondb_owner:qtfd6D7ineCZ@ep-bold-glitter-a5i47gzw.us-east-2.aws.neon.tech/skill?sslmode=require', // Make sure the environment variable is set in .env
    //   entities: [AppUser],
    //   // synchronize: process.env.NODE_ENV === 'development',  // Only use synchronize in dev environment
    //   // logging: process.env.NODE_ENV === 'development',      // Optional: logs queries for debugging in dev
    // }),
    // AppUserModule,
    UserModule,
    SkillsModule,
  ],
  controllers: [AppController, SkillsController],
  providers: [AppService, AppwriteService],
  exports: [AppwriteService],
})
export class AppModule {}
