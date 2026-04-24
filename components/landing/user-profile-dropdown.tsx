"use client";

import { LaptopMinimal, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

interface UserProfileDropdownProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function UserProfileDropdown({ user }: UserProfileDropdownProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="relative h-9 w-9 rounded-full p-0 ring-offset-background transition-all hover:ring-2 hover:ring-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 overflow-hidden"
        >
          <Avatar className="h-9 w-9 border border-border/50">
            <AvatarImage
              src={user.image || ""}
              alt={user.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary text-xs text-white font-bold">{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 p-1.5 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.2)] rounded-3xl !border-none !ring-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl" align="end" sideOffset={8}>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center gap-2.5 py-2.5 px-2">
            <Avatar className="size-8 border border-border/10">
              <AvatarImage
                src={user.image || ""}
                alt={user.name}
              />
              <AvatarFallback className="bg-primary text-[10px] text-white font-bold">{initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col min-w-0">
              <span className="text-foreground text-xs font-bold truncate tracking-tight">
                {user.name}
              </span>
              <span className="text-muted-foreground text-[10px] font-normal truncate leading-none">
                {user.email}
              </span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="mx-2 my-1.5 opacity-50" />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild className="cursor-pointer gap-2.5 px-2.5 py-2 rounded-xl transition-all hover:bg-slate-100 dark:hover:bg-white/5 focus:bg-slate-100 dark:focus:bg-white/5 group">
              <a
                href={process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://app.useaudora.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LaptopMinimal className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">Dashboard</span>
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          
          <div className="mt-1 pt-1 border-t border-border/40">
            <DropdownMenuItem 
              variant="destructive" 
              className="cursor-pointer gap-2.5 px-2.5 py-2 rounded-xl font-bold transition-all hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 focus:bg-red-50 dark:focus:bg-red-500/10 group"
              onSelect={handleSignOut}
            >
              <LogOut className="size-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="text-xs">Sign out</span>
            </DropdownMenuItem>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
