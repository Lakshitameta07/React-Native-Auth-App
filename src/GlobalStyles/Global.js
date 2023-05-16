import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#617A55',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
  },
  input: {
    borderRadius: 15,
    borderWidth: 2,
    width:'60%',
    padding: 20,
    margin: 10,
    alignItems: 'center',
    borderColor: 'white',
  },
  btn: {
    width:"50%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    flexDirection:'row',
    justifyContent:"space-around",
    marginTop:20,
    backgroundColor: '#A4D0A4',
    shadowColor: 'rgba(0, 1, 0, 1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset : { width: 1, height: 13},
  },

  otptxt:{
    marginTop:20,
    color: '#F7E1AE', 
    fontSize:15,
    fontWeight:'700'
  },

  signupTextCont: { 
    flexGrow:.01,
    paddingVertical: 15,
    justifyContent: 'center', 
    alignItems: 'flex-end', 
     flexDirection: 'row',
    },
    signupText: { color: '#FFF8D6', fontSize:15,
    },
    signupButton: { color: '#FFF8D6', fontSize:15,
    fontWeight: '700',
    },
  btntxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  errtxt: {
    fontWeight: 200,
    color: 'white',
  },
  homeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#617A55'
  },
});

export default globalStyles;
