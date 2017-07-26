/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import videoChat from '../lib/videoChat';
class homePage extends Component {

  static navigationOptions = {
    title: 'Welcome',//设置标题内容
    header: null
  };
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <View style={styles.viewItem1}>
          </View>
          <View style={styles.viewItem2}>
            <View style={styles.children}>

              <TouchableOpacity
                  style={styles.buttonItem}
                  onPress={()=>{console.log("press")}}
              >
                <Text style={styles.text}>
                  item1
                </Text>
              </TouchableOpacity>

            </View>
            <View style={styles.children}>
              <TouchableOpacity
                  style={styles.buttonItem}
                  onPress={()=>{console.log("press")}}
              >
                <Text style={styles.text}>
                  item2
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.children}>
              <TouchableOpacity
                  style={styles.buttonItem}
                  onPress={()=>{console.log("press")}}
              >
                <Text style={styles.text}>
                  item1
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.children}>
              <TouchableOpacity
                  style={styles.buttonItem}
                  onPress={()=>{console.log("press")}}
              >
                <Text style={styles.text}>
                  item1
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.children}>
              <TouchableOpacity
                  style={styles.buttonItem}
                  onPress={()=>{console.log("press")}}
              >
                <Text style={styles.text}>
                  item1
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.children}>
              <TouchableOpacity
                  style={styles.buttonItem}
                  onPress={()=>{console.log("press")}}
              >
                <Text style={styles.text}>
                  item1
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.children}>
              <TouchableOpacity
                  style={styles.buttonItem}
                  onPress={()=>{console.log("press")}}
              >
                <Text style={styles.text}>
                  item1
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.children}>
              <TouchableOpacity
                  style={styles.buttonItem}
                  onPress={()=>{console.log("press")}}
              >
                <Text style={styles.text}>
                  item1
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewItem3}>
            <TouchableOpacity style={styles.buttonItem}>
              <Text style={styles.text}>
                item1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonItem}>
              <Text style={styles.text}>
                item1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('Video',{currentUser:'yang',currentRoom:'test'})}
                style={styles.buttonItem}>
              <Text style={styles.text}>
                itemVideo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonItem}>
              <Text style={styles.text}>
                item1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonItem}>
              <Text style={styles.text}>
                item1
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
    textAlign:'center',
  },
  buttonItem:{
    width:60,
    height:60,
    backgroundColor:'green',

  },
  children:{
    width:Dimensions.get('window').width/4,
    height:Dimensions.get('window').width/4,
    borderRadius:Dimensions.get('window').width/4,
    backgroundColor:'red',
    borderWidth:2,
    borderColor:"green",
    justifyContent:'center',
    alignItems:'center'
  },
  viewItem1:{
    flex:4,
    flexDirection:'row',

    backgroundColor:'#FF33CC'
  },
  viewItem2:{
    flex:4,
    flexDirection:'row',
    flexWrap: 'wrap',
    backgroundColor:'#00FFFF'
  },
  viewItem3:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#CCBBFF'
  },
});

const SimpleApp = StackNavigator({
  Home: {screen: homePage},
  Video:{screen:videoChat},
});
export default SimpleApp;