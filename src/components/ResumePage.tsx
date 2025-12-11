import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";

export function ResumePage() {
  // Add your resume PDF URL here:
  // LOCAL FILE: Upload to /public/documents/ and use: "/documents/resume.pdf"
  // GOOGLE DRIVE: Use "https://drive.google.com/file/d/FILE_ID/preview"
  const resumePdfUrl =
    "https://drive.google.com/file/d/1804RGjcxgwpbvIIy1hKFYAgKrV-0Vcy4/preview";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3E5F5] via-[#E8D5F0] to-[#DCC5E8] py-20 px-6">
      <div className="max-w-5xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-[#7C4DFF] mb-4">Resume</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            View my professional experience, education, and
            skills.
          </p>

          {resumePdfUrl && (
            <motion.a
              href={resumePdfUrl.replace("/preview", "/view")}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4BBDD] to-[#7C4DFF] text-white rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download PDF
            </motion.a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {resumePdfUrl ? (
            <div
              className="w-full"
              style={{ height: "calc(100vh - 200px)" }}
            >
              <iframe
                src={resumePdfUrl}
                className="w-full h-full border-0"
                title="Resume PDF"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-16 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#D4BBDD] to-[#B794C4] rounded-3xl mb-6 flex items-center justify-center">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h3 className="mb-4 text-gray-800">Resume PDF</h3>
              <p className="text-gray-600 max-w-md mb-6">
                To display your resume, add your PDF URL to the{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  resumePdfUrl
                </code>{" "}
                variable in{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  /components/ResumePage.tsx
                </code>
              </p>
              <div className="bg-[#F3E5F5] rounded-xl p-4 text-sm text-left max-w-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Local file:</strong>
                </p>
                <code className="text-xs text-gray-600">
                  "/documents/resume.pdf"
                </code>
                <p className="text-gray-700 mt-4 mb-2">
                  <strong>Google Drive:</strong>
                </p>
                <code className="text-xs text-gray-600">
                  "https://drive.google.com/file/d/FILE_ID/preview"
                </code>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}