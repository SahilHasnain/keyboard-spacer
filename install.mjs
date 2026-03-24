#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFile = path.join(__dirname, "KeyboardSpacer.tsx");
const targetRoot = process.cwd();
const targetDir = path.join(targetRoot, "components");
const targetFile = path.join(targetDir, "KeyboardSpacer.tsx");

await fs.mkdir(targetDir, { recursive: true });
await fs.copyFile(sourceFile, targetFile);

console.log(`Copied KeyboardSpacer to ${targetFile}`);
