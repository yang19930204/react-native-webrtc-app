import {StyleSheet} from 'react-native';
import config from "../src/config/app.js";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: config.screenWidth,
    height: config.screenHeight,
    //borderWidth: 1, borderColor: "red"
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: config.screenWidth,
    height: config.screenHeight
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: config.screenWidth,
    height: config.screenHeight,
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },

  joinContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: config.screenWidth,
    height: config.screenHeight,
    backgroundColor: "rgba(255, 255, 255, 0)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //borderWidth: 1, borderColor: "white"
  },

  joinLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  joinName: {
    width:200,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    textAlign: "center",
    color: "black"
  },
  joinButton: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#337ab7",
    padding: 10
  },
  joinButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  stopButton:{
    width:50,
    height:50,
    backgroundColor:'red',
    borderRadius:50,
    position:"absolute",
    top:10,
    right:10
  },
  switchButton:{
    width:50,
    height:50,
    backgroundColor:'green',
    borderRadius:50,
    position:"absolute",
    top:10,
    right:70
  },
  stopText:{
    color:"white",
    textAlign:'center',
    fontSize:20,
    position:'relative',
    top:10
  },
});
