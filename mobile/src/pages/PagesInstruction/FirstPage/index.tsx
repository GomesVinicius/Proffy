import React from 'react';

import InstructionPage from '../../../components/InstructionPage';

import studyIcon from '../../../assets/images/icons/study.png';
import { useNavigation } from '@react-navigation/native';

function PageInstructionFirst() {
    const navigation = useNavigation();
    
    function handleToPageInstructionSecond() {
        navigation.navigate('PageInstructionSecond');
    }

    return (
        <InstructionPage
            backgroundColor="#8257e5"
            icon={studyIcon}
            numberPage="01."
            subtitle={`Encontre vários\nprofessores para\nensinar você.`}
            colorIndex="#8257E5"
            clickIcon={handleToPageInstructionSecond}
        />
    )

}

export default PageInstructionFirst;
