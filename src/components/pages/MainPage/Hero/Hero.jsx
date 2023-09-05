import s from './Hero.module.scss';
import heroImage from '../../../../assets/hero/hero-iimage.png'
import Button from "../../../sharedComponents/Button/Button";
import Socials from "../../../sharedComponents/Socials/Socials";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className="container hero">
        <div className={s.wrapper}>
          <div className={s.content}>
            <h1 className={s.title}>IT solutions for&nbsp;your business</h1>
            <p className={s.text}>
              <span className={s.coloredText}>«Office abroad»</span> - a comprehensive service for organizing the company's server abroad and the ability to set up a remote desktop service for each employee. You're getting company's server abroad and the ability to customize remote desktop service for each employee. We will provide an encrypted connection to the server. Thus your traffic will be reliably protected from external threats aimed at traffic interception. Of course the services can be combined with 1C located abroad for example to create an architecture of secure virtual office.
            </p>
            <Button text={"Order service"}></Button>

          </div>
          <div>
            <div className={s.imgWrapper}>
              <img className={s.image} src={heroImage} alt=""/>
            </div>
            <Socials classname={s.socials}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
