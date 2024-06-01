import React, { useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { buttonCount } from '@/funtion/buttonCount'
import { DateCountProps } from './type'

const index = ({ dateCount, setDateCount }: DateCountProps) => {

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.date}>
        <ThemedView style={styles.dateTitle}>
          <ThemedText>기간</ThemedText>
          <ThemedText>총 여행 기간</ThemedText>
        </ThemedView>
        <ThemedView style={styles.dateButton}>
          <TouchableOpacity style={styles.countButton} 
            onPress={()=>buttonCount({count: dateCount, setCount: setDateCount, flag: ''})}>
            <TabBarIcon name="remove" />
          </TouchableOpacity>
          <ThemedText style={styles.count}>{dateCount}</ThemedText>
          <TouchableOpacity style={styles.countButton}
            onPress={()=>buttonCount({count: dateCount, setCount: setDateCount, flag: 'add'})}>
            <TabBarIcon name="add" />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.country}>
        <ThemedText>나라를 입력해주세요</ThemedText>
        <TextInput style={styles.textInput}/>
      </ThemedView>
      <ThemedView style={styles.local}>
        <ThemedText>지역을 입력해주세요</ThemedText>
        <TextInput style={styles.textInput}/>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  date: {
    flexDirection: 'row',
    marginBottom: 20
  },
  dateTitle: {
  },
  dateButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  countButton: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 999
  },
  count: {
    marginLeft: 20,
    marginRight: 20
  },
  country: {
    marginBottom: 20
  },
  textInput: {
    borderBottomWidth: 1,
    marginTop: 8,
  },
  local: {

  }
});

export default index