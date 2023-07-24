import classes from "./cover.module.css";
import Navbar from "./navbar/navbar";

export default function Cover() {
  return (
    <div className={classes.cover}>
      <Navbar />
      {/* <div className={classes.menu}></div> */}
    </div>
  );
}
