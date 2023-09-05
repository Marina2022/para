import s from './About.module.scss';
import aboutImg from '../../../../assets/about/about-image.png'
import cn from "classnames";

const About = () => {
  return (
    <div className={s.about} id='about'>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.imgWrapper}>
            <img src={aboutImg} alt="about"/>
          </div>
          <div className={s.content}>
            <h2 className={s.title}>ABOUT US</h2>
            <p className={cn(s.text, s.firstPar)}>
              We work in <span className={s.coloredText}>IT sphere</span>, specializing in building fault-tolerant architecture of our clients' corporate network. We provide unique cases that include many years of our experience. As an example I will briefly tell you about our famous <span className={s.coloredText}>"SOHO" architecture</span> (Small office Home office) thanks to which our clients work in their private virtual network and are independent from cloud providers. Their corporate data is always under their control, systematized and reliably protected. In addition the traffic in the virtual private network is encrypted which gives exceptional fault tolerance and reliability, protects the private network from the threat of intrusion, prevents the threat of traffic interception and of malware infection. <span className={s.coloredText}>The SOHO role model</span> and access rights differentiation protects the virtual private network from within.
            </p>

            <p className={s.text}>
              We are constantly developing and improving our technologies and approach to solving individual tasks of our clients. Automation of routine processes and freeing up time to solve routine tasks gives growth to any business direction because time is money. Competent utilization of resources and server capacity allows you to reduce costs and financial burden on the maintenance of equipment and network, saved - means earned. We call it savings without loss of quality. Tell us why to maintain a server that is used <span className={s.coloredText}>only 20%</span>? - Right, there is no reason and our audit will help to identify such cases of irrational use of resources and offer the most optimal solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
