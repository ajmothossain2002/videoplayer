import {
  Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { type VideoFile } from '../type/index';
import { useNavigate } from 'react-router-dom';

export default function VideoList({
  videos,
  onRename
}: {
  videos: VideoFile[];
  onRename: (id: string, name: string) => void;
}) {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {videos.map(video => (
          <TableRow key={video.id} hover>
            <TableCell onClick={() => navigate(`/video/${video.id}`)} style={{ cursor: 'pointer' }}>
              {video.name}
            </TableCell>
            <TableCell>
              <IconButton
                onClick={() => {
                  const newName = prompt("Enter new name:", video.name);
                  if (newName) onRename(video.id, newName);
                }}
              >
                <EditIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
