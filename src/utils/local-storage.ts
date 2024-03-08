type LocalStorageKeys = "language" | "costam";

export class LocalStorage {
  public static get = async <T>(key: LocalStorageKeys) => {
    const fromCache = await localStorage.getItem(key);
    return fromCache ? (JSON.parse(fromCache) as T) : undefined;
  };

  public static set = <T>(key: LocalStorageKeys, value: T) =>
    localStorage.setItem(key, JSON.stringify(value));

  public static remove = (key: LocalStorageKeys) =>
    localStorage.removeItem(key);

  public static clear = () => localStorage.clear();
}
