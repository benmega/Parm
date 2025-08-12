import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { kpiData } from '../data/kpiData';
import { applyRelationships } from '../utils/relationships';

export interface Metric {
  id: string;
  name: string;
  value: number;
  description?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  metrics: Metric[];
}

export interface KPICategory {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

interface KPIState {
  categories: KPICategory[];
  isLoading: boolean;
}

type KPIAction =
  | { type: 'UPDATE_METRIC'; categoryId: string; subcategoryId: string; metricId: string; value: number }
  | { type: 'LOAD_DATA'; data: KPICategory[] }
  | { type: 'SET_LOADING'; loading: boolean };

const initialState: KPIState = {
  categories: kpiData,
  isLoading: false,
};

function kpiReducer(state: KPIState, action: KPIAction): KPIState {
  switch (action.type) {
    case 'UPDATE_METRIC': {
      const { categoryId, subcategoryId, metricId, value } = action;
      
      const updatedCategories = state.categories.map(category => {
        if (category.id !== categoryId) return category;
        
        return {
          ...category,
          subcategories: category.subcategories.map(subcategory => {
            if (subcategory.id !== subcategoryId) return subcategory;
            
            return {
              ...subcategory,
              metrics: subcategory.metrics.map(metric => {
                if (metric.id !== metricId) return metric;
                return { ...metric, value };
              })
            };
          })
        };
      });

      // Apply relationship rules
      const categoriesWithRelationships = applyRelationships(updatedCategories, categoryId, subcategoryId, metricId, value);
      
      return {
        ...state,
        categories: categoriesWithRelationships,
      };
    }
    
    case 'LOAD_DATA':
      return {
        ...state,
        categories: action.data,
      };
      
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.loading,
      };
      
    default:
      return state;
  }
}

interface KPIContextType {
  state: KPIState;
  dispatch: React.Dispatch<KPIAction>;
  updateMetric: (categoryId: string, subcategoryId: string, metricId: string, value: number) => void;
  exportData: () => string;
  importData: (data: string) => void;
}

const KPIContext = createContext<KPIContextType | undefined>(undefined);

export function KPIContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(kpiReducer, initialState);

  const updateMetric = (categoryId: string, subcategoryId: string, metricId: string, value: number) => {
    dispatch({
      type: 'UPDATE_METRIC',
      categoryId,
      subcategoryId,
      metricId,
      value,
    });
  };

  const exportData = (): string => {
    return JSON.stringify(state.categories, null, 2);
  };

  const importData = (data: string) => {
    try {
      const parsedData = JSON.parse(data);
      dispatch({ type: 'LOAD_DATA', data: parsedData });
    } catch (error) {
      console.error('Failed to import data:', error);
    }
  };

  const value: KPIContextType = {
    state,
    dispatch,
    updateMetric,
    exportData,
    importData,
  };

  return (
    <KPIContext.Provider value={value}>
      {children}
    </KPIContext.Provider>
  );
}

export function useKPI() {
  const context = useContext(KPIContext);
  if (context === undefined) {
    throw new Error('useKPI must be used within a KPIContextProvider');
  }
  return context;
} 