import css from "../css/Buttons.module.css";
function Buttons({ handleButtonClick }) {
  let buttonNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    "C",
    "X",
    ".",
  ];
  return (
    <div className={css.buttonContainer}>
      {buttonNames.map((item, index) => {
        return (
          <button key={index} className={item} onClick={handleButtonClick}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
export default Buttons;
