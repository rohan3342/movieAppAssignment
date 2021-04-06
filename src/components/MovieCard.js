import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const POSTERBASEURL = 'https://image.tmdb.org/t/p/w185';
const GridView = (poster, title) => {
  return (
    <TouchableOpacity style={[styles.container, gridStyles.container]}>
      <Image
        style={gridStyles.posterImg}
        source={{ uri: POSTERBASEURL + poster }} />
      <Text style={gridStyles.titleTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

const ListView = (poster, title) => {
  return (
    <TouchableOpacity style={[styles.container, listStyles.container]}>
      <Image
        style={listStyles.posterImg}
        source={{ uri: POSTERBASEURL + poster }} />

      <View style={listStyles.rightView}>
        <Text style={listStyles.titleTxt}>{title}</Text>
        <View style={listStyles.yearLangView}>
          <Text style={styles.txt}>Year</Text>
          <View style={listStyles.line} />
          <Text style={styles.txt}>Language</Text>
        </View>
        <Text style={styles.txt}>Genre Array</Text>
        <View style={listStyles.rateCountView}>
          <Text style={listStyles.rateCountTxt}>10</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const MovieCard = ({ isGridEnable, poster, title }) => {
  return isGridEnable ? GridView(poster, title) : ListView(poster, title);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  txt: {
    fontSize: 16,
    color: 'grey',
  },
});

const listStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  posterImg: {
    marginLeft: -15,
    borderRadius: 10,
    height: 230,
    width: '45%',
  },
  rightView: {
    marginLeft: 15,
    flex: 1,
    flexWrap: 'nowrap',
  },
  yearLangView: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 12,
    borderWidth: 0.5,
    borderColor: 'grey',
    marginHorizontal: 10,
  },
  titleTxt: {
    fontSize: 18,
    color: 'grey',
  },
  rateCountView: {
    position: 'absolute',
    bottom: 10,
    width: 50,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 20,
  },
  rateCountTxt: {
    fontSize: 16,
  }
});

const gridStyles = StyleSheet.create({
  container: {},
  posterImg: {
    borderRadius: 10,
    height: 230,
    width: '100%',
  },
  titleTxt: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    color: 'grey',
  },
});

export default MovieCard;
