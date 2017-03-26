import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  countText: {
    fontSize: 24,
    color: 'blue',
    marginVertical: 20,
    textAlign: 'center',
  },
  avatarContainerStyle: {
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'steelblue',
    borderWidth: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 100, 200, 0.2)'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textFieldStyle: {
    borderRadius: 5,
    height: 65,
    flex: 1,
    marginVertical: 2,
    marginHorizontal: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  signUpBottomStyles: {
    bottom: 0,
    height: 64,
    width: width - 20,
    borderColor: 'white',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
  },
  footer: {
    width,
    bottom: 5,
    height: 40,
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  bug: {
    flex: 1,
    width: 40,
    height: 40,
    maxWidth: 40,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  profile: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  profileBarContainer: {
    flex: 1,
    height: 25,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBar: {
    flex: 1,
    height: 21,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(90 ,255, 0, 0.5)',
  },
  profileBarText: {
    color: 'black',
    paddingHorizontal: 5,
  },
  navigation: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#222223',
  },
  swiperMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperMenuImage: {
    height: 35,
  },
  logoImage: {
    flex: 1,
    width: null,
    height: null,
  },
  menu: {
    top: 0,
    right: 0,
    height: 64,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBar: {
    width: 80,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 20, 255, 0.8)',
  },
  menuLogo: {
    height: 64,
    width: (2 * width)/4,
  },
  menuBarText: {
    fontSize:12,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  inputTextContainer: {
    height: 48,
    marginRight: 10,
    marginBottom: 2.5,
    flexDirection: 'row',
  },
  dropdownContainer: {
    flex: 3,
    height: 48,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  renderRowContainer: {
    height: 32,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  renderRowText: {
    color: 'white',
    fontWeight: '500',
  },
  editButton: {
    alignSelf: 'flex-end'
  },
  edit: {
    color: 'red',
    fontSize: 18,
    marginRight: 10,
  },
  dropdownStyle: {
    width,
    left: 0,
    top: 64,
    position: 'absolute',
  },
  containerStyles: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  scrollViewStyle: {
  }
});
