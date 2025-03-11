import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Download, ArrowLeft, Award, Calendar, FileText } from "lucide-react";
import { removeFile } from "../Store/fileSlice";
import Button from "../Components/Button";

interface Certificate {
  certificationName: string;
  issuer: string;
  file: File;
  date: string;
}

const YourCertificates: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const certificates = useSelector((state: any) => state.files.certificates);

  const handleDeleteCertificate = (index: number) => {
    if (window.confirm("Are you sure you want to delete this certificate?")) {
      dispatch(removeFile(index));
    }
  };

  const handleDownload = (file: File) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center mb-4 md:mb-6">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-[#7F7FE9] hover:underline font-medium"
          >
            <ArrowLeft size={16} />
            <span>Back to Upload</span>
          </button>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-6">
            <h1 className="text-xl md:text-2xl font-bold text-center relative inline-block">
              <span className="relative z-10">Your Certificates</span>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#7F7FE9]/20 -z-0"></div>
            </h1>
          </div>
          
          {certificates.length > 0 ? (
            <div className="space-y-4">
              {certificates.map((cert: Certificate, index: number) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#7F7FE9]"></div>
                  <div className="flex flex-col md:flex-row md:justify-between gap-4">
                    <div className="pl-2">
                      <div className="flex items-center gap-2">
                        <Award size={18} className="text-[#7F7FE9]" />
                        <h3 className="font-semibold text-lg">{cert.certificationName}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-2">
                        <span className="font-medium">Issued by:</span> {cert.issuer}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                        <Calendar size={14} className="text-gray-400" />
                        <span>Added on: {cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                        <FileText size={14} className="text-gray-400" />
                        <span className="truncate max-w-xs">File: {cert.file.name}</span>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col gap-3 justify-end">
                      <a 
                        href={URL.createObjectURL(cert.file)} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#7F7FE9] text-sm font-medium hover:underline flex items-center gap-1"
                      >
                        <FileText size={16} />
                        <span>View</span>
                      </a>
                      <button 
                        onClick={() => handleDownload(cert.file)}
                        className="flex items-center gap-1 text-[#7F7FE9] text-sm font-medium hover:underline"
                      >
                        <Download size={16} />
                        <span>Download</span>
                      </button>
                      <button 
                        onClick={() => handleDeleteCertificate(index)}
                        className="text-red-500 hover:underline text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Award size={48} className="text-[#7F7FE9]/40 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">You haven't uploaded any certificates yet.</p>
              <Button
                label="UPLOAD NEW CERTIFICATE" 
                onClick={() => navigate('/')} 
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
                }}
              />
            </div>
          )}
          
          {certificates.length > 0 && (
            <div className="mt-6 flex justify-center">
              <Button
                label="UPLOAD MORE CERTIFICATES" 
                onClick={() => navigate('/')} 
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
                  maxWidth: "250px",
                  width: "100%",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourCertificates;