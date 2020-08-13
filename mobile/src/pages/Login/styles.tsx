import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    top: {
        width: '100%',
        height: '50%',
        backgroundColor: '#8257E5'
    },
    bottom: {
        width: '100%',
        height: '50%',
        backgroundColor: '#E5E5E5'
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '25%',
        height: '25%',
        alignSelf: 'center'
    },
    titleArea: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        alignSelf: 'center',
        width: 160,
        height: 46.75
    },
    subtitle: {
        textAlign: 'left',
        color: '#D4C2FF',
        alignSelf: 'center',
        marginLeft: -20
    },
    textArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 32,
        marginLeft: 32,
        marginTop: 20
    },
    rememberMeArea: {
        flexDirection: 'row'
    },
    textLogin: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#32264D',
    },
    textCreateAccount: {
        alignSelf: 'baseline',
        color: '#8257E5',
        fontSize: 12,
        lineHeight: 24
    },
    inputArea: {
        margin: 24
    },
    input: {
        backgroundColor: '#FAFAFC',
        justifyContent: 'center',
        borderColor: '#E6E6F0',
        borderStyle: 'solid',
        alignSelf: 'center',
        paddingLeft: 24,
        borderWidth: 1,
        height: 64,
        width: '100%',
    },
    passwordContainer: {
        flexDirection: 'row',
    },
    iconEye: {
        position: 'absolute',
        alignSelf: 'center',
        right: 10
    },
    textHelp: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#9C98A6',
        lineHeight: 24
    },
    checkButton: {
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#DCDCE5',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        height: 64,
        width: '90%',
        marginBottom: 30
    },
    textButton: {
        color: '#9C98A6',
        fontFamily: 'Archivo_700Bold',
        textAlign: 'center'
    }
});

export default styles;
