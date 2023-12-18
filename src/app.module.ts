import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [ConfigModule.forRoot(), DashboardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
