import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Button, View, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const EventCreationScreen = () => {
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [duration, updateDuration] = useState(15);

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirm = (time: any) => {
        console.warn("A time has been picked: ", time);
        hideTimePicker();
    };

    const incrementTime = () => {
        duration < 180 ? updateDuration(duration+15) : updateDuration(duration);
    }

    const decrementTime = () => {
        duration > 15 ? updateDuration(duration-15) : updateDuration(duration);
    }
    
    return (
    // Ensures that user keyboard does not block input fields
    <KeyboardAvoidingView style={styles.background}> 
        <Text style={styles.title}>
            Name
        </Text>
        <TextInput style={styles.smallInput}/>
        <Text style={styles.title}>
            Duration
        </Text>
        <View style={styles.durationContainer}>
            <Pressable style={ ({ pressed }) => [
                { backgroundColor: pressed ? "grey" : "black" },
                { borderTopLeftRadius:10, borderBottomLeftRadius:10 },
                styles.incButton] } onPress={decrementTime}>
                <Text style={styles.buttonText}>{"-"}</Text>
            </Pressable>
            <Text style={styles.durationText}>{duration}</Text>
            <Pressable style={({ pressed }) => [
                { backgroundColor: pressed ? "grey" : "black" },
                { borderTopRightRadius:10, borderBottomRightRadius:10 }, 
                styles.incButton] } onPress={incrementTime}>
                <Text style={styles.buttonText}>{"+"}</Text>
            </Pressable>
        </View>
        <Text style={styles.title}>
            Time
        </Text>
        <View style={styles.durationContainer}>
            <Pressable style={({ pressed }) => [
                { backgroundColor: pressed ? "grey" : "black" }, 
                styles.button]} onPress={showTimePicker}>
                <Text style={styles.buttonText}>{"Select time"}</Text>
            </Pressable>
            <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hideTimePicker}
            />
        </View>
        <Text style={styles.title}>
            Location
        </Text>
        <TextInput style={styles.smallInput}/>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.createButton}>
                <Text style={styles.buttonText}>Create</Text>
            </Pressable>
        </View>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        paddingHorizontal: 12,
        paddingTop: 12
    },
    smallInput: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    incButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 18,
        elevation: 3,
    },
    durationText: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        elevation: 3,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
    },
    durationContainer: {
        flexDirection: 'row', 
        paddingHorizontal:12,
        paddingVertical:12
    },
    title: {
        fontSize: 24,
        lineHeight: 21,
        paddingTop: 12,
        fontWeight: '700',
        letterSpacing: 0.25,
        color: '#50555F',
    },
    cancelButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 52,
        borderRadius: 26,
        elevation: 3,
        borderWidth: 1,
        backgroundColor: '#999999',
    },
    createButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 52,
        borderRadius: 26,
        elevation: 3,
        backgroundColor: 'black',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row', 
        flex: 1,
        paddingVertical:12,
        paddingLeft:12,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 32,
    },
});

export default EventCreationScreen;