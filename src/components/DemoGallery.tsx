import React, { useState, useRef } from 'react';
import { demoData, industryGroups } from '../data/demoData';
import DemoCard from './DemoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { branding } from '../config/branding';

const DemoGallery = () => {
  const [selectedGroup, setSelectedGroup] = useState(industryGroups[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const filteredDemos = demoData.filter(demo => demo.industryGroup === selectedGroup);
  const selectedIndustry = industryGroups.find(group => group.id === selectedGroup);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <section id="demos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-neura-navy mb-8">
          Explore our AI Voice Demo's by Industry
        </h2>

        {/* Industry Navigation Slider */}
        <div className="relative mb-12">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
          >
            <ChevronLeft size={20} />
          </button>
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 px-8 scrollbar-hide scroll-smooth"
          >
            {industryGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setSelectedGroup(group.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedGroup === group.id
                    ? 'bg-[#00A7B1] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {group.name}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {selectedIndustry && (
          <>
            <h3 className="text-2xl font-bold text-neura-navy mb-8">
              {selectedIndustry.name}
            </h3>
            
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Industry Outcomes */}
              <div className="lg:w-1/4">
                <h4 className="text-sm font-bold text-[#00A7B1] mb-4">
                  OUTCOMES WE ARE SEEING
                </h4>
                <div className="flex gap-8 mb-6">
                  <div>
                    <div className="text-xl font-bold text-neura-navy">
                      {selectedIndustry.outcomes.efficiency.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {selectedIndustry.outcomes.efficiency.label}
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-neura-navy">
                      {selectedIndustry.outcomes.cost.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {selectedIndustry.outcomes.cost.label}
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-neura-navy">
                      {selectedIndustry.outcomes.satisfaction.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {selectedIndustry.outcomes.satisfaction.label}
                    </div>
                  </div>
                </div>
                <a
                  href={branding.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0052CC] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all inline-block"
                >
                  Get Started Today
                </a>
              </div>
              
              {/* Demo Cards Grid */}
              <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDemos.map((demo) => (
                  <DemoCard key={demo.id} demo={demo} />
                ))}
              </div>
            </div>
          </>
        )}

        {filteredDemos.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No demos available for this industry group yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoGallery;