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
        <img src={greenGradient} alt="Green Gradient" loading="lazy" decoding="async" />
      </div>
      <div className='hero__atom'>
        <img src={atom} alt="Atom 3D" loading="lazy" decoding="async" />
      </div>
      <div className='hero__charles'>
        <img src={charles3d} alt="Charles 3D" loading="eager" decoding="async" fetchpriority="high" />
      </div>
      <div className='hero__in-icon'>
        <a
          href="https://www.linkedin.com/in/charles-castillo-772968234"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Charles Castillo"
        >
          <img src={linkedin} alt="LinkedIn" loading="lazy" decoding="async" />
        </a>
      </div>
      <div className='hero__gh-icon'>
        <a
          href="https://github.com/FROSTYLAN"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mi perfil de GitHub"
        >
          <img src={github} alt="GitHub" loading="lazy" decoding="async" />
        </a>
      </div>
      <div className='hero__atom-2'>
        <img src={atom3d} alt="Atom 3D" loading="lazy" decoding="async" />
      </div>
      <div className='hero__atom-3'>
        <img src={atom3d} alt="Atom 3D" loading="lazy" decoding="async" />
      </div>
      <div className='hero__content'>
        {children}
      </div>
    </div>
  );
};

export default Hero;
