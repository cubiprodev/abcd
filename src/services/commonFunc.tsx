
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PermissionsAndroid } from 'react-native';

export const storeDataInLocalStorage = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // Handle saving error
        console.error(`Error storing ${key} data and value ${value}::`, e);
    }
};

export const removeDataFromLocalStorage = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        // Handle saving error
        console.error(`Error removing ${key} data and value::`, e);
    }
};

export function getCurrentLocalDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1 and pad with 0 if necessary.
    const day = String(now.getDate()).padStart(2, '0');
    const todayDate = `${year}-${month}-${day}`;
    return String(todayDate);
}

// Function to match two date strings in the "yyyy-mm-dd" format
export function matchDateFormats(date1: any, date2: any) {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    const isDate1Valid = pattern.test(date1);
    const isDate2Valid = pattern.test(date2);
    if (isDate1Valid && isDate2Valid) {
        console.log('date matched::::::::::::',)
        if (date1 === date2) {
            return true;
        }
    } else {
        console.log('date did not matched::::::::::::',)
        return false;
    }
}

export function getRemainingWeekDates() {
    const today = new Date();
    const currentDay = today.getDay();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - currentDay + (currentDay === 0 ? -6 : 1));

    const remainingWeekDates = [];

    for (let i = currentDay; i < 7; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const dateObj = {
            day: currentDate.toDateString(),
            isToday: i === currentDay,
        };

        remainingWeekDates.push(dateObj);
    }

    return remainingWeekDates;
}


export function getRemainingMonthDates() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const upcomingDates = [];

    for (let day = today.getDate(); day <= lastDayOfMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        upcomingDates.push(date.toDateString());
    }

    return upcomingDates;
}
