import classes from "./Body.module.sass";
import Menu from "../Menu/Menu";
import icon from "../../images/icon.svg";

export default function Body() {
  return (
    <div className={classes.Body}>
      <Menu />
      <div className={classes.container}>
        <div className={classes.banner}>
          <div>
            <div className={classes.off}>
              <div className={classes.percent}>
                <h3>-10%</h3>
              </div>
              <div className={classes.business}>
                <h6>Business in Pakistan is 800 thousand</h6>
              </div>
            </div>
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
