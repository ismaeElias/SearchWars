import styled from 'styled-components/native';

export const Container = styled.View`
  flex : 1;
  align-items: center;
  background-color : #303030;
`;
export const ContainerList = styled.TouchableOpacity`
  width: 60%;
  padding: 5px;
  border-bottom-width: 1px;
  border-color: #A5A5A5;
`;

export const ItemList = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const TextList = styled.Text`
  color: #A5A5A5;
  font-weight : bold;
  font-size: 20px;
`;

export const UserDeveloped = styled.Text`
  position: absolute;
  bottom: 0;
  color: #A5A5A5;
`;