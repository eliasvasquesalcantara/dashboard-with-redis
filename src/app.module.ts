import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PointsTableModule } from './points-table/points-table.module';

@Module({
  imports: [ConfigModule.forRoot(), PointsTableModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
