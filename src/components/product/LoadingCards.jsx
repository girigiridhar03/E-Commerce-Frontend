import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingCards = ({ num = 3 }) => {
  return (
    <>
      {Array.from({ length: num }).map((_, index) => (
        <Card
          key={index}
          className="bg-background overflow-hidden transition hover:shadow-md flex flex-col p-2"
        >
          <div className="h-48 w-full">
            <Skeleton className="h-full w-full" />
          </div>

          <CardHeader className="pb-2">
            <Skeleton className="h-4 w-3/4" />
          </CardHeader>

          <CardContent className="flex-1 flex flex-col gap-2.5">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </CardContent>

          <CardFooter className="justify-end">
            <Skeleton className="w-24 h-10" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default LoadingCards;
