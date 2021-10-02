import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import { validationSchema } from "./validation";
import { API } from "../../../../API";
import { useHeroesContext } from "../../../../contexts/HeroesContext";
import { useState } from "react";

export const Search = () => {
  const { dispatchSetSearchList } = useHeroesContext();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ search }) => {
      try {
        setLoading(true);
        const { data } = await API.get(`/search/${search}`);
        setLoading(false);
        if (data.response === "error")
          return Swal.fire("Error", data.error, "error");

        dispatchSetSearchList(data.results);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
  });
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Form
        inline
        className="w-100 justify-content-center"
        onSubmit={formik.handleSubmit}
      >
        <Form.Control
          type="text"
          placeholder="Search heroe..."
          className="w-75 mr-sm-2"
          name="search"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.search}
        />
        <Button type="submit">Submit</Button>
        <Form.Control.Feedback type="invalid" className="text-center">
          {formik.errors.search}
        </Form.Control.Feedback>
      </Form>
      <div className="mt-3">
        {loading ? (
          <Loader type="Puff" color="#343a40" height={100} width={100} />
        ) : null}
      </div>
    </Container>
  );
};
