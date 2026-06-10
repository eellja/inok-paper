import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const events = defineCollection({
    loader: glob({ base: "./src/content/events", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        coverUrl: z.string(),
    }),
});

const issues = defineCollection({
    loader: glob({ base: "./src/content/issues", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        number: z.number(),
        pdfUrl: z.string(),
        coverUrl: z.string(),
    }),
});

export const collections = {
    events,
    issues,
};