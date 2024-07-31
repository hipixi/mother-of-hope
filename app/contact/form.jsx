"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { addContact } from "../actions/contact";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [pending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      fullname: fullname,
      email: email,
      phone: phone,
      message: message,
    };

    startTransition(() =>
      addContact(values).then((data) => {
        if (data.success) {
          router.refresh();
          toast({
            title:
              "Your message has been submitted. We will contact you shortly",
          });
        }
      })
    );
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            className="h-11"
            id="fullname"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <Input
            className="h-11"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <Input
          className="h-11"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          type="tel"
          required
        />
        <Textarea
          id="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[120px]"
          required
        />
        <Button
          type="submit"
          disabled={pending}
          size="lg"
          className="w-full"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
