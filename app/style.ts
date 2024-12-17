import { ViewStyle } from "react-native";
import { TextStyle } from "react-native";
import { StyleProps } from "react-native-reanimated";

export const COLORS = {
    grey: '#5e5e5e',
    navy: '#020085',
    primary: '#0bb0e7',
    red: '#e21f25',
    secondary: '#ff5824',
    white: '#fff',
}

interface IStyle {
    button: {
        primary: ViewStyle,
        secondary: ViewStyle,
    },
    font: {
        button: {
            default: TextStyle,
        }
        description: TextStyle,
        subtitle: TextStyle,
        title: TextStyle,
    }
    layout: StyleProps,
    signInPage: StyleProps;
}

export const styles: IStyle = {
    button: {
        primary: {
            borderRadius: 16,
            backgroundColor: COLORS.primary,
            padding: 16,
        },
        secondary: {
            borderRadius: 16,
            backgroundColor: COLORS.secondary,
            padding: 16,
        }
    },
    font: {
        button: {
            default: {
                color: COLORS.white,
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
            }
        },
        description: {
            color: COLORS.grey,
            fontSize: 18,
        },
        subtitle: {
            fontSize: 25,
            fontWeight: 'semibold',
        },
        title: {
            color: COLORS.navy,
            fontSize: 50,
            fontWeight: 'bold',
        }
    },
    layout: {
        alignItems: 'center',
        flex: 1,
        fontSize: 16,
        height: '100%',
        width: '100%',
    },
    signInPage: {
        flex: 1,
        justifyContent: "center",
        width: '90%',
    }
}