import classes from "./title.module.css";
import { cinzel } from "../utils/fonts";

export default function Title({ brand }) {
  return (
    <h1 className={`${cinzel.className} ${classes.h1}`}>
      {brand.toUpperCase()}
    </h1>
  );
}
