import { PageHeader } from '@/components/shared/page-header';
import { LayoutDashboard } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const NetWorthCard = dynamic(
  () => import('@/components/dashboard/net-worth-card').then(mod => mod.NetWorthCard),
  { ssr: false, loading: () => <Skeleton className="h-[400px] w-full" /> }
);

const RecentTransactions = dynamic(
  () => import('@/components/dashboard/recent-transactions').then(mod => mod.RecentTransactions),
  { ssr: false, loading: () => <Skeleton className="h-[400px] w-full" /> }
);

const FinancialHealthSummary = dynamic(
  () => import('@/components/dashboard/financial-health-summary').then(mod => mod.FinancialHealthSummary),
  { ssr: false, loading: () => <Skeleton className="h-[300px] w-full" /> }
);


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Your financial command center. Get a complete overview of your net worth, transactions, and AI-driven insights."
        icon={LayoutDashboard}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <NetWorthCard />
          </Suspense>
        </div>
        <div className="lg:col-span-1">
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <RecentTransactions />
          </Suspense>
        </div>
      </div>
      <div>
        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          <FinancialHealthSummary />
        </Suspense>
      </div>
    </div>
  );
}
