import { Link } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';

export default function Index() {
  return (
    <ScrollView  >
      {/* TOPO - HEADER*/}
      <View style={styles.header}>
        <View style={styles.headerLogo}>
        </View>
      </View>
        {/* ============================================================================================================ */}
        {/* Desenvolver Aqui */}
        <View style={styles.hero}>
          <View style={styles.heroIndex}>
            <Link href='/'><TouchableOpacity style={[styles.menuItem, styles.ativo]}>Início</TouchableOpacity></Link>
            <Link href='/sobre'><TouchableOpacity style={styles.menuItem}> Sobre</TouchableOpacity></Link>
            <Link href='/contato'><TouchableOpacity style={styles.menuItem}>Contato</TouchableOpacity></Link>
          </View>
          {/* ============================================================================================================ */}

          {/* ============================================================================================================ */}

          <View style={styles.heroConteudo}>
              <Text style={styles.heroTexto1}>Bem vindo ao</Text>
              <Text style={styles.heroTexto2}>Café Central Mobile!</Text>
          </View>

          <View style={styles.heroSecundario}>
              <Text style={styles.textoLogin}> Faça login para ter acesso total aos nossos recursos!</Text>
              <Link href='/login'>
                <TouchableOpacity style={styles.btnAuth}>
                  <Text style={styles.linkAuth}>Fazer Login</Text>
                </TouchableOpacity>
              </Link>
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
/*----------------------------------------------------------------------------------------------------------------------*/