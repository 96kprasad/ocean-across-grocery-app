import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, MapPin, ShoppingBasket } from "lucide-react";
import Dropdown from "../../components/common/input/Dropdown";

const zones = ["Banasree", "Gulshan", "Dhanmondi", "Mirpur", "Uttara"];
const areas: Record<string, string[]> = {
  Banasree: ["Block A", "Block B", "Block C"],
  Gulshan: ["Gulshan 1", "Gulshan 2"],
  Dhanmondi: ["Road 2", "Road 7", "Road 27"],
  Mirpur: ["Mirpur 1", "Mirpur 10", "Mirpur 12"],
  Uttara: ["Sector 3", "Sector 7", "Sector 11"],
};

export default function LocationPage() {
  const navigate = useNavigate();
  const [zone, setZone] = useState("");
  const [area, setArea] = useState("");

  const zoneOptions = zones.map((z) => ({ label: z, value: z }));
  const areaOptions = zone
    ? (areas[zone] ?? []).map((a) => ({ label: a, value: a }))
    : [];

  return (
    <div className="min-h-screen flex">
      {/* Desktop Left Panel */}
      <div className="hidden md:flex md:w-1/2 bg-green-500 flex-col items-center justify-center p-12">
        <ShoppingBasket size={80} className="text-white mb-6" />
        <h1 className="text-white text-5xl font-bold tracking-wide mb-3">nectar</h1>
        <p className="text-green-100 text-lg text-center">
          Tell us where to deliver your groceries
        </p>
      </div>

      {/* Right / Mobile Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-16 bg-white">
        <div className="max-w-md w-full mx-auto">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="text-gray-500 mb-8 w-fit hover:text-gray-700 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex flex-col items-center mb-8">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
              <MapPin size={40} className="text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Select Your Location
            </h1>
            <p className="text-gray-500 text-sm text-center">
              Switch on your location to stay in tune with what's happening in your area
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <Dropdown
              label="Your Zone"
              options={zoneOptions}
              value={zone}
              onChange={(v) => { setZone(v); setArea(""); }}
              placeholder="Select zone"
              ariaLabel="Select zone"
            />
            <Dropdown
              label="Your Area"
              options={areaOptions}
              value={area}
              onChange={setArea}
              placeholder="Types of your area"
              disabled={!zone}
              ariaLabel="Select area"
            />
          </div>

          <button
            onClick={() => zone && area && navigate("/login")}
            disabled={!zone || !area}
            className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-colors disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
