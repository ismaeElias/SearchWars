import React, { useState } from "react";
import { Alert } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { Container } from "./styles";
import Input from "../../components/Input";

import api from "../../services/api";

export default function Personagens() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [personagem, setPersonagem] = useState("");
  const [generos, setGeneros] = useState([]);

  async function handleGetPerson() {
    if (!personagem) {
      Alert.alert('Digite um personagem para buscar :/');
      return;
    }
    await api.get(`people?search=${personagem}`).then(res => {
      const { results } = res.data;
      const gender = [];
      for(const personagem of results){
        gender.push(personagem.gender);
      }
      setGeneros(gender);
    })
    

    
  }

  return (
    <Container>
      <Input
        placeHolder="Buscar personagens..."
        Press={() => {
          handleGetPerson();
        }}
        Change={(text) => {
          setPersonagem(text);
        }}
      />
      <Picker
        enabled={false}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Selecione um genero..." value="default" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </Container>
  );
}
