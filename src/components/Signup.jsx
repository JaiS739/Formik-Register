import React from "react";

import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";

import { Formik, form } from "formik";
import * as Yup from "yup";
import { InputText } from "./InputText";

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "must be 15 characters only")
      .required("First name is required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters only.")
      .required("Last name is required"),

    email: Yup.string().email("Email is invalid").required("Email is required"),

    password: Yup.string()
      .min(5, "minimum must be 15 characters.")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required")
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <FormControl>
          <Text as="u" fontSize="5xl" color="blue">
            SignUp
          </Text>

          {console.log(formik.values)}

          <InputText
            label="First Name"
            name="firstName"
            type="text"
            placeholder="first name"
          />
          <InputText
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last name"
          />
          <InputText
            label="Email"
            type="email"
            name="email"
            placeholder="enter email"
          />
          <InputText
            label="Password"
            name="password"
            type="password"
            placeholder="password"
          />
          <InputText
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="confirm password"
          />
          <HStack>
            <Button size="lg" colorScheme="blue" my="15px">
              Register
            </Button>
            <Button size="lg" colorScheme="blue" my="15px">
              Reset
            </Button>
          </HStack>
        </FormControl>
      )}
    </Formik>
  );
};
