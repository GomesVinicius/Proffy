import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
    },
    top: {
        width: '100%',
        height: '45%'
    },
    bottom: {
        backgroundColor: '#fff',
        width: '100%',
        height: '55%',
        paddingLeft: 40
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
    numberTitle: {
        marginTop: 80,
        fontFamily: 'Archivo_700Bold',
        fontSize: 40,
        color: '#6A6180',
        opacity: 0.6
    },
    subtitle: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        color: '#6A6180'
    },
    footer: {
        paddingTop: 40
    },
    squareArea: {
        flexDirection: 'row',
    },
    icon: {
        transform: [{ rotate: '180deg' }],
        alignSelf: 'flex-end',
        marginRight: 41,
    }
});

export default styles;
