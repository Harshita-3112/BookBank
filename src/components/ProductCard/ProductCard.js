import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'

const ProductCard = ({ image, title, price }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{ marginTop: 14 }}>
                <Image source={image} style={styles.image} />
            </View>
            <Text style={{ color: '#000', fontWeight: '500', marginTop: 4 }}>{title}</Text>
            <Text style={{ color: '#54408C', fontWeight: '600', fontSize: 12, }}>{price}</Text>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    image: {
        height: scale(130),
        width: '100%',
        borderRadius: 8,
        resizeMode: "contain"

    },
    container: {
        height: scale(180),
        width: '44%',
        // backgroundColor: 'red'
    }
})