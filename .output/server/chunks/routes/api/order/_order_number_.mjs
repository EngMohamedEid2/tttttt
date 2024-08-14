import { d as defineEventHandler, g as getRouterParam } from '../index.mjs';
import { o as order } from '../../../_/order.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const _order_number_ = defineEventHandler((event) => {
  var _a;
  const orderId = getRouterParam(event, "orderId");
  const orderObj = (_a = order) == null ? void 0 : _a.data.find((elem) => elem.order_number == orderId);
  return orderObj;
});

export { _order_number_ as default };
