import classes from "./left.module.css";
import {
  BiHeart,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoFacebook,
} from "react-icons/bi";
import { poiret, roboto400 } from "../utils/fonts";

export default function Left() {
  return (
    <div className={classes.left}>
      <div className={classes.central}>
        <div className={classes.lipslove}>
          <BiHeart size={40} className={classes.heart} />
          <h1 className={poiret.className}>LIPS</h1>
          <h1 className={poiret.className}>LOVE</h1>
          <p className={roboto400.className}>
            We deal in all kinds of makeups, skincare and beauty products. A
            home for 50+ brands and hundreds of products
          </p>
        </div>
        <div className={classes.logos}>
          <BiLogoLinkedin size={40} />
          <BiLogoTwitter size={40} />
          <BiLogoFacebook size={40} />
        </div>
      </div>
    </div>
  );
}
