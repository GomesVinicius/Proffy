import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import InstructionPage from '../../../components/InstructionPage';

import studyIcon from '../../../assets/images/icons/study.png';
import { View } from 'react-native';

function PageInstructionFirst() {
    const navigation = useNavigation();
    const [isFirstOpen, setFirstOpen] = useState(false);


    async function getData() {
        try {
            const value = await AsyncStorage.getItem('firstOpen2');

            if (value !== null) {
                setFirstOpen(false);
                console.log(isFirstOpen)
                navigation.navigate('Landing');
                return;
            }
            console.log(value)
            setFirstOpen(true);

        } catch (err) {
            setFirstOpen(false);
            console.log(isFirstOpen)
            return;
        }
    }

    useEffect(() => {
        getData();
    }, []);

    function handleToPageInstructionSecond() {
        navigation.navigate('PageInstructionSecond');
    }

    return (
        <>
            {isFirstOpen
                ? <InstructionPage
                    backgroundColor="#8257e5"
                    icon={studyIcon}
                    numberPage="01."
                    subtitle={`Encontre vários\nprofessores para\nensinar você.`}
                    colorIndex="#8257E5"
                    clickIcon={handleToPageInstructionSecond}
                />

                : <View />
            }
        </>

    )

}

export default PageInstructionFirst;
