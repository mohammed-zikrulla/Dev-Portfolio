import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./ui/section";

import { Send, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

/* =========================
   EMAILJS CONFIG (HARDCODED)
   ========================= */
const SERVICE_ID = "service_4mi0wms";
const TEMPLATE_ID = "template_r6cyfxi";
const PUBLIC_KEY = "ryYDwitz6MhBDcKuz";

/* =========================
   ZOD SCHEMA (INLINE)
   ========================= */
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    if (!formRef.current) return;

    try {
      setIsSending(true);

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      form.reset();
      setIsSuccess(true);

      // Reset success state after animation
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact" className="bg-muted/30 rounded-3xl mb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Have a project in mind or just want to say hi? I'm always open to new opportunities.
          </p>

          <div className="space-y-6">
            <InfoItem icon={<Mail className="h-5 w-5" />} label="Email" value="hello@example.com" />
            <InfoItem icon={<MapPin className="h-5 w-5" />} label="Location" value="San Francisco, CA" />
            <InfoItem icon={<Phone className="h-5 w-5" />} label="Phone" value="+1 (555) 000-0000" />
          </div>
        </div>

        {/* FORM / SUCCESS */}
        <div className="bg-background p-8 rounded-2xl border shadow-sm relative overflow-hidden">
          {isSuccess ? (
            <SuccessState />
          ) : (
            <Form {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 animate-in fade-in duration-300"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} name="name" placeholder="John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          name="message"
                          placeholder="Tell me about your project..."
                          className="min-h-[120px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </Section>
  );
}

/* =========================
   SUCCESS ANIMATION
   ========================= */
function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-12 animate-in zoom-in fade-in duration-500">
      <CheckCircle2 className="h-14 w-14 text-green-500" />
      <h3 className="text-xl font-semibold">Message sent!</h3>
      <p className="text-muted-foreground">
        Thanks for reaching out. I’ll get back to you shortly.
      </p>
    </div>
  );
}

/* =========================
   INFO ITEM
   ========================= */
function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}
