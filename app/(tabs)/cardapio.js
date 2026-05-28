import { Link } from 'expo-router';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';

export default function Cardapio() {

  const produtos = [
    {
      id: '1',
      titulo: 'Pão de Queijo Artesanal',
      img: '',
      url: '/produto1',
      descricao: 'Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.',
      pc: 'R$ 6,00',
    },

    {
      id: '1',
      titulo: 'Pão de Queijo Artesanal',
      img: '',
      url: '/produto1',
      descricao: 'Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.',
      pc: 'R$ 6,00',
    },

    {
      id: '1',
      titulo: 'Pão de Queijo Artesanal',
      img: '',
      url: '/produto1',
      descricao: 'Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.',
      pc: 'R$ 6,00',
    },

    {
      id: '1',
      titulo: 'Pão de Queijo Artesanal',
      img: '',
      url: '/produto1',
      descricao: 'Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.',
      pc: 'R$ 6,00',
    },

    {
      id: '1',
      titulo: 'Pão de Queijo Artesanal',
      img: '',
      url: '/produto1',
      descricao: 'Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.',
      pc: 'R$ 6,00',
    },
  ]


  const [BuscarProdutos, setBusca] = userState('');

  const produtosFiltrados = produtos.filter(
    (produto) => {
      return produto.titulo.toLowerCase().includes(BuscarProdutos.toLocaleLowerCase())
    }
  )

  return (
    <ScrollView>
      {/* TOPO - HEADER*/}
      <View style={styles.header}>
        <View style={styles.headerLogo}>
        </View>
      </View>
      {/* ============================================================================================================ */}
      {/* Desenvolver Aqui */}
      <View style={styles.hero}>
        <View style={styles.heroIndex}>
          <Link href='/'><TouchableOpacity style={styles.menuItem}>Início</TouchableOpacity></Link>
          <Link href='/sobre'><TouchableOpacity style={styles.menuItem}>Sobre</TouchableOpacity></Link>
          <Link href='/cardapio'><TouchableOpacity style={[styles.menuItem, styles.ativo]}>Cardápio</TouchableOpacity></Link>
          <Link href='/contato'><TouchableOpacity style={styles.menuItem}>Contato</TouchableOpacity></Link>
        </View>
      </View>
      {/* ============================================================================================================ */}
      {/* Desenvolver Aqui */}

      <View style={styles = Cardapio}>
        <Text styles={styles.tituloPagina}>
          Aproveite com nossos melhores Produtos
        </Text>

        <TextInput style={styles.BuscarProdutos}
          placeholder="Buscar Produtos Disponiveis"
          value={Busca}
          onChangeText={setBusca}></TextInput>
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>

              <Text style={styles.ProdutoTitulo}>
                {item.ProdutoTitulo}
              </Text>

              <image styles={styles.ProdutoImagem} source={item.img}></image>

              <Text style={styles.ProdutoDescricao}>
                {item.descricao}
              </Text>

              <Text>
                Preco: R${item.pc}
              </Text>
              <Link style={styles.cursoBtnLink} href={{
                pathname: '/detalhesCurso',
                params: {
                  titulo: item.ProdutoTitulo,
                  descricao: item.descricao,
                  pc: item.pc,
                },
              }} asChild>

                <TouchableOpacity style={styles.btnProduto}>
                  <Text style={styles.textoBtnProduto}>
                    Ver detalhes
                  </Text>
                </TouchableOpacity>

              </Link>

            </View>


          )}>

        </FlatList>
      </View>

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
        <Text style={styles.textoRodape}> 2026 Café Central. Todos os direitos reservados.</Text>
        <Link href='/contato'>
          <Text style={styles.linkRodape}>Entre em contato</Text>
        </Link>
      </View>
    </ScrollView>

  );
}