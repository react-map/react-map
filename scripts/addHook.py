from pathlib import Path

HOOK_SOURCE = '''import { useEffect, useRef, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const ORIGIN: MousePosition = { x: 0, y: 0 };

/**
 * Tracks the pointer so hints can follow it.
 *
 * The listener is only attached while `enabled` is true, and moves are coalesced into a single
 * animation frame. A map that does not render hints therefore never re-renders on pointer movement,
 * and one that does re-renders at most once per frame instead of once per `mousemove` event.
 */
const useMousePosition = (enabled: boolean = true): MousePosition => {
  const [position, setPosition] = useState<MousePosition>(ORIGIN);
  const latest = useRef<MousePosition>(ORIGIN);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const flush = () => {
      frame.current = null;
      setPosition((previous) =>
        previous.x === latest.current.x && previous.y === latest.current.y ? previous : latest.current
      );
    };

    const updateMousePosition = (event: MouseEvent) => {
      latest.current = { x: event.clientX, y: event.clientY };
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(flush);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
        frame.current = null;
      }
    };
  }, [enabled]);

  return position;
};

export default useMousePosition;
'''


def addhook(packages_folder, country_name):
    dir_path = packages_folder / country_name / 'src'
    hook_folder_path = dir_path / 'hooks'
    hook_folder_path.mkdir(parents=True, exist_ok=True)
    hook_file_path = hook_folder_path / 'mouseTrack.ts'
    hook_file_path.write_text(HOOK_SOURCE)


packages_folder = Path(__file__).resolve().parents[1] / 'packages'
for country_dir in sorted(packages_folder.iterdir()):
    if country_dir.is_dir():
        addhook(packages_folder, country_dir.name)
