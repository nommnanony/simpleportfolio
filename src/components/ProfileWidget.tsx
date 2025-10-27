import { useState } from "react";
import { HelpCircle } from "lucide-react";

interface TabContentProps {
  content: string;
  isActive: boolean;
}

const TabContent = ({ content, isActive }: TabContentProps) => {
  return (
    <div
      className={`transition-all duration-300 ${
        isActive ? "animate-fade-in opacity-100" : "opacity-0 absolute"
      }`}
    >
      <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-[15px]">
        {content}
      </p>
    </div>
  );
};

const tabs = ["About Me", "Experiences", "Recommended"];

const content = {
  "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  "Experiences": `I have over 3 years of experience in sales at Salesforce, working with enterprise clients and building lasting relationships.

Prior to Salesforce, I worked in business development and customer success roles. I'm passionate about helping clients achieve their goals and finding solutions that work for their unique needs.`,
  "Recommended": `Based on my experience and client feedback, I recommend starting with a comprehensive needs assessment to understand your specific requirements.

I also suggest scheduling regular check-ins to ensure we're meeting your expectations and adapting to any changes in your business landscape.`,
};

export const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="bg-[#181A1E] rounded-3xl border border-widget-border p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300">
      <div className="mb-8 flex items-center justify-between">
        <button className="rounded-full p-2.5 hover:bg-secondary/50 hover:scale-110 transition-all duration-200 shadow-lg">
          <HelpCircle className="h-6 w-6 text-[#B7B9B6]" />
        </button>
        
        <div className="relative flex gap-2 bg-[#181A1E] rounded-[20px] p-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
          {/* Sliding background indicator */}
          <div
            className="absolute top-1.5 left-1.5 h-[calc(100%-12px)] rounded-[16px] bg-[#32343B] transition-all duration-300 ease-out shadow-sm"
            style={{
              width: 'calc(33.333% - 5.33px)',
              transform: `translateX(calc(${tabs.indexOf(activeTab)} * (100% + 8px)))`,
            }}
          />
          
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative z-10 rounded-[16px] px-6 py-3 text-sm font-medium transition-colors duration-300 flex-1 ${
                activeTab === tab
                  ? "text-white"
                  : "text-[#B7B9B6] hover:text-white/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[240px] overflow-y-auto pr-4 custom-scrollbar relative">
        {Object.entries(content).map(([key, value]) => (
          <TabContent
            key={key}
            content={value}
            isActive={activeTab === key}
          />
        ))}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--secondary));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--muted-foreground));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--foreground));
        }
      `}</style>
    </div>
  );
};
