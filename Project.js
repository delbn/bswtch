import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  Linking,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import UiColors from '../assets/colors';
import Model from './Modal'
import React, { useState } from 'react';

function Project({navigation}) {
  const [modalView, setModalView] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.GoBack}
        onPress={() => navigation.navigate('HomeScreen')}>
        {/* <Image source={require('../assets/icons/GoBack.png')} /> */}
        <Image
          style={styles.GoBackImg}
          source={require('../assets/icons/GoBack.png')}
        />
        <Image
          style={styles.NavLogo}
          source={require('../assets/icons/LogoType.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.SubHead}>Contribute to database</Text>
        <TouchableOpacity style={styles.RouteView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.RouteLogo}
              source={require('../assets/icons/EditInfo.png')}
            />
            <View style={styles.RouteText}>
              <Text style={styles.RouteMainHead}>Add bus timings</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.SubHead}>About the developer</Text>
        <View style={styles.RouteView}>
          <TouchableOpacity
          onPress={() => {
    Linking.openURL(`https://www.delb.in/`);
  }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.RouteLogo}
              source={require('../assets/icons/DevMode.png')}
            />
            <View style={styles.RouteText}>
              <Text style={styles.RouteMainHead}>Developer info</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.RouteView} onPress={()=>{setModalView(true)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.RouteLogo}
            source={require('../assets/icons/GitStar.png')}
          />
          <View style={styles.RouteText}>
            <Text style={styles.RouteMainHead}>Rate the app</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.RouteView}
      onPress={() => {
    Linking.openURL(`mailto:nnm23mc036@nmamit.in`);
  }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.RouteLogo}
            source={require('../assets/icons/BugReport.png')}
          />
          <View style={styles.RouteText}>
            <Text style={styles.RouteMainHead}>Report a bug</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          width: Dimensions.get('window').width,
          marginBottom: 10,
          bottom: 0,
        }}>
        <Text style={{color: UiColors.dark}}>Bus Watch</Text>
        <Text style={{color: UiColors.dark}}>Dev Version 1.0</Text>
      </View>
      <Modal animationType="slide" presentationStyle='overFullScreen'  transparent={true} visible={modalView}>
        <View style={styles.modalContainer}>
   <Text style={styles.title}>Rate BusWatch</Text>
    <Text style={styles.subtitle}>We don’t need 5 stars,</Text>
        <Text style={styles.subtitle}>just one is enough!</Text>
    <TouchableOpacity 
    onPress={()=>{Linking.openURL('https://github.com/delbingeorge/buswatch')}} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Star us on GitHub!</Text>
      
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setModalView(false)}}>
      <Text>Close</Text>
      </TouchableOpacity>
</View>
      </Modal>
    </SafeAreaView>
  );
}

export default Project;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    right:0,
    left:0,
    backgroundColor:'white',
    bottom:0,
    paddingBottom: 40,
    shadowOffset:4,
    shadowColor:'black',
    shadowRadius:5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#007BFF', // Change this to your preferred color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  BottonInfo: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: 30,
  },
  RouteLogoImg: {width: 25, marginRight: 10, height: 25, objectFit: 'contain'},
  SubHead: {
    color: UiColors.dark,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  GoBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 8,
  },
  GoBackText: {
    color: UiColors.dark,
    fontSize: 19,
    fontWeight: '400',
  },
  container: {
    flex: 1,
    fontFamily: 'Anderson-Bold',
    backgroundColor: UiColors.primary,
    paddingHorizontal: 10,
  },
  NavView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    height: 20,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  SectionHead: {
    fontFamily: 'Anderson-Bold',
    color: UiColors.dark,
    fontSize: 23,
    fontWeight: '700',
  },
  RouteLogo: {
    width: 30,
    height: 30,
    objectFit: 'contain',
  },
  RouteText: {
    marginLeft: 15,
    rowGap: 4,
  },
  RouteMainHead: {
    fontFamily: 'Anderson-Bold',
    color: UiColors.dark,
    fontSize: 20,
    fontWeight: '700',
  },
  ReachingTime: {
    fontSize: 25,
    color: UiColors.dark,
  },
  RouteSrcDes: {
    fontFamily: 'Anderson-Bold',
    color: UiColors.dark,
    fontSize: 17,
  },
  GoBackImg: {
    width: 30,
    height: 30,
  },
  NavLogo: {
    width: 155,
    height: 35,
    objectFit: 'contain',
  },
  RouteView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    paddingVertical: 28,
    paddingHorizontal: 17,
    alignItems: 'center',
    rowGap: 15,
    marginBottom: 10,
    columnGap: 15,
    borderRadius: 10,
    backgroundColor: UiColors.secondary,
  },
  ResultView: {marginBottom: 5},
  SectionTitle: {
    fontSize: 18,
    color: UiColors.dark,
    fontWeight: '600',
  },
  BusIdentifier: {
    flexDirection: 'row',
    alignItems: 'center',
    color: UiColors.dark,
  },
  BusIdentifierText: {color: UiColors.dark, fontWeight: '500', fontSize: 16},
});

