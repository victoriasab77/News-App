import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  searchbar: {
    width: '98%',
    position: 'relative',
    alignSelf: 'center',
  },
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
    backgroundColor: 'black',
    color: 'white',
  },
  searchResults: {
    position: 'absolute',
    zIndex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: 'black',
    elevation: 5,
  },
});
