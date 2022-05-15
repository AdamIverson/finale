const setTest = (state = {}, action) => {
  // console.log("setOneFlightEvent.reducer action.payload:", action.payload);

  switch (action.type) {
    case "SET_TEST":
      return action.payload;
    default:
      return state;
  }
};

export default setTest;