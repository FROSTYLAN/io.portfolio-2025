import styled from "styled-components";

interface ElipseProps {
  size?: string;
  borderColor?: string;
  left?: string;
  top?: string;
  rotation?: string;
  ellipseWidth?: string;
}

const StyledBox = styled.div<ElipseProps>`
  height: ${props => props.height || '450px'};
  width: ${props => props.width || '450px'};

  & .elipse {
    border: 2px solid;
    border-color: ${props => props.borderColor || '#ffffff4c'};
    border-radius: 100px / 225px;
    height: ${props => props.height || '450px'};
    left: ${props => props.left || '909px'};
    position: fixed;
    top: ${props => props.top || '312px'};
    transform: rotate(${props => props.rotation || '-45deg'});
    width: ${props => props.ellipseWidth || '200px'};
  }
`;

const Elipse: React.FC<ElipseProps> = ({ size, borderColor, left, top, rotation, ellipseWidth }) => {
  return (
    <StyledBox 
      size={size}
      borderColor={borderColor}
      left={left}
      top={top}
      rotation={rotation}
      ellipseWidth={ellipseWidth}
    >
      <div className="elipse" />
    </StyledBox>
  );
}

export default Elipse