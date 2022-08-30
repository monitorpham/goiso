import React, { Fragment, Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";

var { height, width } = Dimensions.get("window");

var box_count = 4;
var box_height = height / box_count;

var quay_count = 9;
var quay_width = width / quay_count;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <View style={[styles.box, styles.box9]}>
            {/* <Text style={[styles.textHead]}>Logo</Text> */}
            <Image
              style={[styles.imageLogo]}
              // resizeMode="cover"
              source={require("./assets/logo108.png")}
            />
          </View>

          <View style={[styles.box, styles.box10]}>
            {/* <Text style={[styles.textHead, { color: "#105AA6" }]}>Banner</Text> */}
            <Image
              style={[styles.imageBanner]}
              // resizeMode="cover"
              source={require("./assets/banner.png")}
            />
          </View>
        </View>

        <View style={[styles.box, styles.box2]}>
          <View style={[styles.box, styles.box6]}>
            {/* <Text style={[styles.textHead]}>Ảnh</Text> */}
            <Swiper style={styles.wrapper} showsButtons>
              <Image
                style={[styles.image]}
                source={require("./assets/slide/1.jpg")}
              />
              <Image
                style={[styles.image]}
                source={require("./assets/slide/2.jpg")}
              />
              <Image
                style={[styles.image]}
                source={require("./assets/slide/3.jpg")}
              />
            </Swiper>
          </View>
          <View style={[styles.box, styles.box7]}>
            <Text style={[styles.textRight, { color: "#105AA6" }]}>
              Mời STT
            </Text>
            <Text style={[styles.textRight, { color: "#D72027" }]}>100</Text>
            <Text style={[styles.textRight, { color: "#105AA6" }]}>
              Đến quầy
              <Text style={[styles.textRight, { color: "#D72027" }]}> 4</Text>
            </Text>
          </View>
        </View>

        <View style={[styles.box, styles.box3]}>
          <View style={styles.row}>
            <View style={[styles.box, styles.boxHead]}>
              <Text style={[styles.textHead]}>Quầy</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>1</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>2</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>3</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>4</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>5</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>6</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>7</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>8</Text>
            </View>
          </View>
        </View>
        <View style={[styles.box, styles.box4]}>
          <View style={styles.row}>
            <View style={[styles.box, styles.boxHead]}>
              <Text style={[styles.textHead]}>STT</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>1</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>2</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>3</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>4</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>5</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>6</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>7</Text>
            </View>
            <View style={[styles.box, styles.box5]}>
              <Text style={[styles.textHead]}>8</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    height: box_height,
  },
  textHead: {
    fontWeight: "900",
    fontSize: 32,
    textAlign: "center",
    alignContent: "center",
    // justifyContent: "center",
    color: "white",
    textTransform: "uppercase",
  },

  textRight: {
    fontWeight: "900",
    fontSize: 52,
    textAlign: "center",
    alignContent: "center",
    // justifyContent: "center",
    textTransform: "uppercase",
  },
  //header
  box1: {
    flex: 23,
    // backgroundColor: "#2196F3",
    flexDirection: "row",
    // justifyContent: "space-between",
    // backgroundColor: "#D3E5F6",
  },
  //content
  box2: {
    flex: 100,
    backgroundColor: "#8BC34A",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 10,
  },
  //footer
  box3: {
    flex: 20,
    backgroundColor: "#105AA6",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  box4: {
    flex: 20,
    backgroundColor: "#105AA6",
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  boxHead: {
    height: box_height,
    // width: quay_width,
    // backgroundColor: "green",
    paddingTop: 20,
    width: 100,
  },
  box5: {
    height: box_height,
    width: quay_width,
    // backgroundColor: "green",
    paddingTop: 20,
    borderLeftWidth: 0.3,
    borderLeftColor: "gray",
  },
  box6: {
    height: box_height * 3,
    width: 100,
    backgroundColor: "green",
    // paddingTop: 30,
    flex: 2,
  },
  box7: {
    height: box_height * 3,
    // width: quay_width,
    backgroundColor: "#D3E5F6",
    paddingTop: 105,
    flex: 1,
  },

  imageLogo: {
    height: 100,
    width: 100,
  },

  box9: {},
  box10: {
    height: box_height,
    // width: 100,
    // backgroundColor: "orange",
    paddingTop: 5,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },

  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width,
    flex: 1,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  sectionContainer: {
    // marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    // color: Colors.black,
  },
  sectionDescription: {
    // marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },

  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  paginationText: {
    color: "white",
    fontSize: 20,
  },
});
