import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={{ uri: 'https://i0.wp.com/ovicio.com.br/wp-content/uploads/landscape-1500919848-es-072417-henry-cavill-as-superman-with-a-mustache.jpg?resize=490%2C490&ssl=1'}} 
          style={styles.image}
        />
        <Text style={styles.h1}>Hector Ruy</Text>
      </View>

      <Text style={styles.desc}>
        Sou uma pessoa comum, com uma rotina simples, meu dia a dia segue sem grandes acontecimentos, e passo o tempo entre tarefas básicas e jogando jogos.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  image: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderWidth: 3, 
    borderColor: 'blue',
  },
  h1: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.97)',
    backgroundColor: 'rgb(70, 58, 242)',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'rgba(139, 131, 255, 0.97)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    textAlign: 'center',
  },
  desc: {
    color: 'white', 
    fontSize: 18, 
    textAlign: 'center', 
    marginHorizontal: 20, 
    marginTop: 40,
    fontWeight: 'bold',
    borderWidth: 2, 
    borderColor: 'blue',
    borderRadius: 3,
    backgroundColor: 'rgba(70, 58, 242, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,

  }
});