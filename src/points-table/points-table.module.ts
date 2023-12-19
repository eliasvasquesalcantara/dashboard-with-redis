import { Module } from '@nestjs/common';
import { PointsTableController } from './points-table.controller';
import { PointsTableService } from './points-table.service';
import { redisClientFactory } from 'src/redis/config';

@Module({
  imports: [],
  controllers: [PointsTableController],
  providers: [PointsTableService, redisClientFactory],
})
export class PointsTableModule {}
