import AsyncStorage from '@react-native-async-storage/async-storage';

// Fungsi untuk menyimpan data
export const storeData = async <T,>(key: string, value: T): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data berhasil disimpan!');
  } catch (e) {
    console.error('Gagal menyimpan data:', e);
  }
};

// Fungsi untuk mengambil data
export const getData = async <T,>(key: string): Promise<T | null> => {
  try {
    const storedData = await AsyncStorage.getItem(key);
    if (storedData !== null) {
      return JSON.parse(storedData) as T;
    }
    return null;
  } catch (e) {
    console.error('Gagal mengambil data:', e);
    return null;
  }
};

// Fungsi untuk menambah data
export const addData = async <T,>(key: string, newData: T): Promise<void> => {
  try {
    const storedData = await AsyncStorage.getItem(key);
    if (storedData !== null) {
      const parsedData: T[] = JSON.parse(storedData);
      parsedData.push(newData);
      await AsyncStorage.setItem(key, JSON.stringify(parsedData));
      console.log('Data berhasil ditambahkan!');
    }
  } catch (e) {
    console.error('Gagal menambah data:', e);
  }
};
