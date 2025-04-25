import type React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExerciseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  gradient: string;
}

export default function ExerciseCard({ title, description, icon, href, gradient }: ExerciseCardProps) {
  return (
    <Link
      href={href}
      className="block"
      {...(href.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
    >
      <Card className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-800 bg-black/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer h-[16rem]">
        <div
          className={cn(
            "absolute inset-0 opacity-10 blur-xl transition-all duration-300 group-hover:opacity-25",
            `bg-gradient-to-br ${gradient}`
          )}
        />
        <CardHeader>
          <div className={cn("mb-2 inline-flex rounded-lg p-3", `bg-gradient-to-br ${gradient}`)}>{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-400">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto">
          <div className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80">
            Start Exercise <ArrowRight className="h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
