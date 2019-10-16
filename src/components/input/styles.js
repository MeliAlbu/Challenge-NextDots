import {Stylesheet} from 'react';
import {responsiveSize} from '../../theme/dimensions';

const styles = StyleSheet.create ({
    input: {
        height : responsiveSize(30),
        width: '70%',
        borderColor: 'white',
        borderBottomWidth: responsiveSize(15),
        marginVertical: responsiveSize(10),
        backgroundColor: 'white',
    }
 
 });

 export default styles;