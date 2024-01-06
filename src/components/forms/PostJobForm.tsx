import React, { useState } from "react";
import { z } from "zod";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/router";
import ComboBoxWrapper from "../ui/ComboBoxWrapper";
import ListBoxWrapper from "../ui/ListBoxWrapper";
import { jobSectors, workModes } from "~/constants/jobs";
import Industries from "~/constants/industries";
import { useSession } from "next-auth/react";
import FeedbackModal from "../modals/FeedbackModal";
import { useRouter } from "next/router";

type SocialMediaLinks = {
  linkedin: string;
  facebook: string;
  instagram: string;
  twitter: string;
  email: string;
};

const socialMediaLinksConfig: {
  key: keyof SocialMediaLinks;
  label: string;
  placeholder: string;
}[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    placeholder: "https://www.linkedin.com/your-profile",
  },
  {
    key: "facebook",
    label: "Facebook",
    placeholder: "https://www.facebook.com/your-profile",
  },
  {
    key: "instagram",
    label: "Instagram",
    placeholder: "https://www.instagram.com/your-profile",
  },
  {
    key: "twitter",
    label: "twitter",
    placeholder: "https://www.twitter.com/your-profile",
  },
];

const optionalUrl = z.union([
  z.string().url({ message: "Please enter a valid url" }).nullish(),
  z.literal(""),
]);
// const optionalEmail = z.union([z.string().email().nullish(), z.literal("")]);

const schema = z.object({
  companyName: z.string().optional(),
  jobTitle: z
    .string()
    .min(3, { message: "Please enter a valid title" })
    .max(60, {
      message: "Title must be less than 60 characters",
    }),
  jobDescription: z
    .string()
    .min(3, { message: "Please enter a valid description" })
    .max(3000, {
      message: "Maximum length must be within 3000 characters",
    }),
  jobLink: z.string().url({ message: "Please enter a valid url" }),
  jobSector: z.string({ required_error: "Please select a sector" }).min(1),
  industry: z.string({ required_error: "Please select an industry" }).min(1),
  location: z.string().optional(),
  workMode: z.enum(["in office", "hybrid", "remote"]).default("in office"),
  assistType: z
    .enum([
      "Hiring for my company",
      "Open to providing a referral",
      "Providing information only",
    ])
    .default("Providing information only"),
  minSalary: z.string().optional(),
  maxSalary: z.string().optional(),
  minExperience: z.string().optional(),
  maxExperience: z.string().optional(),
  linkedin: optionalUrl,
  facebook: optionalUrl,
  instagram: optionalUrl,
  twitter: optionalUrl,
  email: z.string().email({ message: "Please enter a valid email" }),
});

type FormValues = z.infer<typeof schema>;

