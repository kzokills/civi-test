/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Text,
  HStack,
  Switch,
  useColorMode,
  NativeBaseProvider,
  View,
} from 'native-base';

import {Home} from './src/screens';

import ReduxProvider from './src/state/ReduxProvider';

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  return (
    <ReduxProvider>
      <NativeBaseProvider>
        <View
          _dark={{bg: 'blueGray.900'}}
          _light={{bg: 'blueGray.50'}}
          px={4}
          flex={1}>
          <Home />
          <ToggleDarkMode />
        </View>
      </NativeBaseProvider>
    </ReduxProvider>
  );
};
export default App;
