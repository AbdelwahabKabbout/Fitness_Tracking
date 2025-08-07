// src/pages/MainPage.jsx
import Navbar from "./Main/Nav";
import CalendarWidget from "../Components/Main/Calendar.jsx";
import Workout from "../Components/Main/Workout.jsx";
import Meal from "../Components/Main/Meal.jsx";

const MainPage = () => {
  const handleDateSelect = (date) => {
    console.log("Selected date from MainPage:", date);
    // You'll use this to fetch/update workout/meal/quote etc.
  };

  return (
    <div>
      <Navbar />
      <CalendarWidget onDateChange={handleDateSelect} />
      <Meal />
      <Workout />
    </div>
  );
};

export default MainPage;
