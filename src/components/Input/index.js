import React from "react";
import { Container, BackgroundInput, ButtonInput,InputStyled } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Input() {
  return (
    <Container>
      <BackgroundInput>
        <InputStyled placeholder="Busque um personagem..." />
        <ButtonInput>
          <Icon name="search" size={30} color="#D2D2D2" />
        </ButtonInput>
      </BackgroundInput>
    </Container>
  );
}
