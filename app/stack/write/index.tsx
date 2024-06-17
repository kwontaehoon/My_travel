import React, { useRef, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, TouchableOpacity } from 'react-native'
import PagerView from 'react-native-pager-view'
import { handlePreviosPage, handleNextPage } from '@/funtion/handlePagerView'
import CountryAndDate from '@/app/stack/write/countryAndDate'
import Test from '@/app/stack/write/test'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { headerAtom } from '@/store/course'
import { useAtom } from 'jotai'
import { HeaderProps } from './type'

const write = () => {

    const pagerRef = useRef<PagerView>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [dateCount, setDateCount] = useState<number>(0);
    const [header, setHeader] = useAtom<HeaderProps>(headerAtom);

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.header}>
                {header.date !== 0 && <ThemedView style={styles.headerTitle}>
                    <TabBarIcon name="calendar-clear" size={15} style={{marginRight: 4}} />
                    <ThemedText>총 5일</ThemedText>
                </ThemedView>}
                {header.country && <ThemedView style={styles.headerTitle}>
                    <TabBarIcon name="flag" size={15} style={{marginRight: 4}} />
                    <ThemedText>대한민국</ThemedText>
                </ThemedView>}
            </ThemedView>
            <PagerView
                style={styles.pageContiner}
                initialPage={0}
                ref={pagerRef}
                scrollEnabled={false}
                onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
                <ThemedView key="1">
                    <CountryAndDate dateCount={dateCount} setDateCount={setDateCount} />
                </ThemedView>
                <ThemedView key="2">
                    <Test />
                </ThemedView>
            </PagerView>
            <ThemedView style={styles.button}>
                <TouchableOpacity style={styles.previous} onPress={()=>handlePreviosPage({pagerRef, currentPage, setCurrentPage})}>
                    <ThemedText>이전</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.next} onPress={()=>handleNextPage({pagerRef, currentPage, setCurrentPage})}>
                    <ThemedText>다음</ThemedText>
                </TouchableOpacity>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        gap: 8
    },
    headerTitle: {
        borderWidth: 1,
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    pageContiner: {
        flex: 1,
        borderWidth: 1,
    },
    button: {
        flexDirection: 'row',
        padding: 20
    },
    previous: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginRight: 10,
        height: 40,
        borderRadius: 8,
    },
    next: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginLeft: 10,
        height: 40,
        borderRadius: 8,
    }
});

export default write