import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #303030;
  padding: 5px;
`;


export const Title = styled.Text`
  font-weight : bold;
  font-size: 30px;
  color: #A5A5A5;
  text-align: center;
`;

export const TextInfo = styled.Text`
  color: #373737;
  font-weight : bold;
  font-size: 15px;
  padding: 5px;
`;

export const BoxInfo = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color:  #C4C4C4;
  border-radius: 5px;
`;


export const BoxResidentes= styled.View`
  background-color: #c4c4c4;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
`;

export const TitleResidentes = styled.Text`
  color: #121212;
  font-weight: bold;
  font-size: 16px;
`;

export const ItemResidentes = styled.TouchableOpacity`
  border-bottom-width: 2px;
  border-bottom-color: #e5c535;
  padding: 5px;
  font-weight: bold;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxFilmes= styled.View`
  background-color: #c4c4c4;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
`;

export const TitleFilmes = styled.Text`
  color: #121212;
  font-weight: bold;
  font-size: 16px;
`;

export const ItemFilmes= styled.TouchableOpacity`
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