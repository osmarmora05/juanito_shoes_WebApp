import { Form, Formik } from "formik";
import { TextBox } from "../ui/Inputs";
import { PrimaryButton } from "../ui/Buttons";
import { Toaster, toast } from "sonner";
import '../../css/editcategories.css'

export default function EditCategories({ row }) {
  return (
    <div className="edit-categories">
      <Formik
        initialValues={{
          nombre: "",
        }}
        onSubmit={(values, actions) => {
          if (values.nombre.length == 0) {
            toast.error("Ups! se te ha olvidado llenar el campo Nombre");
            return;
          }

          toast.success("Todo correcto");
          actions.resetForm();
        }}
      >
        {({ handleChange, values, resetForm }) => (
          <Form className="form-edit-categories">
            <div>
              <label className="form-edit-categories__id">{`Id: ${row.id}`}</label>
              <label className="form-edit-categories__current-name">{`Nombre actual: ${row.Nombre}`}</label>
              <div>
                <TextBox
                  title={"Nombre"}
                  placeHolder={"Edite el nombre de la categoría"}
                  name={"nombre"}
                  value={values.nombre}
                  handleOnchange={handleChange}
                />
              </div>
            </div>
            <footer>
              <PrimaryButton
                text={"Aceptar"}
                type="submit"
              />
            </footer>
          </Form>
        )}
      </Formik>
      <Toaster/>
    </div>
  );
}