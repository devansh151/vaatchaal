import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Container, Content, Button, Text } from "native-base";
import errorStyles from "./styles.json";
import { images } from "../../assets";
import { SCREENS } from "../../constants";
import messages from "../../constants/messages";

const styles = StyleSheet.create(errorStyles);

const ErrorPage = props => {

  const { navigation } = props;

  const navigate = () => {
    navigation.navigate(SCREENS.HOME);
  };

  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <ImageBackground source={images.errorImage} style={styles.errorImage}>
          <View>
            <Text style={styles.errorText}>
              <FormattedMessage {...messages.errorMessage} />
            </Text>
          </View>
          <Button bordered danger onPress={navigate}>
            <Text>
              <FormattedMessage {...messages.backText} />
            </Text>
          </Button>
        </ImageBackground>
      </Content>
    </Container>
  );

};

ErrorPage.propTypes = {
  navigation: PropTypes.object
};

export default React.memo(ErrorPage);
