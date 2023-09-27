export const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))
export const getFromLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))

export const clearLocalStorageByKey = (key) => window.localStorage.removeItem(key)
export const clearAllLocalStorage = () => window.localStorage.clear()
