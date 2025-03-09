import React from "react";
import Image from "next/image";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Signup = () => {
  return (
    <section className='bg-[#ECECE0] flex pt-[3rem] px-[4rem] h-lvh'>
      <div className=''>
        <div className='flex  items-center gap-3'>
          <Image
            priority
            width={50}
            height={50}
            alt='hero-image'
            src='/assets/images/logo1.png'
            className=''
          />

          <p className='text-[#245949] text-2xl font-bold'>Stich</p>
        </div>
        <p className='text-2xl text-[#245949] mt-[2rem] '>
          Discover the perfect <br />
          fit with Stitch
        </p>

        <div className='py-[2rem]'>
          <Image
            priority
            width={500}
            height={500}
            alt='hero-image'
            src='/assets/images/abt-img.png'
            className=''
          />
        </div>
      </div>

      {/* form */}
      <div>
        <p className='text-3xl mb-[2rem]'>Sign up now</p>
        <LoginForm />
      </div>
    </section>
  );
};

export default Signup;

const LoginForm = () => {
  "use client";

  const Form = FormProvider;

  type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > = {
    name: TName;
  };

  const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
  );

  const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  >({
    ...props
  }: ControllerProps<TFieldValues, TName>) => {
    return (
      <FormFieldContext.Provider value={{ name: props.name }}>
        <Controller {...props} />
      </FormFieldContext.Provider>
    );
  };

  const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
      throw new Error("useFormField should be used within <FormField>");
    }

    const { id } = itemContext;

    return {
      id,
      name: fieldContext.name,
      formItemId: `${id}-form-item`,
      formDescriptionId: `${id}-form-item-description`,
      formMessageId: `${id}-form-item-message`,
      ...fieldState,
    };
  };

  type FormItemContextValue = {
    id: string;
  };

  const FormItemContext = React.createContext<FormItemContextValue>(
    {} as FormItemContextValue
  );

  const FormItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  });
  FormItem.displayName = "FormItem";

  const FormLabel = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
  >(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <Label
        ref={ref}
        className={cn(error && "text-destructive", className)}
        htmlFor={formItemId}
        {...props}
      />
    );
  });
  FormLabel.displayName = "FormLabel";

  const FormControl = React.forwardRef<
    React.ElementRef<typeof Slot>,
    React.ComponentPropsWithoutRef<typeof Slot>
  >(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
      useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={
          !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...props}
      />
    );
  });
  FormControl.displayName = "FormControl";

  const FormDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
  >(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
      <p
        ref={ref}
        id={formDescriptionId}
        className={cn("text-[0.8rem] text-muted-foreground", className)}
        {...props}
      />
    );
  });
  FormDescription.displayName = "FormDescription";

  const FormMessage = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
  >(({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn("text-[0.8rem] font-medium text-destructive", className)}
        {...props}
      >
        {body}
      </p>
    );
  });
  FormMessage.displayName = "FormMessage";

  // export {
  //   useFormField,
  //   Form,
  //   FormItem,
  //   FormLabel,
  //   FormControl,
  //   FormDescription,
  //   FormMessage,
  //   FormField,
  // };
};
