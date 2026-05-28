import { View, Text, TouchableOpacity, ScrollView } from 'react-native'; // Importa os componentes View e Text do React Native

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
        <View style={styles.topo}>
          <Image href='/'></Image>
      </View>
       <View style={styles.heroIndex}>
          <Link href='/'><Text style={styles.menuItem}>Início</Text></Link>
          <Link href='/sobre'><Text style={[styles.menuItem, styles.ativo]}>Sobre</Text></Link>
          <Link href='/contato'><Text style={styles.menuItem}>Contato</Text></Link>
          <Link href='/login'><Text style={styles.menuItem}>Login</Text></Link>
      </View>
      </View>
{/* ============================================================================================================ */}
      {/* Desenvolver Aqui */}
      <View style={styles.hero}>
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
      { /* Texto de direitos de autorais */}
      <View style={styles.rodape}>
        { /* Texto de direitos de autorais */}
        <Text style={styles.textoRodape}> 2026 Café Central. Todos os direitos reservados.</Text>

        { /* Links de Contato */}
        <Link href='/contato'>
          <Text style={styles.linkRodape}>Entre em contato</Text>
        </Link>
      </View>
    </ScrollView>

  );
}