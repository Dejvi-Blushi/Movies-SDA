const NavigateButton = ({ onNavigate, label }) => {
  return (
    <button
      className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-3 rounded-full mr-2'
      onClick={onNavigate}
    >
      {label}
    </button>
  );
};

export default NavigateButton;
