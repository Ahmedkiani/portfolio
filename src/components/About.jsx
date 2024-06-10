import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
       My name is Muhammad Ahmed, a highly skilled and dedicated MERN Stack developer with a profound passion for web development. My professional journey has afforded me the opportunity to work on a diverse array of projects, where I have refined my expertise and gained invaluable experience. I take immense pride in my accomplishments in crafting robust, user-centric applications utilizing Node.js and various front-end frameworks.
       <br className="sm:block hidden" /> What distinguishes me in the field is my unwavering commitment to delivering high-quality code and creating seamless user experiences. My meticulous approach to development ensures that every line of code is optimized for both performance and maintainability. I am deeply committed to staying abreast of the latest industry trends and best practices, continuously expanding my knowledge and skillset. This dedication enables me to leverage cutting-edge technologies, delivering innovative solutions that cater to the evolving needs of modern users.
       <br className="sm:block hidden" />I am also a fervent advocate of collaboration and teamwork, thriving in dynamic environments where I can work alongside talented professionals. By fostering effective communication and idea exchange, I believe we can collectively tackle complex challenges and achieve exceptional results.






.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