const PostJobForm: React.FC = () => {
  // const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  //  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    register,
    getValues,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    // defaultValues: defaultFormValues,
  });
  const { data: session } = useSession();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    const response = await fetch("/api/jobs/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.ok) {
          setShowModal(true);
          // setTimeout(() => {
          //   void router.push("/dashboard/job-board");
          // }, 3000);
        }
        if (!res.ok) {
          const errorData = (await res.json()) as { message?: string };
          throw new Error(errorData?.message);
        }
        setSubmitted(true);
        setIsSubmitting(false);
        reset();
      })
      .catch((error) => {
        const errorMessage = (error as { message?: string }) || {
          message: "An error occurred",
        };
        setShowError(
          errorMessage.message ? errorMessage.message : "An error occurred",
        );
        setShowErrorModal(true);
        setIsSubmitting(false);
      });
    setIsSubmitting(false);
  };

  return (
    <>
      <FeedbackModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        primaryButtonText="Proceed to Jobs Page"
        title="Job Post Successful"
        description="Thankyou for posting your job. You can check it on Jobs Page."
        onClick={() => router.push("/dashboard/job-board")}
        type="success"
      />
      <FeedbackModal
        isOpen={showErrorModal}
        setIsOpen={setShowErrorModal}
        // primaryButtonText="Proceed to Login"
        title="Error"
        description={showError}
        // onClick={() => router.push("/login")}
        type="error"
      />
      <div className="card w-full max-w-7xl ">
        {isSubmitSuccessful && submitted && (
          <div className="toast z-50">
            <div className="alert alert-info text-white">
              <span>Your job has been posted successfully</span>
            </div>
          </div>
        )}
        <div className="card-body w-full px-2 py-3">
          <h1 className="card-title">Job Details</h1>
          <form id="job-post-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <label>
                <div className="label">
                  <span className="label-text star-label">Job Title</span>
                </div>
                <input
                  type="text"
                  // name="jobTitle"
                  placeholder="John Doe"
                  maxLength={60}
                  className="input input-bordered w-full"
                  {...register("jobTitle")}
                  required
                />
                {errors?.jobTitle?.message && (
                  <span className="text-red-600 text-sm">
                    {errors?.jobTitle?.message}
                  </span>
                )}
              </label>
              <label>
                <div className="label">
                  <span className="label-text">Company Name</span>
                </div>
                <input
                  type="text"
                  maxLength={60}
                  placeholder="Google | Microsoft"
                  className="input input-bordered w-full"
                  {...register("companyName")}
                />
                {errors?.companyName && (
                  <span className="text-red-600 text-sm">
                    {errors?.companyName?.message}
                  </span>
                )}
              </label>
            </div>
            <label>
              <div className="label">
                <span className="label-text star-label">Job Description</span>
              </div>
              <textarea
                className={`textarea textarea-bordered w-full textarea-lg text-base ${
                  errors?.jobDescription ? "border-red-600" : ""
                }`}
                maxLength={3000}
                placeholder="Write about the overview of the company and expectations for the position."
                required
                {...register("jobDescription", {
                  required: "Job description is required",
                })}
              />
              <div className="label">
                <span className="label-text text-xs -mt-3">
                  (
                  {watch("jobDescription")?.length > 0
                    ? watch("jobDescription")?.length
                    : 0}{" "}
                  /3000 characters)
                </span>
              </div>
              {errors?.jobDescription && (
                <span className="text-red-600 text-sm">
                  {errors?.jobDescription?.message}
                </span>
              )}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <label>
                <div className="label">
                  <span className="label-text">Location of the Job</span>
                </div>
                <input
                  type="text"
                  defaultValue=""
                  placeholder="Bangalore"
                  className={`input input-bordered w-full ${
                    errors?.location ? "border-red-600" : ""
                  }`}
                  autoComplete="off"
                  {...register("location")}
                />
                {errors.location && (
                  <span className="text-red-600 text-sm">
                    {errors.location.message}
                  </span>
                )}
              </label>

              <label>
                <div className="label">
                  <span className="label-text star-label">Work Mode</span>
                </div>
                <div className="join gap-4">
                  {workModes.map((mode) => (
                    <div
                      key={mode}
                      className="join-item label cursor-pointer gap-2"
                      // defaultValue={"in office"}
                    >
                      <input
                        type="radio"
                        value={mode.toLowerCase()}
                        defaultChecked={
                          mode.toLowerCase() === "in office" ? true : false
                        }
                        className="radio checked:bg-brand"
                        {...register("workMode")}
                      />
                      <span className="label-text">{mode}</span>
                    </div>
                  ))}
                </div>
                {errors.workMode && (
                  <span className="text-red-600 text-sm">
                    {errors.workMode.message}
                  </span>
                )}
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <Controller
                name="jobSector"
                control={control}
                rules={{
                  required: "Please select a Job Sector",
                }}
                render={({ field: { onChange, value } }) => (
                  <ListBoxWrapper
                    label="Job Sector"
                    placeholder="Select Job Sector"
                    value={value}
                    onChange={onChange}
                    options={jobSectors.map((sector, index) => ({
                      id: index,
                      label: sector,
                      value: sector,
                    }))}
                    error={errors.jobSector}
                    required={true}
                  />
                )}
              />
              <Controller
                name="industry"
                control={control}
                rules={{
                  required: "Please select job industry",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <ComboBoxWrapper
                    label="Industry"
                    placeholder="Select Industry"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    options={Industries.map((industry, index) => ({
                      id: index,
                      label: industry,
                      value: industry,
                    }))}
                    error={errors.industry}
                    required={true}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <label>
                <div className="label">
                  <span className="label-text">
                    Experience Required (Select 0 for no experience required)
                  </span>
                </div>
                <div className="flex gap-2 max-w-full">
                  <input
                    {...register("minExperience", { required: false })}
                    type="number"
                    placeholder="Min (in Years)"
                    min={0}
                    max={getValues("maxExperience")}
                    className={`input input-bordered w-full ${
                      errors?.minExperience ? "border-red-600" : ""
                    }`}
                  />
                  <input
                    {...register("maxExperience", { required: false })}
                    type="number"
                    placeholder="Max (in Years)"
                    min={getValues("minExperience")}
                    max={50}
                    className={`input input-bordered w-full ${
                      errors?.maxExperience ? "border-red-600" : ""
                    }`}
                  />
                </div>
                {errors.minExperience && (
                  <span className="text-red-600 text-sm">
                    {errors?.minExperience?.message}
                  </span>
                )}
                {errors.maxExperience && (
                  <span className="text-red-600 text-sm">
                    {errors.maxExperience?.message}
                  </span>
                )}
              </label>
              <label>
                <div className="label">
                  <span className="label-text">Salary Range (Per Year)</span>
                </div>
                <div className="flex gap-2 max-w-full">
                  <input
                    {...register("minSalary", { required: false })}
                    type="number"
                    placeholder="Min (in rupees)"
                    min={"0"}
                    max={getValues("maxSalary")}
                    className={`input input-bordered w-full ${
                      errors?.minSalary ? "border-red-600" : ""
                    }`}
                  />
                  <input
                    {...register("maxSalary", { required: false })}
                    type="number"
                    placeholder="Max (in rupees)"
                    min={getValues("minSalary")}
                    // max={"50"}
                    className={`input input-bordered w-full ${
                      errors?.maxSalary ? "border-red-600" : ""
                    }`}
                  />
                </div>
                {errors.minSalary && (
                  <span className="text-red-600 text-sm">
                    {errors?.minSalary?.message}
                  </span>
                )}
                {errors.maxSalary && (
                  <span className="text-red-600 text-sm">
                    {errors.maxSalary?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              {/* Assistance Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 ">
                <label>
                  <div className="label">
                    <span className="label-text star-label">
                      How Can You Assist With This Job Posting?
                    </span>
                  </div>
                  <div className="flex gap-4 flex-col items-start md:flex-row">
                    {[
                      "Hiring for my company",
                      "Open to providing a referral",
                      "Providing information only",
                    ].map((option) => (
                      <label
                        key={option}
                        className="label cursor-pointer gap-2"
                      >
                        <input
                          type="radio"
                          value={option}
                          defaultChecked={
                            option === "Providing information only"
                              ? true
                              : false
                          }
                          className="radio checked:bg-brand"
                          {...register("assistType", { required: false })}
                        />
                        <span className="label-text">{option}</span>
                      </label>
                    ))}
                  </div>
                </label>
                <label>
                  <div className="label">
                    <span className="label-text star-label">
                      Link to the Job
                    </span>
                  </div>
                  <input
                    type="url"
                    defaultValue=""
                    placeholder="https://recruiter-page.com"
                    className={`input input-bordered w-full ${
                      errors?.jobLink ? "border-red-600" : ""
                    }`}
                    autoComplete="off"
                    {...register("jobLink")}
                  />
                  {!errors.jobLink && (
                    <div className="label">
                      <span className="label-text-alt">
                        Provide a link to the job portal | Business owners can
                        provide google form or whatsapp group link
                      </span>
                    </div>
                  )}
                  {errors.jobLink && (
                    <span className="text-red-600 text-sm">
                      {errors.jobLink.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg">Your Contact Details</h2>
                <span className="label-text-alt">
                  Where you would like to get in touch with the candidate
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 ">
                {socialMediaLinksConfig.map(({ key, label, placeholder }) => (
                  <label key={key}>
                    <div className="label">
                      <span className="label-text">{label}</span>
                    </div>
                    <input
                      type="text"
                      placeholder={placeholder}
                      className={`input input-bordered w-full ${
                        errors?.[key] ? "border-red-600" : ""
                      }`}
                      {...register(`${key}`, { required: false })}
                    />
                    {errors?.[key] && (
                      <span className="text-red-600 text-sm">
                        {errors?.[key]?.message}
                      </span>
                    )}
                  </label>
                ))}
                <label>
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    type="text"
                    placeholder={"Yourmail@email.com"}
                    className={`input input-bordered w-full ${
                      errors?.email ? "border-red-600" : ""
                    }`}
                    value={session?.user?.email ? session?.user?.email : ""}
                    readOnly={true}
                    {...register("email", { required: true })}
                  />
                  {errors?.email && (
                    <span className="text-red-600 text-sm">
                      {errors?.email?.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary bg-brand hover:bg-sky-700 text-white w-full mt-8"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJobForm;

// function capitalizeFirstLetter(str: string) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
