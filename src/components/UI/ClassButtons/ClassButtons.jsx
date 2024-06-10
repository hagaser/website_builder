import React from "react";
import classes from "./ClassButtons.module.css"
import MyButton from "../MyButton/MyButton";

const ClassButtons = ({
  // set //
  setDisplayMethod,
  setChosenClass,
  setClassArr,
  setDeletedClass,

  // other //
  chosenClass,
  saveClass,
  classArr,
}) => {

  // deletes a class or sets the chosenClass //
  const Click = (index, name) => {
    if (chosenClass === "delete class in panel") {
      const intermediateArr = [...classArr];
      setDeletedClass(intermediateArr[index].className);
      intermediateArr.splice(index, 1);
      setClassArr(intermediateArr);
    } else {
      if (chosenClass === name) {
        setChosenClass("");
      } else {
        setChosenClass(name);
      }
    }
  }

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

        {chosenClass === "delete class in panel"
          ?
          <MyButton
            onClick={() => setChosenClass("")} className={classes.chosen__btn}
          >
            delete class in panel
          </MyButton>
          : 
          <MyButton
            onClick={() => setChosenClass("delete class in panel")}
          >
            delete class in panel
          </MyButton>
        }

        <h4 className={classes.classes}>classes:</h4>

        {chosenClass === "delete class"
          ?
          <MyButton
            onClick={() => setChosenClass("")} className={classes.chosen__btn}
          >
            delete class
          </MyButton>
          : 
          <MyButton
            onClick={() => setChosenClass("delete class")}
          >
            delete class
          </MyButton>
        }

        {/* for each class create the button */}
        {classArr.map((btn, index) => (
          btn.className === chosenClass ? (
            <button key={btn.className} onClick={() => Click(index, btn.className)} className={classes.chosen__btn}>
              {btn.className}
            </button>
          ) : (
            <MyButton key={btn.className} onClick={() => Click(index, btn.className)}>
              {btn.className}
            </MyButton>
          ))
        )}
      </div>

    </div>
  );
};

export default ClassButtons