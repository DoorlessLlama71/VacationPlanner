
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import { createClient } from 'pexels';

const client = createClient('kxTGGbqirQsB9RPP2H9BBT7tq3xeylE11vnKKfKuhkRNf3XqNMglMMQQ');

export default function App() {
  const [photos, setPhotos] = useState([]);

  const request = async () => {
    try {
      const response = await client.photos.search({ query: 'Arizona Wallpaper', per_page: 1 });
      setPhotos(response.photos);
      console.log("Works")
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <View style={styles.container}>
      {photos.map(photo => (
        <Image key={photo.id} source={{ uri: photo.src.medium }} style={styles.image} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '52%',
    width: '100%',
    marginTop: 0,
    marginBottom: 15,
},
});
