import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como proessor na nossa
          plataforma web.
        </Text>

        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
          <Text style={styles.okButtonText}>Tudo bem</Text>
        </RectButton>
      </ImageBackground>
    </View>
  );
}

export default GiveClasses;
