export const LabelHTML = ({ htmlFor, children }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className='yoi'>{children || "Change Text"}</label>
    </div>
  );
};
