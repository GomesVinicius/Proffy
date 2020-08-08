import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, ImageBackground, Text, Image, ImageProps } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import giveClassesBackground from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

interface InstructionPageProps {
    backgroundColor: string;
    icon: ImageProps;
    numberPage: string;
    subtitle: string;
    colorIndex: string;
    clickIcon: Function;
}

const InstructionPage:React.FC<InstructionPageProps> = ({ icon, numberPage, subtitle, colorIndex, backgroundColor, clickIcon }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.top, { backgroundColor: backgroundColor }]}>
                <ImageBackground
                    source={giveClassesBackground}
                    resizeMode="center"
                    style={styles.imageBackground}
                >
                    <Image source={icon} style={styles.image} />
                </ImageBackground>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.numberTitle}>{numberPage}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
    
                <View style={styles.footer}>
                    <View style={styles.squareArea}>
                        <FontAwesome
                            name="square"
                            color="#8257E5"
                            size={4}
                            style={[{ marginRight: 8 }]}
                        />
                        <FontAwesome
                            name="square"
                            color="#C1BCCC"
                            size={4}
                        />
                    </View>
                    <BorderlessButton onPress={clickIcon}>
                        <Image source={backIcon} style={styles.icon} />
                    </BorderlessButton>
                </View>
            </View>
        </View>
    )
}

export default InstructionPage;
