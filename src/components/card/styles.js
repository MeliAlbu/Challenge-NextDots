import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Card: {
      height: 100,
      width: '90%',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      marginBottom:10,
      marginVertical: 10,
      borderColor: 'grey',  
      borderRadius:20

  },

  DrinkName: {
      flexWrap: 'wrap',
      color: 'red'
  },
  DrinkImage:  {
      borderRadius: 400/ 2,

  }
});

export default styles;