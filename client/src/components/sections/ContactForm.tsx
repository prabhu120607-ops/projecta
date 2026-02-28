import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
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
import { Send } from "lucide-react";
import { z } from "zod";

type FormData = z.infer<typeof insertInquirySchema>;

export function ContactForm() {
  const { mutate: createInquiry, isPending } = useCreateInquiry();

  const form = useForm<FormData>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormData) {
    createInquiry(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="bg-card p-8 rounded-xl border border-white/10 shadow-2xl">
      <h3 className="font-display text-3xl font-bold mb-6 text-white uppercase">Start Your Journey</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-background border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white h-12 rounded-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+91 98765 43210" 
                      className="bg-background border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white h-12 rounded-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="john@example.com" 
                      type="email"
                      className="bg-background border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white h-12 rounded-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Your Goal / Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="I want to build muscle and lose weight..." 
                    className="bg-background border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white min-h-[120px] rounded-none resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full h-14 font-display text-xl uppercase tracking-wider bg-primary hover:bg-primary/90 text-white rounded-none shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all"
            disabled={isPending}
          >
            {isPending ? "Sending..." : (
              <>
                Send Message <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
