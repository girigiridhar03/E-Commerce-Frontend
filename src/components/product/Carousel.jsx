import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselCom({ images, selectedImg, onSelect }) {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className="w-[80%] select-none"
    >
      <CarouselContent className="-ml-1 p-1 gap-0.5">
        {images?.map((img, index) => (
          <CarouselItem
            key={index}
            className="
              pl-1
              basis-[40%]    
              sm:basis-1/5    
              md:basis-1/2    
              lg:basis-1/3  
            "
          >
            <Card
              onClick={() => onSelect(img?.url)}
              className={`cursor-pointer overflow-hidden transition-all ${
                selectedImg === img?.url
                  ? "border-2 border-primary"
                  : "border border-transparent"
              }`}
            >
              <CardContent className="flex aspect-square items-center justify-center p-2">
                <img
                  src={img?.url ?? null}
                  alt={`thumbnail-${index}`}
                  draggable={false}
                  className="w-full h-full object-contain"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Controls */}
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
