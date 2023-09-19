const DB_KEY = 'bankData';

export const getFromLocalStorage = () => {
    let data = localStorage.getItem(DB_KEY);

    if (!data) {
      const defaultData = [];
      saveToLocalStorage(defaultData);
      data = JSON.stringify(defaultData);
    }
    
    console.log (data)
    return JSON.parse(data);
};

export const saveToLocalStorage = (data) => {
    localStorage.setItem(DB_KEY, JSON.stringify(data));
};

export const clearLocalStorage = () => {
    localStorage.removeItem(DB_KEY);
};