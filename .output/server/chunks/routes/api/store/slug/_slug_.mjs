import { d as defineEventHandler } from '../../index.mjs';
import { s as store } from '../../../../_/store.mjs';
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
  const storeObj = (_a = store.data) == null ? void 0 : _a.find((elem) => (elem == null ? void 0 : elem.slug) == slug);
  return storeObj;
});

export { _slug_ as default };
