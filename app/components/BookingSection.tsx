"use client";

import { useEffect, useState } from "react";
import HostawayCalendarWidget from "./HostawayCalendarWidget";

type Listing = {
  id: number;
  name: string;
  location?: string;
};

const LISTINGS: Listing[] = [
  { id: 455631, name: "Granary (Midway)", location: "Midway, UT" },
  { id: 455632, name: "Lowell 302 (Park City)", location: "Park City, UT" },
  { id: 455633, name: "Lowell 302A (Park City)", location: "Park City, UT" },
  { id: 455634, name: "Daystar (Deer Valley)", location: "Park City, UT" },
  { id: 455635, name: "House (Midway)", location: "Midway, UT" },
];

type BookingSectionProps = {
  defaultListingId?: number;
};

export default function BookingSection({ defaultListingId }: BookingSectionProps) {
  const fallbackId = LISTINGS[0].id;

  const [selectedId, setSelectedId] = useState<number>(
    defaultListingId ?? fallbackId
  );

  // If you navigate between listing pages, ensure it updates the selection.
  useEffect(() => {
    if (typeof defaultListingId === "number") {
      setSelectedId(defaultListingId);
    }
  }, [defaultListingId]);

  const selected = LISTINGS.find((l) => l.id === selectedId) ?? LISTINGS[0];

  return (
    <div className="bookingSection">
      <div className="card">
        <div className="bookingTopBar">
          <div className="bookingPicker">
            <label className="pickerLabel" htmlFor="listing">
              Choose a listing
            </label>

            <select
              id="listing"
              className="pickerSelect"
              value={selectedId}
              onChange={(e) => setSelectedId(Number(e.target.value))}
            >
              {LISTINGS.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                  {l.location ? ` — ${l.location}` : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bookingGrid">
          <div className="widgetMount">
            <HostawayCalendarWidget listingId={selectedId} />
          </div>
        </div>

        <div className="bookingHint">
          Currently viewing: <strong>{selected.name}</strong>
        </div>
      </div>
    </div>
  );
}
