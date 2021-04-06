import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MovieCard from '../components/MovieCard';
// import jsonData from '../Data.json';
import { connect } from 'react-redux';
import {
  getMovieList,
  getMovieListDateReleases,
  getMovieListDateOld,
  getMovieListPopularityMost, getMovieListPopularityLess, getMovieListRevenueHigher, getMovieListRevenueLowest,
} from '../services/Home/action';

// const DATA = jsonData.results;
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: true,
    };
  }

  changeGridView = () => {
    this.setState({ gridView: !this.state.gridView });
  }

  componentDidMount() {
    this.props.getMovieListPopularityLess();
  }

  render() {
    const movie = this.props.movie;
    const { gridView } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBarView}>
          <Text style={styles.topBarTxt}>Home</Text>
          <TouchableOpacity>
            <FeatherIcon size={25} name="filter" color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.mainContainerTopBar}>
            <Text style={styles.mainContainerTopBarTxt}>FliterProp</Text>
            <TouchableOpacity
              style={gridView ? styles.gridViewBtnAction : styles.gridViewBtnInAction}
              onPress={() => this.changeGridView()}
            >
              {gridView ?
                (<FeatherIcon name="grid" size={22} color="grey" />) :
                (<FeatherIcon name="grid" size={22} color="grey" />)
              }
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              key={gridView ? 2 : 1}
              numColumns={gridView ? 2 : 1}
              data={movie}
              keyExtractor={item => item.id}
              renderItem={(ele) => <MovieCard
                isGridEnable={gridView}
                poster={ele.item.poster_path}
                title={ele.item.original_title}
              />}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
  },
  topBarView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#333',
    borderBottomWidth: 0.5,
  },
  mainContainer: {
    flex: 1
  },
  topBarTxt: {
    fontSize: 18,
    color: 'grey'
  },
  mainContainerTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  mainContainerTopBarTxt: {
    color: 'grey',
    fontSize: 18,
  },
  gridViewBtnAction: {
    backgroundColor: '#333',
    borderRadius: 20,
    padding: '2%',
  },
  gridViewBtnInAction: {
    borderRadius: 20,
    padding: '2%',
  }
});

const mapStateToProps = state => ({
  movie: state.home.movieList,
});

const mapDispatchToProps = dispatch => ({
  getMovieList: () => dispatch(getMovieList()),
  getMovieListDateReleases: () => dispatch(getMovieListDateReleases()),
  getMovieListDateOld: () => dispatch(getMovieListDateOld()),
  getMovieListPopularityMost: () => dispatch(getMovieListPopularityMost()),
  getMovieListPopularityLess: () => dispatch(getMovieListPopularityLess()),
  getMovieListRevenueHigher: () => dispatch(getMovieListRevenueHigher()),
  getMovieListRevenueLowest: () => dispatch(getMovieListRevenueLowest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);