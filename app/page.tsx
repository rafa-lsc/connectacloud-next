import Dashboard from "@/components/Dashboard/Dashboard";
import { mockServices } from '@/data/mock-services';
import { Service } from '@/types';

async function getServices(): Promise<Service[]> {
  console.log('Buscando dados no servidor...');
  // Simula um delay de rede de 1.5 segundos
  await new Promise(resolve => setTimeout(resolve, 1500));
  return mockServices;
}

export default async function Home() {
  const initialServices = await getServices();
   
  return (
    <Dashboard initialServices={initialServices}/>
  );
}
