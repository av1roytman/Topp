import {Text, View, StyleSheet, Button} from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Hello
            </Text>
            <Text>
                Hi
            </Text>
            <Button
                title='Go to Home'
                onPress={() => {
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;