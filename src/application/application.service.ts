import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './entities/application.entity';
import { CreateApplicationDto } from './dto/create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private applicationRepository: Repository<Application>,
  ) { }
  
  create(createApplicationDto: CreateApplicationDto): Promise<Application> {
    return this.applicationRepository.save(createApplicationDto);
  }

  findAll(): Promise<Application[]> {
    return this.applicationRepository.find();
  }

  findOne(id: number): Promise<Application | null> {
    return this.applicationRepository.findOneBy({ id });
  }
}