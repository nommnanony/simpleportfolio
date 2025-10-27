import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, HelpCircle } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { toast } from "@/hooks/use-toast";

const initialImages = [gallery1, gallery2, gallery3];

export const GalleryWidget = () => {
  const [images, setImages] = useState(initialImages);
  const [startIndex, setStartIndex] = useState(0);

  const visibleImages = 3;

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < images.length - visibleImages) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleAddImage = () => {
    // Simulate adding a new image
    const newImages = [...images, images[0]];
    setImages(newImages);
    toast({
      title: "Image Added",
      description: "New image has been added to the gallery.",
    });
  };

  return (
    <div className="bg-[#181A1E] rounded-3xl border border-widget-border p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="rounded-full p-2.5 hover:bg-secondary/50 hover:scale-110 transition-all duration-200 shadow-lg">
            <HelpCircle className="h-6 w-6 text-[#B7B9B6]" />
          </button>
          <button className="rounded-2xl bg-black px-8 py-3 text-sm font-medium text-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform duration-200">
            Gallery
          </button>
          <button 
            onClick={handleAddImage}
            className="rounded-2xl bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-[#B7B9B6] hover:text-white hover:bg-[#252525] transition-all duration-200 flex items-center gap-2 hover:scale-105 transform shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
          >
            <Plus className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
            ADD IMAGE
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className="rounded-full p-3 bg-secondary hover:bg-secondary/80 hover:scale-110 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= images.length - visibleImages}
            className="rounded-full p-3 bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
          >
            <ChevronRight className="h-5 w-5 text-background" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {images.slice(startIndex, startIndex + visibleImages).map((image, index) => (
          <div
            key={startIndex + index}
            className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={image}
              alt={`Gallery image ${startIndex + index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
