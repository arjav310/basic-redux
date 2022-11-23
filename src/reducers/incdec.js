const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  if (action.type === "Increment") {
    return state + 5;
  } else if (action.type === "Decrement") {
    if (state > 0) {
      return state - 1;
    } else {
      return state;
    }
  } else {
    return state;
  }
};

export default changeTheNumber;
