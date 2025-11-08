import styled from 'styled-components';
import { Typography, Button, Container, Elipse } from '../../atoms';

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(0, 255, 136, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (max-width: 968px) {
    order: 2;
  }
`;

const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 968px) {
    order: 1;
  }
`;

const CharacterImage = styled.div`
  width: 400px;
  height: 400px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2300ff88;stop-opacity:0.3" /><stop offset="100%" style="stop-color:%2300ff88;stop-opacity:0.1" /></linearGradient></defs><circle cx="200" cy="200" r="180" fill="url(%23grad1)" stroke="%2300ff88" stroke-width="2" opacity="0.5"/><circle cx="200" cy="180" r="60" fill="%23333" stroke="%2300ff88" stroke-width="1"/><rect x="180" y="160" width="40" height="20" rx="10" fill="%2300ff88"/><circle cx="190" cy="170" r="3" fill="%23000"/><circle cx="210" cy="170" r="3" fill="%23000"/><path d="M185 185 Q200 195 215 185" stroke="%2300ff88" stroke-width="2" fill="none"/></svg>') center/contain no-repeat;
  position: relative;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  width: ${props => props.size || '60px'};
  height: ${props => props.size || '60px'};
  background: ${props => props.bg || 'rgba(0, 255, 136, 0.1)'};
  border: 2px solid #00ff88;
  border-radius: ${props => props.rounded ? '50%' : '12px'};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  animation: float 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '40px'};
    height: ${props => props.mobileSize || '40px'};
    font-size: 16px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatCard = styled.div`
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <TextContent>
            <Typography variant="subtitle">
              Hola, soy <span style={{color: '#00ff88'}}>Charles Castillo</span>
            </Typography>
            
            <Typography variant="h1" color="#ffffff" fontFamily="Tilt Neon">
              Desarrollador Web
            </Typography>
            <Elipse />
            
            <Typography 
              variant="subtitle" 
              color="#cccccc"
              margin="0 0 16px 0"
            >
              Conoce mi trabajo y descubre cómo convierto ideas en aplicaciones web dinámicas y modernas
            </Typography>
            
            <ButtonGroup>
              <Button size="large">
                Contáctame
              </Button>
              <Button variant="outline" size="large">
                Descarga mi CV
              </Button>
            </ButtonGroup>
            
            <StatsContainer>
              <StatCard>
                <Typography variant="h2" color="#ffffff" margin="0 0 8px 0">
                  5
                </Typography>
                <Typography variant="body" color="#cccccc">
                  YEARS OF<br />EXPERIENCE
                </Typography>
              </StatCard>
              
              <StatCard>
                <Typography variant="h2" color="#ffffff" margin="0 0 8px 0">
                  13
                </Typography>
                <Typography variant="body" color="#cccccc">
                  CERTIFICATIONS IN<br />TECHNOLOGIES
                </Typography>
              </StatCard>
            </StatsContainer>
          </TextContent>
          
          <ImageContent>
            <CharacterImage />
            
            {/* Floating Elements */}
            <FloatingElement 
              top="10%" 
              right="20%" 
              rounded 
              delay="0s"
              size="80px"
              mobileSize="60px"
            >
              ⚛️
            </FloatingElement>
            
            <FloatingElement 
              bottom="20%" 
              left="10%" 
              delay="1s"
              size="70px"
              mobileSize="50px"
            >
              💻
            </FloatingElement>
            
            <FloatingElement 
              top="30%" 
              left="5%" 
              rounded 
              delay="2s"
              size="60px"
              mobileSize="40px"
            >
              🚀
            </FloatingElement>
            
            <FloatingElement 
              bottom="10%" 
              right="10%" 
              delay="1.5s"
              size="65px"
              mobileSize="45px"
            >
              🎯
            </FloatingElement>
          </ImageContent>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;