import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import {responsiveSize} from '../../theme/dimensions';

const styles = StyleSheet.create({
  Card: {
      height: responsiveSize(100),
      width: '90%',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: colors.white,
      marginBottom:responsiveSize(10),
      marginVertical: responsiveSize(10),
      borderColor: colors.grey,  
      borderRadius:responsiveSize(20)

  },

  DrinkName: {
      flexWrap: 'wrap',
      color: colors.red
  },
  DrinkImage:  {
    borderRadius: 10,
     width: responsiveSize(60),
     height: responsiveSize(60) 
  }
});

export default styles;