import { poiret, roboto300 } from "@/components/utils/fonts";
import classes from "./lipsticks.module.css";

export default function Lipsticks() {
  return (
    <div className={classes.lipsticks}>
      <div className={classes.upper}>
        <div className={classes.play_create}>
          <h1 className={poiret.className}>
            PLAY & CREATE BEAUTY ON YOUR LIPS{" "}
          </h1>
        </div>
        <div className={classes.formulas}>
          <p className={roboto300.className}>
            Our formulas are designed with ingredients to ensure the right
            balance between efficiency, safety and responsibility, producing
            formulations.
          </p>
        </div>
      </div>
      <div className={classes.lower}>
        <div className={classes.lipsticks_slider}>
          <div className={classes.deep_fuchsia}>
            <div>
              <div className={classes.desc}>
                <div className={classes.deepClr}></div>
                <p className={roboto300.className}>$27</p>
              </div>
              <p className={roboto300.className}>DEEP FUCHSIA</p>
            </div>
          </div>
          <div className={classes.golden_holiday}>
            <div>
              <div className={classes.desc}>
                <div className={classes.gldClr}></div>
                <p className={roboto300.className}>$20</p>
              </div>
              <p className={roboto300.className}>GOLDEN HOLIDAY</p>
            </div>
          </div>

          <div className={classes.wine_red}>
            <div>
              <div className={classes.desc}>
                <div className={classes.wineClr}></div>
                <p className={roboto300.className}>$30</p>
              </div>
              <p className={roboto300.className}>WINE RED</p>
            </div>
          </div>
          <div className={classes.queen_rose}>
            <div>
              <div className={classes.desc}>
                <div className={classes.queenClr}></div>
                <p className={roboto300.className}>$24</p>
              </div>
              <p className={roboto300.className}>QUEEN ROSE</p>
            </div>
          </div>
          <div className={classes.candy_kiss}>
            <div>
              <div className={classes.desc}>
                <div className={classes.kissClr}></div>
                <p className={roboto300.className}>$32</p>
              </div>
              <p className={roboto300.className}>CANDY KISS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
