"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  category_name: string;
}

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  userName: z.string().min(2, "Name must be at least 2 characters"),
  userEmail: z.string().email("Invalid email address"),
  categoryId: z.number().min(1, "Please select a category"),
});

type FormData = z.infer<typeof formSchema>;

export function FeatureRequestForm() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        toast.error('Failed to load categories');
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = async (data: FormData) => {
    const promise = fetch("/api/features", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (response) => {
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to submit feature request');
      }
      return response.json();
    });

    toast.promise(promise, {
      loading: 'Submitting feature request...',
      success: () => {
        reset();
        return 'Feature request submitted successfully!';
      },
      error: (err) => {
        return err.message || 'Failed to submit feature request. Please try again.';
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl space-y-6 sm:space-y-8">
      <div className="space-y-2 text-center sm:text-left">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Submit Your Big Idea!</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          Let’s collaborate and turn your innovation into the next big thing in the app world!
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <div className="space-y-2">
          <label htmlFor="categoryId" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Category
          </label>
          <select
            {...register("categoryId", { valueAsNumber: true })}
            disabled={isLoadingCategories}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:py-2"
          >
            {isLoadingCategories ? (
              <option>Loading categories...</option>
            ) : (
              <>
                <option disabled value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                ))}
              </>
            )}
          </select>
          {errors.categoryId && (
            <p className="text-xs text-red-500 sm:text-sm">{errors.categoryId.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Title
          </label>
          <input
            {...register("title")}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:py-2"
            placeholder="Enter feature title"
          />
          {errors.title && (
            <p className="text-xs text-red-500 sm:text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Description
          </label>
          <textarea
            {...register("description")}
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-[150px]"
            placeholder="Describe the feature you'd like to see"
          />
          {errors.description && (
            <p className="text-xs text-red-500 sm:text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="userName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Name
            </label>
            <input
              {...register("userName")}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:py-2"
              placeholder="Your name"
            />
            {errors.userName && (
              <p className="text-xs text-red-500 sm:text-sm">{errors.userName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="userEmail" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <input
              {...register("userEmail")}
              type="email"
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:py-2"
              placeholder="your.email@example.com"
            />
            {errors.userEmail && (
              <p className="text-xs text-red-500 sm:text-sm">{errors.userEmail.message}</p>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isLoadingCategories}
        className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}