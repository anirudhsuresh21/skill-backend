// import { Type } from './../../node_modules/@nestjs/schematics/node_modules/ajv/lib/compile/util';
import { Module } from '@nestjs/common';
import { AppUserService } from './app_user.service';
import { AppUserController } from './app_user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUser } from './entities/app_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppUser])],
  controllers: [AppUserController],
  providers: [AppUserService],
  exports: [AppUserService],
})
export class AppUserModule {}
