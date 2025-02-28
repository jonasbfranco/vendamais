import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import { IconChartHistogram } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina className="flex">
    <Titulo icone={IconChartHistogram} principal="Dashboard" secundario="KPIs de controle"/>
</Pagina>
  );
}
