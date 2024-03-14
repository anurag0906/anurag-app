import { TypeAnimation } from 'react-type-animation';


const AboutMeAnimation = () => {
  return (<div>
    <TypeAnimation
      sequence={[
        'I am Anurag Shagun. I am a Programmer ',
        1000,
        'I am Anurag Shagun. I am a Designer',
        1000,
        'I am Anurag Shagun. I am a Solution Architect',
        1000,
        'I am Anurag Shagun. I am an IT Professional !!!',
        1000,
      ]}
      speed={50}
      style={{ fontSize: '3em' }}
      repeat={Infinity}
    />
  </div>
  );
};

export default AboutMeAnimation;