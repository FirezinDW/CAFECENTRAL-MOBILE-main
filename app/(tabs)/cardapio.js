import { Link } from 'expo-router';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';

export default function Cardapio() {

  const produtos = [
    {
      id: '1',
      titulo: 'Espresso',
      img: '',
      url: '/produto1',
      descricao: 'Um shot concentrado e aromático do nosso blend especial, com crema perfeita. Ideal para os amantes do café puro.',
      pc: 'R$ 3,00',
    },

    {
      id: '2',
      titulo: 'Cappuccino Clássico',
      img: '',
      url: '/produto1',
      descricao: 'Uma bebida encorpada, com sabor equilibrado, sem chocolate e servida com um toque de canela por cima, oferecendo textura aveludada e aroma intenso.',
      pc: 'R$ 8,00',
    },

    {
      id: '3',
      titulo: 'Latte Macchiato',
      img: '',
      url: '/produto1',
      descricao: 'Leite vaporizado delicadamente manchado com um shot de espresso, criando camadas visíveis e um sabor suave e cremoso.',
      pc: 'R$ 8,00',
    },

    {
      id: '4',
      titulo: 'Mocha',
      img: '',
      url: '/produto1',
      descricao: 'Uma deliciosa combinação de espresso, chocolate premium, leite vaporizado e chantilly, para um toque de indulgência.',
      pc: 'R$ 7,00',
    },

    {
      id: '5',
      titulo: 'Pão de Queijo Artesanal',
      img: '',
      url: '/produto1',
      descricao: 'Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.',
      pc: 'R$ 6,00',
    },

    {
      id: '6',
      titulo: 'Sanduíche de Queijo Quente',
      img: '',
      url: '/produto1',
      descricao: 'Pão de forma tostado com queijo mussarela derretido. Simples e delicioso.',
      pc: 'R$ 8,00',
    },

    {
      id: '7',
      titulo: 'Quiche Lorraine',
      img: '',
      url: '/produto1',
      descricao: 'Uma torta salgada clássica francesa, com recheio cremoso de bacon e queijo. Servida com uma pequena salada verde.',
      pc: 'R$ 5,00',
    },

    {
      id: '8',
      titulo: 'Baguete Recheada',
      img: '',
      url: '/produto1',
      descricao: 'Baguete crocante recheada com presunto, queijo e tomate fresco. Ideal para um lanche rápido e saboroso.',
      pc: 'R$ 9,00',
    },

    {
      id: '9',
      titulo: 'Croissant Amanteigado ',
      img: '',
      url: '/produto1',
      descricao: 'Crocante por fora, macio por dentro, com o sabor inconfundível da manteiga. Perfeito para acompanhar seu café.',
      pc: 'R$ 7,00',
    },

    {
      id: '10',
      titulo: 'Torta de Maçã com Sorvete',
      img: '',
      url: '/produto1',
      descricao: 'Fatias de maçã caramelizada em uma massa crocante, servida quente com uma bola de sorvete de creme.',
      pc: 'R$ 8,00',
    }, 

    {
      id: '11',
      titulo: 'Brownie de Chocolate com Nozes',
      img: '',
      url: '/produto1',
      descricao: 'Intenso e úmido, com pedaços crocantes de nozes. Uma explosão de sabor a cada mordida.',
      pc: 'R$ 7,00',
    }, 

    {
      id: '12',
      titulo: 'Bolo Red Velvet',
      img: '',
      url: '/produto1',
      descricao: 'Um clássico americano, com camadas de bolo aveludado de chocolate e um cremoso recheio de cream cheese.',
      pc: 'R$ 9,00',
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

              <Text style={styles.Produtopreco}>
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