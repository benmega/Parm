import { KPICategory } from '../contexts/KPIContext';

// Define relationship rules between metrics
interface RelationshipRule {
  sourceMetric: string;
  targetMetrics: Array<{
    metricId: string;
    categoryId: string;
    subcategoryId: string;
    factor: number; // How much the target should change relative to source
    minValue?: number;
    maxValue?: number;
  }>;
}

// Example relationship rules - these can be expanded based on business logic
const relationshipRules: RelationshipRule[] = [
  // Financial relationships
  {
    sourceMetric: 'total_revenue',
    targetMetrics: [
      { metricId: 'revenue_growth', categoryId: 'financial', subcategoryId: 'revenue', factor: 0.8 },
      { metricId: 'profit_margin', categoryId: 'financial', subcategoryId: 'revenue', factor: 0.3 },
    ]
  },
  {
    sourceMetric: 'customer_lifetime_value',
    targetMetrics: [
      { metricId: 'recurring_revenue', categoryId: 'financial', subcategoryId: 'revenue', factor: 0.7 },
      { metricId: 'churn_rate', categoryId: 'financial', subcategoryId: 'revenue', factor: -0.5 },
    ]
  },
  
  // Customer experience relationships
  {
    sourceMetric: 'nps_score',
    targetMetrics: [
      { metricId: 'csat_score', categoryId: 'customer', subcategoryId: 'satisfaction', factor: 0.9 },
      { metricId: 'retention_rate', categoryId: 'customer', subcategoryId: 'engagement', factor: 0.6 },
      { metricId: 'churn_rate', categoryId: 'financial', subcategoryId: 'revenue', factor: -0.4 },
    ]
  },
  {
    sourceMetric: 'support_quality',
    targetMetrics: [
      { metricId: 'response_time', categoryId: 'customer', subcategoryId: 'satisfaction', factor: 0.7 },
      { metricId: 'resolution_rate', categoryId: 'customer', subcategoryId: 'satisfaction', factor: 0.8 },
    ]
  },
  
  // Product quality relationships
  {
    sourceMetric: 'defect_rate',
    targetMetrics: [
      { metricId: 'uptime', categoryId: 'product', subcategoryId: 'quality', factor: -0.6 },
      { metricId: 'performance', categoryId: 'product', subcategoryId: 'quality', factor: -0.5 },
      { metricId: 'nps_score', categoryId: 'customer', subcategoryId: 'satisfaction', factor: -0.3 },
    ]
  },
  {
    sourceMetric: 'uptime',
    targetMetrics: [
      { metricId: 'nps_score', categoryId: 'customer', subcategoryId: 'satisfaction', factor: 0.4 },
      { metricId: 'customer_effort', categoryId: 'customer', subcategoryId: 'satisfaction', factor: 0.3 },
    ]
  },
  
  // Team performance relationships
  {
    sourceMetric: 'velocity',
    targetMetrics: [
      { metricId: 'efficiency', categoryId: 'team', subcategoryId: 'productivity', factor: 0.8 },
      { metricId: 'feature_velocity', categoryId: 'product', subcategoryId: 'innovation', factor: 0.7 },
    ]
  },
  {
    sourceMetric: 'employee_nps',
    targetMetrics: [
      { metricId: 'retention_rate', categoryId: 'team', subcategoryId: 'satisfaction', factor: 0.8 },
      { metricId: 'collaboration', categoryId: 'team', subcategoryId: 'productivity', factor: 0.6 },
      { metricId: 'quality_score', categoryId: 'team', subcategoryId: 'productivity', factor: 0.5 },
    ]
  },
  
  // Technology relationships
  {
    sourceMetric: 'system_reliability',
    targetMetrics: [
      { metricId: 'uptime', categoryId: 'product', subcategoryId: 'quality', factor: 0.9 },
      { metricId: 'performance_metrics', categoryId: 'technology', subcategoryId: 'infrastructure', factor: 0.7 },
    ]
  },
  {
    sourceMetric: 'automation_level',
    targetMetrics: [
      { metricId: 'process_automation', categoryId: 'financial', subcategoryId: 'efficiency', factor: 0.8 },
      { metricId: 'efficiency', categoryId: 'team', subcategoryId: 'productivity', factor: 0.6 },
      { metricId: 'operating_costs', categoryId: 'financial', subcategoryId: 'costs', factor: -0.4 },
    ]
  },
  
  // Market position relationships
  {
    sourceMetric: 'market_share',
    targetMetrics: [
      { metricId: 'competitive_position', categoryId: 'market', subcategoryId: 'competition', factor: 0.8 },
      { metricId: 'brand_recognition', categoryId: 'market', subcategoryId: 'competition', factor: 0.6 },
      { metricId: 'total_revenue', categoryId: 'financial', subcategoryId: 'revenue', factor: 0.5 },
    ]
  },
  {
    sourceMetric: 'product_market_fit',
    targetMetrics: [
      { metricId: 'nps_score', categoryId: 'customer', subcategoryId: 'satisfaction', factor: 0.7 },
      { metricId: 'customer_preference', categoryId: 'market', subcategoryId: 'competition', factor: 0.8 },
      { metricId: 'revenue_growth', categoryId: 'financial', subcategoryId: 'revenue', factor: 0.6 },
    ]
  }
];

