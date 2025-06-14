import { Card } from "@/components/globals/atoms/card";

import { Mail, Phone } from "lucide-react";

import { useState } from "react";
import { Label } from "@/components/globals/atoms/label";
import { Input } from "@/components/globals/atoms/input";

import { useForm } from "react-hook-form";
import { Textarea } from "@/components/globals/atoms/textarea";
import { Button } from "@/components/globals/atoms/button";
import {
  createContactSchema,
  CreateContactType,
} from "@/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Breadcrumb from "@/components/globals/molecules/breadcrumb";
import AnimatedSection from "@/components/globals/molecules/animated-section";

function ContactPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateContactType>({
    resolver: zodResolver(createContactSchema),
    defaultValues: {
      userId: "a43401c3-15b6-474d-be18-2c151504740e",
    },
  });

  const onSubmit = async (data: CreateContactType) => {
    setIsLoading(true);

    try {
      const finalData = data;
      console.log("Data:", JSON.stringify(finalData, null, 2));
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const breadcrumb = [{ title: "Home", href: "/home" }, { title: "Contact" }];

  return (
    <div className="space-y-10">
      <Breadcrumb data={breadcrumb} />

      <AnimatedSection>
        <div className="grid grid-cols-2 gap-10 xl:grid-cols-3">
          <div className="col-span-2 xl:col-span-1">
            <Card className="px-6">
              <div className="space-y-4 border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary rounded-full p-2">
                    <Phone size={20} />
                  </div>

                  <p className="text-primary font-medium">Call To Us</p>
                </div>

                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: 0963 122 758</p>
              </div>

              <div className="space-y-4 border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary rounded-full p-2">
                    <Mail size={20} />
                  </div>

                  <p className="text-primary font-medium">Write To Us</p>
                </div>

                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Emails: soigear@gmail.com</p>
                <p>Emails: customersoi@gmail.com</p>
              </div>
            </Card>
          </div>

          <div className="col-span-2 h-full">
            <Card className="h-full px-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 space-y-2 xl:col-span-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                  />

                  {errors.name && (
                    <p className="mt-1 ml-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="col-span-3 space-y-2 xl:col-span-1">
                  <Label htmlFor="phoneNumber">Phone</Label>
                  <Input
                    id="phoneNumber"
                    type="text"
                    placeholder="Enter your phone"
                    {...register("phoneNumber")}
                  />

                  {errors.phoneNumber && (
                    <p className="mt-1 ml-1 text-sm text-red-600">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div className="col-span-3 space-y-2 xl:col-span-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    {...register("email")}
                  />

                  {errors.email && (
                    <p className="mt-1 ml-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={10}
                  placeholder="Enter your description"
                  {...register("description")}
                  className="min-h-[163px]"
                />

                {errors.description && (
                  <p className="mt-1 ml-1 text-sm text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                size="lg"
                onClick={handleSubmit(onSubmit)}
              >
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default ContactPage;
