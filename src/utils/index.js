import { ToastAndroid } from 'react-native';
import { format } from 'date-fns'

export function ArrayFilter(Array){
  let SetArray = [];
  SetArray = new Set(Array);
  return SetArray;
}

export function FormataData(data){
  return format(new Date(data), 'dd/MM/yyyy');
}


export function showToast(text){
  ToastAndroid.show(`${text}`, ToastAndroid.LONG);
};