import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { redisClientFactory } from 'src/redis/config';

@Module({
  imports: [],
  controllers: [DashboardController],
  providers: [DashboardService, redisClientFactory],
})
export class DashboardModule {}
