import React from "react";
import classes from "./WorkingField.module.css"
import Draggable from "react-draggable";

const WorkingField = ({ divArr }) => {

  return (
    <div className={classes.work__field}>
      {divArr.map(div =>
        <Draggable
            defaultPosition={{x: 500, y: 0}}
            bounds={{left: 0, top: 0}}
        >
          <div className={classes.draggable__div} key={div}>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default WorkingField