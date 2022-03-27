import * as React from 'react';
import react from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
export default function Pemesanan() {
  const [awal, onChangeawal] = react.useState(null);
  const [tujuan, onChangetujuan] = react.useState();
  const [kelas, onChangekelas] = react.useState();
  const [Tanggal, onChangeTanggal] = react.useState();
  const [jam, onChangejam] = react.useState();
  const [jumlah, onChangejumlah] = react.useState();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.background}>
        <View style={styles.form}>
          <View>
            <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'blue', textAlign: 'center', justifyContent: 'center', marginTop: -100, marginBottom: 20 }}> Kapalzy
            </Text>
          </View>
          <Text style={{ paddingLeft: 25, fontSize: 15, color: '#cfcfcf' }}>Pelabuhan Awal</Text>
          <View style={{ flexDirection: 'row', width: "100", paddingLeft: 25 }}>
            <Image
              source={require('./assets/kapal.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeawal}
              placeholder="Pilih Pelabuhan Awal"
              placeholderTextColor='#cfcfcf'
              value={awal}
            />
          </View>
          <Text style={{ paddingLeft: 25, fontSize: 15, color: '#cfcfcf' }}>Pelabuhan Tujuan</Text>
          <View style={{ flexDirection: 'row', width: "100", alignItems: "center", paddingLeft: 25 }}>
            <Image
              source={require('./assets/kapal.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangetujuan}
              placeholder="Pilih Pelabuhan Tujuan"
              placeholderTextColor='#cfcfcf'
              value={tujuan}
            />
          </View>
          <Text style={{ paddingLeft: 25, fontSize: 15, color: '#cfcfcf' }}>Kelas Layanan</Text>
          <View style={{ flexDirection: 'row', width: "100", alignItems: "center", paddingLeft: 25 }}>
            <Image
              source={require('./assets/layanan.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangekelas}
              placeholder="Pilih Layanan"
              placeholderTextColor='#cfcfcf'
              value={kelas}
            />
          </View>
          <Text style={{ paddingLeft: 25, fontSize: 15, color: '#cfcfcf' }}>Tanggal Masuk Pelabuhan</Text>
          <View style={{ flexDirection: 'row', width: "100", alignItems: "center", paddingLeft: 25 }}>
            <Image
              source={require('./assets/tanggal.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeTanggal}
              placeholder="Pilih Tanggal Masuk"
              placeholderTextColor='#cfcfcf'
              value={Tanggal}
            />
          </View>
          <Text style={{ paddingLeft: 25, fontSize: 15, color: '#cfcfcf' }}>Jam Masuk Pelabuhan</Text>
          <View style={{ flexDirection: 'row', width: "100", alignItems: "center", paddingLeft: 25, borderRadius: 10 }}>
            <Image
              source={require('./assets/jam.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangejam}
              placeholder="Pilih Jam Masuk"
              placeholderTextColor='#cfcfcf'
              value={jam}
            />
          </View>
          <Text style={{ paddingLeft: 25, fontSize: 15, color: '#cfcfcf' }}>Jumlah Penumpang</Text>
          <View style={{ flexDirection: 'row', width: "100", alignItems: "center", paddingLeft: 25, borderRadius: 10 }}>
            <Image
              source={require('./assets/jumlah.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangejumlah}
              placeholder="Jumlah"
              placeholderTextColor='#cfcfcf'
              value={jumlah}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                width: "120px",
                height: "50px",
                color: '#fafafa',
                textAlign: 'center',
                backgroundColor: "#ffc107",
                borderRadius: 10,
                margin: 10
              }} >
              <Text>Buat Tiket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ height: 60, flexDirection: 'row', textAlign: 'center', backgroundColor: '#F2F2F2', position: 'relative' }}>
        <View style={{
          width: "25%",
          alignItems: 'center',
          marginTop: 10,
          flex: 1,
          marginLeft: -30,
        }}></View>
        <Image
          source={require('./assets/beranda.png')}
          style={{ width: 40, height: 40, marginTop: 10 }}
        />
        <View style={{
          width: "25%",
          alignItems: 'center',
          marginTop: 5,
          marginLeft: -10,
          flex: 1
        }}></View>
        <Image
          source={require('./assets/pesanan.png')}
          style={{ width: 40, height: 40, marginTop: 10 }}
        />
        <View style={{
          width: "25%",
          alignItems: 'center',
          marginTop: 5,
          marginLeft: -10,
          flex: 1
        }}></View>
        <Image
          source={require('./assets/pembatalan.png')}
          style={{ width: 40, height: 40, marginTop: 10 }}
        />
        <View style={{
          width: "25%",
          alignItems: 'center',
          marginLeft: -20,
          flex: 1
        }}></View>
        <Image
          source={require('./assets/lainnya.png')}
          style={{ width: 50, height: 50, marginTop: 5, marginRight: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#cfcfcf",
    flex: 1,
  },
  imageStyle: {
    padding: 5,
    margin: 5,
    height: 35,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',

  },
  form: {
    flex: 1,
    justifyContent: "center",
    pending: 15,
    margin: 50,
    backgroundColor: "white",
    borderRadius: 15,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 5,
    borderWidth: 1,
    padding: 5,
  },
  item: {
    backgroundColor: '#cfcfcf',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 0,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  col: {
    width: '30%',
    textAlign: 'center',
  },
  col5: {
    width: '50%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tanggal: {
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    backgroundColor: '#cfcfcf',
  },
});