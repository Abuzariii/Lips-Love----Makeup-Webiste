import { BiLogoGithub, BiLogoLinkedin, BiLogoMedium } from "react-icons/bi";
import { SiHashnode } from "react-icons/si";
import Footer from "../landing/footer/footer";
import { poiret, roboto300 } from "../utils/fonts";
import classes from "./about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.content}>
        <h1 className={poiret.className}>About Lips Love</h1>
        <p className={roboto300.className}>
          Lips Love is a full stack, e-commerce website where you can buy makeup
          products ranging from lipsticks to foundations, mascaras, nail
          polishes, bronzers, blushes, lip liners and much much more. We serve
          over 50 globally acknowledged makeup and beauty products brands
          including Maybelline, Alva, Annabelle, Butter London, China Glaze,
          Colourpop, Dior, L'Oreal Paris and more. You can signup as a user,
          browse products from different categories like brands and product
          types, add these products to your cart, proceed to checkout where you
          can add your delivery details and finally place the order.
        </p>
        <p className={roboto300.className}>
          The data source is a makeup api hosted on Heroku, I downloaded that
          entire data into a json file and added it to my MongoDB database. It
          consists of 1048 products of multiple brands, categories and product
          types. Every product consists of id, image link, product link, color
          values, brand, category, price and currency. The schema is designed
          using Mongoose package. The link to the original API is provided in
          the decription of the code repository on my GitHub. Data is open
          source so there are no licensing issues.
        </p>
        <p className={roboto300.className}>
          Entire website is built using The MERN Stack in JavaScript ecosystem.
          Frontend is built using Nextjs 13 which is a React framework for
          production ready web applications. It is a feature-rich framework
          which comes with extra functionalitites built on top of standard React
          like file based routing, server side rendering, built in optimization
          for static content and much much more. I used the new App Router which
          was introduced in Nextjs13 instead of the older Pages router. Backend
          was built using Express which is a backend web framework for Nodejs.
          Some of the key helper libraries used on the backend and frontend are
          jsonwebtoken, nodemon, framer motion, react-icons, react-hambuger etc.
        </p>
      </div>
      <div className={classes.content}>
        <h1 className={poiret.className}>About The Creator, Muhammad Abuzar</h1>
        <p className={roboto300.className}>
          I am the sole developer of this project, a graduating Software
          Engineer with a knack for web development and Data sciences. I have
          been working on web and data sciences since August 2021, my main focus
          initially was Deep Learning with Tensorflow but recently I took a
          break from that and put my entire focus on learning web and doing DSA.
          I can code proficiently in languages like Java, Python, JavaScript and
          C++. My stack on the data side includes Tensorflow, Python, Power BI,
          Pandas, Matplotlib etc. On the web side I have a strong grip on
          Reactjs, Nodejs, Express, Nextjs and other libraries and frameworks in
          JavaScript ecosystem. I am quite comfortable in working with both
          relational and non-relational databases. Have built projects with
          Microsoft SQL Server Management Studio, Postgres SQL and MongoDB. I
          can also build ETL pipelines on GCP and Azure having previously worked
          on Data Engineering with Azure Databricks. You can connect with me on
          my socials below :
        </p>
        <div className={classes.socials}>
          <Link
            className="link"
            href={"https://www.linkedin.com/in/abuzariii"}
            target="_blank"
          >
            <BiLogoLinkedin size={30} />
          </Link>

          <Link
            className="link"
            href={"https://medium.com/@Abuzariii"}
            target="_blank"
          >
            <BiLogoMedium size={30} />
          </Link>

          <Link
            className="link"
            href={"https://github.com/Abuzariii"}
            target="_blank"
          >
            <BiLogoGithub size={30} />
          </Link>

          <Link
            className="link"
            href={"https://abuzar.hashnode.dev/"}
            target="_blank"
          >
            <SiHashnode size={30} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
