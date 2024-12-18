import { styles } from "@/app/style";
import { router } from "expo-router";
import { Formik } from "formik";
import { Text, TextInput, TouchableOpacity } from "react-native";
import * as Yup from "yup";

const USERNAME_REGEX = /^\S*$/;

const VALIDATIONS = Yup.object().shape({
  password: Yup.string().required("Required."),
  username: Yup.string()
    .matches(USERNAME_REGEX, "Username must not contain whitespace(s).")
    .required("Required."),
});

export default function SignInForm() {
  const formValue = {
    password: "",
    username: "",
  };

  const onSignIn = () => router.replace("/home");

  return (
    <Formik
      initialValues={formValue}
      onSubmit={onSignIn}
      validationSchema={VALIDATIONS}
    >
      {({ handleChange, handleSubmit, errors, touched, values }) => (
        <>
          <TextInput
            placeholder="username"
            onChangeText={handleChange("username")}
            style={{
              ...styles.input,
              marginBottom: errors.username && touched.username ? 0 : 16,
              borderColor:
                errors.username && touched.username
                  ? "red"
                  : styles.input.borderColor,
            }}
            value={values.username}
          ></TextInput>

          {errors.username && touched.username && (
            <Text style={{ ...styles.font.error }}>{errors.username}</Text>
          )}

          <TextInput
            placeholder="password"
            onChangeText={handleChange("password")}
            style={{
              ...styles.input,
              marginBottom: errors.password && touched.password ? 0 : 16,
              borderColor:
                errors.password && touched.password
                  ? "red"
                  : styles.input.borderColor,
            }}
            value={values.password}
          ></TextInput>

          {errors.password && touched.password && (
            <Text style={{ ...styles.font.error }}>{errors.password}</Text>
          )}

          <TouchableOpacity
            style={styles.button.primary}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.font.button.default}>Sign In</Text>
          </TouchableOpacity>
        </>
      )}
    </Formik>
  );
}
