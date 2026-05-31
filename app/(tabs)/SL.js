import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';


export default function SL() {
    return (
        <ScrollView>
            <View>
                {/* TOPO (HEADER) */}

                <Text>Salgados e Lanches - Café Central</Text>
                <View>
                    <Link href='/'><TouchableOpacity style={styles.menuItem}> Início </TouchableOpacity></Link>
                    <Link href='/sobre'><TouchableOpacity style={styles.menuItem}> Sobre </TouchableOpacity></Link>
                    <Link href='/cardapio'><TouchableOpacity style={[styles.menuItem, styles.ativo]}> Cardápio </TouchableOpacity></Link>
                    <Link href='/contato'><TouchableOpacity style={styles.menuItem}> Contato </TouchableOpacity></Link>
                    <Link href='/login'><TouchableOpacity style={styles.menuItem}>Login</TouchableOpacity></Link>
                </View>
            </View>
            {/*------------------------------------------------------------------------------------------------------*/}
            {/* CONTEÚDO */}
            {/* ITEM 5 */}
            <View>
                <Text>🥖 Salgados e Lanches</Text>
                <View>
                    <Text>Pão de Queijo Artesanal</Text>

                    <Text>Delicioso pão de queijo artesanal, feito com leite e queijo fresco. O sabor autêntico que encanta todos os paladares.</Text>
                    <Text>R$ 6,00</Text>
                </View>
                {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 6 */}
                <View>
                    <Text>Sanduíche de Queijo Quente</Text>

                    <Text>Pão de forma tostado com queijo mussarela derretido. Simples e delicioso.
                    </Text>
                    <Text>R$ 8,00</Text>
                </View>
                {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 7 */}
                <View>
                    <Text>Quiche Lorraine</Text>

                    <Text>Uma torta salgada clássica francesa, com recheio cremoso de bacon e queijo. Servida com uma pequena salada verde.</Text>
                    <Text>R$ 5,00</Text>
                </View>
                {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 8 */}
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