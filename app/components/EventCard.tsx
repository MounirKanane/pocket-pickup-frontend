import { useState } from "react";
import { Alert } from "react-native";
import { Button, Pressable, StyleSheet, View, Text, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  card: {
    width: "75%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  image: {
    backgroundColor: "#4287f5",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "40%",
  },
  button: {
    backgroundColor: "#fc8a20",
    width: 80,
    height: "20%",
    position: "absolute",
    top: "30%",
    right: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  infoContainer: { margin: 10, height: "50%" },
  duration: {
    fontSize: 16,
    fontWeight: "500",
  },
  counter: {
    width: 50,
    height: 50,
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  counterText: {
    color: "#000",
    position: "absolute",
    fontSize: 30,
    fontWeight: "bold",
  },
  location: { fontSize: 20 },
  badges: {
    height: "25%",
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
  },
  badge: {
    height: 50,
    width: 50,
  },
});

interface EventCardProps {
  duration: number | string;
  location: string;
  sport: string;
  badges?: JSX.Element | JSX.Element[];
  image: string;
  counterText: string;
}

type EventCardStatus = "Join" | "Coming";

export const EventCard = ({
  duration,
  location,
  sport,
  image,
  badges,
  counterText,
}: EventCardProps) => {
  const handleJoin = () => {
    if (status === "Join") {
      setStatus("Coming");
    } else {
      setStatus("Join");
    }
  };
  const [status, setStatus] = useState<EventCardStatus>("Join");

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      <Pressable style={styles.button} onTouchStart={handleJoin}>
        <Text style={styles.buttonText}>{status}</Text>
      </Pressable>
      <View style={styles.infoContainer}>
        <Text style={styles.duration}>{duration}</Text>
        <Text style={styles.title}>
          {sport} @ {location}
        </Text>
        <View style={styles.badges}>
          <Image
            style={styles.badge}
            source={{
              uri: "https://img.freepik.com/free-vector/basketball-swoosh-logo_21010-18.jpg?w=2000",
            }}
          />
          <Image
            style={styles.badge}
            source={{
              uri: "https://media.istockphoto.com/vectors/fire-vector-isolated-vector-id1323529010?k=20&m=1323529010&s=612x612&w=0&h=OnV63jEbjzqNNetSNRFiWx3c5s6OdZEBzy5qBOmpYJ0=",
            }}
          />
          <Image
            style={styles.badge}
            source={{
              uri: "data:image/png;base64,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",
            }}
          />
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{counterText}</Text>
        </View>
      </View>
    </View>
  );
};
