import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

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
    setIsLoading(true);
    const { data } = await axios.get(url);
    const filmes = [];

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
    <View>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Text>{personagem.nome}</Text>
          <Text>{personagem.aniversario}</Text>
          <Text>{personagem.genero}</Text>
          {personagem.filmes.map((filmes, index) => {
            return <Text key={index}> {filmes.title}</Text>;
          })}
        </>
      )}
    </View>
  );
}
