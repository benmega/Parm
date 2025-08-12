import { KPICategory } from '../contexts/KPIContext';

export const kpiData: KPICategory[] = [
  {
    id: 'financial',
    name: 'Financial Performance',
    subcategories: [
      {
        id: 'revenue',
        name: 'Revenue Metrics',
        metrics: [
          { id: 'total_revenue', name: 'Total Revenue', value: 5.0, description: 'Overall revenue performance' },
          { id: 'revenue_growth', name: 'Revenue Growth Rate', value: 4.5, description: 'Year-over-year revenue growth' },
          { id: 'recurring_revenue', name: 'Recurring Revenue', value: 6.0, description: 'Percentage of recurring revenue' },
          { id: 'average_deal_size', name: 'Average Deal Size', value: 5.5, description: 'Average value per transaction' },
          { id: 'sales_velocity', name: 'Sales Velocity', value: 4.0, description: 'Speed of sales cycle' },
          { id: 'customer_lifetime_value', name: 'Customer Lifetime Value', value: 6.5, description: 'CLV calculation' },
          { id: 'churn_rate', name: 'Churn Rate', value: 3.5, description: 'Customer retention rate' },
          { id: 'acquisition_cost', name: 'Customer Acquisition Cost', value: 4.5, description: 'CAC metrics' },
          { id: 'profit_margin', name: 'Profit Margin', value: 5.5, description: 'Overall profitability' },
        ]
      },
      {
        id: 'costs',
        name: 'Cost Management',
        metrics: [
          { id: 'operating_costs', name: 'Operating Costs', value: 4.0, description: 'Total operational expenses' },
          { id: 'cost_per_employee', name: 'Cost per Employee', value: 5.0, description: 'Employee cost efficiency' },
          { id: 'infrastructure_costs', name: 'Infrastructure Costs', value: 4.5, description: 'IT and infrastructure expenses' },
          { id: 'marketing_spend', name: 'Marketing Spend Efficiency', value: 5.5, description: 'Marketing ROI' },
          { id: 'research_development', name: 'R&D Investment', value: 6.0, description: 'Innovation investment' },
        ]
      },
      {
        id: 'efficiency',
        name: 'Operational Efficiency',
        metrics: [
          { id: 'productivity_per_employee', name: 'Productivity per Employee', value: 5.5, description: 'Employee output efficiency' },
          { id: 'process_automation', name: 'Process Automation Level', value: 4.5, description: 'Automation coverage' },
          { id: 'resource_utilization', name: 'Resource Utilization', value: 5.0, description: 'Resource efficiency' },
          { id: 'cycle_time', name: 'Cycle Time Reduction', value: 4.0, description: 'Process speed improvement' },
        ]
      }
    ]
  },
  {
    id: 'customer',
    name: 'Customer Experience',
    subcategories: [
      {
        id: 'satisfaction',
        name: 'Customer Satisfaction',
        metrics: [
          { id: 'nps_score', name: 'Net Promoter Score', value: 6.5, description: 'Customer loyalty metric' },
          { id: 'csat_score', name: 'Customer Satisfaction Score', value: 6.0, description: 'Overall satisfaction rating' },
          { id: 'customer_effort', name: 'Customer Effort Score', value: 5.5, description: 'Ease of doing business' },
          { id: 'support_quality', name: 'Support Quality Rating', value: 6.0, description: 'Customer service quality' },
          { id: 'response_time', name: 'Response Time', value: 5.5, description: 'Support response speed' },
          { id: 'resolution_rate', name: 'First Contact Resolution', value: 5.0, description: 'Issue resolution efficiency' },
        ]
      },
      {
        id: 'engagement',
        name: 'Customer Engagement',
        metrics: [
          { id: 'active_users', name: 'Active Users', value: 6.0, description: 'Daily/monthly active users' },
          { id: 'feature_adoption', name: 'Feature Adoption Rate', value: 5.5, description: 'New feature usage' },
          { id: 'session_duration', name: 'Session Duration', value: 5.0, description: 'Time spent in application' },
          { id: 'retention_rate', name: 'Retention Rate', value: 6.5, description: 'User retention over time' },
          { id: 'engagement_score', name: 'Engagement Score', value: 5.5, description: 'Overall engagement metric' },
        ]
      },
      {
        id: 'feedback',
        name: 'Customer Feedback',
        metrics: [
          { id: 'feedback_volume', name: 'Feedback Volume', value: 5.0, description: 'Amount of customer feedback' },
          { id: 'feedback_sentiment', name: 'Feedback Sentiment', value: 5.5, description: 'Positive vs negative feedback' },
          { id: 'feature_requests', name: 'Feature Request Quality', value: 6.0, description: 'Quality of feature requests' },
          { id: 'bug_reports', name: 'Bug Report Resolution', value: 5.5, description: 'Bug fix speed and quality' },
        ]
      }
    ]
  },
  {
    id: 'product',
    name: 'Product Performance',
    subcategories: [
      {
        id: 'quality',
        name: 'Product Quality',
        metrics: [
          { id: 'defect_rate', name: 'Defect Rate', value: 4.5, description: 'Bug frequency and severity' },
          { id: 'uptime', name: 'System Uptime', value: 7.0, description: 'Service availability' },
          { id: 'performance', name: 'Performance Metrics', value: 6.0, description: 'Speed and responsiveness' },
          { id: 'security_score', name: 'Security Score', value: 6.5, description: 'Security assessment rating' },
          { id: 'compliance', name: 'Compliance Status', value: 6.0, description: 'Regulatory compliance' },
          { id: 'accessibility', name: 'Accessibility Score', value: 5.5, description: 'Accessibility compliance' },
        ]
      },
      {
        id: 'development',
        name: 'Development Efficiency',
        metrics: [
          { id: 'deployment_frequency', name: 'Deployment Frequency', value: 5.5, description: 'Release cadence' },
          { id: 'lead_time', name: 'Lead Time', value: 5.0, description: 'Time from commit to production' },
          { id: 'code_quality', name: 'Code Quality', value: 6.0, description: 'Code review and quality metrics' },
          { id: 'test_coverage', name: 'Test Coverage', value: 5.5, description: 'Automated test coverage' },
          { id: 'technical_debt', name: 'Technical Debt', value: 4.5, description: 'Technical debt management' },
        ]
      },
      {
        id: 'innovation',
        name: 'Innovation & Features',
        metrics: [
          { id: 'feature_velocity', name: 'Feature Velocity', value: 5.5, description: 'New feature delivery speed' },
          { id: 'innovation_index', name: 'Innovation Index', value: 6.0, description: 'Innovation measurement' },
          { id: 'market_fit', name: 'Product-Market Fit', value: 6.5, description: 'Market alignment' },
          { id: 'competitive_advantage', name: 'Competitive Advantage', value: 5.5, description: 'Market differentiation' },
        ]
      }
    ]
  },
  {
    id: 'team',
    name: 'Team Performance',
    subcategories: [
      {
        id: 'productivity',
        name: 'Team Productivity',
        metrics: [
          { id: 'velocity', name: 'Team Velocity', value: 5.5, description: 'Work completion rate' },
          { id: 'capacity', name: 'Team Capacity', value: 5.0, description: 'Available work capacity' },
          { id: 'efficiency', name: 'Work Efficiency', value: 5.5, description: 'Output per time unit' },
          { id: 'quality_score', name: 'Work Quality', value: 6.0, description: 'Deliverable quality' },
          { id: 'collaboration', name: 'Collaboration Index', value: 6.5, description: 'Team collaboration effectiveness' },
        ]
      },
      {
        id: 'satisfaction',
        name: 'Employee Satisfaction',
        metrics: [
          { id: 'employee_nps', name: 'Employee NPS', value: 6.0, description: 'Employee satisfaction score' },
          { id: 'retention_rate', name: 'Employee Retention', value: 6.5, description: 'Employee retention rate' },
          { id: 'engagement', name: 'Employee Engagement', value: 5.5, description: 'Employee engagement level' },
          { id: 'work_life_balance', name: 'Work-Life Balance', value: 5.0, description: 'Work-life balance satisfaction' },
          { id: 'career_growth', name: 'Career Growth', value: 6.0, description: 'Career development opportunities' },
        ]
      },
      {
        id: 'skills',
        name: 'Skills & Development',
        metrics: [
          { id: 'skill_gaps', name: 'Skill Gap Analysis', value: 4.5, description: 'Identified skill gaps' },
          { id: 'training_effectiveness', name: 'Training Effectiveness', value: 5.5, description: 'Training program success' },
          { id: 'certification_rate', name: 'Certification Rate', value: 5.0, description: 'Professional certifications' },
          { id: 'knowledge_sharing', name: 'Knowledge Sharing', value: 6.0, description: 'Knowledge transfer effectiveness' },
        ]
      }
    ]
  },
  {
    id: 'market',
    name: 'Market Position',
    subcategories: [
      {
        id: 'competition',
        name: 'Competitive Analysis',
        metrics: [
          { id: 'market_share', name: 'Market Share', value: 5.5, description: 'Market position percentage' },
          { id: 'competitive_position', name: 'Competitive Position', value: 5.0, description: 'Relative to competitors' },
          { id: 'differentiation', name: 'Product Differentiation', value: 6.0, description: 'Unique value proposition' },
          { id: 'brand_recognition', name: 'Brand Recognition', value: 5.5, description: 'Brand awareness level' },
          { id: 'customer_preference', name: 'Customer Preference', value: 6.0, description: 'Customer choice preference' },
        ]
      },
      {
        id: 'growth',
        name: 'Market Growth',
        metrics: [
          { id: 'market_expansion', name: 'Market Expansion', value: 5.5, description: 'New market penetration' },
          { id: 'geographic_reach', name: 'Geographic Reach', value: 5.0, description: 'Geographic market coverage' },
          { id: 'segment_penetration', name: 'Segment Penetration', value: 5.5, description: 'Target segment coverage' },
          { id: 'partnership_growth', name: 'Partnership Growth', value: 6.0, description: 'Strategic partnership expansion' },
        ]
      },
      {
        id: 'trends',
        name: 'Market Trends',
        metrics: [
          { id: 'trend_alignment', name: 'Trend Alignment', value: 6.0, description: 'Alignment with market trends' },
          { id: 'innovation_adoption', name: 'Innovation Adoption', value: 5.5, description: 'Adoption of new technologies' },
          { id: 'future_readiness', name: 'Future Readiness', value: 6.0, description: 'Preparedness for future changes' },
        ]
      }
    ]
  },
  {
    id: 'technology',
    name: 'Technology Infrastructure',
    subcategories: [
      {
        id: 'infrastructure',
        name: 'Infrastructure Quality',
        metrics: [
          { id: 'system_reliability', name: 'System Reliability', value: 6.5, description: 'System stability and uptime' },
          { id: 'scalability', name: 'Scalability', value: 6.0, description: 'System scaling capability' },
          { id: 'performance_metrics', name: 'Performance Metrics', value: 5.5, description: 'System performance indicators' },
          { id: 'security_posture', name: 'Security Posture', value: 6.5, description: 'Overall security status' },
          { id: 'backup_recovery', name: 'Backup & Recovery', value: 6.0, description: 'Data protection capabilities' },
        ]
      },
      {
        id: 'modernization',
        name: 'Technology Modernization',
        metrics: [
          { id: 'tech_stack_modernity', name: 'Tech Stack Modernity', value: 5.5, description: 'Technology currency' },
          { id: 'cloud_adoption', name: 'Cloud Adoption', value: 6.0, description: 'Cloud infrastructure usage' },
          { id: 'automation_level', name: 'Automation Level', value: 5.5, description: 'Process automation extent' },
          { id: 'integration_quality', name: 'Integration Quality', value: 5.0, description: 'System integration effectiveness' },
        ]
      },
      {
        id: 'operations',
        name: 'Operations & Maintenance',
        metrics: [
          { id: 'monitoring_coverage', name: 'Monitoring Coverage', value: 6.0, description: 'System monitoring extent' },
          { id: 'incident_response', name: 'Incident Response', value: 5.5, description: 'Issue resolution speed' },
          { id: 'change_management', name: 'Change Management', value: 5.0, description: 'Change process effectiveness' },
          { id: 'documentation_quality', name: 'Documentation Quality', value: 5.5, description: 'Technical documentation' },
        ]
      }
    ]
  },
  {
    id: 'sustainability',
    name: 'Sustainability & Compliance',
    subcategories: [
      {
        id: 'environmental',
        name: 'Environmental Impact',
        metrics: [
          { id: 'carbon_footprint', name: 'Carbon Footprint', value: 5.0, description: 'Environmental impact measurement' },
          { id: 'energy_efficiency', name: 'Energy Efficiency', value: 5.5, description: 'Energy consumption optimization' },
          { id: 'waste_reduction', name: 'Waste Reduction', value: 4.5, description: 'Waste management effectiveness' },
          { id: 'sustainable_practices', name: 'Sustainable Practices', value: 5.5, description: 'Sustainability initiatives' },
        ]
      },
      {
        id: 'compliance',
        name: 'Regulatory Compliance',
        metrics: [
          { id: 'compliance_score', name: 'Compliance Score', value: 6.0, description: 'Overall compliance rating' },
          { id: 'audit_results', name: 'Audit Results', value: 5.5, description: 'Audit performance' },
          { id: 'risk_management', name: 'Risk Management', value: 6.0, description: 'Risk mitigation effectiveness' },
          { id: 'policy_adherence', name: 'Policy Adherence', value: 5.5, description: 'Policy compliance level' },
        ]
      },
      {
        id: 'social',
        name: 'Social Responsibility',
        metrics: [
          { id: 'diversity_inclusion', name: 'Diversity & Inclusion', value: 6.0, description: 'D&I program effectiveness' },
          { id: 'community_impact', name: 'Community Impact', value: 5.5, description: 'Community engagement' },
          { id: 'ethical_practices', name: 'Ethical Practices', value: 6.0, description: 'Ethical business conduct' },
          { id: 'stakeholder_satisfaction', name: 'Stakeholder Satisfaction', value: 5.5, description: 'Stakeholder relationship quality' },
        ]
      }
    ]
  }
]; 