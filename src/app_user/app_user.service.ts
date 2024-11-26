import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppUser } from './entities/app_user.entity'; // Replace with the correct path
import { CreateAppUserDto } from './dto/create-app_user.dto';
import { UpdateAppUserDto } from './dto/update-app_user.dto';

@Injectable()
export class AppUserService {
  constructor(
    @InjectRepository(AppUser)
    private readonly appUserRepository: Repository<AppUser>,
  ) {}

  // Create a new AppUser
  async create(createAppUserDto: CreateAppUserDto): Promise<AppUser> {
    const newUser = this.appUserRepository.create(createAppUserDto);
    return await this.appUserRepository.save(newUser);
  }

  // Retrieve all AppUsers
  async findAll(): Promise<AppUser[]> {
    return await this.appUserRepository.find();
  }

  // Retrieve a single AppUser by ID
  async findOne(id: number): Promise<AppUser> {
    const user = await this.appUserRepository.findOne({
      where: { user_id: id },
    });
    if (!user) {
      throw new NotFoundException(`AppUser with ID ${id} not found`);
    }
    return user;
  }

  // Update an AppUser
  async update(
    id: number,
    updateAppUserDto: UpdateAppUserDto,
  ): Promise<AppUser> {
    const user = await this.appUserRepository.preload({
      user_id: id,
      ...updateAppUserDto,
    });

    if (!user) {
      throw new NotFoundException(`AppUser with ID ${id} not found`);
    }

    return await this.appUserRepository.save(user);
  }

  // Delete an AppUser
  async remove(id: number): Promise<string> {
    const result = await this.appUserRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`AppUser with ID ${id} not found`);
    }
    return `AppUser with ID ${id} has been removed.`;
  }
}
