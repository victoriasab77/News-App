import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    backgroundColor: '#282C35',
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: '#007FFF',
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: 'lightgrey',
  },
  textColorWhite: {
    color: 'white',
  },
  right: {
    width: 80,
    alignItems: 'flex-end',
  },
  marginLeft150: {
    marginLeft: 150,
  },
});
