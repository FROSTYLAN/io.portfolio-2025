import styled from 'styled-components';

const StyledGreenGradient = styled.div`
  position: absolute;
  width: ${props => props.width || '1145px'};
  height: ${props => props.height || '1142px'};
  filter: blur(${props => props.blur || '300px'});
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    60% 60% at 60% 50%,
    rgba(185, 255, 102, 0.9) 0%,
    rgba(150, 245, 80, 0.7) 30%,
    rgba(120, 235, 70, 0.5) 55%,
    rgba(90, 220, 60, 0.35) 75%,
    rgba(70, 200, 50, 0.25) 100%
  );
  ${(props) => props.top !== undefined ? `top: ${props.top};` : ''}
  ${(props) => props.left !== undefined ? `left: ${props.left};` : ''}
  ${(props) => props.right !== undefined ? `right: ${props.right};` : ''}
  ${(props) => props.bottom !== undefined ? `bottom: ${props.bottom};` : ''}
`;

const GreenGradient = ({
  className = '',
  width,
  height,
  blur,
  top,
  right,
  bottom,
  left,
  ...props
}) => {
  return (
    <svg width="2545" height="2542" viewBox="0 0 2545 2542" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_83_9)">
<path d="M1844.61 1252.09C1844.61 1841.86 1844.61 1252.09 1844.61 1841.87C1261.64 1841.87 1844.61 1841.87 789.047 1841.87C581.159 1299.79 663.874 519.487 1844.61 737.213C1844.61 1252.09 1844.61 642.01 1844.61 1252.09Z" stroke="#B9FF66" stroke-width="200"/>
</g>
<defs>
<filter id="filter0_f_83_9" x="0" y="-3.05176e-05" width="2544.61" height="2541.87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur_83_9"/>
</filter>
</defs>
</svg>

  );
};

export default GreenGradient;