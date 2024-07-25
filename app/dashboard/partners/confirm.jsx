"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { confirmPartner } from "@/app/actions/partner";

export default function ConfirmButton({ partnerId }) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleConfirm = async () => {
    setIsConfirming(true);
    setError(null);

    try {
      const result = await confirmPartner(partnerId);
      if (result.error) {
        setError(result.error);
        toast({
          title: error,
          variant: "destructive",
        });
      } else {
        router.refresh();
        toast({
          title: "Partner confirmed.",
        });
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsConfirming(false);
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        className="text-black text-xs"
        onClick={handleConfirm}
        disabled={isConfirming}
      >
        {isConfirming ? "Confirming..." : "Confirm"}
      </Button>
    </div>
  );
}
