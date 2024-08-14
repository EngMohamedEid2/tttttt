import { d as defineEventHandler, a as getQuery } from '../../index.mjs';
import { p as product } from '../../../../_/product.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const _slug_ = defineEventHandler((event) => {
  var _a;
  const slug = event.context.params.slug;
  getQuery(event);
  const productObj = (_a = product.data) == null ? void 0 : _a.find((elem) => (elem == null ? void 0 : elem.slug) == slug);
  return productObj;
});

export { _slug_ as default };
