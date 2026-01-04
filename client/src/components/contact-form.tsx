// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { insertMessageSchema, type InsertMessage } from "@shared/schema";
// import { useCreateMessage } from "@/hooks/use-messages";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Section } from "./ui/section";
// import { Send, Mail, MapPin, Phone } from "lucide-react";

// export function ContactForm() {
//   const { mutate, isPending } = useCreateMessage();
  
//   const form = useForm<InsertMessage>({
//     resolver: zodResolver(insertMessageSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const onSubmit = (data: InsertMessage) => {
//     mutate(data, {
//       onSuccess: () => form.reset(),
//     });
//   };

//   return (
//     <Section id="contact" className="bg-muted/30 rounded-3xl mb-20">
//       <div className="grid lg:grid-cols-2 gap-12 items-start">
//         <div>
//           <h2 className="text-3xl font-bold font-display mb-6">Get in Touch</h2>
//           <p className="text-muted-foreground mb-8 text-lg">
//             Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
//           </p>

//           <div className="space-y-6">
//             <div className="flex items-center gap-4">
//               <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
//                 <Mail className="h-5 w-5" />
//               </div>
//               <div>
//                 <p className="font-medium text-foreground">Email</p>
//                 <a href="mailto:zikrulla.zik@gmail.com" className="text-muted-foreground hover:text-primary">zikrulla.zik@gmail.com</a>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-4">
//               <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
//                 <MapPin className="h-5 w-5" />
//               </div>
//               <div>
//                 <p className="font-medium text-foreground">Location</p>
//                 <p className="text-muted-foreground">Bangalore, Karnataka</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
//                 <Phone className="h-5 w-5" />
//               </div>
//               <div>
//                 <p className="font-medium text-foreground">Phone</p>
//                 <p className="text-muted-foreground">+91 9480262676</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-background p-8 rounded-2xl border shadow-sm">
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="John Doe" {...field} className="bg-muted/20" />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input placeholder="john@example.com" type="email" {...field} className="bg-muted/20" />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Message</FormLabel>
//                     <FormControl>
//                       <Textarea 
//                         placeholder="Tell me about your project..." 
//                         className="min-h-[120px] bg-muted/20" 
//                         {...field} 
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <Button 
//                 type="submit" 
//                 className="w-full" 
//                 size="lg"
//                 disabled={isPending}
//               >
//                 {isPending ? "Sending..." : (
//                   <>
//                     Send Message <Send className="ml-2 h-4 w-4" />
//                   </>
//                 )}
//               </Button>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </Section>
//   );
// }

import React from 'react'

export function ContactForm() {
  return (
    <div>contact-form</div>
  )
}

export default ContactForm
