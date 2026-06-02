import { Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';

export default function Cardapio() {


  const produtos = [
    {
      id: '1',
      Produtotitulo: 'Espresso',
      Produtotimgem: '',
      Produtourl: '/produto1',
      Produtodescricao: 'Um shot concentrado e aromático do nosso blend especial, com crema perfeita. Ideal para os amantes do café puro.',
      Produtopc: 'R$ 3,00',
    },

    {
      id: '2',
      Produtotitulo: 'Cappuccino Clássico',
      Produtotimgem: '',
      Produtourl: '/produto2',
      Produtodescricao: 'Uma bebida encorpada, com sabor equilibrado, sem chocolate e servida com um toque de canela por cima, oferecendo textura aveludada e aroma intenso.',
      Produtopc: 'R$ 8,00',
    },

    {
      id: '3',
      Produtotitulo: 'Latte Macchiato',
      Produtotimgem: '',
      Produtourl: '/produto3',
      Produtodescricao: 'Leite vaporizado delicadamente manchado com um shot de espresso, criando camadas visíveis e um sabor suave e cremoso.',
      Produtopc: 'R$ 8,00',
    },

    {
      id: '4',
      Produtotitulo: 'Mocha',
      Produtotimgem: '',
      Produtourl: '/produto4',
      Produtodescricao: 'Uma deliciosa combinação de espresso, chocolate premium, leite vaporizado e chantilly, para um toque de indulgência.',
      Produtopc: 'R$ 7,00',
    },

    {
      id: '5',
      Produtotitulo: 'Pão de Queijo Artesanal',
      Produtotimgem: '',
      Produtourl: '/produto5',
      Produtodescricao: 'Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.',
      Produtopc: 'R$ 6,00',
    },

    {
      id: '6',
      Produtotitulo: 'Sanduíche de Queijo Quente',
      Produtotimgem: '',
      Produtourl: '/produto6',
      Produtodescricao: 'Pão de forma tostado com queijo mussarela derretido. Simples e delicioso.',
      Produtopc: 'R$ 8,00',
    },

    {
      id: '7',
      Produtotitulo: 'Quiche Lorraine',
      Produtotimgem: '',
      Produtourl: '/produto7',
      Produtodescricao: 'Uma torta salgada clássica francesa, com recheio cremoso de bacon e queijo. Servida com uma pequena salada verde.',
      Produtopc: 'R$ 5,00',
    },

    {
      id: '8',
      Produtotitulo: 'Baguete Recheada',
      Produtotimgem: '',
      Produtourl: '/produto8',
      Produtodescricao: 'Baguete crocante recheada com presunto, queijo e tomate fresco. Ideal para um lanche rápido e saboroso.',
      Produtopc: 'R$ 9,00',
    },

    {
      id: '9',
      Produtotitulo: 'Croissant Amanteigado ',
      Produtotimgem: '',
      Produtourl: '/produto9',
      Produtodescricao: 'Crocante por fora, macio por dentro, com o sabor inconfundível da manteiga. Perfeito para acompanhar seu café.',
      Produtopc: 'R$ 7,00',
    },

    {
      id: '10',
      Produtotitulo: 'Torta de Maçã com Sorvete',
      Produtotimgem: '',
      Produtourl: '/produto10',
      Produtodescricao: 'Fatias de maçã caramelizada em uma massa crocante, servida quente com uma bola de sorvete de creme.',
      Produtopc: 'R$ 8,00',
    },

    {
      id: '11',
      Produtotitulo: 'Brownie de Chocolate com Nozes',
      Produtotimgem: '',
      Produtourl: '/produto11',
      Produtodescricao: 'Intenso e úmido, com pedaços crocantes de nozes. Uma explosão de sabor a cada mordida.',
      Produtopc: 'R$ 7,00',
    },

    {
      id: '12',
      Produtotitulo: 'Bolo Red Velvet',
      Produtotimgem: '',
      Produtourl: '/produto12',
      Produtodescricao: 'Um clássico americano, com camadas de bolo aveludado de chocolate e um cremoso recheio de cream cheese.',
      Produtopc: 'R$ 9,00',
    },
  ];

  return (
    <ScrollView>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Cardápio</Text>
      </View>

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
