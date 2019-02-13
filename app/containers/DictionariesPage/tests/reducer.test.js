import { fromJS } from 'immutable';
import dictionariesPageReducer from '../reducer';

describe('dictionariesPageReducer', () => {
  it('returns the initial state', () => {
    expect(dictionariesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
