import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    mainImage: {
        width: '100%',
        height: height / 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 36,
        height: 36,
        margin: 16
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(256,256,256,0.35)',
        margin: 16
    },
    miniImage: {
        width: 40,
        height: 40,
        margin: 4,
        borderRadius: 10
    }, 
    moreImages: {
        position: 'absolute',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        top: 12,
        left: 10,
    }
})

export default styles;