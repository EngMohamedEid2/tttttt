function validateEmail(value) {
  let result = {};
  if (String(value).length == 0) {
    result.valid = false;
    result.errorMessage = "Email is required";
  } else if (String(value).toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) {
    result.valid = true;
    result.errorMessage = false;
  } else {
    result.valid = false;
    result.errorMessage = "Invalid Email";
  }
  return result;
}
function validatePassword(params) {
  let result = {}, minLengthVar = (params == null ? void 0 : params.minLength) || 5;
  if (params.value == void 0 || params.value.length == 0) {
    result.valid = false;
    result.errorMessage = (params == null ? void 0 : params.errorMessage) ? params == null ? void 0 : params.errorMessage : `This Field Cannot Be Empty`;
  } else if (params.value.length >= minLengthVar) {
    result.valid = true;
    result.errorMessage = false;
  } else {
    result.valid = false;
    result.errorMessage = `Length Must Be More than ${minLengthVar}`;
  }
  return result;
}
function validateRePassword(params) {
  let result = {}, minLengthVar = params.minLength || 5;
  if (params.value.length == 0) {
    result.valid = false;
    result.errorMessage = (params == null ? void 0 : params.errorMessage) ? params == null ? void 0 : params.errorMessage : `This Field Cannot Be Empty`;
  } else if (params.value.length < minLengthVar) {
    result.valid = false;
    result.errorMessage = `Length Must Be More than ${minLengthVar}`;
  } else if (params.value != params.valueToCompare) {
    result.valid = false;
    result.errorMessage = "Passwords do not match";
  } else {
    result.valid = true;
    result.errorMessage = false;
  }
  return result;
}
function validateNonEmptyFields(params) {
  let result = {}, minLengthVar = params.minLength || 1;
  if (params.value.length == 0) {
    result.valid = false;
    result.errorMessage = (params == null ? void 0 : params.errorMessage) ? params == null ? void 0 : params.errorMessage : `This Field Cannot Be Empty`;
  } else if (params.value.length >= minLengthVar) {
    result.valid = true;
    result.errorMessage = false;
  } else {
    result.valid = false;
    result.errorMessage = `This Field must Contain more than ${params.minLength} characters`;
  }
  return result;
}

export { validateEmail as a, validatePassword as b, validateRePassword as c, validateNonEmptyFields as v };
