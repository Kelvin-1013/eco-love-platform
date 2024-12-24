import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const situations = [
  {
    title: "Rising Sea Levels",
    description: "Global sea levels have risen 8-9 inches since 1880",
    image: "/lovable-uploads/c4c0bfce-f023-4d63-8028-8b53b8719369.png",
    stat: "+3.4mm per year"
  },
  {
    title: "Global Temperature",
    description: "Earth's temperature has increased by 1.1°C since pre-industrial times",
    image: "/lovable-uploads/c4c0bfce-f023-4d63-8028-8b53b8719369.png",
    stat: "+1.1°C"
  },
  {
    title: "Arctic Ice Loss",
    description: "Arctic sea ice is declining at a rate of 13% per decade",
    image: "/lovable-uploads/c4c0bfce-f023-4d63-8028-8b53b8719369.png",
    stat: "-13% per decade"
  },
  {
    title: "Deforestation",
    description: "We lose about 137 species of plants, animals and insects every day",
    image: "/lovable-uploads/c4c0bfce-f023-4d63-8028-8b53b8719369.png",
    stat: "137 species/day"
  },
  {
    title: "Ocean Acidification",
    description: "Ocean acidity has increased by 30% since the Industrial Revolution",
    image: "/lovable-uploads/c4c0bfce-f023-4d63-8028-8b53b8719369.png",
    stat: "+30% acidity"
  }
];

export const SituationSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Current Planet Situation</h2>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
          >
            <ChevronLeft className="text-white" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {situations.map((item, index) => (
              <Card key={index} className="flex-none w-80 bg-white bg-opacity-20 backdrop-blur-sm text-white border-none">
                <CardHeader>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{item.stat}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-200">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};