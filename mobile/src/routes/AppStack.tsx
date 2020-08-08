import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GiveClasses from '../pages/GiveClasses';
import Landing from '../pages/Landing';
import StudyTabs from './StudyTabs';
import PageInstructionFirst from '../pages/PagesInstruction/FirstPage';
import PageInstructionSecond from '../pages/PagesInstruction/SecondPage';
import AsyncStorage from '@react-native-community/async-storage';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    const isFirstOpen = AsyncStorage.getItem('firstOpen') ? true : false;

    console.log(AsyncStorage.getItem('firstOpen'));

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                {isFirstOpen
                    ? <Screen name="PageInstructionFirst" component={PageInstructionFirst} />
                    : null
                }
                <Screen name="Landing" component={Landing} />

                <Screen name="PageInstructionSecond" component={PageInstructionSecond} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
