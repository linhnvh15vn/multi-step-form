import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

export default function ThankYou() {
  return (
    <Card className="flex flex-col items-center py-20">
      <img src="icon-thank-you.svg" alt="thank you" />
      <CardHeader className="text-center">
        <CardTitle>Thank you!</CardTitle>
        <CardDescription>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
