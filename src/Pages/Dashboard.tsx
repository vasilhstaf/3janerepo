import { TopNav } from "@/components/topnav"; // if you keep TopNav.tsx
import { BorrowStats } from "@/components/BorrowStats";
import { CreditCard } from "@/components/CreditCard";
import { CreditInfo } from "@/components/CreditInfo";

export default function Dashboard() {
  return (
    <div className="min-h-screen text-sm">
      <TopNav />
      <main className="max-w-5xl mx-auto p-6 space-y-[12px] mt-[40px]">
        <BorrowStats />
        <CreditCard />
        <CreditInfo />
        {/* Add more: CreditInfo, FooterStats */}
      </main>
    </div>
  );
} 