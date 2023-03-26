import React, { useRef, useState, useEffect } from "react";
import {
     View,
     TouchableOpacity,
     StyleSheet,
     Image,
     ScrollView,
     Dimensions,
     Text
} from "react-native";

// Default Sample Data
const DATA = [
     {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          image:
               "https://barn2.com/wp-content/uploads/2020/09/834671_restaurant-chain-order-online_Op2_092120.png",
     },
     {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Memories lives in this home",
          subtitle:
               "This is a long subtitle. Which also can be used to display flashnews.",
          image:
               "https://www.foodchow.com/blog/wp-content/uploads/2020/07/359-1160x653.jpg",
     },
];

// Default Props
const defaults = {
     height: 180,
     width: Dimensions.get("window").width,
     delay: 5000,
};

// Default Image Item
const Item = ({ title, image, height, width, onPress, subtitle }) => (
     <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={[styles.imageContainer, { height: height, width: width }]}
     >
          <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
               <Image source={{ uri: image }} style={[styles.image, { height: height, width: 360 }]} />
          </View>
     </TouchableOpacity>
);

// Default On Press Action
const handlePress = (item) => {
     console.log("Pressed", item.id);
};

// Carousal Component
export default function Banner({
     data = DATA,
     height = defaults.height,
     width = defaults.width,
     delay = defaults.delay,
     onPress = handlePress,
     ItemElement = Item,
}) {
     const [selectedIndex, setselectedIndex] = useState(0);
     const scrollView = useRef();

     // Script which will only executed when component initilizes
     useEffect(() => {
          const fn = setInterval(() => {
               setselectedIndex((oldCount) =>
                    oldCount === data.length - 1 ? 0 : oldCount + 1
               );
          }, delay);
          return () => {
               clearInterval(fn);
          };
     }, []);

     // Script will executed every time selectedIndex updates
     useEffect(() => {
          scrollView.current.scrollTo({
               animated: true,
               x: width * selectedIndex,
               y: 0,
          });
     }, [selectedIndex]);

     const setIndex = (event) => {
          const contentOffset = event.nativeEvent.contentOffset;
          const viewSize = event.nativeEvent.layoutMeasurement;

          // Divide the horizontal offset by the width of the view to see which page is visible
          setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
     };

     return (
          <View>
               <ScrollView
                    ref={scrollView}
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={setIndex}
                    onContentSizeChange={() => scrollView.current.scrollToEnd()}
               >
                    <View style={styles.carousalContainer}>
                         {data.map((item) => (
                              <ItemElement
                                   key={item.id}
                                   height={height}
                                   width={width}
                                   {...item}
                                   onPress={() => onPress(item)}
                              />
                         ))}
                    </View>
               </ScrollView>
          </View>
     );
}

const styles = StyleSheet.create({
     carousalContainer: {
          flexDirection: "row",
          width: "80%",
     },
     imageContainer: {},
     item: {
          backgroundColor: "rgba(91, 91, 91, 0.3)",
          marginVertical: 8,
          justifyContent: "center",
          alignItems: "center",

     },
     titleContainer: {
          position: "absolute",
          bottom: 10,
          width: "100%",
          paddingLeft: 10,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
     },
     title: {
          fontSize: 28,
          color: '#fff',
          fontWeight: "bold",
     },
     subtitle: {
          color: '#fff',
     },
     image: {
          width: defaults.width,
          height: defaults.height,
          borderRadius: 20
     },
});