import { type FullConfig } from '@playwright/test';
import { dirname } from 'node:path';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';

export default async function (_: FullConfig) {
  const storageState = process.env.AUTH_FILE;
  if (existsSync(storageState)) return;
  await mkdir(dirname(storageState), { recursive: true });
  await writeFile(storageState, '{}');
}