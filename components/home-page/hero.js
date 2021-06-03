import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
          alt="Binh's logo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Binh</h1>
      <p>This is my blog</p>
    </section>
  );
}

export default Hero;
