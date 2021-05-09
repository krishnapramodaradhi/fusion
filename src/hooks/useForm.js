const useForm = (validations) => {
  const validateField = (fieldName, value) => {
    const rules = validations[fieldName];
    if (rules) {
      if (rules.required) {
        if (!value.trim()) {
          return typeof rules.required === 'string'
            ? rules.required
            : 'required';
        }
      }

      if (rules.validate && typeof rules.validate === 'function') {
        const error = rules.validate(value);
        if (error) {
          return error;
        }
      }
    }
    return '';
  };

  return {
    validateField,
  };
};

export default useForm;
