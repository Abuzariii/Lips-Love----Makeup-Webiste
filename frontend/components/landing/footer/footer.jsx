import { poiret, fjallaOne, roboto300 } from "@/components/utils/fonts";
import classes from "./footer.module.css";
import { BiLogoLinkedin, BiLogoTwitter, BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.upperDiv}>
        <div className={classes.lipslove}>
          <h1 className={poiret.className}>LIPS LOVE</h1>
          <p className={roboto300.className}>
            Lips Love is a beautiful and modern website designed for beauty
            products. Featuring an elegant, minimalistic design, this webiste
            uses a Nodejs/Express backend, Nextjs 13 frontend and a MongoDB
            database to serve beauty products like a real e-commerce store. It
            comes with stuff like user authentication, authorization, profile
            management etc.
          </p>
        </div>
        <div className={classes.links}>
          <div className={classes.pages}>
            <h3 className={roboto300.className}>Pages</h3>
            <p className={roboto300.className}>
              <Link className="link" href={"/"}>
                Home
              </Link>
            </p>
            <p className={roboto300.className}>
              <Link className="link" href={"/about"}>
                About
              </Link>
            </p>
            <p className={roboto300.className}>
              <Link className="link" href={"/shop"}>
                Shop
              </Link>
            </p>
            <p className={roboto300.className}>
              <Link className="link" href={"/blog"}>
                Blog
              </Link>
            </p>
            <p className={roboto300.className}>
              <Link className="link" href={"/contact"}>
                Contact
              </Link>
            </p>
          </div>
          <div className={classes.contacts}>
            <h3 className={roboto300.className}>Contacts</h3>
            <p className={roboto300.className}>hello@emily.com</p>
            <p className={roboto300.className}>+1 (234) 555 - 5555</p>
            <div>
              <BiLogoLinkedin size={30} />
              <BiLogoTwitter size={30} />
              <BiLogoFacebook size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.lowerDiv}>
        <div>
          <p className={roboto300.className}>Powered by</p>
          <a className={fjallaOne.className}>Emilia Brewster</a>
        </div>
        <div>
          <p className={roboto300.className}>Made by</p>
          <a
            href={"https://github.com/Abuzariii"}
            className={fjallaOne.className}
            target="_blank"
          >
            Abuzar
          </a>
        </div>
      </div>
    </footer>
  );
}
