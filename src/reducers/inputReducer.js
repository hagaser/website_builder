export const inputReducer = (inputs, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return inputs.map(inp => 
        inp.inpName === action.payload.inpName 
        ? { ...inp, value: action.payload.value } 
        : inp
      );
    default: return inputs;
  }
};