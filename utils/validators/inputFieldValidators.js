export function validateEmail(value) {
  let result = {};
  if (String(value).length == 0) {
    result.valid = false;
    result.errorMessage = "Email is required";
  } else if (
    String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    result.valid = true;
    result.errorMessage = false;
  } else {
    result.valid = false;
    result.errorMessage = "Invalid Email";
  }
  return result;
}

export function validatePassword(params) {
  let result = {},
    minLengthVar = params?.minLength || 5;
  if (params.value == undefined || params.value.length == 0) {
    result.valid = false;
    result.errorMessage = params?.errorMessage
      ? params?.errorMessage
      : `This Field Cannot Be Empty`;
  } else if (params.value.length >= minLengthVar) {
    result.valid = true;
    result.errorMessage = false;
  } else {
    result.valid = false;
    result.errorMessage = `Length Must Be More than ${minLengthVar}`;
  }
  return result;
}

export function validateRePassword(params) {
  let result = {},
    minLengthVar = params.minLength || 5;
  if (params.value.length == 0) {
    result.valid = false;
    result.errorMessage = params?.errorMessage
      ? params?.errorMessage
      : `This Field Cannot Be Empty`;
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

export function validateNonEmptyFields(params) {
  let result = {},
    minLengthVar = params.minLength || 11;
  if (params.value.length == 0) {
    result.valid = false;
    result.errorMessage = params?.errorMessage
      ? params?.errorMessage
      : `This Field Cannot Be Empty`;
  } else if (params.value.length >= minLengthVar) {
    result.valid = true;
    result.errorMessage = false;
  } else {
    result.valid = false;
    // result.errorMessage = `This Field must Contain 11 numbers`;
  }
  return result;
}

export function validateurl(value) {
  let result = {};
  if (String(value.value).length == 0) {
    result.valid = false;
    result.errorMessage = "This Field Cannot Be Empty";
  } else if (
    String(value.value)
      .toLowerCase()
      .match(
        /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}$/
      )
  ) {
    result.valid = true;
    result.errorMessage = false;
  } else {
    result.valid = false;
    result.errorMessage = "Video Link is invalid";
  }
  return result;
}
