from pathlib import Path

def addhook(country_name):
    dir_path = Path(f'/home/jerry/react-maps/packages/{country_name}/src')
    hook_folder_path = dir_path / 'hooks'
    hook_folder_path.mkdir(parents=True, exist_ok=True)
    hook_file_path = hook_folder_path / 'mouseTrack.ts'
    hook_file_path.touch()
    hook_file_path.write_text('''
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (event: any) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return position;
};

export default useMousePosition;
''')


packages_folder = Path('/home/jerry/react-maps/packages')
for country_dir in packages_folder.iterdir():
    if country_dir.is_dir():
        addhook(country_dir.name)