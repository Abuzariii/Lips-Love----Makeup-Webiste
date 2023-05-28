import classes from "./Body.module.css";
import Menu from "../Menu/Menu";
import icon from "../../images/icon.svg";

export default function Body() {
  return (
    <div className={classes.Body}>
      <Menu />
      <div className={classes.container}>
        <div className={classes.banner}>
          <div>
            <h1>Abuzar</h1>
            <img src={icon} alt="Logo" />
            <div className={classes.shop}>
              <a href="nthng">Shop</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
