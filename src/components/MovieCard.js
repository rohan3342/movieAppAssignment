import React, { Component, PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const POSTERBASEURL = 'https://image.tmdb.org/t/p/w185';
const GridView = (poster, title, orgTitle) => {
  return (
    <TouchableOpacity style={[styles.container, gridStyles.container]}>
      {poster === null ? (
        <Icon
          name="image-off-outline"
          style={gridStyles.posterImg}
          size={150}
          color="white"
        />
      ) : (
        <Image
          style={gridStyles.posterImg}
          source={{ uri: POSTERBASEURL + poster }} />
      )}

      <Text style={gridStyles.titleTxt}>{title !== null ? orgTitle : title}</Text>
    </TouchableOpacity>
  )
};

const getRateColor = (rate) => {
  if (rate >= 7) return 'rgba(0,255,0,0.1)';
  else if (rate < 7 && rate > 4) return 'rgba(255,255,0,0.1)';
  else return 'rgba(255,0,0,0.1)';
};

const ListView = (poster, title, releaseDate, language, genres, rate, orgTitle) => {
  return (
    <TouchableOpacity style={[styles.container, listStyles.container]}>
      {poster === null ? (
        <Icon
          name="image-off-outline"
          style={listStyles.posterImg}
          size={150}
          color="white"
        />
      ) : (
        <Image
          style={listStyles.posterImg}
          source={{ uri: POSTERBASEURL + poster }} />
      )}

      <View style={listStyles.rightView}>
        <Text style={listStyles.titleTxt}>{title !== null ? orgTitle : title}</Text>
        <View style={listStyles.yearLangView}>
          <Text style={styles.txt}>{releaseDate !== null ? releaseDate.slice(0, 4) : 'Year Not Available'}</Text>
          <View style={listStyles.line} />
          <Text style={styles.txt}>{language}</Text>
        </View>
        <Text style={styles.txt}>{genres !== null ? genres.slice(0, 3) : 'Genres Not Available'}</Text>
        <View style={[listStyles.rateCountView,
        { backgroundColor: getRateColor(rate) }]}>
          <Text style={listStyles.rateCountTxt}>{rate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

class MovieCard extends Component {

  checkGenresType = () => {
    const genres_ids = this.props.genres;
    const allGenresType = this.props.genresList;
    const currGenres = [];
    allGenresType.map(item => {
      genres_ids.map(ele => {
        return item.id === ele && currGenres.push(item.name + ' ')
      })
    })
    return currGenres;
  }

  render() {
    const { isGridEnable, poster, title, releaseDate, language, rate, orgTitle } = this.props;

    return isGridEnable ? GridView(poster, title, orgTitle) : ListView(poster, title, releaseDate, language, this.checkGenresType(), rate, orgTitle);
  }
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
    height: '60%',
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
    borderRadius: 20,
  },
  rateCountTxt: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
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


const mapStateToProps = state => ({
  genresList: state.home.genresList,
});


export default connect(mapStateToProps)(MovieCard);
