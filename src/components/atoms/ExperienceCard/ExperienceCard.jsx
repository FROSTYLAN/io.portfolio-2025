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

const ViewMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  align-self: flex-end;
  color: #b9ff66;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, text-decoration-color 0.2s ease;
  
  svg {
    width: 14px;
    height: 14px;
    fill: #b9ff66;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
  
  @media (max-width: 768px) {
    align-self: center;
    font-size: 0.9rem;
  }
`;

const ExperienceCard = ({ 
  title, 
  company,
  period,
  description, 
  icon,
  iconBg,
  iconMaskSrc,
  onClick,
  ...props 
}) => {
  return (
    <ExperienceCardWrapper onClick={onClick} {...props}>
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
        
        <ViewMore aria-label="Ver más detalles de la experiencia">
          Ver más
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M0.311157 11.9973C-0.103731 12.4122 -0.103731 13.0849 0.311157 13.4998C0.726045 13.9146 1.39871 13.9146 1.8136 13.4998L1.06238 12.7485L0.311157 11.9973ZM13.811 1.06228C13.811 0.475543 13.3354 -0.00010317 12.7486 -0.000102706H3.18715C2.60041 -0.000103043 2.12476 0.475544 2.12476 1.06228C2.12476 1.64902 2.60041 2.12467 3.18715 2.12467H11.6862V10.6238C11.6862 11.2105 12.1619 11.6861 12.7486 11.6861C13.3354 11.6861 13.811 11.2105 13.811 10.6238V1.06228ZM1.06238 12.7485L1.8136 13.4998L13.4998 1.8135L12.7486 1.06228L11.9974 0.311063L0.311157 11.9973L1.06238 12.7485Z" />
          </svg>
        </ViewMore>
      </ContentContainer>
    </ExperienceCardWrapper>
  );
};

export default ExperienceCard;
