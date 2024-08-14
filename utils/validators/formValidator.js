export default function isFormValid({ FormData, NotRequired }) {
  let Valid = true;

  if (FormData) {
    Object.keys(FormData).every((key) => {
      if (FormData[key]?.isToggle) {
        return true;
      } else if (
        FormData[key] &&
        (NotRequired ? NotRequired?.indexOf(key) < 0 : true)
      ) {
        if (!FormData[key].data || FormData[key].errorMessage) {
          Valid = false;
          return false;
        }
      }
      return true;
    });
  }
  return Valid;
}
