import { ClientLayoutWrapper } from '@/components/layout/client-layout-wrapper';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout is for the authenticated app experience.
  // The landing page has its own layout.
  return <ClientLayoutWrapper>{children}</ClientLayoutWrapper>;
}
