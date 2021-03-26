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
  TextFilmes,
  BoxFilmes,
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
    const unsubscribe = props.navigation.addListener("focus", () => {
      const url = props.route.params.url;
      getPersonagem(url);
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        personagem.nome !== "" && (
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
            <BoxFilmes>
            <TextFilmes>Filmes:</TextFilmes>
              {personagem.filmes.map((filmes, index) => {
                return (
                  <ItemFilmes
                    key={index}
                    onPress={() => {
                      props.navigation.push("detalhe-filme", {
                        url: filmes.url,
                      });
                      setPersonagem({
                        nome: "",
                        aniversario: "",
                        genero: "",
                        filmes: [],
                      });
                    }}
                  >
                    <TextFilmes>{filmes.title}</TextFilmes>
                    <Icon name="caret-right" size={30} color="#373737" />
                  </ItemFilmes>
                );
              })}
            </BoxFilmes>
          </>
        )
      )}
    </Container>
  );
}
