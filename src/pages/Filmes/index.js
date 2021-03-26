import React, { useState } from "react";
import { FlatList } from "react-native";
import api from "../../services/api";
import { Picker } from "@react-native-picker/picker";
import { FormataData,showToast } from "../../utils/index";

import { Container, ContainerCard } from "./styles";

import Input from "../../components/Input";
import Loading from "../../components/Loading";
import ListItem from "../../components/ListItem";
import BoxFilter from "../../components/BoxFilter";
import Title from "../../components/Title";



export default function Filmes({ navigation }) {
  const [TextInput, setTextInput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [filme, setFilme] = useState();
  const [filmeFiltered, setFilmeFiltered] = useState([]);
  const [dataLancamento, setDataLancamento] = useState([]);
  const [isActivePicker, setIsActivePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handlerGetFIlme() {
    setIsLoading(true);
    let dataLancamento = [];
    let SetDataLancamento = [];
    try {

      if (!TextInput) {
        setIsLoading(false);
        return showToast('Insira um nome de filme ae :D Que a força esteja com você');
      }

      await api.get(`/films?search=${TextInput}`).then((res) => {
        setFilme(res.data.results);
        setFilmeFiltered(res.data.results);

        for (const date of res.data.results) {
          dataLancamento.push(FormataData(date.release_date));
        }

        SetDataLancamento = new Set(dataLancamento);
        if (SetDataLancamento) {
          dataLancamento = [...SetDataLancamento];
          setIsActivePicker(true);
          setDataLancamento(dataLancamento);
        }
      });
    } catch (err) {
      showToast('Opss... houve um erro ao buscar os dados :/');
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <Input
        placeHolder="Buscar filmes..."
        Press={() => {
          handlerGetFIlme();
        }}
        Change={(text) => {
          setTextInput(text);
        }}
      />
      <BoxFilter>
        <Title>Data lançamento:</Title>
        <Picker
          enabled={isActivePicker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedLanguage(itemValue);
            if (itemValue !== "All") {
              let filmeFiltered = filme.filter((filter) => {
                return FormataData(filter.release_date) === itemValue;
              });
              setFilmeFiltered(filmeFiltered);
            } else {
              setFilmeFiltered(filme);
            }
          }}
        >
          <Picker.Item label="All" value="All" />
          {dataLancamento.map((data, index) => {
            return <Picker.Item key={index} label={data} value={data} />;
          })}
        </Picker>
      </BoxFilter>
      <ContainerCard>
        {isLoading ? (
          <Loading />
        ) : (
          filme && (
            <FlatList
              style={{ width: "100%" }}
              data={filmeFiltered}
              renderItem={({ item, index }) => (
                <ListItem
                  nome={item.title}
                  genero={FormataData(item.release_date)}
                  onPress={() => {
                    navigation.navigate("detalhe-filme", {
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
