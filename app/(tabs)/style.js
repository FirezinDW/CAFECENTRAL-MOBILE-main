import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
// =======================================================================================================
/* ================= HEADER ================= */
    header: {
        backgroundColor: '#dbd5d5',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
    },

    headerLogo: {
        width: 60,
        height: 60,
        display: 'none',
        backgroundColor: '#dbd5d5',
        borderRadius: 50,
    },

    menuItem: {
        color: '#000000',
        backgroundColor: '#dbd5d5',
        padding: 25,
        fontSize: 15,
        alignSelf: 'center',
        borderRadius: 8,
        margin: 10,
        textDecorationLine: 'none',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,    
        elevation: 5,
    },
// =======================================================================================================
/* ================= INDEX   ================= */
    hero: {
        backgroundColor: '#745739',
    },
    
    heroIndex: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
        elevation: 5,
    },

    heroImagem: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },

    heroConteudo: {
        padding: 20,
        backgroundColor: '#745739',
    },

    heroTexto1: {
        color: '#e4ad76',
        fontSize: 20,
        fontWeight: 'medium',
        justifyContent: 'center',
        alignItems: 'center',
    },

    heroTexto2: {
        color: '#e4ad76',
        fontSize: 35,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 10,
    },

    heroSecundario: {
        backgroundColor: '#202427',
        padding: 40,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoLogin: {
        color: '#e4ad76',
        fontSize: 15,
        padding: 20,
    },  

    linkAuth: {  
        color: '#202427',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4ad76',
        padding: 10,
        borderWidth: 1,
        borderColor: '#e4ad76',
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,   
    },

// =======================================================================================================
/* ================= SOBRE ================= */


// =======================================================================================================
//================= RODAPÉ ================= 

    rodape: {
        backgroundColor: '#3b2a1a',
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    textoRodape: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    },

    linkRodape: {
        color: '#e4ad76',
        fontWeight: 'bold',
        fontSize: 15,
    },
    });
//*================================================================================================================================ */