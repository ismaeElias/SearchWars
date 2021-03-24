import React, { useEffect, useState } from "react";
import axios from "axios";

import { View, Text } from "react-native";
import {
  Container,
  Title,
  TextInfo,
  SubTitle,
  BoxInfo,
  ItemFilmes,
  TextFilmes
} from "./styles";


import Icon from "react-native-vector-icons/FontAwesome";
import Loading from "../../components/Loading";

export default function DetalhePersonagem(props) {
  const [personagem, setPersonagem] = useState({
    nome: "",
    aniversario: "",
    genero: "",
    filmes: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  async function getPersonagem(url) {
    const { data } = await axios.get(url);
    const filmes = [];

    setIsLoading(true);

    for (const film of data.films) {
      const filmesPersonagem = await axios.get(film);
      filmes.push({ title: filmesPersonagem.data.title, url: film });
    }

    setPersonagem({
      nome: data.name,
      aniversario: data.birth_year,
      genero: data.gender,
      filmes: filmes,
    });
    
    setIsLoading(false);
  }

  useEffect(() => {
    const url = props.route.params.url;
    getPersonagem(url);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title>{personagem.nome}</Title>
          <SubTitle>Informações:</SubTitle>
          <BoxInfo>
            <TextInfo>
              <Text style={{ color: "#121212" }}>Aniversario: </Text>
              {personagem.aniversario}
            </TextInfo>
            <TextInfo>
              <Text style={{ color: "#121212" }}>Genero: </Text>{" "}
              {personagem.genero}
            </TextInfo>
          </BoxInfo>
          <SubTitle>Filmes:</SubTitle>
          {personagem.filmes.map((filmes, index) => {
            return (
              <ItemFilmes key={index} onPress={()=> {
                props.navigation.navigate('detalhe-filme', {
                  url : filmes.url
                });
              }}>
                <TextFilmes>{filmes.title}</TextFilmes>
                <Icon name="caret-right" size={30} color="#A5A5A5" />
              </ItemFilmes>
            );
          })}
        </>
      )}
    </Container>
  );
}
