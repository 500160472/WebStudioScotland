// import Constants from 'expo-constants';
import C from "./colours";
export default {
    logo: {
        width: 260,
        height: 120,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
    },
    headerImage: {
        width: "100%",
        maxHeight: 420,
        // padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
    },
    imageFullWidth: {
        maxWidth: "100%",
        // maxHeight: 420,
        // padding: 10,
        // flex: 1,
        resizeMode: "contain",
        marginLeft: 'auto',
        marginRight: 'auto',
        // marginBottom: 20,
    },
    logoBG: {
        width: 260,
        height: 200,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        borderRadius: 26,
    },
// VIEW CONTAINERS
    container: {
        margin: 0, 
        padding: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: C.lomondBlue,
    },
    headerBar:{
        paddingTop: 17, 
        paddingBottom: 20, 
        width: '100%',
        backgroundColor: C.dark,
        position: 'absolute',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxedContainerLight: {
        width: '60%',
        padding: 26,
        // marginTop: 32,
        backgroundColor: C.white,
        borderRadius: 8,
      },
      boxedContainerHighlight: {
        width: '90%',
        padding: 26,
        paddingBottom: 46,
        marginTop: 42,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: C.highlight,
        borderRadius: 8,
        minHeight: 420,
        maxHeight: 420,
      },
    boxedContainerDark: {
        width: '60%',
        padding: 32,
        marginBottom: 42,
        backgroundColor: C.dark,
        borderRadius: 8,
      },
      mainContainerLight: {
        width: '90%',
        marginTop: 50,
        paddingHorizontal: 26,
        paddingVertical: 26,
        minHeight: 580, 
        maxHeight: 580, 
        marginBottom: 0,
        paddingBottom: 0,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: C.white,
        borderRadius: 8,
      },
      footerContainerDark: {
        width: '80%',
        padding: 32,
        marginBottom: 42,
        backgroundColor: C.dark,
        borderRadius: 8,
      },
      footerContainerLight: {
        width: '80%',
        padding: 26,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        backgroundColor: C.lightBlue,
        borderRadius: 8,
        // flex: 3,
    },
    flexThird: {
        flex: 1,
    },
      flexDark: {
        backgroundColor: C.lomondBlue,
        flex: 1,
      },
// TEXT STYLES

topHeader: {
  backgroundColor: C.dark,
  width: '100%',
  textAlign: 'center',
  padding: 16,
  margin: 0,
  fontSize: 24,
  fontWeight: '900',
  color: 'white',
  position: 'absolute',
  top: 0,
  left: 0,
},
    buttonText: {
        color: C.white,
        fontSize: 26,
        fontWeight: '900',
        paddingVertical: 8,
    },
    headerText:{
        fontSize: 30, 
        textAlign: 'center',
        color: C.white,
    },
    boldTitle:{
        color: C.white,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 6,
      },
    subTitle:{
        color: C.white,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '300',
      },
    boldSubTitle:{
        color: C.white,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
      },
    boldTitleDark:{
        color: C.lomondBlue,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 6,
      },
    subTitleDark:{
        color: C.lomondBlue,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '300',
      },
    boldSubTitleDark:{
        color: C.lomondBlue,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
      },
    invisibleLightBlueSubTitle:{
        color: C.lightBlue,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
      },
// BUTTON STYLES
    buttonDark: {
        alignItems: 'center',
        width: '100%',
        backgroundColor:  C.lomondBlue,
        padding: 12,
        borderRadius: 8,
        marginTop: 16,
    },
    buttonLight: {
        alignItems: 'center',
        width: '90%',
        backgroundColor:  C.lightBlue,
        padding: 12,
        borderRadius: 8,
        marginTop: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    video: {
        width: '100%',
        height: '100%',
    }

};

