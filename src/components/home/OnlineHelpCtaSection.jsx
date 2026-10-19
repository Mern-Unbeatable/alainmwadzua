import React, { memo, useState } from "react";
import Swal from "sweetalert2";
import { postQuoteRequest } from "../../services/quoteService";
import { withErrorBoundary } from "../ErrorBoundary";

const HELP_TOPICS = [
  "Do my online class",
  "Take my Proctored Exam",
  "Research Paper",
  "Take my Online Test",
  "Academic Essay",
  "Class Project",
  "Other",
];

const HELP_TIMING = [
  "Today",
  "24 hours",
  "2-3 days",
  "This Week",
  "Flexible Academy",
];

const helpTypeMap = {
  "Do my online class": "DO_MY_ONLINE_CLASS",
  "Take my Proctored Exam": "TAKE_MY_PROCTORED_EXAM",
  "Take my Online Test": "TAKE_MY_ONLINE_TEST",
  "Research Paper": "RESEARCH_PAPER",
  "Class Project": "CLASS_PROJECT",
  "Academic Essay": "ACADEMIC_ESSAY",
  Other: "OTHER",
};

const urgencyMap = {
  Today: "TODAY",
  "24 hours": "24_HOURS",
  "2-3 days": "2_3_DAYS",
  "This Week": "THIS_WEEK",
  "Flexible Academy": "FLEXIBLE_DEADLINE",
};

const initialFormData = {
  subject: "",
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const OnlineHelpCtaSection = memo(() => {
  const [selectedHelpTopic, setSelectedHelpTopic] = useState(HELP_TOPICS[0]);
  const [selectedTiming, setSelectedTiming] = useState(HELP_TIMING[0]);
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const payload = {
      helpType: helpTypeMap[selectedHelpTopic] || "OTHER",
      urgency: urgencyMap[selectedTiming] || "FLEXIBLE_DEADLINE",
      subject: formData.subject.trim(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      ...(formData.phoneNumber.trim() && { phoneNumber: formData.phoneNumber.trim() }),
      message: formData.message.trim(),
    };

    setIsSubmitting(true);
    try {
      const response = await postQuoteRequest(payload);
      await Swal.fire({
        icon: "success",
        title: "Submitted",
        text: response?.message,
        confirmButtonColor: "#FF6B00",
      });

      setFormData(initialFormData);
      setSelectedHelpTopic(HELP_TOPICS[0]);
      setSelectedTiming(HELP_TIMING[0]);
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.message || "Something went wrong. Please try again.",
        confirmButtonColor: "#FF6B00",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="online-help-cta" className="relative isolate overflow-hidden bg-[#0F1C3F] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[700px] -translate-x-1/3 -translate-y-1/3 bg-[radial-gradient(circle_closest-side,rgba(255,102,0,0.55),transparent)]" />

      <div className="container relative z-10 mx-auto px-4 ">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="max-w-xl text-white">
            <h2 className="text-4xl font-bold leading-[1.35] tracking-tight sm:text-5xl lg:text-[44px]">
              Are You Looking to{" "}
              <span className="text-primary">Hire Someone</span> To Take Your Online Class?
            </h2>

            <ul className="mt-8 space-y-2 pl-5 text-sm sm:text-[15px] font-medium text-white/90 list-disc marker:text-white">
              <li className="uppercase tracking-wide">WE CAN TAKE YOUR ONLINE CLASS!</li>
              <li>We Take Your Online Tests!</li>
              <li>We Take Your Online Exams!</li>
              <li>We Take Your Online Quizzes!</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-2xl sm:p-8 lg:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <p className="mb-3 text-base font-medium text-slate-800">
                  What do you need help with
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {HELP_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedHelpTopic(topic)}
                      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors sm:px-5 sm:text-[13px] ${
                        selectedHelpTopic === topic
                          ? "border-primary bg-primary text-white"
                          : "border-slate-200 bg-white text-slate-500 hover:border-primary hover:text-primary"
                      }`}
                      disabled={isSubmitting}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-base font-medium text-slate-800">
                  How soon do you need help?
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {HELP_TIMING.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedTiming(item)}
                      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors sm:px-5 sm:text-[13px] ${
                        selectedTiming === item
                          ? "border-primary bg-primary text-white"
                          : "border-slate-200 bg-white text-slate-500 hover:border-primary hover:text-primary"
                      }`}
                      disabled={isSubmitting}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-base text-[#0F1C3F]">
                  What subject or course is this for?
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="subject/course name/course code"
                  value={formData.subject}
                  onChange={handleFieldChange}
                  className="h-11 w-full rounded-md border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-base uppercase  text-[#0F1C3F]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="your name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    className="h-11 w-full rounded-md border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-base uppercase  text-[#0F1C3F]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleFieldChange}
                    className="h-11 w-full rounded-md border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-base uppercase  text-[#0F1C3F]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="your phone number"
                  value={formData.phoneNumber}
                  onChange={handleFieldChange}
                  className="h-11 w-full rounded-md border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="mb-2 block text-base uppercase  text-[#0F1C3F]">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message/Project details"
                  value={formData.message}
                  onChange={handleFieldChange}
                  className="w-full resize-none rounded-md border border-slate-200 bg-[#F9FAFB] px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="inline-flex py-4 w-full items-center justify-center rounded-md bg-primary text-sm text-white transition-opacity hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

OnlineHelpCtaSection.displayName = "OnlineHelpCtaSection";

export default withErrorBoundary(OnlineHelpCtaSection);