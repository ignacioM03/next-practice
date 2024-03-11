"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { Card } from "../CustomCard/Card";
import { useState } from "react";

const episodes = async function fetchEpisodes() {
  const res = await fetch("http://localhost:3000/api/episodes");
  const data = await res.json();
  return data;
};

const locations = async function fetchLocations() {
  const res = await fetch("http://localhost:3000/api/locations");
  const data = await res.json();
  return data;
};

const Characters = async function fetchCharacters() {
  const res = await fetch("http://localhost:3000/api/characters");
  const data = await res.json();
  return data;
};

export const CustomSelectProps = [
  {
    value: "locations",
    label: "Locations",
    data: locations,
  },
  {
    value: "characters",
    label: "characters",
    data: Characters,
  },
  {
    value: "episodes",
    label: "episodes",
    data: episodes,
  },
];

export default function CustomSelect() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const onChange = async (event: any) => {
    setValue(event.target.value);
    if (event.target.value === "locations") {
      const newData = await locations();
      setData(newData.results);
    }
    if (event.target.value === "characters") {
      const newData = await Characters();
      setData(newData.results);
    }
    if (event.target.value === "episodes") {
      const newData = await episodes();
      setData(newData.results);
    }
  };
  return (
    <div className="p-4">
      <Select
        items={CustomSelectProps}
        label="Choose your charge"
        placeholder="Select"
        className="max-w-xs mb-8 bg-slate-700 p-4"
        onChange={onChange}
      >
        {CustomSelectProps.map((custom) => (
          <SelectItem key={custom.value} value={custom.value}>
            {custom.label}
          </SelectItem>
        ))}
      </Select>
      <Card type={value} data={data} />
    </div>
  );
}
