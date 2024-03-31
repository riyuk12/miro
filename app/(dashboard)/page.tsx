"use client";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/emptyorg";
import { BoardList } from "./_components/board-list";

//48mins

interface DashboardPageProps{
    searchParams:{
      search?:string,
      favorite?:string,
    }
}

export default function Home({
  searchParams,
}:DashboardPageProps) {
  const {organization} = useOrganization()

  return (
    <div className="flex flex-col gap-y-4  h-[calc(100%-80px)] p-6">
      
      {!organization ?(<EmptyOrg/>):(<BoardList
       orgId={organization.id}
       query={searchParams}
      />)}
      
    </div>
  );
}
