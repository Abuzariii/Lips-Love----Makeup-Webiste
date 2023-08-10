"use client";

import classes from "./contact.module.css";
import Link from "next/link";
import { gruppo, abel } from "../utils/fonts";
import Footer from "../landing/footer/footer";
import { BsLink45Deg } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <div className={classes.contact}>
        <div className={classes.c}>
          <h2 className={abel.className}>Data Source :</h2>
          <h3 className={gruppo.className}>
            <BsLink45Deg />
            <Link
              className="link"
              target="_blank"
              href={"https://makeup-api.herokuapp.com/"}
            >
              Makeup API Heroku
            </Link>
          </h3>
        </div>

        <div className={classes.c}>
          <h2 className={abel.className}>Design Inspirations : </h2>
          <h3 className={gruppo.className}>
            <BsLink45Deg />
            <Link
              className="link"
              target="_blank"
              href={"https://lips-love.webflow.io/"}
            >
              Lips Love
            </Link>
          </h3>
          <h3 className={gruppo.className}>
            <BsLink45Deg />
            <Link
              className="link"
              target="_blank"
              href={"https://emily-template.webflow.io"}
            >
              Emily
            </Link>
          </h3>
        </div>

        <div className={classes.c}>
          <h2 className={abel.className}>Source Code :</h2>
          <h3 className={gruppo.className}>
            <BsLink45Deg />
            <Link
              className="link"
              target="_blank"
              href={"https://github.com/Abuzariii/Lips-Love----Makeup-Webiste"}
            >
              GitHub Repo
            </Link>
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
