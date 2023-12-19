import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { PointsTableService } from './points-table.service';
import { PointsTableAddPlayerDTO } from './dto/points-table-add-player.dto';
import { PointsTableDTO } from './dto/points-table.dto';

@Controller('/points-table')
export class PointsTableController {
  constructor(private readonly appService: PointsTableService) {}

  @Get()
  getPointsTable(): Promise<PointsTableDTO[]> {
    return this.appService.getPointsTable();
  }

  @Post()
  addPlayer(
    @Body(new ValidationPipe()) DTO: PointsTableAddPlayerDTO,
  ): Promise<boolean> {
    return this.appService.addPlayer(DTO.playerName);
  }

  @Patch(':playerName')
  registerWin(
    @Param('playerName') playerName: string,
    @Query('points') points?: number,
  ): Promise<boolean> {
    return this.appService.updatePlayer(playerName, points);
  }
}
