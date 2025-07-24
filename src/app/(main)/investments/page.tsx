import { PageHeader } from '@/components/shared/page-header';
import { BarChart3 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const PortfolioOverview = dynamic(
  () => import('@/components/investments/portfolio-overview').then(mod => mod.PortfolioOverview),
  { ssr: false, loading: () => <Skeleton className="h-[400px] w-full" /> }
);

const RebalancingTool = dynamic(
  () => import('@/components/investments/rebalancing-tool').then(mod => mod.RebalancingTool),
  { ssr: false, loading: () => <Skeleton className="h-[400px] w-full" /> }
);


export default function InvestmentsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Investment Portfolio"
        description="Monitor your investment performance and get AI-powered suggestions for rebalancing your portfolio to meet your goals."
        icon={BarChart3}
      />
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <PortfolioOverview />
        </div>
        <div className="lg:col-span-2">
          <RebalancingTool />
        </div>
      </div>
    </div>
  );
}
