import './style.css';
import greenGradient from '../../../assets/green-gradient.png';
import charles3d from '../../../assets/charles-3d.png';
import linkedin from '../../../assets/LinkedIn.svg';
import github from '../../../assets/GitHub.svg';
import atom3d from '../../../assets/atom-3d.svg';
import atom from '../../../assets/atom.svg';

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <div className='hero__green-gradient'>
        <img src={greenGradient} alt="Green Gradient" />
      </div>
      <div className='hero__atom'>
        <img src={atom} alt="Atom 3D" />
      </div>
      <div className='hero__charles'>
        <img src={charles3d} alt="Charles 3D" />
      </div>
      <div className='hero__in-icon'>
        <img src={linkedin} alt="LinkedIn" />
      </div>
      <div className='hero__gh-icon'>
        <img src={github} alt="GitHub" />
      </div>
      <div className='hero__atom-2'>
        <img src={atom3d} alt="Atom 3D" />
      </div>
      <div className='hero__atom-3'>
        <img src={atom3d} alt="Atom 3D" />
      </div>
      <div className='hero__content'>
        {children}
      </div>
    </div>
  );
};

export default Hero;