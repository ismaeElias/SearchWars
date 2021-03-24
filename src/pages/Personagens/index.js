import React, { useState } from "react";
import { Alert, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { Container, ContainerCard } from "./styles";

import Input from "../../components/Input";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

import api from "../../services/api";

export default function Personagens({navigation}) {

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
      Alert.alert("Digite um personagem para buscar :/");
      return;
    }

    await api.get(`people?search=${personagem}`).then((res) => {
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
      <Picker
        enabled={isActivePicker}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue);
          if(itemValue != 'All'){
            let personFiltered = personagem.filter( filter => {
              return filter.gender === itemValue;
            })
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
      <ContainerCard>
        {isLoading ? (
          <Loading />
        ) : (
          personagem && (
            <FlatList
              style={{width: '100%'}}
              data={personFiltered}
              renderItem={({ item, index }) => (
                <Card
                  nome={item.name}
                  aniversario={item.birth_year}
                  genero={item.gender}
                  filmes={item.films}
                  navigation={navigation}
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
