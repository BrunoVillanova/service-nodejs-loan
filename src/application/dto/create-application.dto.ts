import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsDate, IsCurrency} from 'class-validator';

export class CreateApplicationDto {
  @ApiProperty({description: "Applicant ID", example: 87653})
  @IsNotEmpty()
  applicantId: number;

  @ApiProperty({description: "Loan amount", example: 4500.90})
  @IsNotEmpty()
  @IsCurrency({allow_negatives: false})
  amount: number;

  @ApiProperty({description: "Date of loan payment", example: new Date()})
  @Type(() => Date)
  @IsDate()
  payDay: string;
 }
