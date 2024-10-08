import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  const handleStart = () => {
   console.log("the useer is now on the welcome screen===================================>");
    navigation.navigate('Homescreen'); // Replace 'NextScreen' with the actual screen name
  };

  return (
    <View style={styles.container}>
      
      <Image 
        source={require('/home/tushar/Desktop/sample/Todo/Component/Assets.img/undraw_Predictive_analytics_re_wxt8.png')}
        // https://undraw.co/illustrations for img svg and png 
        style={styles.image}
      />
      <Text style={styles.welcomeMessage}>
        Welcome to <Text style={styles.highlight}>Todo Task</Text>{'\n'}
        A workspace for over <Text style={styles.highlight}>10 Million</Text> influencers around the globe
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  welcomeMessage: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 30,
  },
  highlight: {
    color: '#62b4e4',
    fontWeight: 'bold',
  },
  image: {
    width: 430,
    height: 270,
    resizeMode: 'contain',
    marginBottom: 120,
  },
  button: {
    backgroundColor: '#62b4e4',
    paddingHorizontal: 40,
    paddingVertical: 12,
    paddingHorizontal: 90,
    borderRadius: 25,
    position: 'absolute',
    bottom: 30, // Adjust this value to move the button further down
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
