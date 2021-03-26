import React from "react";
import { View, Text } from "react-native";
import { Container, Title, InformationText } from "./styles";

export default function ListItemPlanet({ nome, populacao,clima,onPress }) {
  return (
    <Container onPress={onPress}>
      <View>
        <Title>{nome}</Title>
        <InformationText>{populacao}</InformationText>
        <InformationText>{clima}</InformationText>
      </View>
    </Container>
  );
}
