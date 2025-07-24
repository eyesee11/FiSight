'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, Calculator, Coins, FileText, LayoutDashboard, Settings, BarChart3 } from 'lucide-react';
import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/investments', label: 'Investments', icon: BarChart3 },
  { href: '/affordability', label: 'Affordability', icon: Calculator },
  { href: '/scenarios', label: 'Scenarios', icon: FileText },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-primary" />
          <h1 className="text-xl font-bold font-headline">FiSight</h1>
        </Link>
      </SidebarHeader>
      <SidebarGroup className="flex-1">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
      <SidebarFooter>
         <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                    <Link href="#">
                        <Settings/>
                        <span>Settings</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
