import {
    View, // Para agrupar elementos (= div)
    Text, // Para exibir textos (= p, h1...)
    TouchableOpacity, // Para botões clicáveis (= button)
    ScrollView, // Para a área principal com scroll,
    StyleSheet, // Para aplicar estilo na página,
    Image,
    FlatList,
    TextInput
} from 'react-native'; // Importa os componentes View e Text
import { useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Detalhes() {

    const {
        titulo,
        img,
        descricao,
        pc
    } = useLocalSearchParams();

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
                    <Link href='/contato'><TouchableOpacity style={styles.menuItem}>Contato</TouchableOpacity></Link>
                </View>
            </View>
            <View>
                <Text style={styles.etiqueta}>
                    Detalhes do Produto
                </Text>

                <Text style={styles.Produtotitulo}>
                    {titulo}
                </Text>

                <Text style={styles.Produtodescricao}>
                    {descricao}
                </Text>

                <Text style={styles.Produtopreco}>
                    R$ {pc.toFixed(2)}
                </Text>

                <Link href='/cardapio' asChild>
                    <TouchableOpacity style={styles.btnVoltar}>
                        <Text style={styles.textoBtn}>
                            Voltar para o Cardápio
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>

            {/* ============================================================================================================ */}
            {/* RODAPÉ */}
            <View style={styles.rodape}>
                <Text style={styles.textoRodape}> 2026 Café Central. Todos os direitos reservados.</Text>
                <Link href='/contato'>
                    <Text style={styles.linkRodape}>Entre em contato</Text>
                </Link>
            </View>
        </ScrollView>
    )

};