

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

import S from '../constants/c1--Styles';
import C from '../constants/c2--Colours';
import O from '../constants/c3--Objects';
import T from '../constants/c4--Text';
import L from '../constants/c5--Links';
import A from '../constants/c6--Actions';
import N from '../constants/c7--Navigation';
import D from '../constants/c8--Data';

export default function Footer(props){

    const previousPage = props.previousPage ? <TouchableOpacity onPress={()=> props.pageChange(parseInt(props.previousPage.PAGE_NUMBER))}  style={S.flexThird}><Text style={S.boldSubTitle}>{T.GO_TO} {props.previousPage.TITLE}</Text></TouchableOpacity> : <View style={S.flexThird}></View>;

    const nextPage = props.nextPage ? <TouchableOpacity onPress={()=> props.pageChange(parseInt(props.nextPage.PAGE_NUMBER))}  style={S.flexThird}><Text style={S.boldSubTitle}>{T.GO_TO} {props.nextPage.TITLE}</Text></TouchableOpacity> : null;
    
    return (
        <View style={S.footerContainerLight}>
            {/* LEFT SIDE BUTTON = PREVIOUS PAGE IF NOT NULL */}
            
                {previousPage}
            
            {/* CENTER TEXT = CURRENT PAGE */}
            
                <Text style={[S.subTitle, S.flexThird]}>
                    {props.currentPage.TITLE}
                </Text>
            
            {/* RIGHT SIDE BUTTON NEXT PAGE IF NOT NULL */}
              
                {nextPage}
            
        </View>
);
}   


