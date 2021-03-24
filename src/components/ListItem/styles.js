import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #dedede;
  border-bottom-width: 3px;
  border-bottom-color : #e5c535;
  margin-bottom: 5px;
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