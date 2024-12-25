import { create } from 'zustand';

interface EmergencySolution {
  id: string;
  title: string;
  description: string;
  category: string;
  steps: string[];
}

interface EmergencyState {
  solutions: EmergencySolution[];
}

export const useEmergencyStore = create<EmergencyState>(() => ({
  solutions: [
    {
      id: '1',
      title: 'Water Leak Emergency',
      description: 'Quick steps to handle a water leak before professional help arrives',
      category: 'Plumbing',
      steps: [
        'Locate and shut off the main water valve',
        'Turn off electricity in affected areas',
        'Remove valuable items from the area',
        'Document damage with photos',
        'Contact emergency plumbing services'
      ]
    },
    {
      id: '2',
      title: 'Power Outage Response',
      description: 'Essential steps during a power outage',
      category: 'Electrical',
      steps: [
        'Check if neighbors have power',
        'Report outage to utility company',
        'Unplug sensitive electronics',
        'Keep refrigerator closed',
        'Use flashlights instead of candles'
      ]
    },
    {
      id: '3',
      title: 'Kitchen Fire Safety',
      description: 'Immediate actions for kitchen fire emergencies',
      category: 'Fire Safety',
      steps: [
        'Never use water on grease fires',
        'Use fire extinguisher or baking soda',
        'Turn off heat source if possible',
        'Evacuate if fire spreads',
        'Call emergency services'
      ]
    }
  ]
}));