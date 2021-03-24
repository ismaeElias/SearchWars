import React from "react";
import { View, Text } from "react-native";
import { Container, Title, InformationText, ButtonFilm } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Card({ nome, aniversario, genero, filmes, navigation}) {
  return (
    <Container>
      <View>
        <Title>{nome}</Title>
        <InformationText>{aniversario}</InformationText>
        <InformationText>{genero}</InformationText>
      </View>
      <ButtonFilm onPress={()=>{
        console.log(filmes);
        navigation.navigate('filmes');
      }}>
        <Icon name="video-camera" size={30} color="#121212" />
        <Text style={{fontWeight: 'bold'}}>Filmes</Text>
      </ButtonFilm>
    </Container>
  );
}
