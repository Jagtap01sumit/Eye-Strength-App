import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Blinkrate() {
  return (
    <View style={{ flex: 1, paddingTop: 32, paddingHorizontal: 16, backgroundColor: 'white', maxWidth: 480, alignSelf: 'center', borderRadius: 40 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', maxWidth: 332 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e872983648ce85e452c566a32077ac7aff1f4111cc77365ed291e8faf458c3af?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
            style={{ marginTop: 1.5, aspectRatio: 1.3, width: 22 }}
          />
          <Text style={{ flexGrow: 1 ,fontSize:28,fontWeight:'bold' }}>Blink reminder</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 16, marginTop: 40, backgroundColor: '#D788CF', borderRadius: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Blink reminder Fixed <FontAwesome name="toggle-on" size={29} color="black" /> Smart
        </Text>
      </View>
      
      <View style={{ paddingLeft: 10, marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#888' }}>
          20-20-20 rule will be used: every 20 minutes, look at something 20 feet away for 20 seconds. This alert message will be given to the user.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textStyle}>Stop</Text>
      </View>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8f984adf167aa598b23c98588bbb13f666e01f4b42d19ab1ef8430e4e6a1ac35?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
        style={{ marginTop: 40, aspectRatio: 4.35 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#D788CF',
    marginVertical: 20,
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  }
});
