import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSendMessage = () => {
    if (message === "") {
      Alert.alert("Error", "Message cannot be empty.");
      return;
    }

    setChat([...chat, message]);
    setMessage("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatContainer}>
        {chat.map((item, index) => (
          <Text key={index} style={styles.chatText}>
            {item}
          </Text>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 15,
    width: 350,
  },
  chatText: {
    fontSize: 16,
    marginBottom: 8,
    backgroundColor: "#5f9ea0",
    borderRadius: 6,
    padding: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 16,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 8,
  },
  button: {
    marginLeft: 16,
    backgroundColor: "#008080",
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChatScreen;
