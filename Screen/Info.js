import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function Info() {
    return (
        <View style={styles.container}>
           <Text style={{fontSize: 30, color:'#660099', marginBottom: 100}}>Trần Huy Hoàng</Text>
           <Text style={{fontSize: 20, color:'#000066', marginBottom: 30}}>MSSV: PH07826</Text>
           <View style={{flexDirection:'row'}}>
           <Feather name='disc' size={30} color='#0000ff'/>
           <Text style={{margin: 5, fontSize: 18, color:'#ff3366'}}>Hà Nội</Text>
           </View>
           
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});