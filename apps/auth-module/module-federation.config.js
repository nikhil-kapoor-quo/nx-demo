module.exports = {
  name: 'auth-module',
  exposes: {
    './Module': 'apps/auth-module/src/app/remote-entry/entry.module.ts',
  },
};
