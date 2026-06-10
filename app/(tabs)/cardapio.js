import { Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import { styles } from '../../assets/style/styles.js';

export default function Cardapio() {


  const produtos = [
    {
      id: '1',
      titulo: 'Espresso',
      imagem: require('../../assets/images/espresso.png'),
      url: '/produto1',
      descricao: 'Um shot concentrado e aromático do nosso blend especial, com crema perfeita. Ideal para os amantes do café puro.',
      preco: 'R$ 3,00',
    },

    {
      id: '2',
      titulo: 'Cappuccino Clássico',
      imagem: require('../../assets/images/cappuccino_classico.png'),
      url: '/produto2',
      descricao: 'Uma bebida encorpada, com sabor equilibrado, sem chocolate e servida com um toque de canela por cima, oferecendo textura aveludada e aroma intenso.',
      preco: 'R$ 8,00',
    },

    {
      id: '3',
      titulo: 'Latte Macchiato',
      imagem: require('../../assets/images/latte_macchiato.png'),
      url: '/produto3',
      descricao: 'Leite vaporizado delicadamente manchado com um shot de espresso, criando camadas visíveis e um sabor suave e cremoso.',
      preco: 'R$ 8,00',
    },

    {
      id: '4',
      titulo: 'Mocha',
      imagem: require('../../assets/images/mocha.png'),
      url: '/produto4',
      descricao: 'Uma deliciosa combinação de espresso, chocolate premium, leite vaporizado e chantilly, para um toque de indulgência.',
      preco: 'R$ 7,00',
    },

    {
      id: '5',
      titulo: 'Pão de Queijo Artesanal',
      imagem: require('../../assets/images/pao_de_queijo_artesanal.png'),
      url: '/produto5',
      descricao: 'Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.',
      preco: 'R$ 6,00',
    },

    {
      id: '6',
      titulo: 'Sanduíche de Queijo Quente',
      imagem: require('../../assets/images/sanduiche_de_queijo_quente.png'),
      url: '/produto6',
      descricao: 'Pão de forma tostado com queijo mussarela derretido. Simples e delicioso.',
      preco: 'R$ 8,00',
    },

    {
      id: '7',
      titulo: 'Quiche Lorraine',
      imagem: require('../../assets/images/quiche_lorraine.png'),
      url: '/produto7',
      descricao: 'Uma torta salgada clássica francesa, com recheio cremoso de bacon e queijo. Servida com uma pequena salada verde.',
      preco: 'R$ 5,00',
    },

    {
      id: '8',
      titulo: 'Baguete Recheada',
      imagem: require('../../assets/images/baguete_recheada.png'),
      url: '/produto8',
      descricao: 'Baguete crocante recheada com presunto, queijo e tomate fresco. Ideal para um lanche rápido e saboroso.',
      preco: 'R$ 9,00',
    },

    {
      id: '9',
      titulo: 'Croissant Amanteigado ',
      imagem: require('../../assets/images/croissant_amanteigado.png'),
      url: '/produto9',
      descricao: 'Crocante por fora, macio por dentro, com o sabor inconfundível da manteiga. Perfeito para acompanhar seu café.',
      preco: 'R$ 7,00',
    },

    {
      id: '10',
      titulo: 'Torta de Maçã com Sorvete',
      imagem: require('../../assets/images/torta_de_maca_com_sorvete.png'),
      url: '/produto10',
      descricao: 'Fatias de maçã caramelizada em uma masa crocante, servida quente com uma bola de sorvete de creme.',
      preco: 'R$ 8,00',
    },

    {
      id: '11',
      titulo: 'Brownie de Chocolate com Nozes',
      imagem: require('../../assets/images/brownie_de_chocolate_com_nozes.png'),
      url: '/produto11',
      descricao: 'Intenso e úmido, com pedaços crocantes de nozes. Uma explosão de sabor a cada mordida.',
      preco: 'R$ 7,00',
    },

    {
      id: '12',
      titulo: 'Bolo Red Velvet',
      imagem: require('../../assets/images/bolo_red_velvet.png'),
      url: '/produto12',
      descricao: 'Um clássico americano, com camadas de bolo aveludado de chocolate e um cremoso recheio de cream cheese.',
      preco: 'R$ 9,00',
    },
  ];

  return (
    <ScrollView>

      {/* HEADER */}
      <View style={styles.header}>
        <Link href='/'>
          <Image source={require('../../assets/images/cafecentral.jpg')} style={styles.headerLogo} />
        </Link>
      </View>

      {/* MENU */}
        <View style={styles.hero}>
          <View style={styles.heroIndex}>
            <Link href='/'><TouchableOpacity style={styles.menuItem}>Início</TouchableOpacity></Link>
            <Link href='/sobre'><TouchableOpacity style={[styles.menuItem , styles.ativo]}>Sobre</TouchableOpacity></Link>
            <Link href='/contato'><TouchableOpacity style={styles.menuItem}>Contato</TouchableOpacity></Link>
          </View>
        </View>

      {/* CATEGORIAS */}
      

      {/* LISTA */}
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.cardProduto}>

            <Text style={styles.nomeProduto}>
              {item.Produtotitulo}
            </Text>

            <Text style={styles.descricaoProduto}>
              {item.Produtodescricao}
            </Text>

            <Text style={styles.precoProduto}>
              R$ {Number(item.Produtopc).toFixed(2)}
            </Text>

            <Link
              href={{
                pathname: '/detalhes',
                params: {
                  Produtotitulo: item.Produtotitulo,
                  Produtodescricao: item.Produtodescricao,
                  Produtopc: item.Produtopc
                }
              }}
              asChild
            >
              <TouchableOpacity style={styles.botaoDetalhes}>
                <Text style={styles.textoBotao}>
                  Ver detalhes
                </Text>
              </TouchableOpacity>
            </Link>

          </View>
        )}
      />

      {/* RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>
          © 2026 Café Central. Todos os direitos reservados.
        </Text>
      </View>

    </ScrollView>
  )
}
