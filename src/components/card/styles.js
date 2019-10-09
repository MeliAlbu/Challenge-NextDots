import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  Card: {
      height: 100,
      width: '90%',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: colors.white,
      marginBottom:10,
      marginVertical: 10,
      borderColor: colors.grey,  
      borderRadius:20

  },

  DrinkName: {
      flexWrap: 'wrap',
      color: colors.red
  },
  DrinkImage:  {
    borderRadius: 10,
     width: 60,
     height: 60 
  }
});

export default styles;