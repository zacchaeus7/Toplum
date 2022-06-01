import { ToastAndroid, Platform, AlertIOS } from 'react-native';

function notifyMessage({ message }) {
    if (Platform.OS === 'android') {
        ToastAndroid.show(message, ToastAndroid.SHORT)
    } else {
        AlertIOS.alert(message);
    }
}

export default notifyMessage;