import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const DashboardPage = lazy(() => import("./pages/dashboardPage"));
  const ProfilePage = lazy(() => import("./pages/profilePage"));
  const AllTasksPage = lazy(() => import("./pages/allTasksPage"));
  const CompleteTasksPage = lazy(() => import("./pages/completeTasksPage"));
  const Next7DaysTasksPage = lazy(() => import("./pages/next7DaysTasksPage"));
  const NotdoTasksPage = lazy(() => import("./pages/notdoTasksPage"));
  const TodayTasksPage = lazy(() => import("./pages/todayTasksPage"));
  const TrashTasksPage = lazy(() => import("./pages/trashTasksPage"));
  const TasksStatusPage = lazy(() => import("./pages/tasksStatusPage"));
  const NotePage = lazy(() => import("./pages/notePage"));
  const PromoPage = lazy(() => import("./pages/promoPage"));
  const SigninPage = lazy(() => import("./pages/signInPage"));
  const SignUpPage = lazy(() => import("./pages/signUpPage"));

  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/tasks/all" element={<AllTasksPage />}></Route>
          <Route path="/tasks/complete" element={<CompleteTasksPage />}></Route>
          <Route path="/tasks/next7days" element={<Next7DaysTasksPage />}></Route>
          <Route path="/tasks/notdo" element={<NotdoTasksPage />}></Route>
          <Route path="/tasks/today" element={<TodayTasksPage />}></Route>
          <Route path="/tasks/deleted" element={<TrashTasksPage />}></Route>
          <Route path="/tasks/status" element={<TasksStatusPage />}></Route>
          <Route path="/notes" element={<NotePage />}></Route>
          <Route path="/promo" element={<PromoPage />}></Route>
          <Route path="/signin" element={<SigninPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
