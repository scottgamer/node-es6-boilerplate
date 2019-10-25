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
    status: "fail",
    error: "HTTP422Error",
    message: formatedErrors
  };
};

export default transformValidationErrors;
