import React, { useState } from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import Input from "../../components/Input";
import { Picker } from "@react-native-picker/picker";

export default function Personagens() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Container>
      <Input
        placeHolder='Buscar personagens...'
        Press={() => {
          console.log("clicou");
        }}
        Change={(text) => {
          console.log(text);
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
