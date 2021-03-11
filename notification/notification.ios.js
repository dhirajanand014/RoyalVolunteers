
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { notificationConsts } from '../constants/Constants';
import { getIOSLocalNotificationDetails } from "../helper/Helper";

const setNotificationActions = () => {
    PushNotificationIOS.setNotificationCategories([
        {
            id: notificationConsts.USER_ACTION_ID,
            actions: [
                {
                    id: notificationConsts.CALL_NOW_ID, title: notificationConsts.CALL_NOW_ACTION,
                    options: { foreground: true }
                },
                {
                    id: notificationConsts.VIEW_REQUESTS_ID, title: notificationConsts.VIEW_REQUESTS_ACTION,
                    options: { foreground: true, destructive: true }
                }
            ],
        },
    ]);
}

export const showNotification = (remoteMessage) => {
    setNotificationActions();
    PushNotificationIOS.addNotificationRequest(getIOSLocalNotificationDetails(remoteMessage));
}

export const handleCancelNotification = () => {
    PushNotificationIOS.removeAllPendingNotificationRequests()
    PushNotificationIOS.removeAllDeliveredNotifications();
}