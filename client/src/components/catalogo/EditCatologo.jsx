import { Form, Formik } from "formik";
import ScreenHeader from "../ScreenHeader";
import { TextBox, TextArea } from "../ui/Inputs";
import SelectFile from "../ui/SelectFile";
import SelectColor from "../ui/SelectColor";
import SelectSize from "../ui/SelectSize";
import ComboBox from "../ui/ComboBox";
import { PrimaryButton } from "../ui/Buttons";
import '../../css/edittableinfo.css'

export default function EditCatalogo({ row }) {
  return (
    <div className="edit-table">
      <ScreenHeader
        title="Edicion de catalogo"
        description="Edita las categorias de productos"
      />
      <Formik
        initialValues={{
          nombre: row.Nombre,
          modelo: row.Modelo,
          categoria: [{ text: row.Categoria, value: row.Categoria}],
          size: parseInt(row.Tamaño),
          color: row.Color,
          descripcion: row.Descripcion,
          newFile: null,
          currenFile: row.Imagen,
        }}
      >
        {({ handleChange, values, setFieldValue }) => (
          <Form className="edit-table__form">
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
                title={"Modelo"}
                placeHolder={"Ingrese el modelo"}
                name={"modelo"}
                handleOnchange={handleChange}
                value={values.modelo}
              />
            </div>

            <div>
              <ComboBox
                title={"Categoria"}
                fieldValue={"categoria"}
                value={values.categoria}
                setFieldValue={setFieldValue}
                values={values.categoria}
              />
            </div>

            <div>
              <SelectSize
                title={"Tamaños(uk)"}
                fieldValue={"size"}
                setFieldValue={setFieldValue}
                value={values.size}
              />
            </div>

            <div>
              <SelectColor
                title={"Color"}
                fieldValue={"color"}
                setFieldValue={setFieldValue}
                value={values.color}
              />
            </div>

            <div>
              <TextArea
                title={"Descripción"}
                placeHolder={"Ingrese la descripción"}
                name={"descripcion"}
                handleOnchange={handleChange}
                value={values.descripcion}
              />
            </div>

            <div>
              <label>Subir imagen</label>
              <SelectFile
                fieldValue={"file"}
                setFieldValue={setFieldValue}
                value={values.newFile}
              />
            </div>

            <div>
              <label>Imagen actual</label>
              <img
                src={values.currenFile}
                style={{display: "block", width: "250px", height: "400px"}}
              />
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
