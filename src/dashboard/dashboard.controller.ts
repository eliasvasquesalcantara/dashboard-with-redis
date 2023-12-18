import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardAddPlayer } from './dto/dashboard-add-player.dto';
import { DashboardRegisterWin } from './dto/dashboard-register-win.dto';

@Controller('/dashboard')
export class DashboardController {
  constructor(private readonly appService: DashboardService) {}

  @Get()
  getDashboard(): Promise<string[]> {
    return this.appService.getDashboard();
  }

  @Post()
  addPlayer(
    @Body(new ValidationPipe()) DTO: DashboardAddPlayer,
  ): Promise<boolean> {
    return this.appService.addPlayer(DTO.playerName);
  }

  @Patch()
  registerWin(
    @Body(new ValidationPipe()) DTO: DashboardRegisterWin,
  ): Promise<boolean> {
    return this.appService.updatePlayer(DTO.playerName);
  }
}
