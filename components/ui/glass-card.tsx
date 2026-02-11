import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "relative backdrop-blur-[20px] backdrop-saturate-[180%] rounded-[20px] overflow-hidden",
                "bg-white/60 dark:bg-gray-800/60", // Reverted to neutral glass colors
                "shadow-[0_4px_30px_rgba(0,0,0,0.05)]", // Softer shadow for light theme
                "border border-white/50 dark:border-gray-700/50", // Standard theme borders with transparency
                className
            )}
            style={{
                // Removed specific text-shadow and forced white borders as they clash with light theme
                // Kept subtle box-shadow boost if needed
            }}
            {...props}
        >
            {children}
        </div>
    );
}
