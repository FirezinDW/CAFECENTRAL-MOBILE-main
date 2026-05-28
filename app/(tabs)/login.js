import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './style.js'

export default function Login() {
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
          <Link href='/contato'><Text style={styles.menuItem}>Contato</Text></Link>
          <Link href='/login'><Text style={[styles.menuItem, styles.ativo]}>Login</Text></Link>
        </View>
      </View>

      {/* Desenvolver Aqui */}
      <View style={styles.container}>

        <View style={paginaAuth}>
          <Text style={styles.tituloAuth}>
            Cadastro
          </Text>

          <Text style={styles.textoAuth}>
            Faça login para obter acesso aos nossos recursos
          </Text>

          <View style={styles.blocoAuth}>

            <Text style={styles.label}>E-mail</Text>
            <TextInput placeholder='Digite seu email'
              keyboardType='email-address'
              style={styles.input}>
            </TextInput>

            <Text style={styles.label}>Senha</Text>
            <TextInput placeholder='Digite sua senha'
              secureTextEntry={true}
              style={styles.input}>
            </TextInput>

            <Text style={styles.linkAuth}>Nâo possui cadastro?</Text>
            <Link style={styles.linkAuthDestaque}>
              <Text>Cadastre-se aqui</Text>
            </Link>
          </View>
        </View>
      </View>

      {/* RODAPÉ */}
      <View style={styles.rodape}>
        { /* Texto de direitos de autorais */}
        <Text style={styles.textoRodape}> 2026 Café Central. Todos os direitos reservados.</Text>

        { /* Links de Contato */}
        <Link href='/contato'>
          <Text style={styles.linkRodape}>Entre em contato</Text>'
        </Link>
      </View>
    </ScrollView>

  );
}