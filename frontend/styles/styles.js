import {StyleSheet, Platform, StatusBar} from "react-native"


export const colors={
    color1: "#c70049",
    color1_light: "rgba(227,25,99)",
    color1_light2: "rgba(199,0,73,0.8)",
    color2:"white",
    color3:"rgb(45,45,45)",
    color4:"transparent",
    color5: "#f2f2f2",
    color6: "f7f7f7",
};

export const defaultStyle =StyleSheet.create({
    padding: 35, 
    paddingTop: Platform.OS ==="android" ? StatusBar.currentHeight:0,
    flex: 1,
    backgroundColor: colors.color2,
}) 


export const inputStyle =StyleSheet.create({
   height: 50,
   marginVerical : 10,
   marginHorizontal :20,
   backgroundColor: colors.color2,

})

export const formHeading = StyleSheet.create ( {
    fontSize : 25,
    fontWeight : "200",
    textAlign : "center",
    padding : 5,
    borderRadius : 5,
    backgroundColor : colors.color3,
    color : colors.color2
})

export const formStyles = StyleSheet.create ({
    container : {
        borderRadius : 10,
        justifyContent : "center",
        elevation : 10,
        flex : 1,
        padding : 20,
        backgroundColor : colors.color3,
    },
    forget : {
        color : colors.color2,
        marginVertical : 10,
        marginHorizontal: 20,
        alignSelf : "flex-end",
        fontWeight : "100",
    },
    btn : {
        backgroundColor : colors.color1,
        margin : 20,
        padding : 5,
    },
    or :{
        alignSelf : "center",
        fontSize : 20,
        fontWeight : '100',
        color : colors.color2,
    },
    link :{
        alignSelf : "center",
        fontSize : 18,
        marginVertical : 10,
        marginHorizontal : 10,
        color : colors.color2,
        textTransform : "uppercase"
    },

})

export const defaultImg= "https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg"