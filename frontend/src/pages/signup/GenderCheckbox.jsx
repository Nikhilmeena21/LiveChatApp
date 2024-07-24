const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex items-center gap-4">
      <label
        htmlFor="male"
        className={`flex items-center cursor-pointer ${
          selectedGender === "male" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
          className="hidden-checkbox"
        />
        <span className="rounded-full w-4 h-4 mr-2 border border-gray-300"></span>
        <span className="text-base">Male</span>
      </label>
      <label
        htmlFor="female"
        className={`flex items-center cursor-pointer ${
          selectedGender === "female" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
          className="hidden-checkbox"
        />
        <span className="rounded-full w-4 h-4 mr-2 border border-gray-300"></span>
        <span className="text-base">Female</span>
      </label>
    </div>
  );
};

export default GenderCheckbox;

