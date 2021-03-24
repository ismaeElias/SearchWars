import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function DetalheFilme(props){
  const [texto, setTexto] = useState('');

  async function getFilme(url){
    const filme = await axios.get(url);
    setTexto(filme.data.opening_crawl);
  }

  useEffect(() => {
    const url = props.route.params.url;
    getFilme(url);
  },[]);

  return(
    <View>
      <Text>{texto}</Text>
    </View>
  );
}