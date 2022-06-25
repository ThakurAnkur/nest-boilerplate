import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { unique: true, nullable: false })
  email: string;
  @Column('varchar', { length: 20 })
  password: string;

  @CreateDateColumn()
  createdOn: Date;
  @UpdateDateColumn()
  updatedOn: Date;
  @DeleteDateColumn()
  deleteOn: Date;
}
