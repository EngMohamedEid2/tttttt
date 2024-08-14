import { d as defineEventHandler } from './index.mjs';
import { p as product } from '../../_/product.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const index = defineEventHandler((event) => {
  return product;
});

export { index as default };
