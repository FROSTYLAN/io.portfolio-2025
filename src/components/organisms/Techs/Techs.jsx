import styled from 'styled-components';
import { Typography, Container, TechIcon, JavaScriptIcon, ReactIcon, VueIcon, TailwindIcon, BootstrapIcon, SassIcon, DatabaseIcon, FlutterIcon } from '../../atoms';

const TechSectionWrapper = styled.section`
  padding: 80px 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const TechContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 24px;
  margin-top: 48px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 32px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;

const TechItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const TechLabel = styled.div`
  font-size: 0.875rem;
  color: #cccccc;
  font-weight: 500;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  
  ${TechItemWrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    opacity: 1;
    transform: translateY(0);
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
  background: ${props => props.bg || 'rgba(0, 255, 136, 0.1)'};
  border-radius: ${props => props.rounded ? '50%' : '20px'};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  animation: floatSlow 6s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0.3;
  
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '60px'};
    height: ${props => props.mobileSize || '60px'};
  }
`;

const technologies = [
  { icon: JavaScriptIcon, name: 'JavaScript', color: '#F7DF1E' },
  { icon: ReactIcon, name: 'React', color: '#61DAFB' },
  { icon: VueIcon, name: 'Vue.js', color: '#4FC08D' },
  { icon: TailwindIcon, name: 'Tailwind', color: '#06B6D4' },
  { icon: BootstrapIcon, name: 'Bootstrap', color: '#7952B3' },
  { icon: SassIcon, name: 'Sass', color: '#CC6699' },
  { icon: DatabaseIcon, name: 'Database', color: '#336791' },
  { icon: FlutterIcon, name: 'Flutter', color: '#02569B' }
];

const Techs = () => {
  return (
    <TechSectionWrapper>
      <Container>
        <TechContent>
          <Typography 
            variant="h2" 
            color="#ffffff" 
            align="center"
            margin="0 0 16px 0"
          >
            Tecnologías que domino
          </Typography>
          
          <Typography 
            variant="subtitle" 
            color="#cccccc" 
            align="center"
            margin="0 auto"
            style={{ maxWidth: '600px' }}
          >
            Herramientas y frameworks que utilizo para crear experiencias web excepcionales
          </Typography>
          
          <TechGrid>
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <TechItemWrapper key={tech.name}>
                  <TechIcon 
                    size="80px" 
                    mobileSize="60px"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <IconComponent />
                  </TechIcon>
                  <TechLabel>{tech.name}</TechLabel>
                </TechItemWrapper>
              );
            })}
          </TechGrid>
        </TechContent>
      </Container>
      
      {/* Floating Shapes */}
      <FloatingShape 
        top="10%" 
        left="5%" 
        size="120px"
        mobileSize="80px"
        rounded
        delay="0s"
        bg="rgba(0, 255, 136, 0.05)"
      />
      
      <FloatingShape 
        bottom="15%" 
        right="8%" 
        size="80px"
        mobileSize="50px"
        delay="2s"
        bg="rgba(0, 255, 136, 0.08)"
      />
      
      <FloatingShape 
        top="60%" 
        left="10%" 
        size="60px"
        mobileSize="40px"
        rounded
        delay="4s"
        bg="rgba(0, 255, 136, 0.06)"
      />
    </TechSectionWrapper>
  );
};

export default Techs;