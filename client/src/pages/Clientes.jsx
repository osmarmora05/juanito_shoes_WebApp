import { useState, useEffect } from "react";
import ScreenHeader from "../components/ScreenHeader";
import TextBoxSearch from "../components/ui/Inputs";
import data from "../const/clientes.json";
import DataTable from "react-data-table-component";
import { EditButton, RemoveButton } from "../components/ui/Buttons";
import "../css/clientes.css";
import DialogForm from "../components/ui/DialogForm";
import EditClientes from "../components/clientes/EditClientes";

export default function Clientes() {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [showEditClientesForm, setShowEditClientesForm] = useState(false);
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

  const COLUMNS = [
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
      name: "Teléfono",
      selector: (row) => row.Teléfono,
      sortable: true,
    },
    {
      name: "Ubicación",
      selector: (row) => row.Ubicación,
      sortable: true,
    },
    {
      name: "Correo",
      selector: (row) => row.Correo,
      sortable: true,
    },
    {
      name: "Contraseña",
      selector: (row) => row.Contraseña,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <RemoveButton />
          <EditButton
            handleOnClick={() => {
              setShowEditClientesForm(true);
              setField(row);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="client">
      <ScreenHeader title="Clientes" description="Gestion de clientes" />
      <div>
        <TextBoxSearch
          title={"Busque los clientes"}
          placeHolder={"Buscar ..."}
          handleOnchange={handleChangeRecords}
        />
      </div>
      <div className="client__table">
        <DataTable
          columns={COLUMNS}
          data={filteredRecords}
          pagination
          paginationPerPage={6}
          highlightOnHover
        />
      </div>
      {showEditClientesForm && (
        <DialogForm
          content={<EditClientes row={field}/>}
          setShowForm={setShowEditClientesForm}
        />
      )}
    </section>
  );
}
