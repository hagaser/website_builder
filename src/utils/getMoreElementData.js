export const getMoreElementData = (type, element, value, i, classes, dispatchElements) => {

  const updateInput = (e) => {
    dispatchElements({
      type: "UPDATE_INPUT",
      data: {index: i, value: e.target.value}
    });
  }


  let elementClass = classes[`draggable__${type}`] + " " + classes.draggable;

  // if header
  if (element === "textarea" && type.slice(0, -1) === "h"){
    elementClass = `${elementClass} ${classes.draggable__p}`;
  }


  let dynamicProps = {}
  if (element === "textarea"){
    dynamicProps = {
      onChange: (e) => updateInput(e),
      value: value
    };
  }

  return [elementClass, element, dynamicProps];
}