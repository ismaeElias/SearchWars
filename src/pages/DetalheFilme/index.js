import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import axios from "axios";

import Icon from "react-native-vector-icons/FontAwesome";
import Loading from "../../components/Loading";
import {
  Container,
  Title,
  TextoAbertura,
  BoxInfo,
  TextInfo,
  BoxPersonagem,
  ItemPersonagem,
  TitlePersonagem,
  BoxPlanetas,
  ItemPlanetas,
  TitlePlanetas
} from "./styles";

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
    const unsubscribe = props.navigation.addListener("focus", () => {
      const url = props.route.params.url;
      getFilme(url);
    });

    return unsubscribe;
  }, [props.navigation]);

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
            <BoxPersonagem>
              <TitlePersonagem>Personagens:</TitlePersonagem>
              {filme.personagens.map((personagem, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <ItemPersonagem
                      key={index}
                      onPress={() => {
                        props.navigation.push("detalhe-personagem", {
                          url: personagem.url,
                        });
                        setFilme({
                          titulo: "",
                          episodio: 0,
                          texto_abertura: "",
                          lancamento: "",
                          personagens: [],
                          planetas: [],
                        })
                      }}
                    >
                      <Text>{personagem.nome}</Text>
                      <Icon name="caret-right" size={30} color="#A5A5A5" />
                    </ItemPersonagem>
                  </View>
                );
              })}
            </BoxPersonagem>
            <BoxPlanetas>
              <TitlePlanetas>Planetas:</TitlePlanetas>
              {filme.planetas.map((planetas, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <ItemPlanetas
                      key={index}
                      onPress={() => {
                        props.navigation.push("detalhe-planeta", {
                          url: planetas.url,
                        });
                        setFilme({
                          titulo: "",
                          episodio: 0,
                          texto_abertura: "",
                          lancamento: "",
                          personagens: [],
                          planetas: [],
                        })
                      }}
                    >
                      <Text>{planetas.nome}</Text>
                      <Icon name="caret-right" size={30} color="#A5A5A5" />
                    </ItemPlanetas>
                  </View>
                );
              })}
            </BoxPlanetas>
          </ScrollView>
        )
      )}
    </Container>
  );
}
