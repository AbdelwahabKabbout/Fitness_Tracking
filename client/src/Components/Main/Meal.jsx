import "./Meal.css";
const Meal = () => {
  return (
    <div className="meal-card">
      <h2 className="meal-title">Meal Plan of the Day</h2>
      <ul className="meal-list">
        <li className="meal-item">
          <div className="meal-name">Breakfast: Oatmeal with Berries</div>
          <div className="meal-info">
            Calories: 350 | Protein: 10g | Carbs: 55g | Fat: 5g
          </div>
        </li>
        <li className="meal-item">
          <div className="meal-name">Lunch: Grilled Chicken Salad</div>
          <div className="meal-info">
            Calories: 450 | Protein: 35g | Carbs: 20g | Fat: 15g
          </div>
        </li>
        <li className="meal-item">
          <div className="meal-name">Dinner: Baked Salmon with Veggies</div>
          <div className="meal-info">
            Calories: 500 | Protein: 40g | Carbs: 25g | Fat: 20g
          </div>
        </li>
      </ul>
      <div className="meal-actions">
        <button className="btn-add">Add Custom Meal</button>
        <button className="btn-grocery">View Grocery List</button>
      </div>
    </div>
  );
};
