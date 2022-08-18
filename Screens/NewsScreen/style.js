import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  articleList: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 1.8,
  },
  failSearch: {
    color: 'white',
    fontSize: 20,
  },
  separator: {
    height: 5,
    backgroundColor: 'white',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
  },
});
