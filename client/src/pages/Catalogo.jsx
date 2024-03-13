import TextBoxSearch, { TextArea, TextBox } from "../components/ui/Inputs";
import ScreenHeader from "../components/ScreenHeader";
import ComboBox from "../components/ui/ComboBox";
import SelectSize from "../components/ui/SelectSize";
import SelectColor from "../components/ui/SelectColor";
import {
  EditButton,
  PrimaryButton,
  RemoveButton,
  SecondaryButton,
} from "../components/ui/Buttons";
import SelectFile from "../components/ui/SelectFile";
import { Form, Formik } from "formik";
import { Toaster, toast } from "sonner";
import "../css/catalogo.css";
import { useState,useEffect } from "react";
import DialogForm from "../components/ui/DialogForm";
import AddCategories from "../components/categories/AddCategories";
// import data from "../const/catalogo.json";
import DataTable from "react-data-table-component";
import EditCatalogo from "../components/EditCatologo";

export function Catalogo() {
  const [showAddCategoriesForm, setShowAddCategoriesForm] = useState(false);
  const [showEditCatalogoForm, setShowEditCatalogoForm ] = useState(false);
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [field, setField] = useState(null);

  const handleChangeRecords = (e) => {
    const filteredRecords = records.filter((record) => {
      return record.Nombre.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredRecords(filteredRecords);
  };

  // Verificamos si existen los datos

  useEffect(() => {
    if (typeof data !== "undefined" && data && data.length > 0) {
      setRecords(data);
      setFilteredRecords(data);
    }
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.Nombre,
      sortable: true,
    },
    {
      name: "Categoría",
      selector: (row) => row.Categoria,
      sortable: true,
    },
    {
      name: "Imagen",
      selector: (row) => row.Imagen,
      sortable: true,
      resizable: true,
      wrap: true,
    },
    {
      name: "Tamaño",
      selector: (row) => row.Tamaño,
      sortable: true,
    },
    {
      name: "Color",
      selector: (row) => row.Color,
      sortable: true,
    },
    {
      name: "Descripción",
      selector: (row) => row.Descripcion,
      sortable: true,
      wrap: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <RemoveButton />
          <EditButton
            handleOnClick={() => {
              setShowEditCatalogoForm(true);
              setField(row);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="catalogo">
      <ScreenHeader
        title="Catalogo"
        description="Ingreso de entrada de mercadería"
      />

      <Formik
        initialValues={{
          nombre: "",
          modelo: "",
          categoria: "",
          size: "",
          color: "",
          descripcion: "",
          file: null,
        }}
        onSubmit={(values, actions) => {
          if (
            values.nombre.length == 0 &&
            values.modelo.length == 0 &&
            values.categoria.length == 0 &&
            values.color.length == 0 &&
            values.size.length == 0 &&
            values.descripcion.length == 0 &&
            values.file == null
          ) {
            toast.error("Ups! Se te ha olvidado llenar los campos", {
              description:
                "Por favor, asegúrate de completar todos los campos para poder procesar tu solicitud correctamente",
            });
            return;
          }

          for (const property in values) {
            if (values[property] == null || values[property].length == 0) {
              if (property == "size") {
                toast.error("Ups! Se te paso por alto llenar el campo Tamaño");
                return;
              } else if (property == "file") {
                toast.error("Ups! Se te paso por alto llenar el campo Imagen");
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
        {({ handleChange, handleSubmit, setFieldValue, values, resetForm }) => (
          <Form className="catalogo__box" onSubmit={handleSubmit}>
            <div className="catalogo__content">
              <div className="catalogo__columns">
                {/* Primera Columna */}
                <div>
                  <TextBox
                    title={"Nombre"}
                    placeHolder={"Ingrese el nombre"}
                    name={"nombre"}
                    handleOnchange={handleChange}
                    value={values.nombre}
                  />
                </div>

                <div className="catalogo__model-and-category-box">
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
                    <div className="catalog__with-buttons">
                      <div>
                        <ComboBox
                          title={"Categoria"}
                          setFieldValue={setFieldValue}
                          fieldValue={"categoria"}
                          value={values.categoria}
                        />
                      </div>
                      <SecondaryButton
                        text={"Agregar"}
                        handleOnClick={() => {
                          setShowAddCategoriesForm(true);
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Segunda columna */}

                <div>
                  <div>
                    <div>
                      <SelectSize
                        title={"Tamaños(uk)"}
                        setFieldValue={setFieldValue}
                        fieldValue={"size"}
                        value={values.size}
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <SelectColor
                        title={"Color"}
                        setFieldValue={setFieldValue}
                        fieldValue={"color"}
                        value={values.color}
                      />
                    </div>
                  </div>
                </div>

                {/* Tercera fila */}

                <div>
                  <TextArea
                    title={"Descripción"}
                    placeHolder={"Ingrese la descripción"}
                    name={"descripcion"}
                    handleOnchange={handleChange}
                    value={values.descripcion}
                  />
                </div>

                {/* Cuarta fila */}
                <div className="catalogo__separator-box">
                  <div className="catalogo__separator"></div>
                </div>

                {/* Quinta fila */}
                <div>
                  <div>
                    <label className="catalogo__label">Imagen</label>
                    <SelectFile
                      setFieldValue={setFieldValue}
                      fieldValue={"file"}
                      value={values.file}
                    />
                  </div>
                </div>
              </div>
            </div>
            <footer className="catalogo__footer">
              <SecondaryButton
                text={"Cancelar"}
                handleOnClick={() => {
                  resetForm();
                  toast.success("Limpiado los campos");
                }}
              />
              <PrimaryButton text={"Aceptar"} type="submit" />
            </footer>
          </Form>
        )}
      </Formik>
      {showAddCategoriesForm && (
        <DialogForm
          content={<AddCategories />}
          setShowForm={setShowAddCategoriesForm}
        />
      )}

      {showEditCatalogoForm && (
        <DialogForm
          content={<EditCatalogo row={field} />}
          setShowForm={setShowEditCatalogoForm}
        />
      )}

      <div style={{ width: "100%" }}>
        Busque en el catalogo
        <TextBoxSearch
          placeHolder={"Buscar..."}
          handleOnchange={handleChangeRecords}
        />
      </div>

      <div style={{ width: "100%", height: "300px", overflowY: "auto" }}>
        {records.length === 0 ?  (
          "Sin valores"
        ) : (
          <DataTable
            columns={columns}
            data={filteredRecords}
            pagination
            paginationPerPage={4}
            highlightOnHover
          />
        )}
      </div>
      <Toaster />
    </section>
  );
}