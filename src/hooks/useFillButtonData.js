import React from "react";

export const useFillButtonData = (dispatchElements) => {
  const buttonsComponents = [];
  [
    {type: "div", element: "div"},
    {type: "button", element: "textarea"},
    {type: "input", element: "input"},
    {type: "h1", element: "textarea"},
    {type: "h2", element: "textarea"},
    {type: "h3", element: "textarea"},
    {type: "h4", element: "textarea"},
    {type: "h5", element: "textarea"},
    {type: "h6", element: "textarea"},
    {type: "p", element: "textarea"},

  ].forEach(el => {
    const elementData = {
      type: el.type,
      element: el.element,
      ref: React.createRef(),
      style: {},
      class: ""
    };

    if (el.element === "textarea") {
      elementData.value = "";
    }

    const data = {
      name: el.type,
      function: () => dispatchElements({
        type: "ADD_ELEMENT",
        data: {...elementData}
      })
    };

    buttonsComponents.push(data);

  })
  return buttonsComponents
}