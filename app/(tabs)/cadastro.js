import { Link } from 'expo-router';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './style.js';

export default function Cadastro() {
    return (
        <ScrollView>
            {/* TOPO - HEADER */}
            <View style={styles.header}>
                <View style={styles.topo}>
                    <Image href='/'></Image>
                </View>
                <View>
                    <Link href='/'><Text style={styles.menuItem}>Início</Text></Link>
                    <Link href='/sobre'><Text style={styles.menuItem}>Sobre</Text></Link>
                    <Link href='/contato'><Text style={styles.menuItem}>Contato</Text></Link>
                    <Link href='/login'><Text style={[styles.menuItem, styles.ativo]}>Login</Text></Link>
                </View>
            </View>
{/* ============================================================================================================ */}
            { /*=========== CONTEÚDO DA PÁGINA =============*/}
            <View style={styles.container}>

                <View style={paginaAuth}>
                    <Text style={styles.tituloAuth}>
                        Cadastro
                    </Text>

                    <Text style={styles.textoAuth}>
                        Crie sua conta para acessar todos os recursos
                    </Text>

                    <View style={styles.blocoAuth}>
                        <Text style={styles.label}>Nome:</Text>
                        <TextInput placeholder='Digite seu nome'
                            style={styles.input}>
                        </TextInput>

                        <Text style={styles.label}>E-mail:</Text>
                        <TextInput placeholder='Digite seu email'
                            keyboardType='email-address'
                            style={styles.input}>
                        </TextInput>

                        <Text style={styles.label}>Senha:</Text>
                        <TextInput placeholder='Digite sua senha'
                            secureTextEntry={true}
                            style={styles.input}>
                        </TextInput>

                        <Text style={styles.label}>Confirmar senha:</Text>
                        <TextInput placeholder='Digite sua senha novamente'
                            secureTextEntry={true}
                            style={styles.input}>
                        </TextInput>

                        <Text style={styles.linkAuth}>Já possui uma conta? </Text>
                        <Link style={styles.linkAuthDestaque}>
                            <Text>Fazer login</Text>
                        </Link>
                    </View>
                </View>
            </View>
{/* ============================================================================================================ */}
            {/* RODAPÉ */}
            <View style={styles.rodape}>
                { /* Texto de direitos de autorais */}
                <Text style={styles.textoRodape}> 2026 Café Central. Todos os direitos reservados.</Text>

                { /* Links de Contato */}
                <Link href='/contato'>
                    <Text style={styles.linkRodape}>Entre em contato</Text>
                </Link>
            </View>
        </ScrollView>
    );
}