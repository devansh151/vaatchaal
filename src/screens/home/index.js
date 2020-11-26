import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { Container, Content } from "native-base";
import SearchBar from "../../components/brand";
import ArtistsSection from "./artists-section";
import MoodsSection from "./moods-section";
import RecentSection from "./recent-section";
import { getHomeData } from "../../services/api";
import homeStyles from "./styles.json";
import Loader from "../../components/loader";
import { SCREENS } from "../../constants";

const styles = StyleSheet.create(homeStyles);

const Home = props => {

  const { navigation } = props;
  const [ apiData, setApiData ] = useState({
    moodData: {},
    recentData: {},
    artistsData: {},
    isLoading: true,
  });

  const goToErrorPage = () => {
    navigation.navigate(SCREENS.ERROR);
  };

  useEffect(() => {
    getHomeData()
    .then(data => {
      setApiData({
        ...data,
        isLoading: false
      })
    }).catch(error => {
      goToErrorPage();
    });
  }, []);

  return (
    <Container style={styles.container}>
      {!apiData.isLoading && (
        <Content contentContainerStyle={styles.content}>
          <SearchBar />
          <View style={styles.trackContent}>
            {!!apiData.recentData.totalTracks &&
              <RecentSection recentData={apiData.recentData} navigation={navigation} />}
            {!!apiData.artistsData.totalAlbums && 
              <ArtistsSection artistsData={apiData.artistsData} navigation={navigation} />}
            {!!apiData.moodData.totalAlbums &&
              <MoodsSection moodData={apiData.moodData} navigation={navigation} />}
          </View>
        </Content>
      )}
      {apiData.isLoading && <Loader />}
    </Container>
  );

};

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
