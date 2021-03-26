import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import api from "../../services/api";
import { Picker } from "@react-native-picker/picker";

import { ArrayFilter } from "../../utils/index";

import { Container, ContainerCard  } from "./styles";

import Input from "../../components/Input";
import Loading from "../../components/Loading";
import ListItemPlanet from "../../components/ListItemPlanet";
import BoxFilter from '../../components/BoxFilter';
import Title from '../../components/Title';

export default function Planetas({ navigation }) {
  const [populacaoSelecionada, setPopulacaoSelecionada] = useState("All");
  const [climaSelecionado, setClimaSelecionado] = useState("All");
  const [isActivePicker, setIsActivePicker] = useState(false);
  const [TextInput, setTextInput] = useState("");
  const [planetas, setPlanetas] = useState([]);
  const [planetasFiltrados, setPlanetasFiltrados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filtroPopulacao, setFiltroPopulacao] = useState([]);
  const [filtroClima, setFiltroClima] = useState([]);

  async function handlerGetPlanetas() {
    setIsLoading(true);
    let populacao = [];
    let populacaoFiltrada = [];
    let clima = [];
    let climaFiltrada = [];

    await api.get(`planets?search=${TextInput}`).then((res) => {
      const { results } = res.data;
      setPlanetas(results);
      setPlanetasFiltrados(results);

      for (const population of results) {
        populacao.push(population.population);
      }
      populacaoFiltrada = [...ArrayFilter(populacao)];
      populacao = populacaoFiltrada;

      for (const climate of results) {
        clima.push(climate.climate);
      }
      climaFiltrada = [...ArrayFilter(clima)];
      clima = climaFiltrada;

      setFiltroClima(clima);
      setFiltroPopulacao(populacao);
      setIsActivePicker(true);
      setIsLoading(false);
    });
  }

  function FiltroClima(itemValue) {
    setClimaSelecionado(itemValue);
    if (itemValue !== "All" && populacaoSelecionada !== "All") {
      let climaFiltrado = planetas.filter((filter) => {
        return filter.climate === itemValue;
      });
      let filtraClimaPopulacao = climaFiltrado.filter((filter) => {
        return filter.population === populacaoSelecionada;
      });
      setPlanetasFiltrados(filtraClimaPopulacao);
    } else if (itemValue !== "All") {
      let climaFiltrado = planetas.filter((filter) => {
        return filter.climate === itemValue;
      });
      setPlanetasFiltrados(climaFiltrado);
    } else {
      setPlanetasFiltrados(planetas);
    }
  }

  function FiltroPopulacao(itemValue) {
    setPopulacaoSelecionada(itemValue);
    if (itemValue !== "All" && climaSelecionado !== "All") {
      let planetaFiltrado = planetas.filter((filter) => {
        return filter.population === itemValue;
      });
      let filtraPopulacaoClima = planetaFiltrado.filter((filter) => {
        return filter.climate === climaSelecionado;
      });
      setPlanetasFiltrados(filtraPopulacaoClima);
    } else if (itemValue !== "All") {
      let planetaFiltrado = planetas.filter((filter) => {
        return filter.population === itemValue;
      });
      setPlanetasFiltrados(planetaFiltrado);
    } else {
      setPlanetasFiltrados(planetas);
    }
  }

  return (
    <Container>
      <Input
        placeHolder="Buscar planetas..."
        Press={() => {
          handlerGetPlanetas();
        }}
        Change={(text) => {
          setTextInput(text);
        }}
      />
      <BoxFilter>
        <Title>População: </Title>
        <Picker
          enabled={isActivePicker}
          selectedValue={populacaoSelecionada}
          onValueChange={(itemValue, itemIndex) => {
            FiltroPopulacao(itemValue);
          }}
        >
          <Picker.Item label="All" value="All" />
          {filtroPopulacao.map((data, index) => {
            return <Picker.Item key={index} label={data} value={data} />;
          })}
        </Picker>
        <Title>Clima: </Title>
        <Picker
          enabled={isActivePicker}
          selectedValue={climaSelecionado}
          onValueChange={(itemValue, itemIndex) => {
            FiltroClima(itemValue);
          }}
        >
          <Picker.Item label="All" value="All" />
          {filtroClima.map((data, index) => {
            return <Picker.Item key={index} label={data} value={data} />;
          })}
        </Picker>
      </BoxFilter>
      <ContainerCard>
        {isLoading ? (
          <Loading />
        ) : (
          planetas && (
            <FlatList
              style={{ width: "100%" }}
              data={planetasFiltrados}
              renderItem={({ item, index }) => (
                <ListItemPlanet
                  nome={item.name}
                  populacao={item.population}
                  clima={item.climate}
                  onPress={() => {
                    navigation.navigate("detalhe-planeta", {
                      url: item.url,
                    });
                  }}
                />
              )}
              keyExtractor={(item, index) => String(index)}
            />
          )
        )}
      </ContainerCard>
    </Container>
  );
}
