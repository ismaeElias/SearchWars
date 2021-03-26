import React, { useEffect, useState } from "react";
import axios from "axios";

import { View, Text, ScrollView } from "react-native";
import {
  Container,
  Title,
  TextInfo,
  BoxInfo,
  BoxResidentes,
  TitleResidentes,
  ItemResidentes,
  BoxFilmes,
  TitleFilmes,
  ItemFilmes,
  TextDark
} from "./style";

import Icon from "react-native-vector-icons/FontAwesome";
import Loading from "../../components/Loading";

export default function DetalhePlanetas(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [planeta, setPlaneta] = useState({
    nome: "",
    periodo_orbita: "",
    periodo_rotacao: "",
    diametro: "",
    clima: "",
    populacao: "",
    filmes: [],
    residentes: [],
  });

  async function getPlaneta(url) {
    const planeta = await axios.get(url);
    const residentes = [];
    const filmes = [];

    setIsLoading(true);

    for (const listaResidentes of planeta.data.residents) {
      const { data } = await axios.get(listaResidentes);
      residentes.push({ nome: data.name, url: data.url });
    }

    for (const listaFilmes of planeta.data.films) {
      const { data } = await axios.get(listaFilmes);
      filmes.push({ nome: data.title, url: data.url });
    }

    setPlaneta({
      nome: planeta.data.name,
      periodo_orbita: planeta.data.orbital_period,
      periodo_rotacao: planeta.data.rotation_period,
      diametro: planeta.data.diameter,
      clima: planeta.data.climate,
      populacao: planeta.data.population,
      filmes: filmes,
      residentes: residentes,
    });

    setIsLoading(false);
  }

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      const url = props.route.params.url;
      getPlaneta(url);
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : planeta.nome !== '' && (
        <ScrollView>
          <Title>{planeta.nome}</Title>
          <BoxInfo>
            <TextInfo>
              <Text style={{ color: "#121212" }}>Clima: </Text> {planeta.clima}
            </TextInfo>
            <TextInfo>
              <Text style={{ color: "#121212" }}>População: </Text>{" "}
              {planeta.populacao}
            </TextInfo>
            <TextInfo>
              <Text style={{ color: "#121212" }}>Diâmetro: </Text>{" "}
              {planeta.diametro}
            </TextInfo>
            <TextInfo>
              <Text style={{ color: "#121212" }}>Período de órbita: </Text>
              {planeta.periodo_orbita}
            </TextInfo>
            <TextInfo>
              <Text style={{ color: "#121212" }}>Período de rotação: </Text>{" "}
              {planeta.periodo_rotacao}
            </TextInfo>
          </BoxInfo>
          <BoxResidentes>
              <TitleResidentes>Residentes:</TitleResidentes>
              {planeta.residentes.map((residente, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <ItemResidentes
                      key={index}
                      onPress={() => {
                        props.navigation.push("detalhe-personagem", {
                          url: residente.url,
                        });
                        setPlaneta({
                          nome: "",
                          periodo_orbita: "",
                          periodo_rotacao: "",
                          diametro: "",
                          clima: "",
                          populacao: "",
                          filmes: [],
                          residentes: [],
                        })
                      }}
                    >
                      <TextDark key={index}>{residente.nome}</TextDark>
                      <Icon name="caret-right" size={30} color="#373737" />
                    </ItemResidentes>
                  </View>
                );
              })}
            </BoxResidentes>
            <BoxFilmes>
              <TitleFilmes>Filmes:</TitleFilmes>
              {planeta.filmes.map((filme, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <ItemFilmes
                      key={index}
                      onPress={() => {
                        props.navigation.push("detalhe-filme", {
                          url: filme.url,
                        });
                        setPlaneta({
                          nome: "",
                          periodo_orbita: "",
                          periodo_rotacao: "",
                          diametro: "",
                          clima: "",
                          populacao: "",
                          filmes: [],
                          residentes: [],
                        })
                      }}
                    >
                      <Text key={index}>{filme.nome}</Text>
                      <Icon name="caret-right" size={30} color="#A5A5A5" />
                    </ItemFilmes>
                  </View>
                );
              })}
            </BoxFilmes>
        </ScrollView>
      )}
    </Container>
  );
}
