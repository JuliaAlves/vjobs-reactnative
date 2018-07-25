import React from 'react';
import {View, FlatList } from 'react-native';
import Item from '../ListItem/ListItem.js';

const separatorStyle = {
    flexGrow:1, height:5, backgroundColor:'#fff'
  }

const list = (props) =>(
    <FlatList data={props.vagas}
        renderItem={({item})=> <Item nome={item.nome} />}
        keyExtractor={(item) => `${item.id}`}
        style={{
        flex:1,
        backgroundColor:'white'
        }}
        ItemSeparatorComponent={() => <View style={separatorStyle} />}
    />
);

export default list;