import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({default: new Date()})
  readonly date: Date;

  @Column()
  applicantId: number;

  @Column('money')
  amount: number;

  @Column()
  payDay: Date;
}
