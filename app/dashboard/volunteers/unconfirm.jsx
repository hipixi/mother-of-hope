"use client";

import { confirmGeneral, unconfirmGeneral } from "@/app/actions/general";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function UnConfirmButton({ volunteerId }) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleConfirm = async () => {
    setIsConfirming(true);
    setError(null);

    try {
      const result = await unconfirmGeneral(volunteerId);
      if (result.error) {
        setError(result.error);
      } else {
        router.refresh();
        toast({
          title: "Volunteer Removed.",
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
        className="text-black"
        onClick={handleConfirm}
        disabled={isConfirming}
      >
        {isConfirming ? "Removing..." : "Remove"}
      </Button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
