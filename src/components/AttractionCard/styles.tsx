import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
     card: {
        padding: 4,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 15,
        marginBottom: 12
     },
     image: {
        width: (width - 96) / 2,
        height: 100,
        borderRadius: 10,
     },
     title: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 12,
        marginLeft: 6,
        color: '#000000'
     },
     row: {
        marginBottom: 12,
        marginLeft: 6,
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center'
     },
     subtitle: {
        fontSize: 12,
        fontWeight: '400',
        paddingLeft: 5
     },
     icon: {
        width: 12,
        height: 12
     }
})

export default styles;