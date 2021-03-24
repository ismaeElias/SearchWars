import React from "react";
import { View, Text } from "react-native";
import { Container, Title, InformationText } from "./styles";

export default function ListItem({ nome, genero,onPress }) {
  return (
    <Container onPress={onPress}>
      <View>
        <Title>{nome}</Title>
        <InformationText>{genero}</InformationText>
      </View>
    </Container>
  );
}
