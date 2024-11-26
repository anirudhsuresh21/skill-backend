import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUserModule } from './app_user/app_user.module';
// import { join } from 'path';
import { AppUser } from './app_user/entities/app_user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://neondb_owner:qtfd6D7ineCZ@ep-bold-glitter-a5i47gzw.us-east-2.aws.neon.tech/skill?sslmode=require',
      entities: [AppUser],
      // synchronize: true,
    }),
    AppUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
