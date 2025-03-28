import { createFileRoute, redirect } from "@tanstack/react-router";
import GenerateTrip from "../pages/GenerateTrip";

// Authentication check function
const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // Checks if token exists
};

export const Route = createFileRoute("/generatetrip")({
  loader: async () => {
    if (!isAuthenticated()) {
      throw redirect({ to: "/login" }); // Redirects to login if not authenticated
    }
  },
  component: GenerateTrip,
});
