import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #303030;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #c4c4c4;
  text-align: center;
`;

export const TextInfo = styled.Text`
  font-weight: bold;
  color: #121212;
`;

export const TextoAbertura = styled.Text`
  font-weight: bold;
  color: #a5a5a5;
  text-align: center;
`;

export const BoxInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  background-color: #c4c4c4;
  border-bottom-width: 3px;
  border-bottom-color: #e5c535;
  border-radius: 5px;
`;
