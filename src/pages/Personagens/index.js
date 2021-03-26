import React, { useState } from "react";
import { Alert, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { Container, ContainerCard } from "./styles";
import { showToast } from '../../utils';

import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import Loading from "../../components/Loading";
import BoxFilter from '../../components/BoxFilter';
import Title from '../../components/Title';

import api from "../../services/api";

export default function Personagens({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [textInput, setTextInput] = useState();
  const [personagem, setPersonagem] = useState([]);
  const [personFiltered, setPersonFiltered] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [isActivePicker, setIsActivePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleGetPerson() {
    setIsLoading(true);
    const gender = [];
    let filterGender = [];

    if (!textInput) {
      setIsLoading(false);
      return showToast('Insira um nome para buscar e venha para o lado da força :D');
    }
    try {
      await api.get(`people?search=${textInput}`).then((res) => {
        const { results } = res.data;
        let SetGender = [];
  
        setPersonagem(results);
        setPersonFiltered(results);
        setIsLoading(false);
  
        for (const personagem of results) {
          gender.push(personagem.gender);
        }
  
        SetGender = new Set(gender);
        if (SetGender) {
          filterGender = [...SetGender];
          setIsActivePicker(true);
          setGeneros(filterGender);
        }
      });
    } catch (err) {
      showToast('Houve um erro ao buscar o personagem :/');
      setIsLoading(false);
    }
    
  }

  return (
    <Container>
      <Input
        placeHolder="Buscar personagens..."
        Press={() => {
          handleGetPerson();
        }}
        Change={(text) => {
          setTextInput(text);
        }}
      />
      <BoxFilter>
      <Title>Genero:</Title>
      <Picker
        enabled={isActivePicker}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue);
          if (itemValue !== "All") {
            let personFiltered = personagem.filter((filter) => {
              return filter.gender === itemValue;
            });
            setPersonFiltered(personFiltered);
          } else {
            setPersonFiltered(personagem);
          }
        }}
      >
        <Picker.Item label="All" value="All" />
        {generos.map((genero, index) => {
          return <Picker.Item key={index} label={genero} value={genero} />;
        })}
      </Picker>
      </BoxFilter>
      <ContainerCard>
        {isLoading ? (
          <Loading />
        ) : (
          personagem && (
            <FlatList
              style={{ width: "100%" }}
              data={personFiltered}
              renderItem={({ item, index }) => (
                <ListItem
                  nome={item.name}
                  genero={item.gender}
                  onPress={() => {
                    navigation.navigate("detalhe-personagem", {
                      url : item.url
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
