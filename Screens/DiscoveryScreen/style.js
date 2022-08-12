import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    discover: {
        padding:10,
        alignItems:"center",
    },
    subtitle:{
        fontSize:20,
        fontWeight:"bold",
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        alignSelf:"flex-start",
        borderRadius:10,
    },
    categoryImage:{
        height: 60,
        width:72,
        resizeMode: "contain",
    },
    name: {
        fontSize: 14,
        textTransform: "capitalize",
    },
    category: {
        height:130,
        alignItems:"center",
        padding: 15,
        justifyContent:"space-evenly",
        borderWidth: 2,
        borderColor: '#282C35'
    },
    sources: {
        height:130,
        alignItems:"center",
        padding: 20,
        justifyContent:"space-evenly",
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 20
    }
})