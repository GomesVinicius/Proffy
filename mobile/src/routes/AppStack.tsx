import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StudyTabs from './StudyTabs';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import PageInstructionFirst from '../pages/PagesInstruction/FirstPage';
import PageInstructionSecond from '../pages/PagesInstruction/SecondPage';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="PageInstructionFirst" component={PageInstructionFirst} />
                <Screen name="Landing" component={Landing} />
                <Screen name="PageInstructionSecond" component={PageInstructionSecond} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
