import React, { useRef, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { StyleSheet, TouchableOpacity } from 'react-native'
import PagerView from 'react-native-pager-view'
import { handleNextPage } from '@/funtion/handlePagerView'

const write = () => {
    const pagerRef = useRef<PagerView>(null);
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <ThemedView style={styles.container}>
            <ThemedView>
                
            </ThemedView>
            <PagerView
                style={styles.pageContiner}
                initialPage={0}
                ref={pagerRef}
                scrollEnabled={false}
                onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
                <ThemedView key="1">
                    <ThemedText>11</ThemedText>
                </ThemedView>
                <ThemedView key="2">
                    <ThemedText>22</ThemedText>
                </ThemedView>
            </PagerView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    pageContiner: {
        flex: 1,
        borderWidth: 1
    }
});

export default write