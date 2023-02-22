const PawsRatingInput = ({ rating, disabled, onChange }) => {

  return (
    <input
      type="number"
      disabled={disabled}
      value={rating}
      onChange={onChange}
    />
  );
};

export default PawsRatingInput;