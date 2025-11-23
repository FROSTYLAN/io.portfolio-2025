import styled from 'styled-components';

const StyledMobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  z-index: 10000;
  position: fixed;
  top: 20px;
  right: 20px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #00ff88;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuButton = ({ 
  isOpen = false, 
  onClick, 
  openIcon = '☰', 
  closeIcon = '✕',
  ...props 
}) => {
  return (
    <StyledMobileMenuButton 
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      {...props}
    >
      {isOpen ? closeIcon : openIcon}
    </StyledMobileMenuButton>
  );
};

export default MobileMenuButton;