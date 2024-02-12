import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Charts() {
  return (
    <View style={{ flexDirection: 'column', maxWidth: 316,marginLeft:22 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
        <View style={{ flexDirection: 'column', alignItems: 'flex-end', flexBasis: 0 }}>
          <Text>4.0</Text>
          <Text style={{ marginTop: 10 }}>3.0</Text>
          <Text style={{ marginTop: 11 }}>2.0</Text>
          <Text style={{ marginTop: 11 }}>1.0</Text>
        </View>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b0a1ad2a9f330325eb3548ab2a57e3faff05f835756cac03034de793e7eaa782?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
          style={{ width: 1, aspectRatio: 1, borderColor: 'black', borderWidth: 1 }}
        />
        <View style={{ flexDirection: 'column', flex: 1, alignSelf: 'flex-end', marginTop: 7 }}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/448d57170b5728f94a64408a22a3174da2f38f2d84c58c7fd0a4771b0dc3f663?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
            style={{ aspectRatio: 1.64 }}
          />
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3113938eb1f306c4b842e841af7d0992f9922937f5fd15798478c74b4c8dd4c1?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
            style={{ aspectRatio: 2.56, borderWidth: 1, borderColor: 'black', width: 18 }}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 3 }}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 5 }}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b2edc482046dd51817eb8e889831441984619a1a858fbc2404016b40d9f6f104?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
              style={{ width: 1, aspectRatio: 0.14, borderColor: 'black', borderWidth: 1 }}
            />
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b2edc482046dd51817eb8e889831441984619a1a858fbc2404016b40d9f6f104?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
              style={{ width: 1, aspectRatio: 0.14, borderColor: 'black', borderWidth: 1 }}
            />
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b2edc482046dd51817eb8e889831441984619a1a858fbc2404016b40d9f6f104?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
              style={{ width: 1, aspectRatio: 0.14, borderColor: 'black', borderWidth: 1 }}
            />
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b2edc482046dd51817eb8e889831441984619a1a858fbc2404016b40d9f6f104?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
              style={{ width: 1, aspectRatio: 0.14, borderColor: 'black', borderWidth: 1 }}
            />
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b2edc482046dd51817eb8e889831441984619a1a858fbc2404016b40d9f6f104?apiKey=2a3c4bb6307643258a7e7c95a2590e5e' }}
              style={{ width: 1, aspectRatio: 0.14, borderColor: 'black', borderWidth: 1 }}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 1 }}>
            <Text>Jan</Text>
            <Text>Feb</Text>
            <Text>Mar</Text>
            <Text>Apr</Text>
            <Text>May</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', alignSelf: 'flex-start' }}>
          <Text>Jun</Text>
        </View>
      </View>
    </View>
 
  )
}

const styles = StyleSheet.create({})