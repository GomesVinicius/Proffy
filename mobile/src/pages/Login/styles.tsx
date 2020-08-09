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

    },
    title: {
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    subtitle: {
        color: '#D4C2FF',
        alignSelf: 'center'
    },
    textArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 30,
        marginLeft: 30
    },
    textBottomTitle: {
        
    },
    textCreateAccount: {

    },
    inputArea: {
        
        alignSelf: 'center'
    },
    textHelp: {

    },
    button: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 40
    },
    textButton: {
        
    }
});

export default styles;
