import { fromJS } from 'immutable';
import dictionaryManagerReducer from '../reducer';

describe('dictionaryManagerReducer', () => {
  it('returns the initial state', () => {
    expect(dictionaryManagerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
