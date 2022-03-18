import React from 'react';
import {View, StyleSheet, FlatList, Pressable, Image} from 'react-native';

import Text from '../components/text.component';
import Header from '../components/header.component';
import {language} from '../languages';
import colors from '../styles/colors.style';
import useGlobal from '../store';
import metricsStyle from '../styles/metrics.style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greys[4],
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.greys[0],
    fontSize: 24,
  },
  cardPressable: {
    width: metricsStyle.width / 2,
    aspectRatio: 1,
    overflow: 'hidden',
  },
  card: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: metricsStyle.width / 2,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  cardName: {
    marginBottom: 12,
    borderRadius: 4,
    backgroundColor: colors.blackTransparent,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: colors.greys[0],
    fontSize: 10,
    textAlign: 'center',
  },
});

function HomeScreen({navigation}) {
  const {home} = language;
  const [radio, actions] = useGlobal((state) => state.radio, actions);
  const {list} = radio;

  return (
    <>
      <Header text={home.title} />
      <View style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={true}
          renderItem={({item}) => (
            <Pressable
              key={item.id}
              onPress={() => actions.goToRadio(navigation, item)}
              style={styles.cardPressable}
              android_ripple={{
                color: colors.white,
                borderless: false,
                radius: 18,
              }}
            >
              <View style={styles.card}>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.cardName}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
            </Pressable>
          )}
          numColumns={2}
        />
      </View>
    </>
  );
}

export default HomeScreen;
