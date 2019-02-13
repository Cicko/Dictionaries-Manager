/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/12/19
 *
 */

import { fromJS } from 'immutable';
import { NAV_DRAWER_TOGGLE } from './constants';

const initialState = fromJS({
  navDrawer: {
    open: false,
  },
});
/**
 *
 * @param state
 * @param action : Object : Action that is dispatched.
 */
function appReducer(state = initialState, action) {
  switch (action.type) {
    case NAV_DRAWER_TOGGLE:
      return state.setIn(['navDrawer', 'open'], !state.getIn(['navDrawer', 'open']));
    default:
      return state;
  }
}

export default appReducer;
