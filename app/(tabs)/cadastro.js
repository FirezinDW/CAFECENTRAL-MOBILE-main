import { Link } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View,Image } from 'react-native';
import { styles } from './styles.js';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaconfirmar, setSenhaConfirmar] = useState('');
  const [mensagemSistema, setMensagemSistema] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');

  function validarFormulario() {
    if (nome === '') {
      setMensagemSistema('Digite seu nome!');
      setMensagem('erro');
      return;
    };
    if (/\d/.test(nome)) {
      setMensagem('O nome não pode conter numero');
      setTipoMensagem('erro');
      return;
    };
    if (email === ''){
      setMensagemSistema('');
      setMensagem('erro!');
      return;
    };
    if (!email.includes('@') || !email.includes('.com')){
      setMensagemSistema('Digite corretamente o Email');
      setTipoMensagem('erro');
      return;
    };
    if (senha === ''){
      setMensagemSistema('Digite sua Senha');
      setTipoMensagem('erro');
      return;
    };
    if (senhaconfirmar === ''){
      setMensagemSistema('Confirme sua Senha');
      setTipoMensagem('erro');
      return;
    };
    if (senha.length < 8){
      setMensagemSistema('A Senha deve conter no minimo 8 caracteres');
      setTipoMensagem('erro');
      return;
    };
    if (senhaconfirmar.length < 8){
      setMensagemSistema('A Confirmacao da senha deve conter no minimo 8 caracteres');
      setTipoMensagem('erro');
      return;
    };

    setMensagemSistema('Mensagem enviada com sucesso!');
    setMensagem('sucesso!');

    setNome('');
    setEmail('');
    setSenha('');
    setSenhaConfirmar('');
  }

  return (
    <ScrollView>
      {/* HEADER */}
      <View style={styles.header}>
          <Link href='/'>
          <Image source={require('../../assets/images/cafecentral.jpg')} style={styles.headerLogo}/>
          </Link>
          </View>

      <View style={styles.hero}>
        <View style={styles.heroIndex}>
          <Link href='/'><TouchableOpacity style={styles.menuItemC}>Início</TouchableOpacity></Link>
          <Link href='/sobre'><TouchableOpacity style={styles.menuItemC}>Sobre</TouchableOpacity></Link>
          <Link href='/contato'><TouchableOpacity style={styles.menuItemC}>Contato</TouchableOpacity></Link>
        </View>
      </View>


      {/* CONTEÚDO */}
      <View style={styles.containerC}>
        <View style={styles.paginaAuth}>
          <Text style={styles.tituloAuth}>Cadastro</Text>

          <Text style={styles.textoAuth}>
            Crie sua conta para acessar todos os recursos
          </Text>

          <View style={styles.blocoAuth}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" />

            <Text style={styles.label}>E-mail:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
            />

            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry
            />

            <Text style={styles.label}>Confirmar senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme sua senha"
              secureTextEntry
            />

            <TouchableOpacity style={styles.btnAuth} onPress={validarFormulario}>
              <Text style={styles.textoBtnAuth}>
                Cadastrar-se
              </Text>
            </TouchableOpacity>

            <Link href='/login' style={styles.linkAuthDestaque}>
              <Text style={styles.linkAuthDestaque}> Já possui uma conta?</Text>
            </Link>
          </View>
        </View>
      </View>

      {/* RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>
          2026 Café Central. Todos os direitos reservados.
        </Text>

        <Link href='/contato'>
          <Text style={styles.linkRodape}>Entre em contato</Text>
        </Link>
      </View>
    </ScrollView>
  );
}