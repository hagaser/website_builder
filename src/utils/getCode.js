export const getCode = (allArr, classArr) => {

  let app = "";
  let headPart = "<style>\n";

  const fpCode = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
`;

const spCode =
`</style>
</head>
<body>
`;

const lpCode =
`</body>
</html>`;

const defStyles = {
  div: "  background-color: #0074D9;\n"+
  "  width: 100px;\n  height: 100px;\n",
  input: "  width: 300px;\n  height: 30px;\n",
  button: "  width: 70px;\n  height: 20px;\n",
  h6: "  width: 100px;\n  height: 100px;\n",
  h5: "  width: 100px;\n  height: 100px;\n",
  h4: "  width: 100px;\n  height: 100px;\n",
  h3: "  width: 100px;\n  height: 100px;\n",
  h2: "  width: 100px;\n  height: 100px;\n",
  h1: "  width: 100px;\n  height: 100px;\n",
  p: "  width: 100px;\n  height: 100px;\n",
};

  const getElementsCode = (allArr) => {
    allArr.forEach(arr => { // for each array
      arr.forEach(el => { // for each element in array

        // from string "translate(551px, 111px)" get numbers and "px"
        const coordinates = (el.ref.current.style.transform)
                            .match(/translate\(([^,]+), ([^)]+)\)/);

        if ( // if text element

          el.type.substr(0, (el.type).length - 1) === "h"
          ||
          el.type === "p"

        ) {
          // make and add class block //
          headPart = headPart + 
`.def-and-pos-${el.type}${el.index} {
  position: absolute;
  left: ${coordinates[1]};
  top: ${+coordinates[2]
        .substr(0, coordinates[2].length - 2) - 20}px;
${defStyles[el.type]}}\n`;

        } else { // if not text element
          // make and add class block //
          headPart = headPart + 
`.def-and-pos-${el.type}${el.index} {
  position: absolute;
  left: ${coordinates[1]};
  top: ${coordinates[2]};
${defStyles[el.type]}}\n`;
        }

        if (el.class) { // if there is a class
          if (el.value) { // if have children

            // make and add element //
            app = app + 
            `  <${el.type
            } class="${el.class
                   } def-and-pos-${el.type}${el.index
            }">${
                el.value
            }</${el.type}>\n`;

          } else { // if don't have children

            app = app + `  <${el.type
            } class="${el.class
                   } def-and-pos-${el.type}${el.index}"></${el.type}>\n`;

          }

        } else { // if there is no class
          if (el.value) { // if have children

            app = app + `  <${el.type
            } class="def-and-pos-${el.type}${el.index
            }">${
              el.value
            }</${el.type}>\n`;

          } else { // if don't have children
            app = app + `  <${el.type
            } class="def-and-pos-${el.type}${el.index
            }"></${el.type}>\n`;
          }

        }
      });
    })
  }

  getElementsCode(allArr);

  // get custom classes //
  classArr.forEach(classObject => {

    let classOb = {...classObject}; // copy
    // get class name and make: ".class__name {"
    let classBlock = `.${classOb.className} {\n`;

    delete classOb.className; // only styles stayed

    classBlock = classBlock + 
      Object
      .entries(classOb)
      .map(([property, value]) => `  ${property}: ${value};\n`)
      .join(''); // converts a style objects to a strings

    classBlock = classBlock + "}\n";
    headPart = headPart + classBlock; // add class block
  })

  return fpCode + headPart + spCode + app + lpCode
}