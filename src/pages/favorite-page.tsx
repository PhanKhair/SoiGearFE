import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import Tag from "@/components/globals/atoms/tag";
import Breadcrumb from "@/components/globals/molecules/breadcrumb";
import FavoriteCard from "@/components/globals/molecules/favorite-card";
import { sampleKeyboardData } from "@/constants/data/keyboard";
import { sampleKeycapData } from "@/constants/data/keycap";
import {
  getFavoriteKeyboardData,
  getFavoriteKeycapData,
  removeKeyboardFromFavorite,
  removeKeycapFromFavorite,
} from "@/contexts/FavoriteContext";
import { KeyboardType } from "@/schemas/keyboardSchema";
import { KeycapType } from "@/schemas/keycapSchema";
import { useCallback, useEffect, useState } from "react";

function FavoritePage() {
  const [favoriteKeyboards, setFavoriteKeyboards] = useState<KeyboardType[]>(
    [],
  );
  const [favoriteKeycaps, setFavoriteKeycaps] = useState<KeycapType[]>([]);

  const refreshFavoriteData = useCallback(() => {
    const keyboards = getFavoriteKeyboardData(sampleKeyboardData);
    const keycaps = getFavoriteKeycapData(sampleKeycapData);

    setFavoriteKeyboards(keyboards);
    setFavoriteKeycaps(keycaps);
  }, []);

  useEffect(() => {
    refreshFavoriteData();
  }, [refreshFavoriteData]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "favoriteChanged" && event.newValue === "true") {
        refreshFavoriteData();
        localStorage.setItem("favoriteChanged", "false");
      }
    };

    window.addEventListener("storage", handleStorage);

    if (localStorage.getItem("favoriteChanged") === "true") {
      refreshFavoriteData();
      localStorage.setItem("favoriteChanged", "false");
    }

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [refreshFavoriteData]);

  const handleRemoveFavorite = useCallback(
    (id: string, variant: "keyboard" | "keycap") => {
      if (variant === "keyboard") {
        removeKeyboardFromFavorite(id);
      } else {
        removeKeycapFromFavorite(id);
      }

      refreshFavoriteData();
    },
    [refreshFavoriteData],
  );

  const isBothEmpty =
    favoriteKeyboards.length === 0 && favoriteKeycaps.length === 0;

  const breadcrumb = [
    { title: "Home", href: "/home" },
    { title: "My Favorite" },
  ];

  return (
    <div className="space-y-10">
      <Breadcrumb data={breadcrumb} />

      <div className="space-y-10">
        {favoriteKeyboards.length > 0 && (
          <div className="space-y-6">
            <Tag label="My keyboard" />

            <Carousel className="w-full">
              <CarouselContent>
                {favoriteKeyboards.map((product, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/1 md:basis-1/3 xl:basis-1/5"
                  >
                    <FavoriteCard
                      variant="keyboard"
                      keyboard={product}
                      onRemove={handleRemoveFavorite}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}

        {favoriteKeycaps.length > 0 && (
          <div className="space-y-6">
            <Tag label="My keycap" />

            <Carousel className="w-full">
              <CarouselContent>
                {favoriteKeycaps.map((product, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/1 md:basis-1/3 xl:basis-1/5"
                  >
                    <FavoriteCard
                      variant="keycap"
                      keycap={product}
                      onRemove={handleRemoveFavorite}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>

      {isBothEmpty && (
        <div className="flex items-center justify-center">
          <img
            src="https://timvandevall.com/wp-content/uploads/keyboard-template-1-500.jpg"
            alt="Empty"
          />
        </div>
      )}
    </div>
  );
}

export default FavoritePage;
