import styled from 'styled-components';
import { Typography, Container, Card } from '../../atoms';

const AboutSectionWrapper = styled.section`
  padding: 80px 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  
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
    justify-content: center;
  }
`;

const SectionIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #00ff88;
  border-radius: 50%;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 600px;
    margin: 0 auto;
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
    <AboutSectionWrapper>
      <Container>
        <AboutContent>
          <SectionHeader>
            <SectionIcon />
            <Typography 
              variant="h2" 
              color="#ffffff"
            >
              Sobre mí
            </Typography>
          </SectionHeader>
          
          <CardsGrid>
            {aboutData.map((item, index) => (
              <Card
                key={item.title}
                showIcon={true}
                iconColor="#00ff88"
                iconSize="12px"
                mobileIconSize="10px"
                title={
                  <Typography 
                    variant="h3" 
                    color="#ffffff"
                    style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' }}
                  >
                    {item.title}
                  </Typography>
                }
                headerMarginBottom="20px"
                mobileHeaderMarginBottom="16px"
                height="auto"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <Typography 
                  variant="body" 
                  color="#cccccc"
                  style={{ 
                    lineHeight: '1.7',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}
                >
                  {item.content}
                </Typography>
              </Card>
            ))}
          </CardsGrid>
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
  );
};

export default AboutMe;