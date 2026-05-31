import { Link, useRouter } from 'expo-router';
import { ScrollView, Text, TextInput, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

export default function Cadastro() {
  const router = useRouter();

  return (
    <ScrollView>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.topo}>
          <Image/>
        </View>

        <View>
          <Link href='/'><TouchableOpacity style={styles.menuItemC}>Início</TouchableOpacity></Link>
          <Link href='/sobre'><TouchableOpacity style={styles.menuItemC}>Sobre</TouchableOpacity></Link>
          <Link href='/contato'><TouchableOpacity style={styles.menuItemC}>Contato</TouchableOpacity></Link>
          <Link href='/login'><TouchableOpacity style={[styles.menuItemC, styles.ativo]}>Login</TouchableOpacity></Link>
        </View>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.containerC}>
        <View style={styles.paginaAuth}>
          <Text style={styles.tituloAuth}>Cadastro</Text>

          <Text style={styles.textoAuth}>
            Crie sua conta para acessar todos os recursos
          </Text>

          <View style={styles.blocoAuth}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" />

            <Text style={styles.label}>E-mail:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
            />

            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry
            />

            <Text style={styles.label}>Confirmar senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha novamente"
              secureTextEntry
            />

            <Text style={styles.linkAuth}>
                Cadastrar-se
            </Text>

            <Pressable onPress={() => router.push('/login')}>
              <Text style={styles.linkAuthDestaque}> Já possui uma conta?</Text>
            </Pressable>
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