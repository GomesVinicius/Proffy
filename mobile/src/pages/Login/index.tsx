import React from 'react';

import { View, ImageBackground, Image, Text } from 'react-native';
import giveClassesBackground from '../../assets/images/give-classes-background.png';
import logo from '../../assets/images/logo.png';

import styles from './styles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ImageBackground
                    source={giveClassesBackground}
                    resizeMode="center"
                    style={styles.imageBackground}
                >
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>Proffy</Text>
                        <Text style={styles.subtitle}>Sua plataforma de{'\n'}estudos online.</Text>
                    </View>
                </ImageBackground>
            </View>
                <View style={styles.bottom}>
                    <View style={styles.textArea}>
                        <Text style={styles.textBottomTitle}>
                            Fazer Login
                        </Text>
                        <Text style={styles.textCreateAccount}>
                            Criar uma conta
                        </Text>
                    </View>

                    <View style={styles.inputArea}>
                        <TextInput placeholder="E-mail" />
                        <TextInput placeholder="Senha" />
                    </View>

                    <View style={styles.textArea}>
                        <Text style={styles.textHelp}>Lembrar-me</Text>
                        <Text style={styles.textHelp}>Esqueci minha senha</Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default Login;
