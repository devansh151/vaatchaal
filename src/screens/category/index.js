import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";
import { Container, Content } from "native-base";
import AlbumTile from "../../components/albumTile";
import { images } from "../../assets";
import categoryStyles from "./styles.json";
import messages from "../../constants/messages";

const styles = StyleSheet.create(categoryStyles);

const Category = props => {

  const { navigation, route } = props;
  const { type, totalAlbums, albumList } = route.params;

  return (
    <Container>
      <Content contentContainerStyle={styles.categoryContainer}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeader}>
            <ImageBackground
              source={images.category}
              style={styles.categoryCoverImage}
              imageStyle={styles.categoryImage}>
              <Text style={styles.categoryInfoHeaderText}>{type}</Text>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryInfoText}>
                  <FormattedMessage {...messages.categoryInfoText} values={{totalAlbums}} />
                </Text>
              </View>
            </ImageBackground>
          </View>
          <ScrollView contentContainerStyle={styles.songListContainer}>
            {albumList &&
              albumList.map(track => {
                return (
                  <AlbumTile
                    key={track.albumId}
                    navigation={navigation}
                    {...track}
                  />
                );
              })}
          </ScrollView>
        </View>
      </Content>
    </Container>
  );

};

Category.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object
};

export default React.memo(Category);
