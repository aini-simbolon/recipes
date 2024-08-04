import React from "react";

const FileUpload = ({ onChange }) => {
  const [previewUrl, setPreviewUrl] = React.useState('');

  React.useEffect(() => {
    if (previewUrl) {

    }
  }, [previewUrl]);

  const handleFileChange = (event) => {
    console.log('Event:', event);
    console.log('Files:', event.target.files);

    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (selectedFile && (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
        onChange(selectedFile); 
      } else {
        console.error('Invalid file type');
      }
    } else {
      console.error('No files selected');
    }
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        name="image"
        accept="image/jpeg, image/png"
        onChange={handleFileChange}
      />
      {previewUrl && (
        <div className="preview mt-2">
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
