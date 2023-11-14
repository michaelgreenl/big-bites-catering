export const ArrowSvg = (props) => {
  return (
    <svg className={props.className} style={{ ...props.style }} viewBox='0 0 75 75' xmlns='http://www.w3.org/2000/svg'>
      <path d='M67.5 22.5L37.5 52.5M7.5 22.5L37.5481 52.5' strokeLinecap='round' />
    </svg>
  );
};
