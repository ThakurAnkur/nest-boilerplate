import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let result = null;
    try {
      result = await this.userRepository
        .create({
          email: createUserDto.email,
          password: createUserDto.password,
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
