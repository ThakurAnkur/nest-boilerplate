import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { SALT_ROUND } from '../constant';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let result = null;
    const hashPassword = await bcrypt.hash(createUserDto.password, SALT_ROUND);
    try {
      result = await this.userRepository
        .create({
          email: createUserDto.email,
          password: hashPassword,
        })
        .save();
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return 'User Already Present';
      }
    }
    return result;
  }

  async findOne(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async remove(email: string) {
    return await this.userRepository.softDelete({ email });
  }
}
