import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import giveClassesBackground from '../../assets/images/give-classes-background.png';
import studyIcon from '../../assets/images/icons/study.png';
import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';

function InstructionPage() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ImageBackground
                    source={giveClassesBackground}
                    resizeMode="center"
                    style={styles.imageBackground}
                >
                    <Image source={studyIcon} style={styles.image} />
                </ImageBackground>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.numberTitle}>01.</Text>
                <Text style={styles.subtitle}>Encontre vários{'\n'}professores para{'\n'}ensinar você.</Text>
    
                <View style={styles.footer}>
                    <View style={styles.squareArea}>
                        <FontAwesome
                            name="square"
                            color="#8257E5"
                            size={4}
                            style={[{ marginRight: 8}]}
                        />
                        <FontAwesome
                            name="square"
                            color="#C1BCCC"
                            size={4}
                        />
                    </View>
                    <Image source={backIcon} style={styles.icon} />
                </View>
            </View>
        </View>
    )
}

export default InstructionPage;
