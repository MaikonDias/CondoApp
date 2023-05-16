import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardConteudo}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#33f',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: Dimensions.get('window').width / 2.3,
    },
    cardConteudo: {
        marginHorizontal: 15,
        marginVertical: 16
    }
})