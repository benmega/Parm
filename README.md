# KPI Ranking Dashboard

An interactive web-based UI for inputting ranking scores for 186 metrics organized into 21 subcategories under 7 major KPI categories.

## Features

- **Collapsible Categories**: 7 major KPI categories with expandable subcategories
- **Interactive Sliders**: 186 metrics with 0-10 range sliders (0.5 increments)
- **Real-time Calculations**: Automatic average calculations for subcategories and categories
- **Interconnected Values**: Moving one slider automatically updates related metrics
- **Export/Import**: Save and load configurations as JSON files
- **Modern UI**: Clean, responsive design with TailwindCSS
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance**: Optimized for handling 186 sliders without lag

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Basic Navigation
- Click on any major KPI category to expand/collapse it
- Click on subcategories to view individual metrics
- Use sliders to adjust metric values (0-10 range)
- Type directly in the numeric input fields for precise values

### Interconnected Metrics
The system automatically updates related metrics when you change values.

### Export/Import
- Click "Export JSON" to download current configuration
- Click "Import Configuration" to load a previously saved configuration

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **React Context** - State management
- **HTML5 Range Inputs** - Sliders
- **File API** - Import/Export functionality 