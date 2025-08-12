import React, { useState, useCallback } from 'react';
import { useKPI } from '../contexts/KPIContext';
import { Metric } from '../contexts/KPIContext';

interface SliderItemProps {
  categoryId: string;
  subcategoryId: string;
  metric: Metric;
}

const SliderItem: React.FC<SliderItemProps> = ({ categoryId, subcategoryId, metric }) => {
  const { updateMetric } = useKPI();
  const [inputValue, setInputValue] = useState(metric.value.toString());
  const [isEditing, setIsEditing] = useState(false);

  const handleSliderChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    updateMetric(categoryId, subcategoryId, metric.id, newValue);
    setInputValue(newValue.toString());
  }, [categoryId, subcategoryId, metric.id, updateMetric]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const handleInputBlur = useCallback(() => {
    const newValue = parseFloat(inputValue);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
      updateMetric(categoryId, subcategoryId, metric.id, newValue);
    } else {
      setInputValue(metric.value.toString());
    }
    setIsEditing(false);
  }, [inputValue, categoryId, subcategoryId, metric.id, metric.value, updateMetric]);

  const handleInputKeyPress = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleInputBlur();
    }
  }, [handleInputBlur]);

  const handleInputFocus = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <div className="flex items-center space-x-4 py-2">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <label className="text-sm font-medium text-gray-700 truncate">
            {metric.name}
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="0"
              max="10"
              step="0.5"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              onFocus={handleInputFocus}
              className={`w-16 px-2 py-1 text-sm border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isEditing ? 'border-blue-500' : 'border-gray-300'
              }`}
            />
            <span className="text-xs text-gray-500">/ 10</span>
          </div>
        </div>
        
        {metric.description && (
          <p className="text-xs text-gray-500 mb-2">
            {metric.description}
          </p>
        )}
        
        <div className="relative">
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={metric.value}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(metric.value / 10) * 100}%, #E5E7EB ${(metric.value / 10) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0</span>
            <span>5</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem; 