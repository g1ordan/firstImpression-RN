import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//TAG view é como se fosse DIV - TAG text é como se fosse p
//status bar é como se fosse notificação do celular
//o objeto styles é como se fosse o css, mudo tudo dentro do styles = stylesheet.create
//ao invés de usar hífen pra separar as palavras da estilização utiliza-se o padrão camelCase
//Variável precisa ser dentro de chaves

/*ATENÇÃO: ENTENDENDO COMPONENTES E PROPRIDADES
É a base do react, tudo envolve isso.
Componente é o escopo default function, nada mais que uma função que retorna  tags react native. 
Todo início de função componente precisa da primeira letra maiúscula pra ele poder diferenciar.
Posso criar funções novas e chamar na função default </>
*/

function TextButton(props) {
  return <Text style={{ color: "white"}}>{props.title}</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>bá, qual foi</Text>
      <StatusBar style="light" />
      <TextButton title="Colé que é" />
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
});
