import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MovieCard from '../components/MovieCard';
import { connect } from 'react-redux';
import {
  getMovieList,
  getMovieGenres,
  getMovieListDateOld,
  getMovieListDateReleases,
  getMovieListPopularityMost,
  getMovieListPopularityLess,
  getMovieListRevenueHigher,
  getMovieListRevenueLowest,
} from '../services/Home/action';
import FilterModel from '../components/FilterModel';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: false,
      isFilterModalVisible: false,
      activeFilter: 'Most Popular',
    };
  }

  changeGridView = () => {
    this.setState({ gridView: !this.state.gridView });
  }

  changeModalView = (value) => {
    this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible });
  };

  activeFilter = (value) => {
    this.setState({ activeFilter: value })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Update');
    if (prevState !== this.state) {
      switch (this.state.activeFilter) {
        case 'Releases':
          return this.props.getMovieListDateReleases();
        case 'Old Movies':
          return this.props.getMovieListDateOld();
        case 'Most Popular':
          return this.props.getMovieListPopularityMost();
        case 'Least Popular':
          return this.props.getMovieListPopularityLess();
        case 'Highest Grossing':
          return this.props.getMovieListRevenueHigher();
        case 'Leat Grossing':
          return this.props.getMovieListRevenueLowest();
      }
    }
  }

  componentDidMount() {
    this.props.getMovieGenres();
    this.props.getMovieList();
  }

  render() {
    const movie = this.props.movie;
    const { gridView, activeFilter } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBarView}>
          <Text style={styles.topBarTxt}>Home</Text>
          <TouchableOpacity onPress={() => this.changeModalView()}>
            <FeatherIcon size={25} name="filter" color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.mainContainerTopBar}>
            <Text style={styles.mainContainerTopBarTxt}>{activeFilter}</Text>
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
                orgTitle={ele.item.original_title}
                title={ele.item.original_title}
                releaseDate={ele.item.release_date}
                language={ele.item.original_language}
                rate={ele.item.vote_average}
                genres={ele.item.genre_ids}
              />}
            />
          </View>
          <FilterModel
            activeFilter={(value) => this.activeFilter(value)}
            onDismiss={() => this.changeModalView()}
            visible={this.state.isFilterModalVisible} />
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
    fontSize: 20,
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
  getMovieGenres: () => dispatch(getMovieGenres()),
  getMovieList: () => dispatch(getMovieList()),
  getMovieListDateReleases: () => dispatch(getMovieListDateReleases()),
  getMovieListDateOld: () => dispatch(getMovieListDateOld()),
  getMovieListPopularityMost: () => dispatch(getMovieListPopularityMost()),
  getMovieListPopularityLess: () => dispatch(getMovieListPopularityLess()),
  getMovieListRevenueHigher: () => dispatch(getMovieListRevenueHigher()),
  getMovieListRevenueLowest: () => dispatch(getMovieListRevenueLowest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);