import { AffineEditorContainer } from "@blocksuite/presets";
import { DocCollection } from "@blocksuite/store";
import { createContext, useContext } from "react";

/**
 * @type {import('react').Context<{
 *   editor: import('@blocksuite/presets').AffineEditorContainer,
 *   collection: import('@blocksuite/store').DocCollection
 * } | null>}
 */
export const EditorContext = createContext(null);

export function useEditor() {
  return useContext(EditorContext);
}
