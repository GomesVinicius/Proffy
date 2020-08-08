import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';

import giveClassesBackground from '../../assets/images/give-classes-background.png';
import logo from '../../assets/images/logo.png';

import styles from './styles';

function Introduction() {
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" source={giveClassesBackground} style={styles.imageBackground}>
                <Image source={logo} style={styles.imageLogo} />
                <Text style={styles.textSubtitle}>Sua plataforma de{'\n'}estudos online</Text>
            </ImageBackground>
        </View>
    )
}

export default Introduction;
