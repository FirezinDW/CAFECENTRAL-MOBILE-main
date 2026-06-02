import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // =======================================================================================================
    /* ================= HEADER ================= */
    header: {
        backgroundColor: '#e6e2e2',
    },

    headerLogo: {
        flex: 'flex-grow',
        flexDirection: 'row',
        justifyContent:'center',
        alignSelf: 'center',
        backgroundColor: '#e6e2e2',
        width: '100%',
        height: 140,
        resizeMode: 'contain',
    },

    menuItem: {
        color: '#000000',
        backgroundColor: '#dbd5d5',
        padding: 15,
        fontSize: 15,
        alignItems: 'center',
        borderRadius: 8,
        margin: 10,
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

    imagemContainer: {
        alignItems: 'center',
        marginBottom: 30,
      },
      
      imagemCafe: {
        width: 850,
        height: 550,
        borderRadius: 20,
        width: '90%',
        height: 250,
        resizeMode: 'contain',
        alignItems: 'center',
        marginTop: 20,
    },

    heroConteudo: {
        padding: 20,
        backgroundColor: '#745739',
    },

    heroTexto1: {
        color: '#e4ad76',
        fontSize: 20,
        fontWeight: 'medium',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    heroTexto2: {
        color: '#e4ad76',
        fontSize: 35,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 10,
        textAlign: 'center',
    },

    heroSecundario: {
        width: '10',
        height: '100',
        backgroundColor: '#202427',
        padding: 40,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-betwee',
    },

    textoLogin: {
        color: '#e4ad76',
        fontSize: 15,
        padding: 20,
        textAlign: "center"
    },

    btnAuth: {
        alignItems: 'center'
    },

    linkAuth: {
        color: 'white',
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
    heroConteudo: {
        backgroundColor: '#745739'
    },

    heroSobre: {
        backgroundColor: '#ab886d',
        alignItems: 'center',
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        margin: 30,
    },

    h1: {
        alignItems: 'center',
        color: '#e4ad76',
        fontSize: 35,
        fontWeight: 'bold',
    },

    textoSobre1: {
        color: '#ffffff',
        marginTop: 15,
        textAlign: 'center',
        fontSize: 15,
    },

    textoSobre2: {
        color: '#ffffff',
        marginTop: 15,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 15,
    },

    // =======================================================================================================
    /* ================= CONTATO ================= */
    container: {
        backgroundColor: '#745739',
        padding: 20,
    },

    containerC: {
        backgroundColor: '#745739',
        flexdiretion: 'column',
        alignItems: 'center',
        padding: 20,
    },

    containerL: {
        backgroundColor: '#745739',
        flexdiretion: 'column',
        alignItems: 'center',
        padding: 20,
    },

    heroContato: {
        flex: 1,
        backgroundColor: '#745739',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        minHeight: 500,
        borderRadius: 15,
    },

    paginaAuth: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        // Shadow para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    tituloAuth: {
        color: '#e4ad76',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    formcontato: {
        width: '100%',
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 10,
        color: '#333',
    },

    labelmensagem: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 1,
        color: '#333',
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        borderColor: '#8f8b8b',
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
    },

    btnSubmit: {
        backgroundColor: '#e4ad76',
        padding: 15,
        borderRadius: 8,
        marginTop: 15,
        alignItems: 'center',
    },

    textoSubmit: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    linkAuth: {
        textAlign: 'center',
        marginTop: 20,
        color: '#222',
        fontWeight: 'bold',
    },

    linkAuthDestaque: {
        color: '#1a4db3',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },

    btnAuth: {
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4ad76',
        width: 150,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#e4ad76',
        borderRadius: 5,
    },

    textoBtnAuth: {
        color: '#ffffff',
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        color: '#222'
    },

    textoAuth: {
        color: '#745739',
        fontSize: 15,
        textAlign: 'center',
    },

    menuItemC: {
        color: '#000000',
        backgroundColor: '#dbd5d5',
        padding: 15,
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
        gap: 10,
    },


    // =======================================================================================================
    /* ================= CARDÁPIO ================= */
    categorias: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
        elevation: 5,
    },

    btnCategoria: {
        color: '#000000',
        backgroundColor: '#dbd5d5',
        padding: 15,
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
    /* ================= LOGIN ================= */



    /* ================= CADASTRO ================= */



    /* ================= DETALHES ================= */



    /* ================= CE ================= */



    /* ================= DS ================= */



    /* ================= SL ================= */



    //*================================================================================================================================ */
    //================= RODAPÉ ================= 
    rodape: {
        backgroundColor: '#3b2a1a',
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
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

}
);