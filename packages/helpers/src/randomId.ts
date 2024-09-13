import { rangeIn } from "./rangeIn";

export function randomId(length = 6) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = rangeIn(0, charactersLength - 1);

    id += characters.charAt(randomIndex);
  }

  return id;
}
