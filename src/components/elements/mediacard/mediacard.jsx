export const MediaCard = ({path, media}) => {
  return (
    <div className="ws">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={media}>
        <path d={path}></path>
      </svg>
    </div>
  );
};
