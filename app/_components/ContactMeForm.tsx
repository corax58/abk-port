"use client";
import { Loader } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { sendMainAction } from "@/action/sendMailAction";

const initialData: ContactData = {
  full_name: "",
  email: "",
  country: "",
  company: "",
  subject: "",
  description: "",
};

const StyledAstrix = () => <span className="text-sky-400">*</span>;

export interface ContactData {
  full_name: string;
  email: string;
  country: string;
  company: string;
  subject: string;
  description: string;
}

interface ContactMeFormProps {
  className?: string;
}
const ContactMeForm = ({ className }: ContactMeFormProps) => {
  const [formData, setFormData] = useState<ContactData>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendContactData = async (contactData: ContactData) => {
    setIsLoading(true);

    try {
      await sendMainAction(contactData);
      setFormData(initialData);
      toast.success("Message sent successfully!");
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        //use toast to show error
        toast.error("Error", { description: err.message });
      } else {
        //use toast to show error
        toast.error("Error", {
          description: "An unexpected error occurred. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedData: ContactData = {
      ...formData,
      full_name: formData.full_name.trim(),
      email: formData.email.trim(),
      country: formData.country.trim(),
      subject: formData.subject.trim(),
      description: formData.description.trim(),
    };

    if (
      !trimmedData.full_name ||
      !trimmedData.email ||
      !trimmedData.country ||
      !trimmedData.subject ||
      !trimmedData.description
    ) {
      //use toast to show error
      console.error("Please fill all required fields");
      toast.error("Please fill all required fields");
      return;
    }
    await sendContactData(trimmedData);
  };

  return (
    <form
      className={cn(
        "bg-transparent relative z-10 rounded-xs p-6 w-full md:w-1/2 border h-fit",
        className,
      )}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6">
        <div className="flex w-full gap-6">
          <div className="flex w-full flex-col gap-3">
            <label className="text-sm font-medium ">
              Full Name <StyledAstrix />
            </label>
            <Input
              className={cn("w-full rounded-xs")}
              placeholder="Eg, john doe"
              value={formData.full_name}
              required
              name="full_name"
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <label className="text-sm font-medium ">
              Email <StyledAstrix />
            </label>
            <Input
              className={cn("w-full rounded-xs")}
              type="email"
              placeholder="Example@email.com"
              required
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium ">
            Country <StyledAstrix />
          </label>
          <Input
            className={cn("w-full rounded-xs")}
            placeholder="Eg, United kingdom"
            value={formData.country}
            name="country"
            required
            onChange={handleChange}
          />
        </div>
        <div className="hidden  tab-1 flex-col gap-3">
          <label className="text-sm font-medium ">
            Company <StyledAstrix />
          </label>
          <Input
            className={cn("w-full rounded-xs")}
            placeholder="Eg, United kingdom"
            value={formData.company}
            tabIndex={-1}
            name="company"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium ">
            Subject <StyledAstrix />
          </label>

          <Input
            className={cn("w-full mt-2 rounded-xs")}
            placeholder="Please specify your subject"
            value={formData.subject}
            required
            name="subject"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium  ">
            Description <StyledAstrix />
          </label>
          <Textarea
            className={cn("w-full rounded-xs", "h-20")}
            placeholder="Write your questions in detail to support your Subject..."
            value={formData.description}
            required
            name="description"
            onChange={handleChange}
          />
        </div>
      </div>

      <Button
        className="mt-8 w-full h-11 rounded-xs"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <Loader className="animate-spin" /> : " Send message"}
      </Button>
    </form>
  );
};

export default ContactMeForm;
