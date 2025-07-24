import { PageHeader } from '@/components/shared/page-header';
import { FileText } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const ScenarioSimulator = dynamic(
  () => import('@/components/scenarios/scenario-simulator').then(mod => mod.ScenarioSimulator),
  { 
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Skeleton className="h-[400px] w-full" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    )
  }
);


export default function ScenariosPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Financial Scenario Simulator"
        description="Explore the future. Describe a financial scenario to see how it might impact your net worth and get an AI risk assessment."
        icon={FileText}
      />
      <ScenarioSimulator />
    </div>
  );
}
