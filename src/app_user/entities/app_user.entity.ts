import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('app_user')
export class AppUser {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
