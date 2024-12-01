import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function FinishingUp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Finishing up</CardTitle>
        <CardDescription>
          Double-check everything looks OK before confirming.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 grid-row-3 gap-y-3 bg-[#F8F9FF] rounded-lg p-4">
          <div>
            <h1 className="text-sm text-[#022959] font-medium">
              Arcade (Monthly)
            </h1>
            <span className="">Change</span>
          </div>
          <span className="text-right self-center font-bold text-sm">
            $9/mo
          </span>

          <hr className="col-span-2" />
          <h2 className="text-sm text-[#9699AA]">Online service</h2>
          <span className="text-right text-sm text-[#022959]">+$1/mo</span>

          <h2 className="text-sm text-[#9699AA]">Larger storage</h2>
          <span className="text-right text-sm text-[#022959]">+$1/mo</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="grid grid-cols-2 w-full px-4">
          <p>Total (per month)</p>
          <span className="text-right">+$12/mo</span>
        </div>
      </CardFooter>
    </Card>
  );
}
