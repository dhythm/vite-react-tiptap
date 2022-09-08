import Details from "@tiptap-pro/extension-details";
import DetailsContent from "@tiptap-pro/extension-details-content";
import DetailsSummary from "@tiptap-pro/extension-details-summary";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./styles.scss";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Details.configure({
        persist: true,
        HTMLAttributes: {
          class: "details",
        },
      }),
      DetailsSummary,
      DetailsContent,
      Placeholder.configure({
        includeChildren: true,
        placeholder: ({ node }) => {
          if (node.type.name === "detailsSummary") {
            return "Summary";
          }

          return null;
        },
      }),
    ],
    content: `
      <p>Look at these details</p>
      <details>
        <summary>This is a summary</summary>
        <p>Surprise!</p>
      </details>
      <p>Nested details are also supported</p>
      <details open>
        <summary>This is another summary</summary>
        <p>And there is even more.</p>
        <details>
          <summary>We need to go deeper</summary>
          <p>Booya!</p>
        </details>
      </details>
    `,
  });

  if (!editor) return null;

  return (
    <div>
      <button
        onClick={() => editor.chain().focus().setDetails().run()}
        disabled={!editor.can().setDetails()}
      >
        setDetails
      </button>
      <button
        onClick={() => editor.chain().focus().unsetDetails().run()}
        disabled={!editor.can().unsetDetails()}
      >
        unsetDetails
      </button>
      <EditorContent editor={editor} />
      {editor.getHTML()}
    </div>
  );
};

export default Tiptap;
