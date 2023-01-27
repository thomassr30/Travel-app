import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     item: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.5)',
        marginRight: 17,
        paddingVertical: 2
     },
     selectedItem:{
        textDecorationLine: 'underline',
        color: '#000000'
     },
     itemContainer: {
        marginVertical: 16
     },
     selectedItemContainer: {
        borderBottomColor: '#4681A3',
        borderBottomWidth: 1
     }
})

export default styles;