import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel,
  FormDescription,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const items = [
  {
    id: 1,
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
  },
  {
    id: 2,
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    id: 3,
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2,
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.number()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

export default function PickAddOns() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [1, 2],
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pick add-ons</CardTitle>
        <CardDescription>
          Add-ons help enhance your gaming experience.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className={cn(
                              'flex flex-row items-center space-x-4 space-y-0 rounded-lg border p-4',
                              field.value?.includes(item.id) &&
                                'border-purple-600',
                            )}
                          >
                            <FormControl>
                              <Checkbox
                                className="size-5"
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none flex-1">
                              <FormLabel className="font-medium text-sm">
                                {item.name}
                              </FormLabel>
                              <FormDescription className="text-xs">
                                {item.description}
                              </FormDescription>
                            </div>
                            <span className="text-xs text-purple-600">
                              ${item.price}/mo
                            </span>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
            {/* <Button type="submit">Submit</Button> */}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
