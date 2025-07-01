import css from "../css/Input.module.css";
function Input({ displayValue }) {
  return (
    <div className={css.inputContainer}>
      <input type="text" readOnly value={displayValue} />
    </div>
  );
}
export default Input;
