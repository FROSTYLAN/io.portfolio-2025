import styled from 'styled-components';

const StyledMobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #00ff88;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
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
