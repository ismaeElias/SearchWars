import React, { useEffect, useState } from "react";
import { ScrollView} from "react-native";
import axios from "axios";

import Loading from "../../components/Loading";
import { Container, Title, TextoAbertura, BoxInfo, TextInfo } from "./styles";

export default function DetalheFilme(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [filme, setFilme] = useState({
    titulo: "",
    episodio: 0,
    texto_abertura: "",
    lancamento: "",
    personagens: [],
    planetas: [],
  });

  async function getFilme(url) {
    const filme = await axios.get(url);
    const personagens = [];
    const planetas = [];

    setIsLoading(true);

    for (const listaPersonagem of filme.data.characters) {
      const { data } = await axios.get(listaPersonagem);
      personagens.push({ nome: data.name, url: data.url });
    }

    for (const listaPlaneta of filme.data.planets) {
      const { data } = await axios.get(listaPlaneta);
      planetas.push({ nome: data.name, url: data.url });
    }

    setFilme({
      titulo: filme.data.title,
      episodio: filme.data.episode_id,
      texto_abertura: filme.data.opening_crawl,
      lancamento: filme.data.release_date,
      personagens: personagens,
      planetas: planetas,
    });

    setIsLoading(false);
  }

  useEffect(() => {
    const url = props.route.params.url;
    getFilme(url);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        filme.titulo !== "" && (
          <ScrollView>
            <Title>{filme.titulo}</Title>
            <TextoAbertura>{filme.texto_abertura}</TextoAbertura>
            <BoxInfo>
              <TextInfo>Episodio: {filme.episodio}</TextInfo>
              <TextInfo>Data: {filme.lancamento}</TextInfo>
            </BoxInfo>
          </ScrollView>
        )
      )}
    </Container>
  );
}
