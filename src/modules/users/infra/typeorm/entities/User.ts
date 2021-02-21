import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import uploadConfig from '@config/upload';

import { Exclude, Expose } from 'class-transformer';

@Exclude()
@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  email: string;

  @Column()
  phone: string;

  @Column()
  // @Exclude()
  password: string;

  @Column()
  @Expose()
  avatar: string;

  @CreateDateColumn()
  @Expose()
  created_at: Date;

  @UpdateDateColumn()
  @Expose()
  updated_at: Date;

  // @Expose({ name: 'avatar_url' })
  // getAvatarUrl(): string | null {
  //   if (!this.avatar) {
  //     return null;
  //   }

  // switch (uploadConfig.driver) {
  //   case 'disk':
  //     return `${process.env.APP_API_URL}/files/${this.avatar}`;
  //   case 's3':
  //     return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;
  //   default:
  //     return null;
  // }
  // }
}

export default User;
