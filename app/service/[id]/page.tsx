import { mockServices } from '@/data/mock-services';
import { notFound } from 'next/navigation';

type ServiceDetailPageProps = {
  params: { id: string };
};

// 1. Informa ao Next.js quais rotas dinâmicas devem ser geradas no build.
export async function generateStaticParams() {
  // Mapeamos nossos serviços para gerar um objeto de params para cada um.
  return mockServices.map((service) => ({
    id: service.id,
  }));
}

// 2. Função para buscar os dados de um serviço específico.
// Em um app real, aqui seria uma chamada a API ou banco de dados.
async function getService(id: string) {
  const service = mockServices.find((s) => s.id === id);

  // Se o serviço não for encontrado, chamamos notFound() que renderizará a página 404.
  if (!service) {
    notFound();
  }
  return service;
}

// 3. O componente da página. Ele recebe os `params` como prop.
export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Usamos o `id` dos params para buscar os dados do serviço.
  const service = await getService(params.id);

  return (
    <div className="container mx-auto p-8 mt-12 flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <p>Status: <span className="font-semibold">{service.status}</span></p>
      <p>Latência: {service.latency}ms</p>
      <p>Última verificação: {new Date(service.lastChecked).toLocaleString()}</p>
    </div>
  );
}
