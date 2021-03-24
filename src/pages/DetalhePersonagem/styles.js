import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color:  #303030;
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
  background-color:  #C4C4C4;
  height: 60px;
  border-radius: 5px;
`;

export const SubTitle = styled.Text`
  font-weight : bold;
  font-size: 20px;
  color: #A5A5A5;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ItemFilmes = styled.TouchableOpacity`
  color: #A5A5A5;
  border-bottom-width: 1px;
  border-bottom-color: #A5A5A5;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextFilmes = styled.Text`
color: #A5A5A5;
font-weight : bold;
font-size: 16px;
padding: 10px;
`;