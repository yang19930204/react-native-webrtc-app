import {Dimensions} from 'react-native';

const window = Dimensions.get('window');

export default {
  screenWidth: window.width,
  screenHeight: window.height,
  thumbnailHeight: window.height/4,
  thumbnailWidth: window.width/4,
  useRCTView: true, //debug or not?
  video: {
    minWidth: window.width,
    minHeight: window.height,
    minFrameRate: 30
  }
}
