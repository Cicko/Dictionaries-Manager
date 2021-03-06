import { defaultAction } from '../store/actions';
import { DEFAULT_ACTION } from '../store/constants';

describe('DictionariesPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
