import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


const StarIconCard = ({ text, size }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 4, }}>
                <AntDesign
                    name="star"
                    size={size}
                    color={'#F5BE00'}
                    style={{ marginRight: 4 }}
                />
                <AntDesign
                    name="star"
                    size={size}
                    color={'#F5BE00'}
                    style={{ marginRight: 4 }}
                />
                <AntDesign
                    name="star"
                    size={size}
                    color={'#F5BE00'}
                    style={{ marginRight: 4 }}
                />
                <AntDesign
                    name="star"
                    size={size}
                    color={'#F5BE00'}
                    style={{ marginRight: 4 }}
                />
                <AntDesign
                    name="star"
                    size={size}
                    color={'#121212'}
                    style={{ marginRight: 4 }}
                />
                <Text
                    style={{
                        color: '#121212',
                        fontWeight: '600',
                        fontSize: 13,
                    }}>
                    {text}
                </Text>
            </View>
        </View>
    )
}

export default StarIconCard

const styles = StyleSheet.create({})