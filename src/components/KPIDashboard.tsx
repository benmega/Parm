import React from 'react';
import { useKPI } from '../contexts/KPIContext';
import CategoryPanel from './CategoryPanel';

const KPIDashboard: React.FC = () => {
  const { state } = useKPI();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          KPI Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {state.categories.map(category => {
            const average = calculateCategoryAverage(category.subcategories);
            return (
              <div key={category.id} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  {category.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {average.toFixed(1)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        {state.categories.map(category => (
          <CategoryPanel key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

// Helper function to calculate category average
function calculateCategoryAverage(subcategories: any[]): number {
  if (subcategories.length === 0) return 0;
  const subcategoryAverages = subcategories.map(sub => {
    const sum = sub.metrics.reduce((acc: number, metric: any) => acc + metric.value, 0);
    return sum / sub.metrics.length;
  });
  const sum = subcategoryAverages.reduce((acc, avg) => acc + avg, 0);
  return sum / subcategoryAverages.length;
}

export default KPIDashboard; 