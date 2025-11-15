import styled from 'styled-components';
import { Typography, Container, Button, Divider } from '../../atoms';
import ctaBg from './container.png';

const FooterWrapper = styled.footer`
  padding: 0 0 40px;
  background: transparent;
  position: relative;
  overflow: hidden;

  background-image: none;
  
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 20%, rgba(0, 255, 136, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0 30px;
  }
`;

const FooterContent = styled.div`
  padding-top: 80px;
  position: relative;
  z-index: 2;
  text-align: center;
`;

const CallToActionSection = styled.div`
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const MainHeading = styled.div`
  margin-bottom: 24px;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 0 20px;
  }
`;

const SubHeading = styled.div`
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
    padding: 0 20px;
  }
`;

const ContactButton = styled(Button)`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.40);
  background: linear-gradient(180deg, rgba(64, 90, 33, 0.00) -37.5%, rgba(185, 255, 102, 0.10) 0%);
  box-shadow: 0 8px 40px rgba(185, 255, 102, 0.10), 0 8px 30px rgba(180, 215, 138, 0.50) inset;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  min-width: 200px;
 
  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 15px;
    min-width: 180px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
    text-align: center;
  }
`;

const Copyright = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.3);
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: #cccccc;
    transition: fill 0.3s ease;
  }
  
  &:hover svg {
    fill: #00ff88;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    svg {
      width: 18px;
      height: 18px;
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
  animation: floatGentle 15s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0.2;
  
  @keyframes floatGentle {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(180deg); }
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '80px'};
    height: ${props => props.mobileSize || '80px'};
  }
`;

// Social Media Icons
const EmailIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Footer = () => {
  const handleContactClick = () => {
    // Aquí puedes agregar la lógica para abrir un modal de contacto o redirigir
    console.log('Contactar clicked');
  };

  return (
    <FooterWrapper>
      <Divider direction='right' />
      <Container>
        <FooterContent>
          <CallToActionSection>
            <MainHeading>
              <Typography
                variant="h2"
                color="#ffffff"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  textAlign: 'center',
                  fontFamily: '"Tilt Neon"'
                }}
              >
                ¿Estás <span style={{ color: '#00ff88' }}>listo</span> para llevar tu
              </Typography>
              <Typography
                variant="h2"
                color="#ffffff"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  textAlign: 'center',
                  fontFamily: '"Tilt Neon"'
                }}
              >
                desarrollo al siguiente <span style={{ color: '#00ff88' }}>nivel</span>?
              </Typography>
            </MainHeading>

            <SubHeading>
              <Typography
                variant="body"
                color="#cccccc"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}
              >
                Comunícate conmigo hoy y trabajemos en hacer tu idea realidad
              </Typography>
            </SubHeading>

            <ContactButton
              variant="primary"
              onClick={handleContactClick}
            >
              Contáctate conmigo →
            </ContactButton>
          </CallToActionSection>

          <FooterBottom>
            <Copyright>
              <Typography
                variant="body"
                color="#888888"
                style={{ fontSize: '14px' }}
              >
                Copyright ©2025 Charles Castillo
              </Typography>
            </Copyright>

            <SocialLinks>
              <SocialLink href="mailto:charles@example.com" title="Email">
                <EmailIcon />
              </SocialLink>

              <SocialLink href="https://wa.me/1234567890" title="WhatsApp" target="_blank">
                <WhatsAppIcon />
              </SocialLink>

              <SocialLink href="#" title="Ubicación">
                <LocationIcon />
              </SocialLink>

              <SocialLink href="https://linkedin.com/in/charlescastillo" title="LinkedIn" target="_blank">
                <LinkedInIcon />
              </SocialLink>
            </SocialLinks>
          </FooterBottom>
        </FooterContent>
      </Container>

      {/* Floating Shapes */}
      <FloatingShape
        top="10%"
        left="5%"
        size="150px"
        mobileSize="80px"
        rounded
        delay="0s"
        bg="rgba(0, 255, 136, 0.04)"
      />

      <FloatingShape
        bottom="20%"
        right="8%"
        size="120px"
        mobileSize="60px"
        delay="6s"
        bg="rgba(0, 255, 136, 0.06)"
      />

      <FloatingShape
        top="50%"
        right="3%"
        size="100px"
        mobileSize="50px"
        rounded
        delay="10s"
        bg="rgba(0, 255, 136, 0.03)"
      />
    </FooterWrapper>
  );
};

export default Footer;