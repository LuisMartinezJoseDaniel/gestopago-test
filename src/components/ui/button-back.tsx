"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const ButtonBack = () => {
  const router = useRouter();
  return (
    <Button
      size="sm"
      onClick={() => router.back()}
      variant="ghost"
      color="default"
    >
      {"<-"}
    </Button>
  );
};
