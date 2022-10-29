import { useRef, useState } from 'react';

import uploadIndicator from './uploadIndicator.png';
import styles from './ImageUpload.module.css';

const IMAGE_KEY = 'IMAGE_KEY';

const ImageUpload = () => {
  const imageFromStorage = localStorage.getItem(IMAGE_KEY);
  const [imageString, setImageString] = useState<string>(
    imageFromStorage ? imageFromStorage : ''
  );
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    hiddenFileInput.current!.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files![0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(fileUploaded);

    fileReader.onload = (event: ProgressEvent<FileReader>) => {
      const imgStringResult = event!.target!.result?.toString();
      const imgString = imgStringResult ? imgStringResult : '';
      setImageString(imgString);
      localStorage.setItem(IMAGE_KEY, imgString);
    };
  };

  return (
    <div className={styles.imageUpload} onClick={handleClick}>
      {imageString!.length ? (
        <img src={imageString} className={styles.image} alt="upload icon" />
      ) : (
        <div className={styles.uploadWrapper}>
          <img src={uploadIndicator} alt="upload icon" />
          <label htmlFor="file" className={styles.imageUploadLabel}>
            PNG, JPEG files only
          </label>
        </div>
      )}
      <input
        type="file"
        id="file"
        style={{ display: 'none' }} // hide this in ui, just need ref for file input API
        ref={hiddenFileInput}
        onChange={handleChange}
        accept="image/png, image/jpeg"
      />
    </div>
  );
};

export default ImageUpload;
