import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Item } from "native-base";
import { images } from "../../assets";

import brandStyle from "./styles.json";

const styles = StyleSheet.create(brandStyle);

const BrandBar = () => {
  return (
    <View>
      <Item style={styles.brandBar}>
        <Image
          source={images.brandLogo}
          style={styles.brandImg}
        />
        <Text style={styles.brandText}>Vaatchaal</Text>
      </Item>
    </View>
  );
};

export default React.memo(BrandBar);
