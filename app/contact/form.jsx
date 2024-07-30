"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("o");
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <Input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <Input
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
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
