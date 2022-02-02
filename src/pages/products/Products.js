import React from "react";
import ItemGallery from "../../components/itemGallery/ItemGallery";
import { NavigationSection } from "../../components/navigationSection/NavigationSection";

export const Products = () => {
  return (
    <main>
      <NavigationSection />
      <ItemGallery />
    </main>
  );
};
