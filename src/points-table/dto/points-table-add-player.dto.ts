import { IsString } from 'class-validator';

export class PointsTableAddPlayerDTO {
  @IsString()
  playerName: string;
}
