import {
  Table, TableHead, TableBody, TableRow, TableCell,
  Avatar, Typography, Button, Box
} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteVideo } from '../redux/vedioSlice';
import { type VideoFile } from '../type';

export default function VideoTable({ videos }: { videos: VideoFile[] }) {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      dispatch(deleteVideo(id));
    }
  };

  return (
    <Table sx={{ backgroundColor: '#181818', color: 'white' }}>
      <TableHead>
        <TableRow sx={{ '& th': { color: '#ccc' } }}>
          <TableCell>Video</TableCell>
          
          <TableCell>Date</TableCell>
          <TableCell>Views</TableCell>
          <TableCell>Comments</TableCell>
          <TableCell>Likes</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {videos.map((video) => (
          <TableRow key={video.id} hover sx={{ '& td': { color: '#eee' } }}>
            <TableCell>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  variant="rounded"
                  src={video.url}
                  sx={{ width: 80, height: 50 }}
                />
                <Box>
                  <Typography>{video.name}</Typography>
                  <Typography variant="caption" color="gray">
                    {video.description || 'Add description'}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <PublicIcon fontSize="small" sx={{ mr: 1 }} />
              {video.visibility}
            </TableCell>
            <TableCell>
              <FileCopyIcon fontSize="small" sx={{ mr: 1 }} />
              {video.restriction}
            </TableCell>
            <TableCell>{video.date}</TableCell>
            <TableCell>{video.views}</TableCell>
            <TableCell>{video.comments}</TableCell>
            <TableCell>{video.likes}</TableCell>
            <TableCell>
              {/* <Button
                size="small"
                variant="outlined"
                sx={{ color: 'white', borderColor: '#444', mr: 1 }}
              >
                Edit draft
              </Button> */}
              <Button
                size="small"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(video.id)}
                sx={{ borderColor: '#f44336', color: '#f44336' }}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}