import { Button } from '@mui/material';

export default function ToggleView({
  view,
  setView
}: {
  view: 'list' | 'grid';
  setView: (v: 'list' | 'grid') => void;
}) {
  return (
    <Button variant="outlined" onClick={() => setView(view === 'list' ? 'grid' : 'list')}>
      Switch to {view === 'list' ? 'Grid' : 'List'} View
    </Button>
  );
}
