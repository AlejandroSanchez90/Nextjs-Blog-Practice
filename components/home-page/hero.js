import classes from './hero.module.css';
import Image from 'next/image';
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/alejandro.jpg'
          alt='Imagen showing alejandro'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, im Alejandro</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
