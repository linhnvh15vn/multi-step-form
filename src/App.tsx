import FinishingUp from '@/components/finishing-up';
import PersonalInfo from '@/components/personal-info';
import PickAddOns from '@/components/pick-add-ons';
import SelectYourPlan from '@/components/select-your-plan';
import ThankYou from '@/components/thank-you';
import { Button } from '@/components/ui/button';
import { useMultiForm } from '@/hooks/use-multi-form';
import { cn } from '@/lib/utils';

export default function App() {
  const steps = [
    <PersonalInfo />,
    <SelectYourPlan />,
    <PickAddOns />,
    <FinishingUp />,
    <ThankYou />,
  ];
  const { currentIndex, index, isFirst, isLast, back, next, goto } =
    useMultiForm(steps);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center gap-4 py-8">
        {Array.from({ length: steps.length }, (_, step) => (
          <button
            key={step}
            className={cn(
              'size-8 rounded-full border text-white font-bold text-sm flex items-center justify-center',
              currentIndex === step ? 'bg-[#bee2fd] text-[#022959]' : '',
            )}
            onClick={() => goto(step)}
          >
            {step + 1}
          </button>
        ))}
      </div>
      <div className="container flex-1">{index}</div>
      <div className="flex justify-between items-center p-4 bg-white">
        <Button
          type="button"
          variant="ghost"
          onClick={back}
          className={cn(isFirst && 'hidden')}
        >
          Go Back
        </Button>
        <Button type="button" onClick={next} className="ml-auto">
          {isLast ? 'Confirm' : 'Next Step'}
        </Button>
      </div>
    </div>
  );
}
