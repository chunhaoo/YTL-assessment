import { TextStyle, ViewStyle } from "react-native";
import { StyleProps } from "react-native-reanimated";

interface IStyle {
    button: {
        primary: ViewStyle,
        secondary: ViewStyle,
    };
    font: {
        button: {
            default: TextStyle,
        }
        description: TextStyle,
        error: TextStyle,
        subtitle: TextStyle,
        title: TextStyle,
    };
    input: TextStyle;
    layout: StyleProps;
    scrollView: StyleProps;
}

export const COLORS = {
    grey: '#5e5e5e',
    navy: '#020085',
    primary: '#0bb0e7',
    red: '#e21f25',
    secondary: '#ff5824',
    white: '#fff',
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
            fontSize: 16,
        },
        error: {
            color: 'red',
            marginBottom: 16,
            marginTop: 4,
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
    input: {
        fontSize: 16,
        borderColor: COLORS.grey,
        borderWidth: 1,
        padding: 16,
        borderRadius: 16,
    },
    layout: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    scrollView: {
        textAlign: 'left',
        flexGrow: 1,
        fontSize: 16,
        marginHorizontal: 'auto',
        paddingVertical: 32,
        width: '90%',
    },
}