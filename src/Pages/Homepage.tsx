import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Upload } from "lucide-react";
import { addFile } from "../Store/fileSlice";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import Button from "../Components/Button";

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    certificationName: "",
    issuer: "",
    file: null as File | null,
  });
  const [errors, setErrors] = useState({
    certificationName: "",
    issuer: "",
    file: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const certificates = useSelector((state: any) => state.files.certificates);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      event.preventDefault();

      if (event.target.files && event.target.files.length > 0) {
        if (certificates.length < 5) {
          setFormData(prev => ({ ...prev, file: event.target.files![0] }));
          setErrors(prev => ({ ...prev, file: "" }));
        } else {
          alert("Storage full! You can only store 5 files.");
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          setErrors(prev => ({ ...prev, file: "Maximum 5 files allowed" }));
        }
      }
    } catch (error) {
      console.error("File selection error:", error);
    }
  };

  const clearForm = () => {
    setFormData({
      certificationName: "",
      issuer: "",
      file: null,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = () => {
    const newErrors = { certificationName: "", issuer: "", file: "" };

    if (!formData.certificationName) newErrors.certificationName = "This field is required";
    if (!formData.issuer) newErrors.issuer = "This field is required";
    if (!formData.file) newErrors.file = "File upload is required";

    setErrors(newErrors);

    if (!newErrors.certificationName && !newErrors.issuer && !newErrors.file) {
      if (certificates.length >= 5) {
        alert("Storage full! You can only store 5 files.");
        return;
      }

      if (formData.file) {
        const certificate = {
          certificationName: formData.certificationName,
          issuer: formData.issuer,
          file: formData.file,
          date: new Date().toLocaleDateString()
        };

        dispatch(addFile(certificate));
        alert("Certification saved!");
        clearForm();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-lg md:text-xl font-bold text-center">Skills-Based Certifications</h2>
        <p className="text-center text-gray-500 text-xs md:text-sm">(You can add up to 5 certifications)</p>

        <div className="mt-4 md:mt-6 flex flex-col md:grid md:grid-cols-2 gap-4">
          <div>

            <h1 className="font-semibold text-[18px] p-1">Certification name</h1>
            <Input
              type="text"
              placeholder="Enter certification name"
              value={formData.certificationName}
              onChange={(e) => setFormData((prev) => ({ ...prev, certificationName: e.target.value }))}
              size="medium"
              fullWidth
            />
            {errors.certificationName && <p className="text-red-500 text-xs mt-1">{errors.certificationName}</p>}
          </div>
          <div>
          <h1 className="font-semibold text-[18px] p-1">Issuer</h1>
            <Input
              type="text"
              placeholder="Enter issuer"
              value={formData.issuer}
              onChange={(e) => setFormData((prev) => ({ ...prev, issuer: e.target.value }))}
              size="medium"
              fullWidth
            />
            {errors.issuer && <p className="text-red-500 text-xs mt-1">{errors.issuer}</p>}
          </div>
        </div>

        <div className="mt-4 border border-gray-300 rounded-md p-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:justify-between">
          <span className="text-gray-500 text-xs md:text-sm truncate max-w-full sm:max-w-xs">
            {formData.file ? formData.file.name : "Upload a file showing your certification"}
          </span>
          <label className={`${certificates.length >= 5 ? 'bg-gray-400' : 'bg-[#7F7FE9]'} text-white px-3 md:px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer text-xs md:text-sm whitespace-nowrap`}>
            <Upload size={16} />
            <span>UPLOAD</span>
            <input 
              ref={fileInputRef}
              type="file" 
              className="hidden" 
              onChange={handleFileSelect} 
              accept=".pdf,.jpg,.jpeg"
              onClick={(e) => {
                e.stopPropagation();
                if (certificates.length >= 5) {
                  e.preventDefault();
                  alert("Storage full! You can only store 5 files.");
                }
              }} 
              disabled={certificates.length >= 5}
            />
          </label>
        </div>
        {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between">
          <Button
            label="SAVE CERTIFICATION" 
            onClick={handleSubmit} 
            type="primary" 
            style={{
              backgroundColor: "#7F7FE9",
              color: "white",
              fontWeight: "600",
              borderRadius: "8px",
              border: "1px solid black",
              boxShadow: "4px 4px 8px rgba(109, 109, 216, 0.5)",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              width: "90%",
              fontSize: "0.875rem",
            }}
          />
          <Button
            label="YOUR CERTIFICATES" 
            onClick={() => navigate("/your-certificates")}
            type="secondary"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              fontWeight: "600",
              borderRadius: "8px",
              border: "1px solid black",
              boxShadow: "4px 4px 8px rgba(72, 182, 72, 0.5)",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              width: "90%",
              fontSize: "0.875rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;