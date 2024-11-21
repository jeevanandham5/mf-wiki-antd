import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import React from "react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  Link as LinkIcon,
  Image as ImageIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Code,
  Quote,
  Undo,
  Redo,
  Check,
  Plus,
  Type,
} from "lucide-react";
import styles from "./styles/Editor.module.css";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Enter the URL of the image:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const url = window.prompt("Enter the URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className={styles.menuBar}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${styles.menuButton} ${
          editor.isActive("bold") ? styles.menuButtonActive : ""
        }`}
      >
        <Bold className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${styles.menuButton} ${
          editor.isActive("italic") ? styles.menuButtonActive : ""
        }`}
      >
        <Italic className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${styles.menuButton} ${
          editor.isActive("heading", { level: 1 })
            ? styles.menuButtonActive
            : ""
        }`}
      >
        <Heading1 className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${styles.menuButton} ${
          editor.isActive("heading", { level: 2 })
            ? styles.menuButtonActive
            : ""
        }`}
      >
        <Heading2 className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${styles.menuButton} ${
          editor.isActive("bulletList") ? styles.menuButtonActive : ""
        }`}
      >
        <List className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${styles.menuButton} ${
          editor.isActive("orderedList") ? styles.menuButtonActive : ""
        }`}
      >
        <ListOrdered className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={`${styles.menuButton} ${
          editor.isActive("taskList") ? styles.menuButtonActive : ""
        }`}
      >
        <Check className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${styles.menuButton} ${
          editor.isActive("codeBlock") ? styles.menuButtonActive : ""
        }`}
      >
        <Code className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${styles.menuButton} ${
          editor.isActive("blockquote") ? styles.menuButtonActive : ""
        }`}
      >
        <Quote className="w-5 h-5" />
      </button>
      <button
        onClick={setLink}
        className={`${styles.menuButton} ${
          editor.isActive("link") ? styles.menuButtonActive : ""
        }`}
      >
        <LinkIcon className="w-5 h-5" />
      </button>
      <button onClick={addImage} className={styles.menuButton}>
        <ImageIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className={styles.menuButton}
      >
        <Undo className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className={styles.menuButton}
      >
        <Redo className="w-5 h-5" />
      </button>
    </div>
  );
};

const SlashMenu = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className={styles.slashMenu}>
      <div className={styles.slashMenuContent}>
        <Plus className="w-4 h-4" />
        <Type className="w-4 h-4" />
        <span>Type '/' for commands</span>
      </div>
    </div>
  );
};

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Placeholder.configure({
        placeholder: 'Start typing or use "/" for commands...',
      }),
    ],
    content: `
      <h1>Welcome to the Editor</h1>
      <p>This is a fully-featured text editor with support for:</p>
      <ul data-type="taskList">
        <li data-type="taskItem" data-checked="true">Rich text formatting</li>
        <li data-type="taskItem" data-checked="true">Images and links</li>
        <li data-type="taskItem" data-checked="true">Task lists</li>
        <li data-type="taskItem" data-checked="false">And much more!</li>
      </ul>
      <p>Try it out by typing anywhere or using the toolbar above.</p>
    `,
    editorProps: {
      attributes: {
        class: styles.prose,
      },
    },
  });

  return (
    <div className={styles.container}>
      <MenuBar editor={editor} />
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className={styles.bubbleMenu}>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`${styles.bubbleButton} ${
                editor.isActive("bold") ? styles.menuButtonActive : ""
              }`}
            >
              <Bold className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`${styles.bubbleButton} ${
                editor.isActive("italic") ? styles.menuButtonActive : ""
              }`}
            >
              <Italic className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleLink().run()}
              className={`${styles.bubbleButton} ${
                editor.isActive("link") ? styles.menuButtonActive : ""
              }`}
            >
              <LinkIcon className="w-4 h-4" />
            </button>
          </div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} className={styles.editorContent} />
      <SlashMenu editor={editor} />
    </div>
  );
}
