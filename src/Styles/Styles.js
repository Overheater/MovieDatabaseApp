import { StyleSheet } from 'react-native';
// Material Colors for App: 
/* 
Primary: #37474f Dark Blue Gray
Primary light: #62727b
Primary Dark: #102027
Primary Text: #ffffff
Secondary: #ffee58 Material Yellow
Secondary Light: # ffff8b
Secondary Dark: #c9bc1f
Secondary Text: #000000
*/
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 22,
        textAlign: 'center',
        margin: 5,
      },
      textcenter:{
        textAlign: 'center',

      },
      note: {
        fontSize: 10,
        textAlign: 'center',
        margin: 3,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      BaseButton:{
        margin: 4,
        height:35,
        width:40,
        backgroundColor:"#ffee58",
        alignItems:'center',
    },
    item: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
})