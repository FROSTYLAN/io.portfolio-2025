import styled from 'styled-components';
import { Typography, Container, Divider } from '../../atoms';

const AboutSectionWrapper = styled.section`
  padding: 80px 0;  background: transparent;
  position: relative;
  overflow: hidden;
  z-index: 9999;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, rgba(0, 255, 136, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(0, 255, 136, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const AboutContent = styled.div`
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const SectionIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(185, 255, 102, 1);
  border-radius: 50%;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

const Panel = styled.div`
  border-radius: 24px;
  border: 1px solid #3C4434;
  background: linear-gradient(103deg, #0F1408 16.66%, rgba(23, 32, 9, 0.27) 81.61%);
  backdrop-filter: blur(8px);
  padding: 32px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
`;

const ColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ColumnItem = styled.div`
  padding: 0 28px;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.08));
    opacity: 0.6;
  }
  
  @media (max-width: 968px) {
    padding: 0;
    
    &:not(:last-child)::after {
      display: none;
    }
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size || '120px'};
  height: ${props => props.size || '120px'};
  background: ${props => props.bg || 'rgba(0, 255, 136, 0.03)'};
  border-radius: ${props => props.rounded ? '50%' : '24px'};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  animation: floatGentle 8s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0.4;
  
  @keyframes floatGentle {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(180deg); }
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '80px'};
    height: ${props => props.mobileSize || '80px'};
  }
`;

const aboutData = [
  {
    title: "¿Quién soy?",
    content: "Apasionado por el mundo digital, con experiencia en aplicaciones del lado del cliente y del servidor. Me encanta aprender nuevas tecnologías, trabajar en equipo y transformar ideas en soluciones atractivas y funcionales para el usuario."
  },
  {
    title: "Mi objetivo",
    content: "Quiero seguir creciendo como profesional, asumiendo proyectos que me reten y me permitan dominar nuevas herramientas. Aspiro a crear aplicaciones web innovadoras, eficientes y escalables, que generen un impacto real en sus usuarios."
  },
  {
    title: "Mi esencia",
    content: "Mi capacidad de aprender rápido y adaptarme a distintos entornos. Más que programar, busco entender cada proyecto, proponer ideas creativas. Mi compromiso y pasión por mejorar me permiten aportar valor en todo el proceso de desarrollo."
  }
];

const AboutMe = () => {
  return (
    <>
    <AboutSectionWrapper>
      <Container>
        <AboutContent>
          <SectionHeader>
            <SectionIcon />
            <Typography 
              variant="h2" 
              color="#ffffff"
              style={{ fontFamily: "'Tilt Neon', sans-serif" }}
            >
              Sobre mí
            </Typography>
          </SectionHeader>
          
          <Panel>
            <ColumnsGrid>
              {aboutData.map((item) => (
                <ColumnItem key={item.title}>
                  <Typography 
                    variant="h3" 
                    color="#b9ff66"
                    style={{ 
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      fontWeight: 600,
                      marginBottom: '14px'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body" 
                    color="#cfd2cc"
                    style={{ 
                      lineHeight: '1.7',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                    }}
                  >
                    {item.content}
                  </Typography>
                </ColumnItem>
              ))}
            </ColumnsGrid>
          </Panel>
        </AboutContent>
      </Container>
      
      {/* Floating Shapes */}
      <FloatingShape 
        top="15%" 
        left="8%" 
        size="100px"
        mobileSize="60px"
        rounded
        delay="0s"
        bg="rgba(0, 255, 136, 0.04)"
      />
      
      <FloatingShape 
        bottom="20%" 
        right="10%" 
        size="80px"
        mobileSize="50px"
        delay="3s"
        bg="rgba(0, 255, 136, 0.06)"
      />
      
      <FloatingShape 
        top="50%" 
        right="5%" 
        size="60px"
        mobileSize="40px"
        rounded
        delay="6s"
        bg="rgba(0, 255, 136, 0.03)"
      />
    </AboutSectionWrapper>
    <Divider direction='right' />
    </>
  );
};

export default AboutMe;
