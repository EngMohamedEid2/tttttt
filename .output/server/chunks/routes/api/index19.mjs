import { d as defineEventHandler } from './index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var id = 1;
var user_id = "19";
var paypal_email = null;
var bank_name = null;
var bank_holder_name = null;
var bank_account_no = null;
var swift = null;
var ifsc = null;
var is_default = "0";
var status = 1;
var created_at = "2023-09-30T12:55:44.000000Z";
var updated_at = "2023-09-30T12:55:44.000000Z";
var deleted_at = null;
const paymentAccount = {
	id: id,
	user_id: user_id,
	paypal_email: paypal_email,
	bank_name: bank_name,
	bank_holder_name: bank_holder_name,
	bank_account_no: bank_account_no,
	swift: swift,
	ifsc: ifsc,
	is_default: is_default,
	status: status,
	created_at: created_at,
	updated_at: updated_at,
	deleted_at: deleted_at
};

const index = defineEventHandler((event) => {
  return paymentAccount;
});

export { index as default };
