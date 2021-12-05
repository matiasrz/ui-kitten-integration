import React from 'react';
import * as eva from '@eva-design/eva';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApplicationProvider } from '@ui-kitten/components';

import { Navigation } from 'routes';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaProvider>
    </ApplicationProvider>
  )
}

