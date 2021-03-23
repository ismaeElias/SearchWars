import React from "react";
import { Text } from "react-native";
import { Container } from './styles';
import  Input  from '../../components/Input';

export default function Personagens(){
  return(
    <Container>
      <Input />
      <Text>Personagens</Text>
    </Container>
  );
}