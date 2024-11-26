const addToLocalStorage = (key: string, data: object | string) => {
  try {
    if (typeof data === "object") {
      localStorage.setItem(key, JSON.stringify(data));
    } else if (typeof data === "string") {
      localStorage.setItem(key, data);
    }
  } catch (error) {
    console.error("خطا هنگام ذخیره در localStorage:", error);
  }
};

const getFromLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("خطا هنگام خواندن از localStorage:", error);
    return null;
  }
};

export { addToLocalStorage, getFromLocalStorage };
