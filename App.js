import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {useFonts, Bangers_400Regular, Inter_900Black, Ubuntu_400Regular, Oswald_400Regular, Nunito_400Regular, Lato_400Regular, Jost_400Regular, 
Manrope_400Regular, Allan_400Regular, Roboto_400Regular } from '@expo-google-fonts/bangers';

// import {useFonts, Inter_900Black} from '@expo-google-fonts/inter';

export default function App() {

let[fontsLoaded, fontError] = useFonts({
 Bangers_400Regular, Inter_900Black, Ubuntu_400Regular, Oswald_400Regular, Nunito_400Regular, Lato_400Regular, Jost_400Regular, Manrope_400Regular,               Allan_400Regular, Roboto_400Regular
})

// condição para caso não haja essa fonte no celular do indivíduo, daí, pega uma fonte genérica.
if(!fontsLoaded && !fontError){
  return null;
}

  return (
    <View style={styles.tudao}>

    <View style={styles.header}> 
    Frases Motivacionais
    <Image style={styles.img} resizeMode="contain" source={require("/assets/etec-logo.png")} />    
    </View>
    <ScrollView style={styles.scrview}>

    <View style={styles.container}>
      <Text style={styles.frase1}>
      "Fracasso é uma possibilidade. Se as coisas não estão fracassando, você não está inovando o suficiente 
      ~ Elon Musk
      </Text>
    </View>


      <View style={styles.container}>
      <Text style={styles.frase2}>
      Hoje, o ‘eu não sei’, se tornou o ‘eu ainda não sei’.  Bill Gates
      </Text>
    </View>

      <View style={styles.container}>
      <Text style={styles.frase3}>
      É melhor você tentar algo, vê-lo não funcionar e aprender com isso, do que não fazer nada. ~ Mark Zuckerberg
      </Text>
    </View>

      <View style={styles.container}>
      <Text style={styles.frase4}>
      No final, somos nossas escolhas. ~ Jeff Bezos
      </Text>
    </View>

      <View style={styles.container}>
      <Text style={styles.frase5}>
      Criatividade é apenas conectar as coisas ~ Steve Jobs
      </Text>
    </View>

      <View style={styles.container}>
      <Text style={styles.frase6}>
      There’s going to be reversals. You have to be ready, to be philosophical about that. ~ Paul Allen
      </Text>
    </View>

      <View style={styles.container}>
      <Text style={styles.frase7}>
      Esforce-se não para ter sucesso, mas sim para ser valioso ~ Albert Einsten
      </Text>
    </View>

      <View style={styles.container}>
      <Text style={styles.frase8}>
      Vencer sem correr riscos, é triunfar sem glórias! ~ Ayrton Senna
      </Text>
    </View>

      <View style={styles.container}>
      <Text style={styles.frase9}>
      Ninguém além de nós mesmos pode libertar nossa mente ~ Bob Marley
      </Text>
    </View>

      <View style={styles.container}>
      <Text style={styles.frase10}>
      O que me preocupa não é o grito dos maus. É o silêncio dos bons. ~ Martin Luther King
      </Text>
    </View>

</ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  tudao: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 8
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  img: {
    width: 150,
    height: 150
  },
  scrview: {
    flex: 1,
    width: 'innerWidth'
  },
  container: {
    backgroundColor: '#283236',
    padding: 10,
    margin: 30,
    width: 300,
    height: 'auto',
    borderRadius: 25
  },
  frase1: {
    display: 'flex',
    margin: 24,
    fontSize: 24,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Bangers_400Regular'
  },

 frase2: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Inter_900Black'
  },
  
 frase3: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Ubuntu_400Regular'
  },
  
 frase4: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Oswald_400Regular'
  },
  
 frase5: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Nunito_400Regular'
  },
  
 frase6: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Lato_400Regular'
  },
  
 frase7: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Jost_400Regular'
  },
  
 frase8: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Manrope_400Regular'
  },
  
 frase9: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Allan_400Regular'
  },
  
 frase10: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    fontFamily: 'Roboto_400Regular'
  },
  
});