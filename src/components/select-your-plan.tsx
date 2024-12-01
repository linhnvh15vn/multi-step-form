import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

export default function SelectYourPlan() {
  const plans = [
    {
      name: 'Arcade',
      price: 9,
      icon: 'icon-arcade.svg',
    },
    {
      name: 'Advanced',
      price: 12,
      icon: 'icon-advanced.svg',
    },
    {
      name: 'Pro',
      price: 15,
      icon: 'icon-pro.svg',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Your Plan</CardTitle>
        <CardDescription>
          You have the option of monthly or yearly billing.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {plans.map((plan) => (
          <div key={plan.name}>
            <input
              type="radio"
              id={plan.name}
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required
            />
            <label
              htmlFor={plan.name}
              className="inline-flex items-center gap-4 w-full p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img src={plan.icon} />
              <div className="block">
                <div className="text-base font-medium">{plan.name}</div>
                <div className="text-sm">${plan.price}/mo</div>
              </div>
            </label>
          </div>
        ))}
        <div className="flex justify-center items-center gap-6 py-3.5 bg-[#f8f9ff]">
          <div className="text-sm font-medium">Monthly</div>
          <Switch />
          <div className="text-sm font-medium">Yearly</div>
        </div>
      </CardContent>
    </Card>
  );
}
