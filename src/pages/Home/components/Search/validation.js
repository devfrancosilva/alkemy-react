import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  search: Yup.string().required("Name is required"),
});
