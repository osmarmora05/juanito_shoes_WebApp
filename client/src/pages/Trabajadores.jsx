import { Form, Formik } from "formik";
import ScreenHeader from "../components/ScreenHeader";
import { PrimaryButton, SecondaryButton } from "../components/ui/Buttons";
import { PasswordBox, TextBox } from "../components/ui/Inputs";
import ComboBox from "../components/ui/ComboBox";
import { Toaster, toast } from "sonner";
import "../css/trabajadores.css";

export default function Trabajadores() {
  const ROLES = [
    {
      text: "Bodeguero",
      value: "Bodeguero",
    },
    {
      text: "Administrador",
      value: "Administrador",
    },
    {
      text: "Vendedor",
      value: "Vendedor",
    },
  ];

  return (
    <section className="trabajadores">
      <ScreenHeader
        title="Registro de trabajadores"
        description="Crea credenciales, establece roles, edítalos y elimínalos"
      />
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          password: "",
          roles: "",
        }}
        onSubmit={(values, actions) => {
          if (
            values.nombre.length == 0 &&
            values.password.length == 0 &&
            values.correo.length == 0 &&
            values.roles.length == 0
          ) {
            toast.error("Ups! Se te ha olvidado llenar los campos", {
              description:
                "Por favor, asegúrate de completar todos los campos para poder procesar tu solicitud correctamente",
            });
            return;
          }

          for (const property in values) {
            if (values[property] == null || values[property].length == 0) {
              if (property == "password") {
                toast.error(
                  "Ups! Se te paso por alto llenar el campo Contraseña"
                );
                return;
              } else if (property == "roles") {
                toast.error("Ups! Se te paso por alto llenar el campo Rol");
                return;
              } else {
                const unfilledField =
                  property.charAt(0).toUpperCase() + property.slice(1);
                toast.error(
                  "Ups! Se te paso por alto llenar el campo " + unfilledField
                );
                return;
              }
            }
          }

          toast.success("Todo correcto");
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, values, setFieldValue }) => (
          <Form className="trabajadores__form">
            <div className="trabajadores__columns">
              {/* Primera columna */}
              <div>
                <TextBox
                  title={"Nombre"}
                  placeHolder={"Ingrese el nombre"}
                  name={"nombre"}
                  handleOnchange={handleChange}
                  value={values.nombre}
                />
              </div>
              <div>
                <PasswordBox
                  title={"Contraseña"}
                  placeHolder={"Ingrese la contraseña"}
                  name={"password"}
                  handleOnchange={handleChange}
                  value={values.password}
                />
              </div>
              {/* Segunda columna */}
              <div>
                <TextBox
                  title={"Correo"}
                  type="email"
                  placeHolder={"Ingrese el correo"}
                  name={"correo"}
                  handleOnchange={handleChange}
                  value={values.correo}
                />
              </div>
              <div>
                <ComboBox
                  title={"Roles"}
                  values={ROLES}
                  fieldValue={"roles"}
                  setFieldValue={setFieldValue}
                  value={values.roles}
                />
              </div>
            </div>
            <footer>
              <SecondaryButton text={"Cancelar"} />
              <PrimaryButton text={"Aceptar"} type="submit" />
            </footer>
          </Form>
        )}
      </Formik>
      <Toaster />
    </section>
  );
}
