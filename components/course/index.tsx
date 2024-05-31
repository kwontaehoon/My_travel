import React, { useEffect } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '@/components/header'
import { ThemedText } from '@/components/ThemedText'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { useRouter } from 'expo-router'

const index = () => {

  const navigate = useRouter();

  useEffect(()=>{
    setTimeout(() => {
      navigate.navigate('stack/write');
    }, 10);
  }, []);

  const dummy = [
    { id: 1, title: '헝거게임: 노래하는 새와 뱀의 발라드', content: '감독: 프란시스 래렌스' },
    { id: 2, title: '스노우맨(The Snowman, 2017)', content: '감독: 토마스 알프레드슨' },
    { id: 4, title: '97분 (97 minutes, 2023)', content: '감독: 티모 부오렌솔라' },
    { id: 5, title: '97분 (97 minutes, 2023)', content: '감독: 티모 부오렌솔라' },
    { id: 6, title: '97분 (97 minutes, 2023)', content: '감독: 티모 부오렌솔라' },
    { id: 7, title: '97분 (97 minutes, 2023)', content: '감독: 티모 부오렌솔라' },
    { id: 8, title: '97분 (97 minutes, 2023)', content: '감독: 티모 부오렌솔라' },
  ]
  return (
    <ThemedView style={styles.container}>
      <Header />
      <TouchableOpacity style={styles.write} activeOpacity={0.5} onPress={()=>navigate.navigate('stack/write')}>
        <TabBarIcon name='add' size={20} color={'white'} />
      </TouchableOpacity>
      <ThemedView style={styles.filter}>
        <ThemedText type='defaultSemiBold'>추천 순</ThemedText>
      </ThemedView>
      <FlatList data={dummy}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => 
            <ThemedView key={item.id} style={styles.content}>
              <ThemedView style={styles.text}>
                <ThemedText>{item.title}</ThemedText>
                <ThemedText>{item.content}</ThemedText>
              </ThemedView>
              <ThemedView style={styles.img}>
              </ThemedView>
            </ThemedView>
        }>
      </FlatList>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  write: {
    borderWidth: 1,
    position: 'absolute',
    bottom: 50,
    right: 20,
    width: 40,
    height: 40,
    zIndex: 10,
    backgroundColor: 'blue',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center'
  },
  filter: {
    padding: 20,
    paddingBottom: 8,
    alignItems: 'flex-end'
  },
  content: {
    borderBottomWidth: 1,
    height: 150,
    flexDirection: 'row',
    padding: 20
  },
  text: {
    flex: 1,
    borderWidth: 1
  },
  img: {
    width: 120,
    borderWidth: 1
  }
});

export default index