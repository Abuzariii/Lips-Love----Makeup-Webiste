import classes from "./navbar.module.css";
import Image from "next/image";
import EmiliaBrewster from "../../../../public/EmiliaBrewster.svg";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <h1>-10%</h1>
      <Image src={EmiliaBrewster} alt={""} height={60} />
      <div>SHOP</div>
    </div>
  );
}
