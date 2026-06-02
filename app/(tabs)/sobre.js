import { Link } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View ,Image } from 'react-native'; // Importa os componentes View e Text do React Native
import { styles } from './styles.js';

/* Versão Normal
export default function Index() { // Define e exporta o componente principal da tela
  return ( // Retorna o valor da função, o que estiver aqui aparece na tela
    <View>
      <Text>
        Bem-Vindo ao Café Central Mobile!
      </Text>
    </View>
  );
} */

/* Versão com Estilo Visual
export default function Index() {
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }}> 
      <Text style={{color: '#000'}}>Bem-Vindo ao Café Central Mobile!</Text>
    </View>
  );
} */

export default function Sobre() {
  return (
    <ScrollView>
      {/* TOPO - HEADER*/}
      <View style={styles.header}>
          <Link href='/'>
          <Image source={require('../../assets/images/cafecentral.jpg')} style={styles.headerLogo}/>
          </Link>
      </View>
        {/* ============================================================================================================ */}
        {/* Desenvolver Aqui */}
        <View style={styles.hero}>
          <View style={styles.heroIndex}>
            <Link href='/'><TouchableOpacity style={styles.menuItem}>Início</TouchableOpacity></Link>
            <Link href='/sobre'><TouchableOpacity style={[styles.menuItem , styles.ativo]}>Sobre</TouchableOpacity></Link>
            <Link href='/contato'><TouchableOpacity style={styles.menuItem}>Contato</TouchableOpacity></Link>
          </View>
        </View>
      {/* ============================================================================================================ */}

      {/* Desenvolver Aqui */}
      <View style={styles.heroConteudo}>
        <View style={styles.heroSobre}>
          <Text style={styles.h1}>Nossa História</Text>
          <Text style={styles.textoSobre1}>No Café Central, transformamos grãos selecionados em experiências memoráveis.
            Oferecemos cafés especiais, bebidas artesanais e um cardápio completo de lanches e sobremesas,
            unindo tradição e modernidade em cada xícara servida.</Text>
          <Text style={styles.textoSobre2}>Seja para uma pausa relaxante em nosso espaço ou para levar o melhor sabor com você,
            nosso compromisso é com a qualidade e o acolhimento.
            Venha nos visitar e descubra por que somos o ponto de encontro favorito da cidade.</Text>
          </View>
      </View>
      {/* ============================================================================================================ */}
      {/* RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}> 2026 Café Central. Todos os direitos reservados.</Text>
        <Link href='/contato'>
          <Text style={styles.linkRodape}>Entre em contato</Text>
        </Link>
      </View>
    </ScrollView>

  );
}