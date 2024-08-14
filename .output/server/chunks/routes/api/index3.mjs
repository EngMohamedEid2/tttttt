import { d as defineEventHandler } from './index.mjs';
import { o as order } from '../../_/order.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const index = defineEventHandler((event) => {
  return order;
});

export { index as default };
