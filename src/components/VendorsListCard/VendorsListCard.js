import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StarIconCard from '../StarIconCard/StarIconCard';

const VendorsListCard = ({ image, title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <View>
                <StarIconCard size={14} />
            </View>
        </View>
    );
}

export default VendorsListCard;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    imageContainer: {
        height: 90,
        width: 90,
        borderRadius: 8,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
    image: {
        height: '76%',
        width: '86%',
    },
    title: {
        color: 'black',
        fontWeight: '500',
        fontSize: 15,
        marginTop: 6,
    },
});
