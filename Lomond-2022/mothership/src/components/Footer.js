

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

import S from '../constants/styles';
import C from '../constants/colours';
import T from '../constants/text';

export default function Footer(props){

    const previousPage = props.previousPage ? <Text style={S.boldSubTitle}>{T.GO_TO} {props.previousPage}</Text> : null;
    const nextPage = props.nextPage ? <Text style={S.boldSubTitle}>{T.GO_TO} {props.nextPage.TITLE}</Text> : null;
    return (
        <View style={S.footerContainerLight}>
            {/* LEFT SIDE BUTTON = PREVIOUS PAGE IF NOT NULL */}
            <TouchableOpacity onPress={()=> props.pageChange(parseInt(props.previousPage.PAGE_NUMBER))}  style={S.flexThird}>
                {previousPage}
            </TouchableOpacity>
            {/* CENTER TEXT = CURRENT PAGE */}
            <Text style={[S.subTitle, S.flexThird]}>
                {props.currentPage.TITLE}
            </Text>
            {/* RIGHT SIDE BUTTON */}
            <TouchableOpacity onPress={()=> props.pageChange(parseInt(props.nextPage.PAGE_NUMBER))}  style={S.flexThird}>
                {nextPage}
            </TouchableOpacity>

        </View>
);
}   


