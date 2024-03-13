import React, { useState,useEffect } from "react";
import ScreenHeader from "../ScreenHeader";
import { Form, Formik } from "formik";
import { TextBox } from "../ui/Inputs";
import {
  EditButton,
  PrimaryButton,
  RemoveButton,
  SecondaryButton,
} from "../ui/Buttons";
import { Toaster, toast } from "sonner";
import DataTable from "react-data-table-component";
// import data from "../../const/categorias.json";
import TextBoxSearch from "../ui/Inputs";
import "../../css/addcategories.css";
import EditCategories from "./EditCategories";
import AlertDialog from "../ui/AlertDialog";

export default function AddCategories() {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [showEditCategories, setShowEditCategories] = useState(false);
  const [field, setField] = useState(null);

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
      name: "Acciones",
      selector: (row) => (
        <div>
          <RemoveButton />
          <EditButton
            handleOnClick={() => {
              setShowEditCategories(true);
              setField(row);
            }}
          />
        </div>
      ),
    },
  ];

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
                    toast.success("Limpiado el campo");
                  }}
                />
                <PrimaryButton type="submit" text={"Aceptar"} />
              </div>
            </div>
            <div></div>
          </Form>
        )}
      </Formik>
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
      {showEditCategories && (
        <AlertDialog
          content={<EditCategories row={field} />}
          setShowForm={setShowEditCategories}
        />
      )}
      <Toaster />
    </div>
  );
}