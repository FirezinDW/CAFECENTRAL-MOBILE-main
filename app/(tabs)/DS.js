import { Link } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';

export default function DS() {
    return (
        <ScrollView>
            <View>
                {/* TOPO - HEADER */}

                <Text> 🍰 Doces e Sobremesas - CafeCentral </Text>
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

            {/* ITEM 9 */}
            <View>
                <Text>🧁 Doces e Sobremesas</Text>
                <View>
                    <Text>Croissant Amanteigado </Text>

                    <Text>Crocante por fora, macio por dentro, com o sabor inconfundível da manteiga. Perfeito para acompanhar seu café.</Text>
                    <Text> R$ 7,00 </Text>
                </View>
            {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 10 */}
                <View>
                    <Text>Torta de Maçã com Sorvete </Text>

                    <Text>Fatias de maçã caramelizada em uma massa crocante, servida quente com uma bola de sorvete de creme.</Text>
                    <Text> R$ 8,00 </Text>
                </View>
            {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 11 */}
                <View>
                    <Text>Brownie de Chocolate com Nozes </Text>

                    <Text>Intenso e úmido, com pedaços crocantes de nozes. Uma explosão de sabor a cada mordida.</Text>
                    <Text> R$ 7,00 </Text>
                </View>
            {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 12 */}
                <View>
                    <Text>Bolo Red Velvet </Text>

                    <Text>Um clássico americano, com camadas de bolo aveludado de chocolate e um cremoso recheio de cream cheese.</Text>
                    <Text> R$ 9,00 </Text>
                </View>
            </View>
            {/*------------------------------------------------------------------------------------------------------*/}
            {/* RODAPÉ - FOOTER */}
            <View style={styles.rodape}>
                { /* Texto de direitos de autorais */}
                <Text style={styles.textoRodape}> 2026 CafeCentral. Todos os direitos reservados.</Text>

                { /* Links de Contato */}
                <Link href='/contato'>
                    <Text style={styles.linkRodape}>Entre em contato</Text>
                </Link>
            </View>
        </ScrollView>
    );
}