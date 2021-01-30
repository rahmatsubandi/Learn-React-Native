import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class DesainTampilan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar Style & Flexbox </Text>
        <View style={styles.garis} />

        {/* Isian */}
        <View style={styles.isi}>
          <Text>Belajar Flex Direction Row (Veritkal)</Text>
          <View style={styles.flexVertikal}>
            <View style={styles.boxRed} />
            <View style={styles.boxGreen} />
            <View style={styles.boxBlue} />
          </View>

          {/* NOTE
          Game untuk latihan flexbox:
          https://flexboxfroggy.com/
          */}

          <Text>Belajar Flex Direction Column (Horisontal)</Text>
          {/* NOTE
          Secara default aturan flex adalah horisonal(secara default tag <View> itu horisontal), 
          jika hanya membuat tag <View> saja pasti otomatis horisontal
          atau bisa juga menambahkan script ini jika mau:
          style={{ flexDirection: 'column' }} 
          */}
          <View>
            <View style={styles.boxRed} />
            <View style={styles.boxGreen} />
            <View style={styles.boxBlue} />
          </View>

          <Text>Belajar Justify Content</Text>
          {/* NOTE
            justifyContent: 'center' = untuk membuat layout ke tengah
            justifyContent: 'flex-end' = untuk membuat layout ke paling samping kanan/akhir
            justifyContent: 'flex-start' = untuk membuat layout ke paling samping kiri/awal
            justifyContent: 'space-between' = untuk membuat layout disejajarkan dengan memberi spasi diantara item, yang mana item pertama berada pada baris pertama dan item terakhir pada baris terakhir 
           */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.boxRed} />
            <View style={styles.boxGreen} />
            <View style={styles.boxBlue} />
          </View>

          <Text>Belajar Align Item</Text>
          {/* NOTE
          jika menambahkan alignItems: 'center' maka akan membuat item yang ditengah berada pas ditengah/atau item ke-3 ke tengah.
          */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.boxRed} />
            <View style={styles.boxGreen} />
            <View style={styles.boxBlue} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 30},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  garis: {
    borderBottomWidth: 1,
    marginTop: 15,
    borderBottomColor: 'darkgreen',
  },
  isi: {
    marginTop: 30,
  },
  flexVertikal: {
    flexDirection: 'row',
  },
  boxRed: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  boxGreen: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  boxBlue: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});
