import en from "../app/dictionaries/en.json";
import es from "../app/dictionaries/es.json";

export const getDictionary = (locale: string) => {
    return locale === "en" ? en : es;
};