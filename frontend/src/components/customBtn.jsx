// CustomButton.jsx (The Child Component)
function CustomButton({ label, ...restProps }) {
  // 'label' is separated, and all other props are grouped into 'restProps'
  return (
    <button className="my-custom-btn" {...restProps}>
      {label}
    </button>
  );
}

export default CustomButton;