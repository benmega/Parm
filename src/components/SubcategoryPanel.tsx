import React, { useState } from 'react';
import { Subcategory } from '../contexts/KPIContext';
import SliderItem from './SliderItem';
import { calculateSubcategoryAverage } from '../utils/relationships';

interface SubcategoryPanelProps {
  categoryId: string;
  subcategory: Subcategory;
}

const SubcategoryPanel: React.FC<SubcategoryPanelProps> = ({ categoryId, subcategory }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const subcategoryAverage = calculateSubcategoryAverage(subcategory.metrics);

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-600 font-medium text-xs">
                  {subcategory.name.charAt(0)}
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                {subcategory.name}
              </h4>
              <p className="text-xs text-gray-500">
                {subcategory.metrics.length} metrics
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-xs text-gray-500">Average</p>
              <p className="text-sm font-semibold text-gray-900">
                {subcategoryAverage.toFixed(1)}
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg
                className={`w-4 h-4 text-gray-400 transform transition-transform ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-gray-200 bg-white rounded-b-lg">
          <div className="px-4 py-3 space-y-3">
            {subcategory.metrics.map(metric => (
              <SliderItem
                key={metric.id}
                categoryId={categoryId}
                subcategoryId={subcategory.id}
                metric={metric}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubcategoryPanel; 