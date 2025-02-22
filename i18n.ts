export const locales = ["en", "es"] as const; // Idiomas disponibles
export type Locale = (typeof locales)[number]; // Define un tipo estrictamente basado en locales
export const defaultLocale: Locale = "es"; // Idioma predeterminado
