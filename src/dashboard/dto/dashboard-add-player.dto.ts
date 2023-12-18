import { IsString } from 'class-validator';

export class DashboardAddPlayer {
  @IsString()
  playerName: string;
}
