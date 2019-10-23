// TODO: improve code using es6 functions

const transformValidationErrors = (errors: any) => {
  const formatedErrors = [];
  for (const key in errors.errors) {
    if (errors.errors.hasOwnProperty(key)) {
      formatedErrors.push({
        field: key,
        value: errors.first(key)
      });
    }
  }

  return {
    error: "Validation error",
    message: formatedErrors
  };
};

export default transformValidationErrors;
