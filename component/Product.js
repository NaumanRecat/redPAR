import React from "react";
import { View, Text, Button, ScrollView } from 'react-native';
import Header from "./Header";

const Product = () => {

    const List = [
        {
            name: 'Iphone 14',
            price: 480000,
            color: 'Deep Purple'
        },
        {
            name: 'Iphone 13 pro max',
            price: 370000,
            color: 'Blue'
        },
        {
            name: 'Iphone 12 pro max',
            price: 215000,
            color: 'Golden'
        },
        {
            name: 'Iphone 11 pro max',
            price: 173000,
            color: 'Jet Black'
        },
        {
            name: 'Iphone Xs max',
            price: 48000,
            color: 'Deep Purple'
        },
    ]

    const AddCart =()=>{
        console.warn('Add to Cart')
    }


    return (
        <View>
            <Header/>
            {
                List.length ? List.map((item) => (
                    <ScrollView style={{
                        borderWidth:1,
                        padding:25,
                        marginBottom:15,
                        marginLeft:10,
                        marginRight:10,
                        borderRadius:15,
                        marginTop:10,
                        borderColor:'orange',
                    }}>
                        <Text style={{fontSize:20}}>Name: {item.name}</Text>
                        <Text style={{fontSize:20}}>Price: {item.price}</Text>
                        <Text style={{fontSize:20}}>Color: {item.color}</Text>
                        <Button title="Add to Cart" onPress={()=>AddCart()} />
                    </ScrollView>
                )) : null
            }
        </View>
    )
}
export default Product