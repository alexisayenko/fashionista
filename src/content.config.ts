import { defineCollection, z } from 'astro:content';
import type { Loader } from 'astro/loaders';
import yaml from 'js-yaml';
import fs from 'node:fs/promises';
import path from 'node:path';

function yamlLoader(opts: { dir: string }): Loader {
  return {
    name: 'yaml-loader',
    async load({ store, parseData, generateDigest, watcher, logger }) {
      const absDir = path.resolve(opts.dir);
      const files = await fs.readdir(absDir);
      for (const filename of files) {
        if (!/\.ya?ml$/.test(filename)) continue;
        const id = filename.replace(/\.ya?ml$/, '');
        const filePath = path.join(opts.dir, filename);
        const absPath = path.join(absDir, filename);
        const text = await fs.readFile(absPath, 'utf-8');
        const raw = yaml.load(text) as Record<string, unknown>;
        const data = await parseData({ id, data: raw, filePath });
        const digest = generateDigest(data);
        store.set({ id, data, digest, filePath });
        watcher?.add(absPath);
      }
      watcher?.on('change', async (changedPath) => {
        if (!/\.ya?ml$/.test(changedPath)) return;
        const filename = path.basename(changedPath);
        if (!filename) return;
        try {
          const id = filename.replace(/\.ya?ml$/, '');
          const filePath = path.join(opts.dir, filename);
          const text = await fs.readFile(changedPath, 'utf-8');
          const raw = yaml.load(text) as Record<string, unknown>;
          const data = await parseData({ id, data: raw, filePath });
          const digest = generateDigest(data);
          store.set({ id, data, digest, filePath });
          logger.info(`Reloaded ${filename}`);
        } catch (err) {
          logger.error(`Failed to reload ${filename}: ${err}`);
        }
      });
    },
  };
}

const houses = defineCollection({
  loader: yamlLoader({ dir: 'src/content/houses' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      city: z.string(),
      country: z.string(),
      countryCode: z.string(),
      founded: z.number().int(),
      founding: z.string(),
      heroSlides: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string(),
            credit: z.string(),
          }),
        )
        .optional(),
      heroPortrait: z
        .object({
          src: image(),
          alt: z.string(),
          caption: z.string(),
          credit: z.string(),
        })
        .optional(),
      identityMarks: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string(),
            caption: z.string(),
          }),
        )
        .optional(),
      palette: z
        .array(
          z.object({
            name: z.string(),
            hex: z.string(),
          }),
        )
        .optional(),
      trademarkNotice: z.string().optional(),
      milestones: z.array(
        z.object({
          year: z.union([z.string(), z.number()]),
          text: z.string(),
        }),
      ),
      creativeDirector: z.string(),
      volatileNote: z.string().optional(),
      productLines: z.array(z.string()),
      designDna: z.string(),
      signatureIntro: z.string(),
      signaturePieces: z.array(
        z.object({
          name: z.string(),
          year: z.union([z.string(), z.number()]).optional(),
          text: z.string(),
          figure: z
            .object({
              src: image(),
              alt: z.string(),
              caption: z.string(),
            })
            .optional(),
        }),
      ),
      marketPositioning: z.string(),
      businessScale: z.string(),
      culturalImpact: z.string(),
      card: z.object({
        order: z.number().int(),
        ownership: z.string(),
        blurb: z.string(),
        directorLine: z.string(),
        couture: z.enum(['official', 'correspondent']).optional(),
        leather: z.boolean().optional(),
        price: z.number().int().min(1).max(5),
        heat: z.number().int().min(1).max(5),
        exclusivity: z.number().int().min(1).max(5),
      }),
    }),
});

export const collections = { houses };
