import { Link } from 'expo-router';
import { ScrollView, Text,TouchableOpacity, TextInput, View } from 'react-native';
import { styles } from './styles.js';

export default function Contato() {
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
                <Link href='/contato'><TouchableOpacity style={[styles.menuItem, styles.ativo]}>Contato</TouchableOpacity></Link>
                </View>
            </View>
        {/* ============================================================================================================ */}
            {/* BASE - BODY */}
            <View style={styles.container}>
                <View style={styles.heroContato}>
                <View style={styles.paginaAuth}>
                    <Text style={styles.tituloAuth}>
                        Fale Conosco
                    </Text>
                    <View style={styles.formcontato}>
                        <Text style={styles.label}>Nome: </Text>
                        <TextInput placeholder='Digite seu nome'
                            style={styles.input}>
                        </TextInput>

                        <Text style={styles.label}>E-mail: </Text>
                        <TextInput placeholder='Digite seu e-mail'
                            keyboardType='email-address'
                            style={styles.input} >
                        </TextInput>

                        <Text style={styles.label}>Mensagem: </Text>
                        <TextInput  placeholder='Digite sua Mensagem'
                            style={styles.input} multiline={true} numberOfLines={5}>  {/* multiline para adicionar mais linhas ao input
                                                                                            junto com o numberoflines para adicionar o numero de linhas que quer a mais */}
                        </TextInput>

                        <TouchableOpacity style={styles.btnSubmit}>
                            <Text style={styles.textoSubmit}>Enviar</Text>
                        </TouchableOpacity>
                        
                        </View>
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