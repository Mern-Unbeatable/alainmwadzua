import React, { useState, memo } from "react";
import { ChevronLeft } from "lucide-react";
import Swal from "sweetalert2";
import { postQuoteRequest } from "../../services/quoteService";

const QUOTE_TOPICS = [
  "Do my online class",
  "Research Paper",
  "Take my proctored exam",
  "Class Project",
  "Take my online test",
  "Academic Essay",
  "Other",
];

const DEADLINES = [
  "Today",
  "24 Hours",
  "2-3 Days",
  "This Week",
  "Flexible Deadline",
];

const helpTypeMap = {
  "Do my online class": "DO_MY_ONLINE_CLASS",
  "Research Paper": "RESEARCH_PAPER",
  "Take my proctored exam": "TAKE_MY_PROCTORED_EXAM",
  "Class Project": "CLASS_PROJECT",
  "Take my online test": "TAKE_MY_ONLINE_TEST",
  "Academic Essay": "ACADEMIC_ESSAY",
  Other: "OTHER",
};

const urgencyMap = {
  Today: "TODAY",
  "24 Hours": "24_HOURS",
  "2-3 Days": "2_3_DAYS",
  "This Week": "THIS_WEEK",
  "Flexible Deadline": "FLEXIBLE_DEADLINE",
};

const CustomQuoteSection = memo(() => {
  const [step, setStep] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState(QUOTE_TOPICS[0]);
  const [selectedDeadline, setSelectedDeadline] = useState(DEADLINES[0]);
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = async () => {
    if (step < 4) {
      setStep(step + 1);
      return;
    }

    if (isSubmitting) return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      await Swal.fire({
        icon: "warning",
        title: "Required Fields",
        text: "Please fill in your name, email, and message before submitting.",
        confirmButtonColor: "#FF6B00",
      });
      return;
    }

    const payload = {
      helpType: helpTypeMap[selectedTopic] || "OTHER",
      urgency: urgencyMap[selectedDeadline] || "FLEXIBLE_DEADLINE",
      subject: subject.trim(),
      name: trimmedName,
      email: trimmedEmail,
      ...(phoneNumber.trim() && { phoneNumber: phoneNumber.trim() }),
      message: trimmedMessage,
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

      setStep(1);
      setSelectedTopic(QUOTE_TOPICS[0]);
      setSelectedDeadline(DEADLINES[0]);
      setSubject("");
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
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

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-lg bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-slate-100 px-5 py-6 sm:px-8 sm:py-7 min-h-[300px] flex flex-col justify-between">
          
          {step > 1 && (
            <button
              onClick={handleBack}
              className="absolute left-5 top-6 sm:left-8 sm:top-7 flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4"  />
              Back
            </button>
          )}

          <div className={step > 1 ? "pt-8 sm:pt-0" : ""}>
            <div className="text-center mt-2 sm:mt-0">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                Get Your Free Custom Quote
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Fill out the details below and we&apos;ll get back to you instantly.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center">
              
              {step === 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {QUOTE_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        selectedTopic === topic
                          ? "border-primary bg-primary text-white font-medium"
                          : "border-primary/60 text-slate-700 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mt-2 pt-4">
                  {DEADLINES.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedDeadline(time)}
                      className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                        selectedDeadline === time
                          ? "border-primary bg-primary text-white font-medium"
                          : "border-primary/60 text-slate-700 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="w-full max-w-2xl">
                  <input
                    type="text"
                    placeholder="Subject/course name/course code"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-full border border-primary/60 px-5 py-3 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              )}

              {step === 4 && (
                <div className="w-full max-w-2xl space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-md border border-primary/60 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      required
                      disabled={isSubmitting}
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-primary/60 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone number (optional)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full rounded-md border border-primary/60 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    disabled={isSubmitting}
                  />
                  <textarea
                    placeholder="Message/Project details"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-md border border-primary/60 px-4 py-3 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
              )}

            </div>
          </div>

          <div className="mt-10 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-600">
              Step {step} of 4
            </p>
            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {step === 4 ? (isSubmitting ? "Submitting..." : "Submit") : "Next"}
              {!isSubmitting && <span aria-hidden="true">→</span>}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
});

CustomQuoteSection.displayName = "CustomQuoteSection";

export default CustomQuoteSection;