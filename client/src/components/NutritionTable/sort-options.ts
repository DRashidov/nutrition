const createOption = (title: string, name: string) => ({ title, name });

export const sortOptions = [
  createOption('Dessert(100g serving)', 'dessert'),
  createOption('Calories', 'calories'),
  createOption('Fat', 'fat'),
  createOption('Carbs', 'carbs'),
  createOption('Protein', 'protein'),
];
