import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 10px;
`;

export const BackgroundInput = styled.View`
  position: relative;
  background-color : #C4C4C4;
  border-radius: 30px;
  justify-content: center;
`;

export const ButtonInput = styled.TouchableOpacity`
  position: absolute;
  right: 5px;
  width: 45px;
  height: 42px;
  border-radius: 50px;
  background-color: #909090;
  align-items: center;
  justify-content : center;
`;

export const InputStyled = styled.TextInput`
  padding-right: 55px;
`;