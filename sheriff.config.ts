import {SheriffConfig} from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  entryFile: './src/index.ts',
  modules: {
    'src/features/<feature>': ['feature'],
    'src/shared/<sharedFeature>': ['sharedFeature'],
    'src/services/<sharedFeature>': ['sharedFeature'], // treat services as shared utilities
  },
  enableBarrelLess: true,
  depRules: {
    noTag: 'feature',
    root: 'feature',
    feature: ['feature', 'sharedFeature', 'root'], // allow feature to access root-tagged modules
    sharedFeature: ['sharedFeature'],
  },
};
