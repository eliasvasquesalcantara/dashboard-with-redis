import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

const DASHBOARD_REDIS_KEY = 'DASHBOARD_REDIS_KEY';
const QUANT_POINTS_BY_WIN = 5;
const PLAYER_INITIAL_POINTS = 0;

@Injectable()
export class DashboardService {
  constructor(@Inject('RedisClient') private readonly redisClient: Redis) {}

  async getDashboard(): Promise<string[]> {
    const response = await this.redisClient.zrange(
      DASHBOARD_REDIS_KEY,
      0, // Initial index
      10, // Final index
      'WITHSCORES',
    );
    return response;
  }

  async addPlayer(playerName: string): Promise<boolean> {
    const response = await this.redisClient.zadd(
      DASHBOARD_REDIS_KEY,
      PLAYER_INITIAL_POINTS,
      playerName,
    );

    return response === 1; // 1 means that player was created successfully
  }

  async updatePlayer(playerName: string): Promise<boolean> {
    const response = await this.redisClient.zincrby(
      // Returns new score
      DASHBOARD_REDIS_KEY,
      QUANT_POINTS_BY_WIN,
      playerName,
    );

    return true;
  }
}
