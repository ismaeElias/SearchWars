import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Personagens from "../pages/Personagens";
import Filmes from "../pages/Filmes";
import Planetas from "../pages/Planetas";
import DetalhePersonagem from '../pages/DetalhePersonagem';
import DetalheFilme from '../pages/DetalheFilme';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="home"
        component={Home}
        key={1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="personagens"
        component={Personagens}
        key={2}
        options={{
          title: "Personagens",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#C4C4C4",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="filmes"
        component={Filmes}
        key={3}
        options={{
          title: "Filmes",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#C4C4C4",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="planetas"
        component={Planetas}
        key={4}
        options={{
          title: "Planetas",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#C4C4C4",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
       <Stack.Screen
        name="detalhe-personagem"
        component={DetalhePersonagem}
        key={5}
        options={{
          title: "Detalhe do Personagem",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#C4C4C4",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="detalhe-filme"
        component={DetalheFilme}
        key={6}
        options={{
          title: "Detalhe do Filme",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#C4C4C4",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
