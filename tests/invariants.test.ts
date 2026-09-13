import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

function getSourceFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        getSourceFiles(fullPath, fileList);
      }
    } else if (/\.(tsx?|jsx?|html|css|json|md)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

describe('Codebase Architectural Invariants', () => {
  const rootDir = path.resolve(__dirname, '..');
  const srcDir = path.resolve(rootDir, 'src');
  const allSourceFiles = getSourceFiles(srcDir);
  allSourceFiles.push(path.resolve(rootDir, 'index.html'));

  it('enforces strict zero-tolerance ban on em dashes and en dashes across all source files', () => {
    const dashViolations: { file: string; line: number; content: string }[] = [];

    for (const filePath of allSourceFiles) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');
      lines.forEach((lineText, idx) => {
        if (/[\u2014\u2013]/.test(lineText)) {
          dashViolations.push({
            file: path.relative(rootDir, filePath),
            line: idx + 1,
            content: lineText.trim(),
          });
        }
      });
    }

    expect(dashViolations).toEqual([]);
  });

  it('guarantees complete purge of obsolete tokyonight identifiers across source files', () => {
    for (const filePath of allSourceFiles) {
      if (filePath.endsWith('invariants.test.ts')) continue;
      const content = fs.readFileSync(filePath, 'utf-8');
      expect(content.toLowerCase().includes('tokyonight')).toBe(false);
    }
  });

  it('guarantees public directory does not contain unused dead assets', () => {
    const publicDir = path.resolve(rootDir, 'public');
    const files = fs.existsSync(publicDir) ? fs.readdirSync(publicDir) : [];
    expect(files.includes('avatar.jpg')).toBe(false);
    expect(files.includes('icons.svg')).toBe(false);
  });
});
