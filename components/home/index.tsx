import React, { useRef, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, Modal, Alert } from 'react-native'
import PagerView from 'react-native-pager-view'
import First from '@/components/home/first'
import Second from '@/components/home/second'
import Third from '@/components/home/third'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/header'

const index = () => {

  const [tab, setTab] = useState(0);
  const pageRef = useRef(null);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ThemedView style={styles.container}>

      {/* <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ThemedView>
          <ThemedView>
            <ThemedText>Hello World!</ThemedText>
          </ThemedView>
        </ThemedView>
      </Modal> */}

      <Header />
      <ThemedView style={styles.tab}>
        <ThemedText>지역</ThemedText>
        <ThemedText>지도</ThemedText>
        {/* <ThemedText onPress={()=>setModalVisible(true)}>123</ThemedText> */}
        {/* <ThemedText>third</ThemedText> */}
      </ThemedView>
      <PagerView style={styles.pageContiner} ref={pageRef} initialPage={0}>
        <ThemedView key="1">
          <First />
        </ThemedView>
        <ThemedView key="2">
          <Second />
        </ThemedView>
        {/* <ThemedView key="3">
          <Third />
        </ThemedView> */}
      </PagerView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  pageContiner: {
    flex: 1,
    borderWidth: 1
  },
});

export default index