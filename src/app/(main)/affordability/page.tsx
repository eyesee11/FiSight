import { PageHeader } from '@/components/shared/page-header';
import { Calculator } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const AffordabilityAnalyzer = dynamic(
  () => import('@/components/affordability/affordability-analyzer').then(mod => mod.AffordabilityAnalyzer),
  { 
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full max-w-2xl mx-auto" /> 
  }
);

export default function AffordabilityPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Affordability Analysis"
        description="Considering a major purchase? Use our AI tool to simulate its impact on your financial health."
        icon={Calculator}
      />
      <div className="max-w-2xl mx-auto">
        <AffordabilityAnalyzer />
      </div>
    </div>
  );
}
