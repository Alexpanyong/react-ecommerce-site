/* eslint-disable indent */
import * as actions from "../actions/actionTypes";

const reactMapGlReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_REACT_MAP_GL_VIEWPORT_STATE:
      return {
        ...state,
        viewportState: action.viewportState,
      };
    default:
      return state;
  }
};

export default reactMapGlReducer;