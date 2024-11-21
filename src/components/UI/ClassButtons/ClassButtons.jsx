import React, { memo } from "react";
import classes from "./ClassButtons.module.css";
import MyButton from "../MyButton/MyButton";

const ClassButtons = memo(({

  setChosenClassOrAction, chosenClassOrAction,
  setClassArr, classArr,

  saveClass,
  setDisplayMethod,
  setDeletedClass

}) => {

  // deletes a class or sets in the chosenClassOrAction //
  const customClassClick = (index, name) => {

    // if not chosen delete class completely mode
    if (chosenClassOrAction !== "delete class in panel") {
      // do nothing or set chosen class
      setChosenClassOrAction(chosenClassOrAction === name ? "" : name); 

    } else {
      // set class to delete for elements
      setDeletedClass(classArr[index].className);
      // delete class
      setClassArr([...classArr.slice(0, index), ...classArr.slice(index + 1)]);
    }
  }

  return (
    <div className={classes.button__panel}>

      {/* button that's returns to ButtonPanel */}
      <div className={classes.button__div}>
        <MyButton
          onClick={() => {setChosenClassOrAction(""); setDisplayMethod("buttons")}}
        >
          go to buttons
        </MyButton>
      </div>


      {/* right button panel */}
      <div className={classes.button__div + " " + classes.right__btn__panel}>

        {/* save class button */}
        <MyButton
          onClick={() => saveClass()}
        >
          save class
        </MyButton>


        {/* delete class completely button */}
          <MyButton
            {...(chosenClassOrAction === "delete class in panel"
              ? {className: classes.chosen__btn,
               onClick: () => setChosenClassOrAction("")}

              : {onClick: () => setChosenClassOrAction("delete class in panel")})
            }
          >
            delete class in panel
          </MyButton>


        <h4 className={classes.classes}>classes:</h4>

        {/* delete class in element button */}
          <MyButton
            {...(chosenClassOrAction === "delete class"
              ? {className: classes.chosen__btn,
               onClick: () => setChosenClassOrAction("")}

              : {onClick: () => setChosenClassOrAction("delete class")})
            }
          >
            delete class
          </MyButton>

        
        {/* for each class create the button */}
        {classArr.map((btn, index) => (
          // if class chosen
            <MyButton 
              key={btn.className}
              onClick={() => customClassClick(index, btn.className)}

              {...(btn.className === chosenClassOrAction 
                ? {className: classes.chosen__btn} 
                : {})
              }
              
            >
              {btn.className}
            </MyButton>
        )
        )}
      </div>

    </div>
  );
});

export default ClassButtons