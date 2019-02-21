/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/15/19
 *
 */
import { fromJS } from 'immutable';

const dictionaryOne = fromJS({
  name: 'Colors dictionary',
  rows: [
    {
      id: 0,
      domain: 'Golden green',
      range: 'Green',
      selected: false,
    },
    {
      id: 1,
      domain: 'Precious green',
      range: 'Green',
      selected: false,
    },
    {
      id: 2,
      domain: 'Marvellous green',
      range: 'Green',
      selected: false,
    },
    {
      id: 3,
      domain: 'Sadly red',
      range: 'Red',
      selected: false,
    },
    {
      id: 4,
      domain: 'Amazing blue',
      range: 'Blue',
      selected: false,
    },
    {
      id: 5,
      domain: 'Unbelievable orange',
      range: 'Orange',
      selected: false,
    },
    {
      id: 6,
      domain: 'Golden grey',
      range: 'Grey',
      selected: false,
    },
    {
      id: 7,
      domain: 'Dark white',
      range: 'Black',
      selected: false,
    },
  ],
});

export default dictionaryOne;
