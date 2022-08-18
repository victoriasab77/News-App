import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  newsContainer: {
    paddingBottom: 20,
    height: windowHeight / 1.5,
    width: windowWidth,
  },
  image: {
    height: '45%',
    resizeMode: 'cover',
    width: windowWidth,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 0,
    color: 'white',
  },
  content: {
    color: 'white',
    fontSize: 15,
    paddingBottom: 10,
  },
  shortby: {
    color: 'white',
  },
  browseButton: {
    position: 'absolute',
    top: 220,
    right: 20,
    backgroundColor: 'white',
    height: 35,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  browseButtonText: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    padding: 15,
    flex: 1,
  },
});
