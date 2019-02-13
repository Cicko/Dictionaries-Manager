import { fromJS } from 'immutable';
import dictionariesPageReducer from '../store/reducer';

describe('dictionariesPageReducer', () => {
  it('returns the initial state', () => {
    expect(dictionariesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
