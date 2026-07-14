import { spawnSync } from 'node:child_process';
const result = spawnSync('zip', ['-r', '../gmlive-edge.zip', '.', '-x', '*.DS_Store', '-x', '.git/*'], {
  cwd: new URL('..', import.meta.url).pathname,
  stdio: 'inherit'
});
process.exit(result.status ?? 1);
