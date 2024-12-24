import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const news = [
  {
    title: "Volcanic Activity in Iceland",
    description: "Recent volcanic eruptions threaten local communities",
    image: "/lovable-uploads/845fcf20-49e1-40f1-9e3a-b14def639749.png",
    type: "Natural Disaster"
  },
  {
    title: "Historic Floods in Asia",
    description: "Monsoon rains cause widespread flooding",
    image: "/lovable-uploads/845fcf20-49e1-40f1-9e3a-b14def639749.png",
    type: "Climate Crisis"
  },
  {
    title: "Australian Wildfires",
    description: "Unprecedented bushfires ravage wildlife habitats",
    image: "/lovable-uploads/845fcf20-49e1-40f1-9e3a-b14def639749.png",
    type: "Natural Disaster"
  },
  {
    title: "Arctic Permafrost Thaw",
    description: "Rapid melting releases greenhouse gases",
    image: "/lovable-uploads/845fcf20-49e1-40f1-9e3a-b14def639749.png",
    type: "Climate Crisis"
  },
  {
    title: "Amazon Deforestation Peak",
    description: "Record levels of rainforest clearing reported",
    image: "/lovable-uploads/845fcf20-49e1-40f1-9e3a-b14def639749.png",
    type: "Environmental Crisis"
  }
];

export const NewsSection = () => {
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
    <section className="py-12 px-4 bg-white bg-opacity-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Planet News</h2>
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
            {news.map((item, index) => (
              <Card key={index} className="flex-none w-80 bg-white bg-opacity-20 backdrop-blur-sm text-white border-none">
                <CardHeader>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                  <Badge variant="destructive" className="w-fit">{item.type}</Badge>
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