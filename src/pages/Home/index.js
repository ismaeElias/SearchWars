import React from "react";
import { Image, Text } from "react-native";
import {
  Container,
  ItemList,
  ContainerList,
  UserDeveloped,
  TextList,
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const Itens = ["PERSONAGENS", "FILMES", "PLANETAS"];

export default function Home({ navigation }) {
  return (
    <Container>
      <Image source={require("../../assets/logo.png")} />
      {Itens.map((title, index) => {
        return (
          <ContainerList
            key={index.toString()}
            onPress={() => {
              navigation.navigate(title.toLowerCase());
            }}
          >
            <ItemList>
              <TextList>{title}</TextList>
              <Icon name="caret-right" size={30} color="#A5A5A5" />
            </ItemList>
          </ContainerList>
        );
      })}
      <UserDeveloped>
        Developed by <Text style={{ fontWeight: "bold" }}>Ismael Elias</Text>{" "}
        &#9889;
      </UserDeveloped>
    </Container>
  );
}
