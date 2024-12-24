import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const actions = [
  {
    title: "Reduce Carbon Footprint",
    description: "Simple steps to reduce your daily carbon emissions",
    image: "/lovable-uploads/8aa582a6-ee1c-4440-9802-c4dfbea2d570.png",
    category: "Individual Action"
  },
  {
    title: "Join Local Cleanup",
    description: "Connect with local environmental groups",
    image: "/lovable-uploads/8aa582a6-ee1c-4440-9802-c4dfbea2d570.png",
    category: "Community"
  },
  {
    title: "Start Composting",
    description: "Turn kitchen waste into valuable soil",
    image: "/lovable-uploads/8aa582a6-ee1c-4440-9802-c4dfbea2d570.png",
    category: "Individual Action"
  },
  {
    title: "Plant Trees",
    description: "Join local reforestation initiatives",
    image: "/lovable-uploads/8aa582a6-ee1c-4440-9802-c4dfbea2d570.png",
    category: "Community"
  },
  {
    title: "Reduce Plastic Use",
    description: "Tips for a plastic-free lifestyle",
    image: "/lovable-uploads/8aa582a6-ee1c-4440-9802-c4dfbea2d570.png",
    category: "Individual Action"
  }
];

export const ActionsSection = () => {
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
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Take Action</h2>
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
            {actions.map((item, index) => (
              <Card key={index} className="flex-none w-80 bg-white bg-opacity-20 backdrop-blur-sm text-white border-none">
                <CardHeader>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                  <Badge className="w-fit">{item.category}</Badge>
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