import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//TAG view é como se fosse DIV - TAG text é como se fosse p
//status bar é como se fosse notificação do celular
//o objeto styles é como se fosse o css, mudo tudo dentro do styles = stylesheet.create
//ao invés de usar hífen pra separar as palavras da estilização utiliza-se o padrão camelCase
//Variável precisa ser dentro de chaves

/*ATENÇÃO: ENTENDENDO COMPONENTES E PROPRIDADES
É a base do react, tudo envolve isso.
Componente é o escopo default function, nada mais que uma função que retorna tags react native. 
Todo início de função componente precisa da primeira letra maiúscula pra ele poder diferenciar.
Posso criar funções novas e chamar na função default </>

CONCEITO DE IMUTABILIDADE, IMPOSSÍVEL ALTERAR VARIÁVEL DENTRO DO COMPONENTE
*/


export default function App() {
  const [number, setNumber] = useState(0)

  function increment() {
    return setNumber(number + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>bá, qual foi</Text>
      <StatusBar style="dark" />
      
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.text}>APP DA TINONA</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{number}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: { color: "white", fontSize: 20, marginTop: 20 },

  button: {
    backgroundColor: "gray",
    padding: 20,
  },
});