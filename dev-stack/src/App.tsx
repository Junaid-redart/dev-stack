import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import type { ITechnology } from "./types/technology";
import Technologies from "./components/Technologies";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState(true);

  // Add to Stack Function
  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("Technology already added!");
      return;
    }

    setSelectedStack([...selectedStack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };
  const handleRemove = (id: string) => {
  const updatedStack = selectedStack.filter(
    (item) => item.id !== id
  );

  setSelectedStack(updatedStack);
  toast.info("Technology removed from your stack!");
};

const handleRemoveAll = () => {
  if (selectedStack.length === 0) {
    toast.warning("Your stack is already empty!");
    return;
  }

  setSelectedStack([]);
  toast.info("Stack Clear");
};

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: ITechnology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  console.log(technologies);

  return (
    <>
      <Navbar />
      <Hero />

      {loading ? (
        <p className="text-center py-10">
          Loading technologies...
        </p>
      ) : (
       <Technologies
  technologies={technologies}
  handleAddToStack={handleAddToStack}
  selectedStack={selectedStack}
  handleRemove={handleRemove}
  handleRemoveAll={handleRemoveAll}
/>
      )}
      <Footer />

    <ToastContainer
  position="bottom-right"
  autoClose={3000}
  aria-label="Notifications"
/>
    </>
  );
}

export default App;