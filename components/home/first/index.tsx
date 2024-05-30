import React, { useEffect } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Link, useRouter } from 'expo-router'
import Title from './title'
import Search from './search'
import Popular from './popular'
import Recommend from './recommend'
import Banner from './banner'
import Register from './register'

const index = () => {

  const navigate = useRouter();

  // useEffect(()=>{
  //   setTimeout(() => {
  //     navigate.navigate('stack/login');
  //   }, 10);
  // }, []);

  return (
    <FlatList data={Array(1).fill(0)}
      showsVerticalScrollIndicator={false}
      renderItem={() =>
        <ThemedView style={styles.container}>
          <Title />
          <Search />
          <Popular />
          <Recommend />
          <Banner />
          <Register />
        </ThemedView>}>
    </FlatList>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: 20,
  }
});

export default index