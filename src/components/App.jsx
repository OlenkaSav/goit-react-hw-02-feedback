import Interface from './Interface';
import styled from 'styled-components';

export const App = () => {
  return (
    <Wrapper>
      <Interface />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  width: 500px;
  margin: 20px auto;
  background-color: #cff772;
  border-radius: 20px;
  -moz-box-shadow: 10px 10px 25px #333333;
  -webkit-box-shadow: 10px 10px 25px #333333;
  box-shadow: 10px 10px 25px #333333;
`;
