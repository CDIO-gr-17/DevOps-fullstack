import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import art1 from "@/assets/art_placeholder1.webp";
import art2 from "@/assets/art_placeholder2.jpg";
import art3 from "@/assets/art_placeholder3.png";

function ProfileOverview() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>John Doe</CardTitle>
          <CardDescription>johndoe@mail.com</CardDescription>
          <CardDescription>+45 12345678</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="m-2" type="submit">
            Favorit auktioner
          </Button>
          <Button className="m-2" type="submit">
            Mine auktioner
          </Button>
          <Button className="m-2" type="submit">
            Rediger profil
          </Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <hr className="rounded"></hr>
      <Card>
        <CardHeader>
          <CardTitle>Auktioner du har budt på</CardTitle>
          <CardDescription>
            Vi notificere dig, hvis dit bud bliver overgået
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="m-10">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  className="h-full w-full object-cover"
                  src={art1}
                  alt="Art placeholder 1"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  className="h-full w-full object-cover"
                  src={art2}
                  alt="Art placeholder 2"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  className="h-full w-full object-cover"
                  src={art3}
                  alt="Art placeholder 3"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}

export default ProfileOverview;