export function applyRelationships(
  categories: KPICategory[],
  changedCategoryId: string,
  changedSubcategoryId: string,
  changedMetricId: string,
  newValue: number
): KPICategory[] {
  // Find the rule that applies to the changed metric
  const applicableRule = relationshipRules.find(rule => rule.sourceMetric === changedMetricId);
  
  if (!applicableRule) {
    return categories;
  }

  // Calculate the change in value
  const oldValue = findMetricValue(categories, changedCategoryId, changedSubcategoryId, changedMetricId);
  const valueChange = newValue - oldValue;

  if (valueChange === 0) {
    return categories;
  }

  // Apply the relationship rules
  let updatedCategories = [...categories];
  
  applicableRule.targetMetrics.forEach(target => {
    const currentValue = findMetricValue(updatedCategories, target.categoryId, target.subcategoryId, target.metricId);
    const newTargetValue = Math.max(0, Math.min(10, currentValue + (valueChange * target.factor)));
    
    updatedCategories = updateMetricValue(
      updatedCategories,
      target.categoryId,
      target.subcategoryId,
      target.metricId,
      newTargetValue
    );
  });

  return updatedCategories;
}

function findMetricValue(
  categories: KPICategory[],
  categoryId: string,
  subcategoryId: string,
  metricId: string
): number {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return 0;
  
  const subcategory = category.subcategories.find(s => s.id === subcategoryId);
  if (!subcategory) return 0;
  
  const metric = subcategory.metrics.find(m => m.id === metricId);
  return metric ? metric.value : 0;
}

function updateMetricValue(
  categories: KPICategory[],
  categoryId: string,
  subcategoryId: string,
  metricId: string,
  newValue: number
): KPICategory[] {
  return categories.map(category => {
    if (category.id !== categoryId) return category;
    
    return {
      ...category,
      subcategories: category.subcategories.map(subcategory => {
        if (subcategory.id !== subcategoryId) return subcategory;
        
        return {
          ...subcategory,
          metrics: subcategory.metrics.map(metric => {
            if (metric.id !== metricId) return metric;
            return { ...metric, value: newValue };
          })
        };
      })
    };
  });
}

// Helper function to calculate averages
export function calculateSubcategoryAverage(metrics: any[]): number {
  if (metrics.length === 0) return 0;
  const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
  return Math.round((sum / metrics.length) * 10) / 10; // Round to 1 decimal place
}

export function calculateCategoryAverage(subcategories: any[]): number {
  if (subcategories.length === 0) return 0;
  const subcategoryAverages = subcategories.map(sub => calculateSubcategoryAverage(sub.metrics));
  const sum = subcategoryAverages.reduce((acc, avg) => acc + avg, 0);
  return Math.round((sum / subcategoryAverages.length) * 10) / 10; // Round to 1 decimal place
} 