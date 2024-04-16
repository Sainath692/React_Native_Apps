import react from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import React from 'react';
import {create} from 'react-test-renderer';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container]}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#ff0000',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
