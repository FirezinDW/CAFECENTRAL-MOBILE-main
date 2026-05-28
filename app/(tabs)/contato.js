import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './style.js'

export default function Contato() {
    return (
        <ScrollView>
            {/* TOPO - HEADER */}
            <View>

                <Text> CafeCentral </Text>
            </View>
            <View>
                <Link href='/'><Text style={styles.menuItem}> Início </Text></Link>
                <Link href='/sobre'><Text style={styles.menuItem}> Sobre </Text></Link>
                <Link href='/contato'><Text style={[styles.menuItem, styles.ativo]}> Contato </Text></Link>
                <Link href='/login'><Text style={styles.menuItem}>Login</Text></Link>
            </View>
        {/* ============================================================================================================ */}
            {/* BASE - BODY */}
            <View style={styles.container}>
                <View style={styles.paginaAuth}>
                    <Text style={styles.tituloAuth}>
                        Fale Conosco
                    </Text>
                    <View>
                        <Text style={styles.label}>Nome: </Text>
                        <TextInput placeholder='Digite seu nome'
                            style={styles.input}>
                        </TextInput>

                        <Text style={stylesw.label}>E-mail: </Text>
                        <TextInput placeholder='Digite seu e-mail'
                            keyboardType='email-address'
                            style={styles.input} >
                        </TextInput>

                        <Text style={styles.label}>Mensagem: </Text>
                        <TextInput placeholder='Digite sua Mensagem'
                            style={styles.input} >
                        </TextInput>
                    </View>
                </View>
            </View>
        {/* ============================================================================================================ */}
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