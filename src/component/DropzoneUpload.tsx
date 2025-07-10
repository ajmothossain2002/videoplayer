import { Box, Typography, Button } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import UploadIcon from '@mui/icons-material/Upload';

interface Props {
  onUpload: (files: File[]) => void;
}

export default function DropzoneUpload({ onUpload }: Props) {

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const videos = acceptedFiles.filter(file => file.type.startsWith("video/"));
      if (videos.length === 0) return alert("Only video files allowed");
      onUpload(videos);
    },
    accept: {
      'video/*': []
    },
    multiple: true
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        backgroundColor: '#121212',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <input {...getInputProps()} />

      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: '#1f1f1f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <UploadIcon sx={{ fontSize: 40, color: '#888' }} />
      </Box>

      <Typography variant="h6" gutterBottom>
        Drag and drop video files to upload
      </Typography>
      <Typography variant="body2" sx={{ color: '#999', mb: 3 }}>
        Your videos will be private until you publish them.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#fff',
          color: '#000',
          fontWeight: 600,
          padding: '8px 20px',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#ddd',
          },
        }}
      >
        Select files
      </Button>

      <Typography
        variant="caption"
        sx={{ position: 'absolute', bottom: 20, textAlign: 'center', color: '#777', px: 4 }}
      >
        By submitting your videos, you acknowledge that you agree to our Terms of Service and Community Guidelines. Please do not violate others' copyright or privacy rights.
      </Typography>
    </Box>
  );
}
