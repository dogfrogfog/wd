"use client";

import Button from "@/components/ui/Button";
import { ButtonStyle } from "@/components/ui/Button/styles";

type Props = {
  addItemToCookie: (slug: string, size: string) => Promise<void>;
  slug: string;
  size: string;
};

export default function AddToCartButton({
  addItemToCookie,
  slug,
  size,
}: Props) {
  async function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    await addItemToCookie(slug, size);
  }

  // todo: check if product is in stock

  return (
    <Button style={ButtonStyle.simpleButton} onClick={handleButtonClick}>
      add to cart
    </Button>
  );
}