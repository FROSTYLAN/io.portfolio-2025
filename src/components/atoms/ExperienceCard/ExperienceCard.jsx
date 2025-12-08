import styled from 'styled-components';
import { Typography } from '../index';

const ExperienceCardWrapper = styled.div`
  border-radius: 23px;
  border: 1px solid #3C4434;
  background: linear-gradient(103deg, #0F1408 16.66%, rgba(23, 32, 9, 0.27) 81.61%);

  padding: 32px;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  backdrop-filter: blur(10px);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(185, 255, 102, 0.3);
    box-shadow: 0 20px 40px rgba(185, 255, 102, 0.1);
    background: rgba(26, 26, 26, 0.95);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 24px;
    gap: 16px;
    flex-direction: column;
    text-align: center;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const IconContainer = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  
  /* Recorta todo el contenido/overlay a la silueta del icono */
  -webkit-mask-image: url(${props => props.maskSrc || ''});
  mask-image: url(${props => props.maskSrc || ''});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  mask-mode: alpha;
  
  /* Overlay de reflejo (espejo) que se mueve dentro del icono */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 35%, rgba(255,255,255,0.26) 50%, transparent 65%);
    transform: translateX(-150%);
    transition: transform 0.9s ease;
    pointer-events: none;
    mix-blend-mode: screen;
    z-index: 2;
  }
  
  ${ExperienceCardWrapper}:hover &::before {
    transform: translateX(150%);
  }
  
  
  /* Brillo aplicado solo al gráfico (svg/img), no al contenedor */
  & svg, & img {
    transition: filter 0.35s ease, transform 0.3s ease;
    will-change: filter, transform;
    z-index: 1;
    width: 96px;
    height: 96px;
  }
  
  ${ExperienceCardWrapper}:hover & svg,
  ${ExperienceCardWrapper}:hover & img {
    filter: drop-shadow(0 0 12px rgba(185, 255, 102, 1);) brightness(1.1) saturate(1.05);
    transform: translateZ(0);
  }
  
  @media (max-width: 768px) {
    width: 72px;
    height: 72px;
    border-radius: 12px;
    
    & svg, & img {
      width: 72px;
      height: 72px;
    }
  }
`;

const IconSvg = styled.svg`
  width: 96px;
  height: 96px;
  fill: white;
  z-index: 1;
  transition: filter 0.35s ease, transform 0.3s ease;
  
  @media (max-width: 768px) {
    width: 72px;
    height: 72px;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const ExperienceCard = ({ 
  title, 
  company,
  period,
  description, 
  icon,
  iconBg,
  iconMaskSrc,
  ...props 
}) => {
  return (
    <ExperienceCardWrapper {...props}>
      <IconContainer bg={iconBg} maskSrc={iconMaskSrc}>
        {typeof icon === 'string' ? (
          <IconSvg viewBox="0 0 24 24">
            <path d={icon} />
          </IconSvg>
        ) : (
          icon
        )}
      </IconContainer>
      
      <ContentContainer>
        <Typography 
          variant="h3" 
          color="#ffffff"
          style={{ 
            fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
            fontWeight: '600',
            marginBottom: '0'
          }}
        >
          {title}
        </Typography>
        {(company || period) && (
          <Typography 
            variant="subtitle" 
            color="#b9ff66"
            style={{ 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              fontWeight: '500',
              marginTop: '0'
            }}
          >
            {company}{period ? ` · ${period}` : ''}
          </Typography>
        )}
        
        <Typography 
          variant="body" 
          color="#cccccc"
          style={{ 
            lineHeight: '1.6',
            fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
            marginTop: '8px'
          }}
        >
          {description}
        </Typography>
      </ContentContainer>
    </ExperienceCardWrapper>
  );
};

export default ExperienceCard;
