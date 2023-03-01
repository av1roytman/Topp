import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Recording from './Components/Recording';

const Upload = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Recording/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa",
  },
});

export default Upload;
