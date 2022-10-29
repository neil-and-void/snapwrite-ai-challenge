import { useState } from 'react';
import styles from './TextBox.module.css';

const textBoxPlaceholder =
  'This is a text area. Populate it with 3 paragraphs ~25 words\neach. Ex: \nParagraph one (20 words)\n(line break)\nParagraph one (25 words)\n(line break)\nParagraph one (20 words)';

interface TextBoxProps {
  storageKey: string;
}

const TextBox = ({ storageKey }: TextBoxProps) => {
  const storedText = localStorage.getItem(storageKey);
  const [text, setText] = useState<string>(
    storedText ? storedText : textBoxPlaceholder
  );

  const updateText = (t: string) => {
    localStorage.setItem(storageKey, t);
    setText(t);
  };

  return (
    <div className={styles.textBox}>
      <div className={styles.textBoxHeader}>Text Box</div>
      <textarea
        className={styles.textArea}
        onChange={(event) => updateText(event.target.value)}
        rows={9}
        cols={55}
        value={text}
      />
    </div>
  );
};

export default TextBox;
