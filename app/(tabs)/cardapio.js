import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './style.js'

export default function Cardapio() {
  return (
    <ScrollView>
      {/* TOPO - HEADER*/}
      <View style={styles.header}>
        <View style={styles.topo}>
          <Image href='/'></Image>
        </View>
        <View>
          <Link href='/'><Text style={styles.menuItem}>Início</Text></Link>
          <Link href='/sobre'><Text style={styles.menuItem}>Sobre</Text></Link>
          <Link href='/cardapio'><Text style={[styles.menuItem, styles.ativo]}>Cardápio</Text></Link>
          <Link href='/contato'><Text style={styles.menuItem}>Contato</Text></Link>
          <Link href='/login'><Text style={styles.menuItem}>Login</Text></Link>
        </View>
      </View>
{/* ============================================================================================================ */}
      {/* Desenvolver Aqui */}
      <View style={styles.hero}>
        <Text style={styles.h1}>Nosso Cardápio</Text>
        <View style={styles.buscaItens}>
          <TextInput placeholder='O que você deseja hoje?'></TextInput>
        </View>
        <View style={styles.categorias}>
          <Link href='/CE'>
            <TouchableOpacity style={styles.btnCategoria}><Text style={styles.txtBtn}>☕ Cafés Especiais</Text></TouchableOpacity>
          </Link>
          <Link href='/DS'>
            <TouchableOpacity style={styles.btnCategoria}><Text style={styles.txtBtn}>🍰 Doces e Sobremesas</Text></TouchableOpacity>
          </Link>
          <Link href='/SL'>
            <TouchableOpacity style={styles.btnCategoria}><Text style={styles.txtBtn}>🥖 Salgados e Lanches</Text></TouchableOpacity>
          </Link>
        </View>
      </View>

      <View style={styles.listaItens}>
        {/* Itens a serem carregados pelo JS */}
      </View>
{/* ============================================================================================================ */}
      {/* RODAPÉ */}
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