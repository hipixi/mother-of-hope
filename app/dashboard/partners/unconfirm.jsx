"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { unconfirmPartner } from "@/app/actions/partner";

export default function UnConfirmButton({ partnerId }) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleConfirm = async () => {
    setIsConfirming(true);
    setError(null);

    try {
      const result = await unconfirmPartner(partnerId);
      if (result.error) {
        setError(result.error);
        toast({
          title: error,
          variant: "destructive",
        });
      } else {
        router.refresh();
        toast({
          title: "Partner Removed.",
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
        className="text-black text-xs h-8 lg:h-9"
        onClick={handleConfirm}
        disabled={isConfirming}
      >
        {isConfirming ? "unlisting.." : "Unconfirm"}
      </Button>
    </div>
  );
}
