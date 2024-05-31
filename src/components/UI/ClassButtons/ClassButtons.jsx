import React from "react";
import classes from "./ClassButtons.module.css"
import MyButton from "../MyButton/MyButton";

const ClassButtons = ({ setDisplayMethod, saveClass, classArr, chosenClass, setChosenClass }) => {
  return (
    <div className={classes.button__panel}>

      {/* just one button that's returns to ButtonPanel */}
      <div className={classes.button__div}>
        <MyButton
          onClick={() => setDisplayMethod("buttons")}
        >
          go to buttons
        </MyButton>
      </div>

      {/* right button panel */}
      <div className={classes.button__div + " " + classes.right__btn__panel}>

        <MyButton
          onClick={() => saveClass()}
        >
          save class
        </MyButton>

        <h4 className={classes.classes}>classes:</h4>

        {/* for each class create the button */}
        {classArr.map(btn => (
          btn.className === chosenClass ? (
            <button key={btn.className} onClick={() => setChosenClass(btn.className)} className={classes.chosen__btn}>
              {btn.className}
            </button>
          ) : (
            <MyButton key={btn.className} onClick={() => setChosenClass(btn.className)}>
              {btn.className}
            </MyButton>
          ))
        )}
      </div>

    </div>
  );
};

export default ClassButtons