import { d as defineEventHandler } from './index.mjs';
import { s as store } from '../../_/store.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const index = defineEventHandler((event) => {
  return store;
});

export { index as default };
