const initialState = {
  COUNT_DATA: [],
};


const countReducer = (state = initialState, action) => {
  console.log('action:::::::::::',action)
  switch (action.type) {
    case "INCREASE_OR_INSERT_COUNT":
      const { id, payload } = action.payload;
      const existingProduct = state.COUNT_DATA.find(item => item.id === id);

      if (existingProduct) {
        return {
          ...state,
          COUNT_DATA: state.COUNT_DATA.map(item =>
            item.id === id ? { ...item, count: item.count + payload } : item
          ),
        };
      } else {
        return {
          ...state,
          COUNT_DATA: [...state.COUNT_DATA, { id, count: payload }],
        };
      }
 
    case "DECREASE_OR_DELETE_COUNT_DATA":
      const { id: decreaseId, payload: decreasePayload } = action.payload;
      const updatedData = state.COUNT_DATA.map(item =>
        item.id === decreaseId
          ? { ...item, count: Math.max(item.count - decreasePayload, 0) }
          : item
      );

      return {
        ...state,
        COUNT_DATA: updatedData,
      };

      case "INITIALIZE_DATA":
        return {
          ...state,
          COUNT_DATA: action.payload,
        };

    default:
      return state;
  }
};


export default countReducer;
