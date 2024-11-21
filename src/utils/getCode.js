import { getPercentSize } from "./getPercentSize";


export const getCode = (elements, classArr) => {

  const hundredWidth = getPercentSize(100, "width");
  const hundredHeight = getPercentSize(100, "height");

  let app = "";
  let headPart = 
`<style> 
* {
  margin: 0;
}\n`;

const fpCode = // first part
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
`;

const spCode = // second part
`</style>
</head>
<body>
`;

const lpCode = // last part
`</body>
</html>`;

const defStyles = {
  div: {backgroundColor: "#0074D9",
  width: hundredWidth,  height: hundredHeight},
  input: {width: getPercentSize(300, "width"), height: getPercentSize(30, "height")},
  button: {width: getPercentSize(70, "width"), height: getPercentSize(20, "height")},
  h6: {width: hundredWidth, height: hundredHeight},
  h5: {width: hundredWidth, height: hundredHeight},
  h4: {width: hundredWidth, height: hundredHeight},
  h3: {width: hundredWidth, height: hundredHeight},
  h2: {width: hundredWidth, height: hundredHeight},
  h1: {width: hundredWidth, height: hundredHeight},
  p: {width: hundredWidth, height: hundredHeight},
};


  const getElementsCode = (elements) => {
      elements.forEach((el, i) => {
        if (el.deleted) return; // if deleted then don't add anything

        // get element default styles and delete that is changed by class
        let formatedStyles = "";
        const defElStyles = defStyles[el.type];

        if (el.class) {
          const elementClass = {...classArr.find(item => item.className === el.class)};
          Object.keys(defElStyles).forEach(style => {
            // if there is no such style then get default

            if (!elementClass[style]) {
              formatedStyles +=
                  // "backgroundColor" => "background-color"
              `  ${style.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${defElStyles[style]};\n`;
            } 
          })
          
        } else {
          Object.keys(defElStyles).forEach(style => {
              formatedStyles +=
                  // "backgroundColor" => "background-color"
              `  ${style.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${defElStyles[style]};\n`;
          })
        }

        // from string "translate(551px, 111px)" => 551, 111
        const coordinates = (el.ref.current.style.transform)
                            .match(/translate\((\d+)px, (\d+)px\)/);

        const left = getPercentSize(coordinates[1], "width");
        const top = getPercentSize(coordinates[2], "height");

          // make and add class block //
          headPart = headPart + 
`.def-and-pos-${el.type}-${i} {
  position: absolute;
  left: ${left};
  top: ${top};
${formatedStyles}}\n`;
        
        // make and add element block
        app = app + `  <${el.type} class="`;
        if (el.class) {
          app = app + `${el.class} `;
        }
        app = app + `def-and-pos-${el.type}-${i}">`;
        if (el.value) {
          app = app + `${el.value}`;
        }
        app = app + `</${el.type}>\n`;
    })
  }


  getElementsCode(elements);
  

  // get custom classes //
  classArr.forEach(classObject => {

    let classOb = {...classObject}; // copy
    // get class name and make: ".class__name {\n"
    let classBlock = `.${classOb.className} {\n`;

    delete classOb.className; // only styles stayed

    classBlock = classBlock + 
      Object
      .entries(classOb)
      .map(([property, value]) => `  ${property.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};\n`)
      .join(""); // converts a style objects to a strings

    classBlock = classBlock + "}\n";
    headPart = headPart + classBlock; // add class block
  })

  return fpCode + headPart + spCode + app + lpCode;
}