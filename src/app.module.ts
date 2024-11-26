import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUserModule } from './app_user/app_user.module';
import { AppUser } from './app_user/entities/app_user.entity';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: `${process.env.DB_CONNECTION}`, // Make sure the environment variable is set in .env
      entities: [AppUser],
      // synchronize: process.env.NODE_ENV === 'development',  // Only use synchronize in dev environment
      // logging: process.env.NODE_ENV === 'development',      // Optional: logs queries for debugging in dev
    }),
    AppUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
