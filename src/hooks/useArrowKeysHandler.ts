import { useEffect} from 'react';

const useArrowKeysHandler = (onChangeDirection: (direction: string) => void) => {

  useEffect(() => {
    const handleKeyDown = (event:KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
            onChangeDirection('up');
          break;
        case 'ArrowDown':
            onChangeDirection('down');
          break;
        case 'ArrowLeft':
            onChangeDirection('left');
          break;
        case 'ArrowRight':
            onChangeDirection('right');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

};

export default useArrowKeysHandler;