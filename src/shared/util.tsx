export const checkDisableButton = (isDirty: boolean, isValid: boolean) => {
  let isDisabled;
  if (isDirty) {
    isDisabled = !isValid;
  } else {
    isDisabled = true;
  }
  return isDisabled;
};
