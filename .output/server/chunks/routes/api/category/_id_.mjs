import { d as defineEventHandler, g as getRouterParam } from '../index.mjs';
import { c as category } from '../../../_/category.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const _id_ = defineEventHandler((event) => {
  var _a;
  const id = getRouterParam(event, "id");
  const categoryObj = (_a = category) == null ? void 0 : _a.data.find((elem) => elem.id == id);
  return categoryObj;
});

export { _id_ as default };
