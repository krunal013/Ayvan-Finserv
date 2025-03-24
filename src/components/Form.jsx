import React, { useState } from "react";
import { FiUser, FiHeart, FiUsers } from "react-icons/fi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Form = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState("Male");
  const [selectedMembers, setSelectedMembers] = useState({});
  const [memberDetails, setMemberDetails] = useState({});
  const [contactInfo, setContactInfo] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleGenderChange = (newGender) => {
    setGender(newGender);
    setSelectedMembers({});
    setMemberDetails({});
  };

  const toggleMember = (member) => {
    setSelectedMembers((prev) => {
      const updatedMembers = { ...prev, [member]: !prev[member] };

      if (!updatedMembers[member]) {
        const { [member]: _, ...rest } = memberDetails;
        setMemberDetails(rest);
      }
      return updatedMembers;
    });
  };

  const handleInputChange = (member, field, value) => {
    setMemberDetails((prev) => ({
      ...prev,
      [member]: { ...prev[member], [field]: value },
    }));
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    console.log("Submitted Data:", {
      gender,
      selectedMembers,
      memberDetails,
      contactInfo,
    });

    const formData = new FormData();
    formData.append("access_key", "d6c29cd8-1382-4578-ac43-2557de65089f");
    formData.append("gender", gender);
    formData.append("selectedMembers", JSON.stringify(selectedMembers));
    formData.append("memberDetails", JSON.stringify(memberDetails));
    formData.append("contactInfo", JSON.stringify(contactInfo));

    // Format data as a structured text (simulated table)
    const formatMemberDetails = Object.entries(memberDetails)
      .map(([key, value]) => `${key}: ${value.name} (Age: ${value.age})`)
      .join("\n");

    const message = `
    --------------------------------------------
     FIELD                | VALUE                          
    ============================================
     Gender               : ${gender}     
    --------------------------------------------                 
     Selected Members     : ${Object.keys(selectedMembers).join(", ")} 
    -------------------------------------------- 
     Member Details       : ${formatMemberDetails}       
    --------------------------------------------   
     Contact Name         : ${contactInfo.name} 
    --------------------------------------------           
     Mobile               : ${contactInfo.mobile}
    --------------------------------------------          
     Email                : ${contactInfo.email}          
    =============================================
    `;

    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully!");
        setStep(1);
        setGender("Male");
        setSelectedMembers({});
        setMemberDetails({});
        setContactInfo({ name: "", mobile: "", email: "" });
      } else {
        console.error("Error:", data);
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="mt-5 text-black flex justify-center items-center  overflow-y-auto ">
      <div className="bg-white mt-8 lg:mt-0  md:mt-0 rounded-xl  lg:border lg:border-[#ff6b00] lg:border-dashed p-1 lg:p-6 md:p-8 w-full max-w-2xl space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 text-center md:text-left">
            Your health matters, get it insured{" "}
            <span className="text-green-600">now!!</span>
          </h2>
          <div className="mt-4 md:mt-0" style={{ width: 50, height: 50 }}>
            <CircularProgressbar
              value={progress}
              text={`${Math.round(progress)}%`}
              styles={buildStyles({
                textSize: "30px",
                pathColor: "#4CAF50",
                textColor: "#333",
              })}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <h3 className="text-gray-600 font-medium text-center md:text-left">
                Select Gender
              </h3>
              <div className="flex justify-center md:justify-start gap-4 mb-6">
                {["Male", "Female"].map((g) => (
                  <div
                    key={g}
                    className={`border rounded-lg p-3 px-5 w-24 text-center cursor-pointer 
                ${
                  gender === g
                    ? g === "Female"
                      ? "bg-pink-500 text-white"
                      : "bg-blue-500 text-white"
                    : ""
                }`}
                    onClick={() => handleGenderChange(g)}
                  >
                    {g}
                  </div>
                ))}
              </div>

              <h3 className="text-gray-600 font-medium mb-3 text-center md:text-left">
                Select members you want to insure
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {[
                  { key: "self", label: "Self", icon: <FiUser size={20} /> },
                  {
                    key: gender === "Male" ? "wife" : "husband",
                    label: gender === "Male" ? "Wife" : "Husband",
                    icon: <FiHeart size={20} />,
                  },
                  {
                    key: "father",
                    label: "Father",
                    icon: <FiUsers size={20} />,
                  },
                  {
                    key: "mother",
                    label: "Mother",
                    icon: <FiHeart size={20} />,
                  },
                  { key: "son", label: "Son", icon: <FiHeart size={20} /> },
                  {
                    key: "daughter",
                    label: "Daughter",
                    icon: <FiHeart size={20} />,
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className={`border rounded-lg p-3 flex flex-col items-center cursor-pointer transition-all 
              ${
                selectedMembers[item.key]
                  ? gender === "Female"
                    ? "border-pink-500 bg-pink-50 shadow-lg"
                    : "border-blue-500 bg-blue-50 shadow-lg"
                  : ""
              }`}
                    onClick={() => toggleMember(item.key)}
                  >
                    <div className="mb-2">{item.icon}</div>
                    <span className="text-gray-700 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-blue-500 text-white py-3 rounded-lg"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold text-gray-700 text-center md:text-left">
                Enter details for each insured member
              </h2>
              {Object.keys(selectedMembers).map(
                (member) =>
                  selectedMembers[member] && (
                    <div key={member} className="mb-4">
                      <input
                        type="text"
                        placeholder={`${member} Name`}
                        value={memberDetails[member]?.name || ""}
                        onChange={(e) =>
                          handleInputChange(member, "name", e.target.value)
                        }
                        className="border p-3 rounded w-full bg-white my-2"
                      />
                      <select
                        value={memberDetails[member]?.age || ""}
                        onChange={(e) =>
                          handleInputChange(member, "age", e.target.value)
                        }
                        className="border p-3 rounded w-full bg-white my-2"
                      >
                        <option value="">Select Age</option>
                        {[...Array(100).keys()].map((age) => (
                          <option key={age} value={age + 1}>
                            {age + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  )
              )}

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  onClick={handleBack}
                  className="w-full bg-gray-300 py-3 rounded-lg"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold text-gray-700 text-center md:text-left">
                Enter your contact details
              </h2>
              <input
                type="text"
                placeholder="Full Name"
                value={contactInfo.name}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, name: e.target.value })
                }
                className="border p-3 rounded w-full bg-white my-2"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={contactInfo.mobile}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, mobile: e.target.value })
                }
                className="border p-3 rounded w-full bg-white my-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={contactInfo.email}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, email: e.target.value })
                }
                className="border p-3 rounded w-full bg-white my-2"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
