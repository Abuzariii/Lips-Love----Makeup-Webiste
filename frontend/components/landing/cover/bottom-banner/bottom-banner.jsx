import { Playfair_Display, Roboto } from "@next/font/google";

const pfrDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

import classes from "./bottom-banner.module.css";

export default function BottomBanner() {
  return (
    <div className={classes.btmBanner}>
      <div className={classes.shopLipsticks}>
        <h1 className={pfrDisplay.className}>
          Shop our best class selection of lipsticks includes matte shades from
          top makeup brand
        </h1>
      </div>
      <div className={classes.lipsticks}>
        <div className={classes.tsp}>
          <p className={roboto.className}>TEEN SPIRIT</p>
        </div>
        <div className={classes.crm}>
          <p className={roboto.className}>CORAL MIDSUMMER</p>
        </div>
        <div className={classes.wrm}>
          <p className={roboto.className}>WARM ROMANCE</p>
        </div>
      </div>
    </div>
  );
}
