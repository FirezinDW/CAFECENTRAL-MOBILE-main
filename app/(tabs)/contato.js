import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../assets/style/styles.js';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemSistema, setMensagemSistema] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');

    function validarFormulario() {
        if (nome == '') {
            setMensagemSistema('Digite seu nome!');
            setTipoMensagem('erro!');
            return;
        };
        if (/\d/.test(nome)) {
            setMensagemSistema('O nome não pode conter números!');
            setTipoMensagem('erro!');
            return;
        };
        if (email == '') {
            setMensagemSistema('Digite seu e-mail!');
            setTipoMensagem('erro!');
            return;
        };
        if (!email.includes('@') || !email.includes('.com')) {
            setMensagemSistema('Digite um e-mail válido!');
            setTipoMensagem('erro!');
            return;
        };
        if (mensagem.length < 10){
            setMensagemSistema('Sua mensagem deve conter mais de 10 caracteres!');
            setTipoMensagem('erro!');
            return;
        };
        if (mensagem == '') {
            setMensagemSistema('Digite sua mensagem!');
            setTipoMensagem('erro!');
            return;
        };

        setMensagemSistema('Mensagem enviada com sucesso!');
        setTipoMensagem('sucesso!');

        setNome('');
        setEmail('');
        setMensagem('');
    }

    return (
        <ScrollView>

            {/* TOPO - HEADER*/}
            <View style={styles.header}>
                <Link href='/' asChild>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/cafecentral.jpg')} style={styles.headerLogo} />
                    </TouchableOpacity>
                </Link>

                <Link href='/login' asChild>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/icone_perfil.png')} style={styles.iconeLogin} />
                    </TouchableOpacity>
                </Link>
            </View>

            {/* ============================================================================================================ */}
            {/* MENU */}
            <View style={styles.hero}>
                <View style={styles.heroIndex}>
                    <Link href='/' asChild><TouchableOpacity style={styles.menuItem}><Text>Início</Text></TouchableOpacity></Link>
                    <Link href='/sobre' asChild><TouchableOpacity style={styles.menuItem}><Text>Sobre</Text></TouchableOpacity></Link>
                    <Link href='/contato' asChild><TouchableOpacity style={{ ...styles.menuItem, ...styles.ativo }}><Text>Contato</Text></TouchableOpacity></Link>
                </View>
            </View>

            {/* ============================================================================================================ */}
            {/* BASE - BODY */}
            <View style={styles.container}>
                <View style={styles.pagina}>
                    <Text style={styles.titulo}>
                        Fale Conosco
                    </Text>
                    <View style={styles.blocoAuth}>
                        <Text style={styles.label}>Nome: </Text>
                        <TextInput placeholder='Digite seu nome'
                            style={styles.input}
                            value={nome}
                            onChangeText={setNome}>
                        </TextInput>

                        <Text style={styles.label}>E-mail: </Text>
                        <TextInput placeholder='Digite seu e-mail'
                            keyboardType='email-address'
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}>
                        </TextInput>

                        <Text style={styles.label}>Mensagem: </Text>
                        <TextInput placeholder='Digite sua Mensagem'
                            style={styles.input}
                            multiline={true}
                            numberOfLines={7}
                            value={mensagem}
                            onChangeText={setMensagem}>
                            {/* multiline para adicionar mais linhas ao input
                                junto com o numberoflines para adicionar o numero de linhas que quer a mais */}
                        </TextInput>

                        <Text style={tipoMensagem == 'erro!' ? styles.mensagemErro : styles.mensagemSucesso}>
                            {mensagemSistema}
                        </Text>

                        <TouchableOpacity style={styles.btnSubmit} onPress={validarFormulario}>
                            <Text style={styles.textoSubmit}>Enviar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            {/* ============================================================================================================ */}
            {/* RODAPÉ - FOOTER */}
            <View style={styles.rodape}>
                { /* Texto de direitos de autorais */}
                <Text style={styles.textoRodape}> © 2026 Café Central. Todos os direitos reservados.</Text>

                { /* Links de Contato */}
                <Link href='/contato' asChild>
                    <Text style={styles.linkRodape}>Entre em contato</Text>
                </Link>
            </View>
        </ScrollView>
    );
}