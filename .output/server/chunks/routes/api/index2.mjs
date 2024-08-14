import { d as defineEventHandler } from './index.mjs';
import { c as category } from '../../_/category.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const index = defineEventHandler((event) => {
  return category;
});

export { index as default };
