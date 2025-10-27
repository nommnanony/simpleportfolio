import { ProfileWidget } from "@/components/ProfileWidget";
import { GalleryWidget } from "@/components/GalleryWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[calc(100vh-4rem)]">
          {/* Left half - Empty on laptop/desktop, hidden on mobile */}
          <div className="hidden lg:block" />
          
          {/* Right half - Widgets */}
          <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto lg:mx-0">
            <ProfileWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
