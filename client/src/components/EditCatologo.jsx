import { Form, Formik } from "formik";
import ScreenHeader from "./ScreenHeader";
import { TextBox, TextArea } from "./ui/Inputs";
import SelectFile from "./ui/SelectFile";
import SelectColor from "../components/ui/SelectColor";
import SelectSize from "./ui/SelectSize";
import ComboBox from "./ui/ComboBox";
import { PrimaryButton } from "./ui/Buttons";
import "../css/editcatalogo.css";

export default function EditCatalogo({ row }) {
  return (
    <div className="edit-catalogo">
      <ScreenHeader
        title="Edicion de catalogo"
        description="Edita las categorias de productos"
      />
      <Formik
        initialValues={{
          nombre: row.Nombre,
          modelo: row.modelo,
          categoria: row.Categoria,
          size: parseInt(row.Tamaño),
          color: row.Color,
          descripcion: row.Descripcion,
          newFile: null,
          currenFile: row.Imagen,
        }}
      >
        {({handleChange,values, setFieldValue}) => (
          <Form className="edit-catalogo__form">

            <label className="edit-catalogo__id">{`Id: ${row.id}`}</label>
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
                setFieldValue={setFieldValue}
                value={values.categoria}
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
              <img src={values.currenFile} className="edit-catalogo__current-image"/>
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