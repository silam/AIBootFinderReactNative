import { Colors } from '@/constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';


export default function ChatScreen() {
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={100}>
        <View style={styles.container}>
            {/* <Text>Chat Screen </Text> */}
            {/* <StatusBar style='auto'></StatusBar> */}

            <View style={styles.messageContainer}></View>
            <View style={styles.inputContainer}>
                <TextInput
                 style={styles.textbox}
                 placeholder = "Type a message..."
                 >

                </TextInput>

                <TouchableOpacity style={styles.sendButton}>
                    <Feather name="send" size={18} color="white" />
                </TouchableOpacity>
            </View>
          </View>
    </KeyboardAvoidingView>
          
  );
}

const styles = StyleSheet.create({
    messageContainer: {
      flex: 1
    },
    sendButton: {
      backgroundColor: Colors.primary,
      width:35,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50
    },
    inputContainer: {
        flexDirection:'row',
        backgroundColor: 'white',
        padding: 10

    },
    textbox: {
      flex: 1
    },

    container: {
      flex:1,
      backgroundColor: Colors.greyBg,
      // alignItems: 'center',
      // justifyContent: 'center'
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
});
