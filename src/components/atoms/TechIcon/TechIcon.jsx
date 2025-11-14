import styled from 'styled-components';

const IconContainer = styled.div`
  width: ${props => props.size || '80px'};
  height: ${props => props.size || '80px'};
  background: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    
    svg {
      transform: scale(1.1);
      filter: drop-shadow(0 0 12px rgba(0, 255, 136, 0.6)) brightness(1.05) saturate(1.15);
      fill: #00ff88;
      stroke: #00ff88;
      color: #00ff88;
    }
  }
  
  svg {
    width: ${props => props.iconSize || '40px'};
    height: ${props => props.iconSize || '40px'};
    transition: transform 0.3s ease, filter 0.3s ease, fill 0.3s ease, stroke 0.3s ease, color 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    fill: #ffffff;
    stroke: #ffffff;
    color: #ffffff;
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '60px'};
    height: ${props => props.mobileSize || '60px'};
    
    svg {
      width: ${props => props.mobileIconSize || '30px'};
      height: ${props => props.mobileIconSize || '30px'};
    }
  }
  
  @media (max-width: 480px) {
    width: ${props => props.mobileSize || '50px'};
    height: ${props => props.mobileSize || '50px'};
    
    svg {
      width: ${props => props.mobileIconSize || '25px'};
      height: ${props => props.mobileIconSize || '25px'};
    }
  }
`;

const TechIcon = ({ 
  children, 
  size, 
  iconSize, 
  mobileSize, 
  mobileIconSize,
  ...props 
}) => {
  return (
    <IconContainer 
      size={size}
      iconSize={iconSize}
      mobileSize={mobileSize}
      mobileIconSize={mobileIconSize}
      {...props}
    >
      {children}
    </IconContainer>
  );
};

export default TechIcon;