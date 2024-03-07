import { PartialBlock } from "@blocknote/core";

export type Key = "createLaw" | "createWorld" | "editWorld" | "editLaw";

export async function saveToStorage<T>(jsonBlocks: T, key: Key) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.setItem(`editorContent_${key}`, JSON.stringify(jsonBlocks));
}

export async function loadFromStorage(key: Key) {
  // Gets the previously stored editor contents.
  const storageString = localStorage.getItem(`editorContent_${key}`);
  return storageString ? (JSON.parse(storageString) as PartialBlock[]) : undefined;
}

export async function removeStorage(key: Key) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.removeItem(`editorContent_${key}`);
}
