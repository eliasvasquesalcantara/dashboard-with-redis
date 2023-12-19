import { PointsTableService } from './points-table.service';

describe('PointsTableService', () => {
  describe('convertRedisSortedSetToPointsTableDTO', () => {
    it('should convert correctly', () => {
      const arr = ['Elias', '10', 'Crislanne', '21', 'Katarina', '6'];

      const service = new PointsTableService({} as any);

      const result = service.convertRedisSortedSetToPointsTableDTO(arr);

      expect(result).toEqual([
        {
          playerName: 'Elias',
          points: 10,
        },
        {
          playerName: 'Crislanne',
          points: 21,
        },
        {
          playerName: 'Katarina',
          points: 6,
        },
      ]);
    });
  });
});
