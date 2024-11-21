const changeOne = (elements, index, newData) => {
  return [
    ...elements.slice(0, index),
    { ...elements[index], ...newData},
    ...elements.slice(index + 1)
  ];
}

export const elementReducer = (elements, action) => {
  switch (action.type) {

    case "ADD_ELEMENT":
      return [...elements, {...action.data}];

    case "UPDATE_INPUT":
      return changeOne(
        elements,
        action.data.index,
        {value: action.data.value});

    case "DELETED_CLASS":
      return elements.map(el => 
        el.class === action.data
        ? {...el, class: "", style: ""}
        : el
      );

    case "DELETE_ELEMENT":
      return elements.map((el, i) => 
        i === action.data
        ? { deleted: true }
        : el
      );

    case "DELETE_CLASS":
      return changeOne(
        elements,
        action.data,
        {class: "", style: ""})

    case "ADD_CLASS":
      return changeOne(
        elements,
        action.data.index,
        {class: action.data.class, style: action.data.style});

    default: return elements;
  }
};