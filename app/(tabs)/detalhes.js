import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { styles } from './styles';

export default function Detalhes() {

  const {
    Produtotitulo,
    Produtotimgem,
    Produtodescricao,
    Produtopc
  } = useLocalSearchParams();

  return (
    <ScrollView>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLogo} />
      </View>

      {/* MENU */}
      <View style={styles.hero}>
        <View style={styles.heroIndex}>
          <Link href='/'><TouchableOpacity style={styles.menuItemC}>Início</TouchableOpacity></Link>
          <Link href='/sobre'><TouchableOpacity style={styles.menuItemC}>Sobre</TouchableOpacity></Link>
          <Link href='/contato'><TouchableOpacity style={styles.menuItemC}>Contato</TouchableOpacity></Link>
          <Link href='/login'><TouchableOpacity style={[styles.menuItemC, styles.ativo]}>Login</TouchableOpacity></Link>
        </View>
      </View>

      {/* CONTEÚDO */}
      <View>

        <Text style={styles.etiqueta}>
          Detalhes do Produto
        </Text>

        <Text style={styles.Produtotitulo}>
          {Produtotitulo}
        </Text>

        <Text style={styles.Produtodescricao}>
          {Produtodescricao}
        </Text>

        <Text style={styles.Produtopreco}>
          R$ {Number(Produtopc).toFixed(2)}
        </Text>

        <Link href="/cardapio" asChild>
          <TouchableOpacity style={styles.btnVoltar}>
            <Text style={styles.textoBtn}>
              Voltar para o Cardápio
            </Text>
          </TouchableOpacity>
        </Link>

      </View>

      {/* RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>
          © 2026 Café Central. Todos os direitos reservados.
        </Text>

        <Link href="/contato">
          <Text style={styles.linkRodape}>Entre em contato</Text>
        </Link>
      </View>

    </ScrollView>
  );
}