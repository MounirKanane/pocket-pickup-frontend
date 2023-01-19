import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import EventCard from "./EventCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from 'react-native-gesture-handler';


const BottomSheetApp = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
//   const data = useMemo(
//     () =>
//       Array(50)
//         .fill(0)
//         .map((_, index) => `index-${index}`),
//     []
//   );
  const data = [
  <EventCard duration={"57 minutes"} location={"OHill"} sport={"Basketball"} counterText={"10"} ></EventCard>,<EventCard duration={"57 minutes"} location={"OHill"} sport={"Basketball"} counterText={"10"} ></EventCard>,
    <EventCard duration={"53 minutes"} location={"OHill"} sport={"Basketball"} counterText={"10"} ></    EventCard>,
     <EventCard duration={"54 minutes"} location={"OHill"} sport={"Basketball"} counterText={"10"} ></EventCard>,
     <EventCard duration={"52 minutes"} location={"OHill"} sport={"Basketball"} counterText={"10"} ></EventCard>,
     <EventCard duration={"51 minutes"} location={"OHill"} sport={"Basketball"} counterText={"10"} ></EventCard>,
     <EventCard duration={"50 minutes"} location={"OHill"} sport={"Basketball"} counterText={"10"} ></EventCard>
    ]
  // Until we can fix the mid one, comment it out
  const snapPoints = useMemo(() => ["15%", "50%", "88%"], []);
  // const snapPoints = useMemo(() => ["15%","88%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item.duration} style={styles.itemContainer}>
        <View style={styles.items}>{item}</View>
      </View>
    ),
    []
  );
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        {/* <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(renderItem)}
        </BottomSheetScrollView> */}
          <ScrollView style={styles.contentContainer}>
            {data.map(renderItem)}
          </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    width: '100%',
  },
  contentContainer: {
    backgroundColor: "#eee",
  },
  itemContainer: {
    padding: 3,
    margin: 3,
    backgroundColor: "#eee",
    width:"100%",
    marginHorizontal: "auto"
  },
  items:{
    alignItems: 'center',
  }
});

export default BottomSheetApp;