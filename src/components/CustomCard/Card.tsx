"use client";
import { EpisodesCard } from "../EpisodesCard/EpisodesCard";
import { LocationsCard } from "../LocationsCard/LocationsCard";
import { CharactersCard } from "../CharactersCard/CharactersCard";
import { AllCard } from "../AllCard/AllCard";
import { useState } from "react";

type CardsProps = {
  type: string;
  data: any;
};

export const Card: React.FC<CardsProps> = ({ type, data }: CardsProps) => {
  const getCardType = (): JSX.Element => {
    switch (type) {
      case "episodes":
        return <EpisodesCard data={data} />;
      case "locations":
        return <LocationsCard data={data} />;
      case "characters":
        return <CharactersCard data={data} />;
      default:
        return <AllCard data={data} />;
    }
  };
  const cardType = getCardType();
  return cardType;
};
