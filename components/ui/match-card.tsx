import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function MatchCard() {
    return (
        <Card>
        <CardHeader>
          <CardTitle className="text-gray-400 text-sm font-light">
            Indian T20 League
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-x-2 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CHN</AvatarFallback>
                </Avatar>
                <span>CHN</span>
              </div>
              <p className="text-sm">Chennai</p>
            </div>

            <div>3 Days</div>

            <div>
              <div className="flex gap-x-2 items-center">
                <span>BLR</span>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BLR</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-sm">Banglore</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-green-500">₹11.5 Lakh Guaranteed</p>
        </CardFooter>
      </Card>
    )
}