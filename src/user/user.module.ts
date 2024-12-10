import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AppwriteService } from 'src/appwrite/appwrite.service';

@Module({
  controllers: [UserController],
  providers: [AppwriteService],
})
export class UserModule {}
