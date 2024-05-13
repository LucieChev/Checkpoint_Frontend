import  AddCountry  from "@/pages/AddCountry";
import Header from "@/components/Header";
import Countries from "@/pages/Countries";


export default function Home() {
  return (
    <div>
      <Header />
      <AddCountry/>
      <Countries />
    </div>
  );
}
