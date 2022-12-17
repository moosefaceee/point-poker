// Usage
// const localStorage = localStorageAPI();

// Set a key-value pair in local storage
// localStorage.setItem('key', 'value');

// Get the value for a key from local storage
// const value = localStorage.getItem('key');

// Remove a key-value pair from local storage
// localStorage.removeItem('key');

export const localStorageHelpers = () => {
  // Set a key-value pair in local storage
  function setItem(key: string, value: string) {
    try {
      window.localStorage.setItem(key, value)
    } catch (error) {
      console.log(error)
    }
  }

  // Get the value for a key from local storage
  function getItem(key: string) {
    try {
      return window.localStorage.getItem(key)
    } catch (error) {
      console.log(error)
    }
  }

  // Remove a key-value pair from local storage
  function removeItem(key: string) {
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    setItem,
    getItem,
    removeItem,
  }
}
