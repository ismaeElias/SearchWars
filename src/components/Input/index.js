import React from "react";
import { Container, BackgroundInput, ButtonInput,InputStyled } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Input({Press, Change,placeHolder}) {
  return (
    <Container>
      <BackgroundInput>
        <InputStyled placeholder={placeHolder} onChangeText={Change}/>
        <ButtonInput onPress={Press}>
          <Icon name="search" size={30} color="#D2D2D2" />
        </ButtonInput>
      </BackgroundInput>
    </Container>
  );
}
