import { Colors } from '@/constants/Colors';
import { StyleSheet, TextInput, View } from 'react-native';
export default function ChatScreen() {
  return (
          <View style={styles.container}>
            {/* <Text>Chat Screen </Text> */}
            {/* <StatusBar style='auto'></StatusBar> */}

            <View>
                <TextInput
                 style={styles.textbox}
                 placeholder = "Type a message..."
                 >

                </TextInput>
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
    textbox: {

    },

    container: {
    flex:1,
    backgroundColor: Colors.greyBg,
    alignItems: 'center',
    justifyContent: 'center'
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
