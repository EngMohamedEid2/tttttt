function isFormValid({ FormData, NotRequired }) {
  let Valid = true;
  if (FormData) {
    Object.keys(FormData).every((key) => {
      var _a;
      if ((_a = FormData[key]) == null ? void 0 : _a.isToggle)
        ;
      else {
        if ((NotRequired ? (NotRequired == null ? void 0 : NotRequired.indexOf(key)) < 0 : true) && (!FormData[key].data || FormData[key].errorMessage)) {
          Valid = false;
        }
      }
      return Valid;
    });
  }
  return Valid;
}

export { isFormValid as i };
