import { Form, Formik } from "formik";
import { PasswordBox, TextArea, TextBox } from "../ui/Inputs";
import ScreenHeader from "../ScreenHeader";
import "../../css/editclientes.css";
import { PrimaryButton } from "../ui/Buttons";

export default function EditClientes({ row }) {
  return (
    <div className="edit-clientes">
      <ScreenHeader
        title={"Edición de clientes"}
        description="Edita la informacion de los clientes"
      />
      <Formik
        initialValues={{
          nombre: row.Nombre,
          telefono: row.Teléfono,
          ubicacion: row.Ubicación,
          correo: row.Correo,
          password: row.Contraseña,
        }}
      >
        {({ handleChange, values }) => (
          <Form className="edit-clientes__form">
            <div>
              <label className="edit-clientes__id">{`Id: ${row.id}`}</label>
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
                <TextBox
                  title={"Telefono"}
                  placeHolder={"Ingrese el numero  teléfono"}
                  name={"telefono"}
                  handleOnchange={handleChange}
                  value={values.telefono}
                />
              </div>
              <div>
                <TextArea
                  title={"Ubicación"}
                  placeHolder={"Ingrese la ubicacion"}
                  name={"ubicacion"}
                  handleOnchange={handleChange}
                  value={values.ubicacion}
                />
              </div>
              <div>
                <TextBox
                  title={"Correo"}
                  placeHolder={"Ingrese el correo"}
                  name={"correo"}
                  type="email"
                  handleOnchange={handleChange}
                  value={values.correo}
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
            </div>
            <footer>
              <PrimaryButton text={"Aceptar"} />
            </footer>
          </Form>
        )}
      </Formik>
    </div>
  );
}
