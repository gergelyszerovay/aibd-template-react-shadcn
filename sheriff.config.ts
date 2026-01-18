import { SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  entryFile: './src/index.ts',
  modules: {
    'src/features/<feature>': ['feature'],
    'src/shared/<sharedFeature>': ['sharedFeature'],
  },
  enableBarrelLess: true,
  encapsulationPattern: /^[^/]+\/.+/,
  depRules: {
    noTag: 'feature',
    root: 'feature',
    feature: ['feature', 'sharedFeature'],
    sharedFeature: ['sharedFeature'],
  },
};
