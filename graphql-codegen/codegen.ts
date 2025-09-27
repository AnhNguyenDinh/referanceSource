import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.API_URL}/graphql`,
  generates: {
    'schema/schema.json': {
      plugins: ['introspection'],
      config: {
        minify: false,
      },
    },
    'schema/schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/apollo/possibleTypes.json': {
      plugins: ['fragment-matcher'],
    },
  },
  config: {
    namingConvention: 'keep',
    apolloClientVersion: 3,
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
