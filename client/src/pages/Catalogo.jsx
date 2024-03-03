import { TextArea, TextBox } from "../components/ui/Inputs";
import ScreenHeader from "../components/ScreenHeader";
import '../css/catalogo.css'
import ComboBox from "../components/ui/ComboBox";
import SelectSize from "../components/ui/SelectSize";
import SelectColor from "../components/ui/SelectColor";
import { PrimaryButton, SecondaryButton } from "../components/ui/Buttons";
import SelectFile from "../components/ui/SelectFile";

export function Catalogo() {

  const values = [
      {
          text: "hola",
          value: "saludo"
      },
      {
        text: "hola",
        value: "saludo"
    },
    {
      text: "hola",
      value: "saludo"
  }
  ]

  const values2 = [
    {
      name: "red",
      color: "#f00"
  },
  {
    name: "green",
    color: "#0f0"
},
{
  name: "blue",
  color: "#00f"
}
  ]

  return (
    <section className="catalogo">
      <div className="catalogo__box">
        <ScreenHeader
          title="Catalogo"
          description="Ingreso de entrada de mercaderia"
        />
        <TextBox title={"Nombre"} placeHolder={"Escriba su nombre"} name={"nombre"}/>
        <TextArea title={"Nombre"} placeHolder={"Escriba su nombre"} name={"nombre"}  />
        <ComboBox title={"Titulo"} values={values}/>
        <SelectSize title={"Tamaños"} values={[1,2,3,4,5,6]}/>
        <SelectColor title={"Color"} values={values2}/>
        <PrimaryButton text={"Hola"}/>
        <SecondaryButton text={"Secundario uwu"}/>
        <SelectFile/>
      </div>
    </section>
  );
}
