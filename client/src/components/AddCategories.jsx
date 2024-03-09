import React from "react";
import ScreenHeader from "./ScreenHeader";
import { Form, Formik } from "formik";
import { TextBox } from "./ui/Inputs";
import { PrimaryButton, SecondaryButton } from "./ui/Buttons";
import "../css/addcategories.css";
import { Toaster, toast } from "sonner";


export default function AddCategories() {
  return (
    <div className="categories">
      <ScreenHeader
        title="Registro de categorías"
        description="Ingreso de categorías de productos"
      />
      <Formik
        initialValues={{
          nombre: "",
        }}

        onSubmit={(values,actions) => {
          if (values.nombre.length== 0) {
            toast.error("Ups! se te ha olvidado llenar el campo Nombre")
            return;
          }

          toast.success("Todo correcto")
          actions.resetForm()
        }}
      >
        {({ handleChange, values, resetForm }) => (
          <Form className="categories__form">
            <div className="categories__field">
              <div>
                <TextBox
                  title={"Nombre"}
                  name={"nombre"}
                  value={values.nombre}
                  handleOnchange={handleChange}
                />
              </div>

              <div>
                <SecondaryButton
                  text={"Cancelar"}
                  handleOnClick={() => {
                    resetForm();
                    toast.success("Limpiado el campo")
                  }}
                />
                <PrimaryButton type="submit" text={"Aceptar"} />
              </div>
            </div>
            <div></div>
          </Form>
        )}
      </Formik>
      <Toaster/>
    </div>
  );
}
