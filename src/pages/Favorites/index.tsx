import React, { useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachars = JSON.parse(response);
        setFavorites(favoritedTeachars);
      }
    });
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos"></PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
