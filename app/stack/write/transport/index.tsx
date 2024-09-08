import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { transportText } from '@/constants/text/Transport'
import React, { SetStateAction } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { ThemedTouchView } from '@/components/ThemedTouchView'
import { handleNextPage } from '@/funtion/handlePagerView'

const index = ({allData, currentPage, setCurrentPage, pagerRef}) => {
  
    return (
        <ThemedView style={styles.container}>
            <ThemedText>이동수단</ThemedText>
            <FlatList data={transportText}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <ThemedTouchView 
                        onPress={() => handleNextPage({ pagerRef, currentPage, setCurrentPage })}
                        key={item.id} 
                        style={styles.selectBox}>
                        <ThemedView style={styles.iconBox}>
                            <TabBarIcon name='car' size={24} />
                        </ThemedView>
                        <ThemedView style={styles.contentBox}>
                            <ThemedText style={styles.content}>{item.transport}</ThemedText>
                        </ThemedView>
                        <ThemedView>
                            <TabBarIcon name='arrow-forward' size={24} />
                        </ThemedView>
                    </ThemedTouchView>
                }>
            </FlatList>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    selectBox: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    iconBox: {
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 12
    },
    contentBox: {
        flex: 1
    },
    content: {
        marginLeft: 20,
    },
    arrowBox: {

    },
})
export default index