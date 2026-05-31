import { Link } from 'expo-router';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

export default function CE() {
    return (
        <ScrollView>
            <View>
                {/* TOPO (HEADER) */}

                <Text>Cafés Especiais - Café Central</Text>
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

            {/* ITEM 1 */}
            <View>
                <Text>☕ Cafés Especiais</Text>
                <View>
                    <Text>Espresso</Text>

                    <Text>Um shot concentrado e aromático do nosso blend especial, com crema perfeita. Ideal para os amantes do café puro.</Text>
                    <Text>R$ 3,00</Text>
                </View>
                {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 2 */}
                <View>
                    <Text>Cappuccino Clássico</Text>

                    <Text>Uma bebida encorpada, com sabor equilibrado, sem chocolate e servida com um toque de canela por cima, oferecendo textura aveludada e aroma intenso.</Text>
                    <Text>R$ 8,00</Text>
                </View>
                {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 3 */}
                <View>
                    <Text>Latte Macchiato</Text>

                    <Text>
                        Leite vaporizado delicadamente manchado com um shot de espresso,
                        criando camadas visíveis e um sabor suave e cremoso.
                    </Text>
                    <Text>R$ 8,00</Text>
                </View>
                {/*------------------------------------------------------------------------------------------------------*/}
                {/* ITEM 4 */}
                <View>
                    <Text>Mocha</Text>

                    <Text>
                        Uma deliciosa combinação de espresso, chocolate premium, leite vaporizado e chantilly, para um toque de indulgência.
                    </Text>
                    <Text>R$ 7,00</Text>
                </View>
            </View>
            {/*------------------------------------------------------------------------------------------------------*/}
            {/* RODAPE */}
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