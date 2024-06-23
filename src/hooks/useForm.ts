import { useState } from 'react';

interface FormValues {
  [key: string]: string;
}

export const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormValues>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    validate(name, value);
  };

  const validate = (name: string, value: string) => {
    // Add your validation logic here
    // This is a simple example
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const isValid = Object.keys(errors).length === 0;

  return { values, handleChange, errors, isValid };
};