const initialState = {
  allProjects: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'PROJECT_VIEW_SET_STATE': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'PROJECT_VIEW_RESET_STATE': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}