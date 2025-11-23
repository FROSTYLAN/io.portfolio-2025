import styled from 'styled-components';
import { Container, Divider, TechIcon, HtmlIcon, CssIcon, JavaScriptIcon, TypeScriptIcon, NodeJsIcon, TailwindIcon, BootstrapIcon, SassIcon, DatabaseIcon, ReactIcon, FlutterIcon, VueIcon, SwaggerIcon, VscodeIcon, DockerIcon, GitIcon } from '../../atoms';

const TechSectionWrapper = styled.section`
  background: #000000;
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
`;

const TechContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const CarouselViewport = styled.div`
  overflow: hidden;
  width: 100vw;
  margin-top: 48px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const CarouselTrack = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 48px;
  white-space: nowrap;
  will-change: transform;
  animation: scroll 24s linear infinite;


  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @media (max-width: 768px) {
    gap: 32px;
    animation-duration: 30s;
  }
  
  @media (max-width: 480px) {
    gap: 24px;
    animation-duration: 35s;
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
  
  padding: 20px 0 40px 0;
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
  opacity: ${props => props.opacity || '0.1'};
  
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
  { icon: HtmlIcon, name: 'HTML' },
  { icon: CssIcon, name: 'CSS' },
  { icon: JavaScriptIcon, name: 'JavaScript' },
  { icon: TypeScriptIcon, name: 'TypeScript' },
  { icon: NodeJsIcon, name: 'Node.js' },
  { icon: TailwindIcon, name: 'Tailwind' },
  { icon: BootstrapIcon, name: 'Bootstrap' },
  { icon: SassIcon, name: 'Sass' },
  { icon: DatabaseIcon, name: 'Database' },
  { icon: ReactIcon, name: 'React' },
  { icon: FlutterIcon, name: 'Flutter' },
  { icon: VueIcon, name: 'Vue.js' },
  { icon: SwaggerIcon, name: 'Swagger' },
  { icon: VscodeIcon, name: 'VS Code' },
  { icon: DockerIcon, name: 'Docker' },
  { icon: GitIcon, name: 'Git' }
];

const doubledTechnologies = [...technologies, ...technologies];

const Techs = () => {
  return (
    <TechSectionWrapper>
      <Divider direction='left'/>
      <Container padding="0">
        <TechContent>
          <CarouselViewport>
            <CarouselTrack>
              {doubledTechnologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                <TechItemWrapper key={`${tech.name}-${index}`}>
                  <TechIcon 
                    size="100px" 
                    mobileSize="80px"
                    iconSize="80px"
                    mobileIconSize="60px"
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
            </CarouselTrack>
          </CarouselViewport>
        </TechContent>
      </Container>
      <Divider direction='right'/>
      <FloatingShape
        top="10%"
        left="5%"
        size="120px"
        mobileSize="80px"
        rounded
        delay="0s"
        bg="rgba(185, 255, 102, 0.8)"
      />

      <FloatingShape 
        bottom="15%" 
        right="8%" 
        size="80px"
        mobileSize="50px"
        delay="2s"
        bg="rgba(185, 255, 102, 0.7)"
      />

      <FloatingShape 
        top="60%" 
        left="10%" 
        size="60px"
        mobileSize="40px"
        rounded
        delay="4s"
        bg="rgba(185, 255, 102, 0.75)"
      />
    </TechSectionWrapper>
  );
};

export default Techs;