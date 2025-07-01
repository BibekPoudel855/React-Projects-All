import css from "./../css/MainHeading.module.css";

function MainHeading(props) {
  return (
    <div>
      <h1 className={css["main-heading"]}>{props.title}</h1>
      <p className={css.headingMessage}>Keep track of your tasks efficiently</p>
    </div>
  );
}

export default MainHeading;
