import { PageHeader } from '@/components/shared/page-header';
import { BarChart3 } from 'lucide-react';
import { PortfolioOverview } from '@/components/investments/portfolio-overview';
import { RebalancingTool } from '@/components/investments/rebalancing-tool';

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
