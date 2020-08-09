import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import InstructionPage from '../../../components/InstructionPage';

import giveClassesIcon from '../../../assets/images/icons/give-classes.png';

function PageInstructionSecond() {
    const navigator = useNavigation();

    async function storeData() {
        try {
            await AsyncStorage.setItem(
                'firstOpen',
                'true'
            );
            console.log('ok');
        } catch (err) {
            console.log(err);
        }

        navigator.navigate('Landing');
    }

    return (
        <InstructionPage
            backgroundColor="#04D361"
            icon={giveClassesIcon}
            numberPage="02."
            subtitle={`Ou dê aulas\nsobre o que você\nmais conhece`}
            colorIndex="#8257E5"
            clickIcon={storeData}
        />
    )

}

export default PageInstructionSecond;
