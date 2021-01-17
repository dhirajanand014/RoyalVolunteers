import { Dimensions, Platform, StyleSheet } from 'react-native'
import { withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get(`window`);

export const RVStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    signUpContainer: {
        flex: 1,
        backgroundColor: '#fcc200'
    },
    signUpCenterAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpHeaderImage: {
        marginTop: 40,
        alignItems: 'center',
        paddingVertical: 20
    },
    signUpTextHeader: {
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        fontSize: 20,
        paddingVertical: 25,
    },
    signUpFooter: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    signUpTextInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        paddingLeft: 18,
        fontSize: 18,
        color: '#05375a'
    },
    userInputView: {
        paddingTop: 20
    },
    userPasswordInputView: {
        paddingVertical: 10,
        paddingBottom: 10
    },
    userInputTextView: {
        color: '#05375a',
        fontSize: 18,
        paddingLeft: 18
    },
    userInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingStart: 15,
        borderColor: '#999999',
        borderRadius: 35,
        width: width / 1.2,
        marginVertical: 10
    },

    buttonStyle: {

    },
    buttonTextStyle: {

    }
});