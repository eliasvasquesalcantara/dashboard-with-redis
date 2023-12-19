import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { PointsTableDTO } from './dto/points-table.dto';

const DASHBOARD_REDIS_KEY = 'DASHBOARD_REDIS_KEY';
const QUANT_POINTS_BY_WIN = 5;
const PLAYER_INITIAL_POINTS = 0;

@Injectable()
export class PointsTableService {
  constructor(@Inject('RedisClient') private readonly redisClient: Redis) {}

  async getPointsTable(): Promise<PointsTableDTO[]> {
    const response = await this.redisClient.zrange(
      DASHBOARD_REDIS_KEY,
      0, // Initial index
      10, // Final index
      'WITHSCORES',
    );
    console.log(response);
    return this.convertRedisSortedSetToPointsTableDTO(response);
  }

  convertRedisSortedSetToPointsTableDTO(
    redisSortedSet: string[],
  ): PointsTableDTO[] {
    const result: PointsTableDTO[] = [];
    for (let i = 0; i < redisSortedSet.length; i++) {
      const indexIsEven = i % 2 === 0;
      if (!indexIsEven) continue;

      const points = redisSortedSet[i + 1];
      if (Number.isNaN(points)) continue;

      result.push({
        playerName: redisSortedSet[i],
        points: parseInt(points),
      });
    }
    return result;
  }

  async addPlayer(playerName: string): Promise<boolean> {
    const response = await this.redisClient.zadd(
      DASHBOARD_REDIS_KEY,
      PLAYER_INITIAL_POINTS,
      playerName,
    );

    return response === 1; // 1 means that player was created successfully
  }

  async updatePlayer(
    playerName: string,
    pointsToBeIncreased?: number,
  ): Promise<boolean> {
    console.log(playerName);
    const response = await this.redisClient.zincrby(
      // Returns new score
      DASHBOARD_REDIS_KEY,
      pointsToBeIncreased ?? QUANT_POINTS_BY_WIN,
      playerName,
    );

    return true;
  }
}
