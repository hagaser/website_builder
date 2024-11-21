import React, { useEffect } from "react";
import classes from "./WorkingField.module.css";
import Draggable from "react-draggable";
import { getMoreElementData } from "../../../utils/getMoreElementData";

const WorkingField = ({

  chosenClassOrAction, classArr, deletedClass,
  elements, dispatchElements,

}) => {

  // applies styles and adds classes //
  const changeEl = (index) => {
    switch (chosenClassOrAction) {
      case "": return

      case "delete element":
        dispatchElements({
          type: "DELETE_ELEMENT",
          data: index
        });
        break

      case "delete class":
        dispatchElements({
          type: "DELETE_CLASS",
          data: index
        });
        break
      
      default: // add class
        const classStyles = // get class by name chosenClassOrAction
        {...classArr.find(item => item.className === chosenClassOrAction)};
        delete classStyles.className; // only styles stayed

        dispatchElements({
          type: "ADD_CLASS",
          data: {index: index, style: classStyles, class: chosenClassOrAction}
        });

        break
    }
  }


  // if class deleted in general //
  useEffect(() => {
    dispatchElements({
      type: "DELETED_CLASS",
      data: deletedClass
    });
  },[deletedClass]);
  

  return (
    <div className={classes.work__field}>

      {elements.map((el, i) =>{
        if (el.deleted) return null;

        const [elClasses, CustomTag, dynamicProps] = 
        getMoreElementData(el.type, el.element, el.value, i, classes, dispatchElements);

        return(
          <Draggable
              defaultPosition={{x: 500, y: 0}}
              bounds={{left: 0, top: 0}}
              key={i}
          >
            <CustomTag
              className={elClasses}
              style={el.style}
              ref={el.ref}
              onClick={() => changeEl(i, elements, dispatchElements)}
              {...dynamicProps}
            >
            </CustomTag>
          </Draggable>
        )
      })}
      
    </div>
  );
};

export default WorkingField;