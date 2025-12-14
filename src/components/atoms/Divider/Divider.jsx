import styled from 'styled-components';

const Line = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ direction }) =>
    `linear-gradient(${direction === 'left' ? '270deg' : '90deg'}, #B9FF66 30.19%, #000000 92.08%)`};
  border-radius: 2px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: block;
`;

const Divider = ({ direction = 'left' }) => (
  <Wrapper>
    <Line direction={direction} />
  </Wrapper>
);

export default Divider;
