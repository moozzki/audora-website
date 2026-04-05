"use client"

import * as React from "react"
import { Moon, Sun, Monitor, Check } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [open, setOpen] = React.useState(false)

  const modes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 rounded-full focus-visible:ring-0 focus-visible:ring-offset-0 border-none outline-hidden active:scale-95 transition-transform"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        align="end" 
        className="w-36 p-1.5 bg-white/90 dark:bg-[#0d0d0d]/90 backdrop-blur-md border-slate-200/50 dark:border-white/5 shadow-xl rounded-2xl"
        sideOffset={8}
      >
        <div className="flex flex-col gap-1">
          {modes.map((mode) => {
            const Icon = mode.icon
            const isActive = theme === mode.value

            return (
              <button
                key={mode.value}
                onClick={() => {
                  setTheme(mode.value)
                  setOpen(false)
                }}
                className={cn(
                  "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-xl transition-all outline-hidden",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-on-surface-variant hover:bg-slate-100 dark:hover:bg-white/5 hover:text-on-surface"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4" />
                  {mode.label}
                </div>
                {isActive && <Check className="h-3.5 w-3.5" />}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
