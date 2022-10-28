import { color, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { ErrorMessage, useField } from "formik";
import React from "react";

export const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} />
      <FormHelperText>We'll never share your email.</FormHelperText>
      <ErrorMessage name={field.name} />
    </>
  );
};
