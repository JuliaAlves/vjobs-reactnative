import React from 'react';

import {Text} from 'react-native';

const listItem = (props) => (
<Text style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight:48,
        fontWeight:'bold',
        borderWidth: 1,
        borderColor:'#000',
        backgroundColor:'#ccc'
      }}>{props.nome}</Text>)

export default listItem;