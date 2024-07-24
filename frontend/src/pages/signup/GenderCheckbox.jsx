const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex space-x-4'>
      <div className='form-control'>
        <label className={`label cursor-pointer ${selectedGender === "male" ? "bg-blue-100 rounded-lg" : ""}`}>
          <span className='label-text mr-2'>Male</span>
          <input
            type='checkbox'
            className='checkbox checkbox-primary'
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label cursor-pointer ${selectedGender === "female" ? "bg-pink-100 rounded-lg" : ""}`}>
          <span className='label-text mr-2'>Female</span>
          <input
            type='checkbox'
            className='checkbox checkbox-secondary'
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

