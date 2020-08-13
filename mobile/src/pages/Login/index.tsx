import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View, ImageBackground, Image, Text, CheckBox, Platform, KeyboardAvoidingView } from 'react-native';

import logo from '../../assets/images/logo.png';
import giveClassesBackground from '../../assets/images/give-classes-background.png';

import styles from './styles';

function Login() {
    const [isSelectCheck, setIsSelectCheck] = useState(false);
    const [revealPassword, setRevealPassword] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={styles.top}>
                    <ImageBackground
                        source={giveClassesBackground}
                        resizeMode="center"
                        style={styles.imageBackground}
                    >
                        <View style={styles.titleArea}>
                            <Image source={logo} style={styles.title} resizeMode="contain" />
                            <Text style={styles.subtitle}>Sua plataforma de{'\n'}estudos online.</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.textArea}>
                        <Text style={styles.textLogin}>Fazer Login</Text>
                        <Text style={styles.textCreateAccount}>Criar uma conta</Text>
                    </View>

                    <View style={styles.inputArea}>
                        <TextInput style={[styles.input, { borderTopLeftRadius: 8, borderTopRightRadius: 8 }]} placeholder="E-mail" keyboardType="email-address" />
                        <View style={styles.passwordContainer}>
                            <TextInput style={[styles.input, { borderTopWidth: 0, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }]} placeholder="Senha" secureTextEntry={revealPassword} />
                            <Feather
                                onPress={() => setRevealPassword(!revealPassword)}
                                style={styles.iconEye}
                                color="#000"
                                name={revealPassword ? "eye-off" : "eye"}
                                size={24}
                            />
                        </View>
                    </View>

                    <View style={styles.textArea}>
                        <View style={styles.rememberMeArea}>
                            <CheckBox
                                style={styles.checkButton}
                                value={isSelectCheck}
                                onValueChange={setIsSelectCheck}
                            />
                            <Text style={styles.textHelp}>
                                Lembrar-me
                        </Text>
                        </View>
                        <Text style={styles.textHelp}>Esqueci minha senha</Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;
