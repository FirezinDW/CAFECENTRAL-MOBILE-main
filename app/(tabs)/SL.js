import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './style.js'

export default function SL() {
    return (
        <ScrollView>
            <View>
                {/* TOPO (HEADER) */}

                <Text>Salgados e Lanches - Café Central</Text>
                <View>
                    <Link href='/'><Text style={styles.menuItem}> Início </Text></Link>
                    <Link href='/sobre'><Text style={styles.menuItem}> Sobre </Text></Link>
                    <Link href='/cardapio'><Text style={[styles.menuItem, styles.ativo]}> Cardápio </Text></Link>
                    <Link href='/contato'><Text style={styles.menuItem}> Contato </Text></Link>
                    <Link href='/login'><Text style={styles.menuItem}>Login</Text></Link>
                </View>
            </View>
            {/*------------------------------------------------------------------------------------------------------*/}
            {/* CONTEÚDO */}

            {/* ITEM 1 */}
            <View>
                <Text>🥖 Salgados e Lanches</Text>
                <View>
                    <Text>Pão de Queijo Artesanal</Text>

                    <Text>Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.</Text>
                    <Text>R$ 6,00</Text>
                </View>
                {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 2 */}
                <View>
                    <Text>Sanduíche de Queijo Quente</Text>

                    <Text>Pão de forma tostado com queijo mussarela derretido. Simples e delicioso.
                    </Text>
                    <Text>R$ 8,00</Text>
                </View>
                {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 3 */}
                <View>
                    <Text>Quiche Lorraine</Text>

                    <Text>Uma torta salgada clássica francesa, com recheio cremoso de bacon e queijo. Servida com uma pequena salada verde.</Text>
                    <Text>R$ 5,00</Text>
                </View>
                {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 4 */}
                <View>
                    <Text>Baguete Recheada</Text>

                    <Text>Baguete crocante recheada com presunto, queijo e tomate fresco. Ideal para um lanche rápido e saboroso.</Text>
                    <Text>R$ 9,00</Text>
                </View>
            </View>
            {/*------------------------------------------------------------------------------------------------------*/}
            {/* RODAPE */}
            <View style={styles.rodape}>
                { /* Texto de direitos de autorais */}
                <Text style={styles.textoRodape}> 2026 CafeCentral. Todos os direitos reservados.</Text>

                { /* Links de Contato */}
                <Link href='/contato'>
                    <Text style={styles.linkRodape}>Entre em contato</Text>'
                </Link>
            </View>
        </ScrollView>
    );
}