import React, { useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { buttonCount } from '@/funtion/buttonCount'
import { useAtom } from 'jotai';
import { HeaderProps } from './type';
import { headerAtom } from '@/store/course';
import { ThemedTouchView } from '@/components/ThemedTouchView';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

interface SomeComponentProps {
  info?: number
}

const index = (allData: SomeComponentProps) => {

  const [header, setHeader] = useAtom<HeaderProps>(headerAtom);
  const [selected, setSelected] = useState('');
  const [calendarDisplay, setCalendarDisplay] = useState<boolean>(false);

  return (
    <FlatList data={Array(1).fill(false)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) =>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.date}>
            <ThemedView style={styles.dateTitle}>
              <ThemedText>기간</ThemedText>
              <ThemedText>총 여행 기간</ThemedText>
            </ThemedView>
            <ThemedView style={styles.dateButton}>
              <TouchableOpacity style={styles.countButton}
                onPress={() => buttonCount(header, setHeader, 'subtract')}>
                <TabBarIcon name="remove" />
              </TouchableOpacity>
              <ThemedText style={styles.count}>{header.date}</ThemedText>
              <TouchableOpacity style={styles.countButton}
                onPress={() => buttonCount(header, setHeader, 'add')}>
                <TabBarIcon name="add" />
              </TouchableOpacity>
            </ThemedView>
          </ThemedView>
          <ThemedTouchView style={styles.calendarBox}
            onPress={()=>setCalendarDisplay(!calendarDisplay)}>
            <ThemedView style={styles.calendar}>
              <ThemedText>달력</ThemedText>
            </ThemedView>
            <TabBarIcon name='arrow-down' size={20} />
          </ThemedTouchView>
          {calendarDisplay &&
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
              }}
            />}

          <ThemedView style={styles.country}>
            <ThemedText>나라를 입력해주세요</ThemedText>
            <TextInput style={styles.textInput} />
          </ThemedView>
          <ThemedView style={styles.local}>
            <ThemedText>지역을 입력해주세요</ThemedText>
            <TextInput style={styles.textInput} />
          </ThemedView>
        </ThemedView>
      }>
    </FlatList>

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
  calendarBox: {
    borderWidth: 1,
    padding: 9,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  calendar: {
    flex: 1,
  },
  country: {
    marginBottom: 20
  },
  textInput: {
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 10,
    padding: 5,
  },
  local: {

  }
});

export default index