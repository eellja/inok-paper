import slugify from "slugify";

export function generateSlug(text: string): string {
    return slugify(text, {
        replacement: "-",  // Replace spaces with hyphens
        lower: true,       // Convert to lower case
        strict: true,      // Strip special characters like punctuation
        locale: "uk",      // Apply official Ukrainian transliteration mappings
        trim: true         // Trim leading and trailing hyphens
    });
}
