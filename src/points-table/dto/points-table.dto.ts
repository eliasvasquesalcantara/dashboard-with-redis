import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PointsTableDTO {
  @IsString()
  playerName: string;

  @IsNumber()
  @IsOptional()
  points: number;
}
