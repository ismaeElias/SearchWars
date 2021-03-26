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

export const BoxPersonagem = styled.View`
  background-color: #c4c4c4;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
`;

export const TitlePersonagem = styled.Text`
  color: #121212;
  font-weight: bold;
  font-size: 16px;
`;

export const ItemPersonagem = styled.TouchableOpacity`
  border-bottom-width: 2px;
  border-bottom-color: #e5c535;
  padding: 5px;
  font-weight: bold;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const BoxPlanetas= styled.View`
  background-color: #c4c4c4;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
`;

export const TitlePlanetas= styled.Text`
  color: #121212;
  font-weight: bold;
  font-size: 16px;
`;

export const ItemPlanetas = styled.TouchableOpacity`
  border-bottom-width: 2px;
  border-bottom-color: #e5c535;
  padding: 5px;
  font-weight: bold;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;



export const TextDark = styled.Text`
  color: #121212;
  font-weight: bold;
  font-size: 16px;
`;