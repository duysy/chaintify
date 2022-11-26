import * as React from "react";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";

type Props = {
  setPath: any;
};
import { create as createFile } from "../../apis/file/post_file";
export default function PopupCreateAlbum(props: Props) {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSetPathFile = (pathName: String) => {
    props.setPath(pathName);
  };

  useEffect(() => {
    const autoUploadFile = async () => {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("file_uploaded", selectedFile);

      const response = await createFile({ formData: formData });
      if (response) {
        alert("Success");
        const path = response.name;
        handleSetPathFile(path);
      } else {
        alert("Fail");
      }
    };
    autoUploadFile();
  }, [selectedFile]);

  return <TextField name="file_uploaded" type="file" onChange={handleFileSelect} />;
}
