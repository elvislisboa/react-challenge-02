import { Button } from '.';
import '../styles/sidebar.scss';

interface sideBarProps {
  navigationData: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[];
  onClick: (id: number) => void;
  selected: number
}

export function SideBar({ navigationData, onClick, selected }: sideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {navigationData.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClick(genre.id)}
            selected={selected === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}