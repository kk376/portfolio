import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Author Provenance & Identity Protection Guarantees', () => {
  const rootDir = path.resolve(__dirname, '..');

  it('enforces Personal Identity License in LICENSE file', () => {
    const licensePath = path.resolve(rootDir, 'LICENSE');
    const licenseText = fs.readFileSync(licensePath, 'utf-8');

    expect(licenseText).toContain('Personal Identity and Source-Available License');
    expect(licenseText).toContain('Kushagra Kumar (kk376)');
    expect(licenseText).toContain('https://github.com/kk376/portfolio');
    expect(licenseText).toContain('All rights reserved.');
    expect(licenseText).toContain('RESTRICTIONS (Anti-Cloning and Identity Protection)');
  });

  it('guarantees console provenance banner is embedded in main.tsx', () => {
    const mainPath = path.resolve(rootDir, 'src/main.tsx');
    const mainText = fs.readFileSync(mainPath, 'utf-8');

    expect(mainText).toContain('console.log');
    expect(mainText).toContain('Crafted by Kushagra Kumar');
    expect(mainText).toContain('https://github.com/kk376/portfolio');
  });

  it('guarantees interactive terminal commands whoami and license exist in SystemTelemetry.tsx', () => {
    const telemetryPath = path.resolve(rootDir, 'src/components/SystemTelemetry.tsx');
    const telemetryText = fs.readFileSync(telemetryPath, 'utf-8');

    expect(telemetryText).toContain("case 'whoami':");
    expect(telemetryText).toContain("case 'license':");
    expect(telemetryText).toContain("case 'copyright':");
    expect(telemetryText).toContain('Personal Identity License:');
  });

  it('guarantees production sourcemaps are explicitly disabled in vite.config.ts', () => {
    const viteConfigPath = path.resolve(rootDir, 'vite.config.ts');
    const viteConfigText = fs.readFileSync(viteConfigPath, 'utf-8');

    expect(viteConfigText).toContain('sourcemap: false');
  });
});
