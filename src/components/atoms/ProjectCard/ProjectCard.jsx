import styled from 'styled-components';
import { useState } from 'react';
import { Typography, Button } from '../index';

const ProjectCardWrapper = styled.div`
  border-radius: 34.255px;
border: 1.427px solid rgba(255, 255, 255, 0.10);
background: radial-gradient(74.78% 74.78% at 50.11% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%);
  overflow: hidden;

  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  backdrop-filter: blur(14px);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background 220ms ease, backdrop-filter 220ms ease;
  will-change: transform;

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 10px 24px rgba(0, 255, 136, 0.06), 0 4px 12px rgba(0, 0, 0, 0.18);
    border-color: rgba(255, 255, 255, 0.14);
    background: radial-gradient(74.78% 74.78% at 50.11% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%);
    backdrop-filter: blur(15px);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const ProjectImage = styled.img`
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  opacity: ${props => (props.$loaded ? 1 : 0)};
  transition: opacity 220ms ease;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 400px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  position: relative;
  overflow: hidden;
`;

const ImageSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 100%);
  animation: shimmer 1.6s infinite;
  z-index: 1;
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;
const ProjectContent = styled.div`
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    padding: 0;
    gap: 12px;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectDescription = styled.div`
  flex: 1;
  margin: 0;
`;

const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
`;

const TechIcons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TechIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.bg || '#666'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  overflow: hidden;
  transition: transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease, color 160ms ease;
  will-change: transform;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
  }

  /* Asegura tamaño y color correcto para SVGs internos */
  svg {
    width: 24px;
    height: 24px;
    display: block;
  }

  /* Usa color actual para elementos sin atributo fill explícito */
  svg path:not([fill]),
  svg rect:not([fill]),
  svg circle:not([fill]),
  svg polygon:not([fill]) {
    fill: currentColor;
  }

  /* Respeta elementos con fill="none" y aplica stroke al color actual */
  svg [stroke="currentColor"] {
    stroke: currentColor;
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    font-size: 10px;
    svg {
      width: 16px;
      height: 16px;
    }
    &:hover {
      transform: scale(1.06);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    }
  }
`;

const DemoButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: #B9FF66;
  background: transparent;
  border: none;
  min-width: 0;
  cursor: pointer;
  text-decoration: none;
  transition: text-decoration 160ms ease;

  svg {
    transition: none;
  }

  svg path {
    fill: #B9FF66;
    transition: none;
  }

  &:hover,
  &:focus-visible {
    color: #B9FF66;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;
  }

  &:hover svg {
    transform: none;
  }

  &:hover svg path,
  &:focus-visible svg path {
    fill: #B9FF66;
  }

  &:active {
    color: #B9FF66;
    background: transparent;
    box-shadow: none;
  }

  &:active svg path {
    fill: #B9FF66;
  }
  
  @media (max-width: 768px) {
    width: auto;
    justify-content: flex-start;
  }
`;

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies = [], 
  demoUrl,
  onDemoClick,
  ...props 
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const handleDemoClick = () => {
    if (onDemoClick) {
      onDemoClick();
    } else if (demoUrl) {
      window.open(demoUrl, '_blank');
    }
  };

  return (
    <ProjectCardWrapper {...props}>
      <ImageWrapper>
        <ProjectImage
          src={image}
          alt={title || 'Proyecto'}
          loading="lazy"
          decoding="async"
          $loaded={imgLoaded}
          onLoad={() => setImgLoaded(true)}
        />
        {!imgLoaded && <ImageSkeleton />}
      </ImageWrapper>
      
      <ProjectContent>
        <ProjectHeader>
          <Typography 
            variant="h3" 
            color="#ffffff"
            style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              fontWeight: '600',
              letterSpacing: '0.02em'
            }}
          >
            {title}
          </Typography>
        </ProjectHeader>
        
        <ProjectDescription>
          <Typography 
            variant="body" 
            color="#cccccc"
            style={{ 
              lineHeight: '1.6',
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              letterSpacing: '0.01em'
            }}
          >
            {description}
          </Typography>
        </ProjectDescription>
        
        <ProjectFooter>
          <TechIcons>
            {technologies.map((tech, index) => (
              <TechIcon key={index} bg={tech.color} title={tech.name}>
                {tech.icon}
              </TechIcon>
            ))}
          </TechIcons>
          
          <DemoButton onClick={handleDemoClick}>
            Ver Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M0.311157 11.9973C-0.103731 12.4122 -0.103731 13.0849 0.311157 13.4998C0.726045 13.9146 1.39871 13.9146 1.8136 13.4998L1.06238 12.7485L0.311157 11.9973ZM13.811 1.06228C13.811 0.475543 13.3354 -0.00010317 12.7486 -0.000102706H3.18715C2.60041 -0.000103043 2.12476 0.475544 2.12476 1.06228C2.12476 1.64902 2.60041 2.12467 3.18715 2.12467H11.6862V10.6238C11.6862 11.2105 12.1619 11.6861 12.7486 11.6861C13.3354 11.6861 13.811 11.2105 13.811 10.6238V1.06228ZM1.06238 12.7485L1.8136 13.4998L13.4998 1.8135L12.7486 1.06228L11.9974 0.311063L0.311157 11.9973L1.06238 12.7485Z" fill="#B9FF66"/>
            </svg>
          </DemoButton>
        </ProjectFooter>
      </ProjectContent>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
