import { Link } from 'expo-router';
import { ScrollView, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

export default function Login() {

  return (
    <ScrollView>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.topo}>
        </View>

        <View>
          <Link href='/'><TouchableOpacity style={styles.menuItem}>Início</TouchableOpacity></Link>
          <Link href='/sobre'><TouchableOpacity style={styles.menuItem}>Sobre</TouchableOpacity></Link>
          <Link href='/contato'><TouchableOpacity style={styles.menuItem}>Contato</TouchableOpacity></Link>
        </View>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.containerL}>
        <View style={styles.paginaAuth}>
          <Text style={styles.tituloAuth}>Login</Text>

          <Text style={styles.textoAuth}>
              Faça login para obter acesso aos nossos recursos
          </Text>

          <View style={styles.blocoAuth}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              placeholder="Digite seu email"
              keyboardType="email-address"
              style={styles.input}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              placeholder="Digite sua senha"
              secureTextEntry
              style={styles.input}
            />

            <Text style={styles.linkAuth}>Não possui cadastro?</Text>

            <Link href="/cadastro" asChild>
              <Text style={styles.linkAuthDestaque}>
                Cadastre-se aqui
              </Text>
            </Link>
          </View>
        </View>
      </View>

      {/* RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>
          2026 Café Central. Todos os direitos reservados.
        </Text>

        <Link href='/contato'>
          <Text style={styles.linkRodape}>Entre em contato</Text>
        </Link>
      </View>
    </ScrollView>
  );
}