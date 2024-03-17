import { Form, Formik } from "formik";
import { PasswordBox, TextArea, TextBox } from "../ui/Inputs";
import ScreenHeader from "../ScreenHeader";
import { PrimaryButton } from "../ui/Buttons";
import '../../css/edittableinfo.css'

export default function EditClientes({ row }) {
  return (
    <div className="edit-table">
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
          <Form className="edit-table__form">
            <div className="edit-table__content">
              <label className="edit-table__id">{`Id: ${row.id}`}</label>
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
            <footer className="edit-table__footer">
              <PrimaryButton text={"Aceptar"} />
            </footer>
          </Form>
        )}
      </Formik>
    </div>
  );
}
