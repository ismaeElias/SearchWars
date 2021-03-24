import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #C4C4C4;
  margin-bottom: 5px;
  border-radius: 5px;
  padding : 5px;
`; 

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color : #121212;
`;

export const InformationText = styled.Text`
  color : #373737;
  font-size: 15px;
  font-weight: bold;
`;

export const ButtonFilm = styled.TouchableOpacity`
  align-items : center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #909090;
  border-radius: 20px;
`;