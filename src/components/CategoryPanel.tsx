import React, { useState } from 'react';
import { KPICategory } from '../contexts/KPIContext';
import SubcategoryPanel from './SubcategoryPanel';
import { calculateCategoryAverage } from '../utils/relationships';

interface CategoryPanelProps {
  category: KPICategory;
}

const CategoryPanel: React.FC<CategoryPanelProps> = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryAverage = calculateCategoryAverage(category.subcategories);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">
                  {category.name.charAt(0)}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.subcategories.length} subcategories, {category.subcategories.reduce((acc, sub) => acc + sub.metrics.length, 0)} metrics
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Average</p>
              <p className="text-xl font-bold text-gray-900">
                {categoryAverage.toFixed(1)}
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${
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
        <div className="border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            {category.subcategories.map(subcategory => (
              <SubcategoryPanel
                key={subcategory.id}
                categoryId={category.id}
                subcategory={subcategory}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPanel; 