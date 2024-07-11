import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoBackButton from '../../components/GoBackbutton/GoBackButton'
import StarIconCard from '../../components/StarIconCard/StarIconCard'
import ProductCard from '../../components/ProductCard/ProductCard'

const AuthorDetail = (props) => {
    const data = props.route.params.data
    console.log('data here', data);
    return (
        <ScrollView style={{ marginHorizontal: 24 }}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <GoBackButton />
                <Text style={{ color: '#121212', fontSize: 18, fontWeight: '700', left: 104 }}>
                    Authors
                </Text>
            </View>
            <View style={styles.AuthorContainer}>
                <Image source={data.photo} style={styles.image} />
                <Text style={{ color: '#000', fontWeight: '400', fontSize: 13, marginTop: 4 }}>{data.specialist}</Text>
                <Text style={{ color: '#121212', fontSize: 16, fontWeight: '700', marginTop: 6 }}>{data.name}</Text>
                <StarIconCard size={18} text={`(${data.rating}.0)`} />
            </View>
            <Text style={{ color: '#121212', fontSize: 16, fontWeight: '700', marginTop: 22 }} >About</Text>
            <Text style={{ color: '#7a7a7a', fontWeight: '300', marginTop: 6 }}>{data.title}</Text>
            <Text style={{ color: '#121212', fontSize: 16, fontWeight: '700', marginTop: 24 }} >Products</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <ProductCard image={require('../../assets/icons/product4.png')} title={'The Da Vinci Code'} price={`$27.12`} />
                <ProductCard image={require('../../assets/icons/product1.png')} title={'Carrie Fisher'} price={`$19.62`} />
                <ProductCard image={require('../../assets/icons/product2.png')} title={'The Good Sister'} price={`$17.32`} />
                <ProductCard image={require('../../assets/icons/product3.png')} title={'The Waiting'} price={`$31.20`} />
            </View>

        </ScrollView>
    )
}

export default AuthorDetail

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        // alignSelf: 'center'
    },
    AuthorContainer: {
        marginTop: 24,
        alignItems: "center",
        justifyContent: 'center'
    },
})