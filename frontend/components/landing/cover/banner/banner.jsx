import { Poiret_One, Roboto } from "@next/font/google";
const poiret = Poiret_One({
  weight: "400",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

import classes from "./banner.module.css";
import Rotate from "../../../../public/Rotate.svg";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.lipslove}>
        <div>
          <h1 className={poiret.className}>LIPS</h1>
          <h1 className={poiret.className}>LOVE</h1>
          <div className={classes.line}></div>
        </div>
        <p className={roboto.className}>
          Business in Pakistan is growing rapidly with a profit of 800 thousand
        </p>
      </div>

      <div className={classes.lips}>
        <Image src={Rotate} alt={"xyz"} className={classes.rotate}></Image>
      </div>
    </div>
  );
}
