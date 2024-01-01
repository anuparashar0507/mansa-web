import React from "react";
import { z } from "zod";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/router";
import ComboBoxWrapper from "../ui/ComboBoxWrapper";
import ListBoxWrapper from "../ui/ListBoxWrapper";
import { jobSectors, workModes } from "~/constants/jobs";
import Industries from "~/constants/industries";

type SocialMediaLinks = {
  linkedin: string;
  facebook: string;
  instagram: string;
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
  { key: "email", label: "Email", placeholder: "johndoe@email.com" },
];

const optionalUrl = z.union([z.string().url().nullish(), z.literal("")]);
const optionalEmail = z.union([z.string().email().nullish(), z.literal("")]);

const schema = z.object({
  companyName: z.string().optional(),
  jobTitle: z.string().min(3).max(50),
  jobDescription: z.string().min(3).max(4000),
  jobLink: z.string().url(),
  jobSector: z.string().min(1),
  industry: z.string().min(1),
  location: z.string().optional(),
  workMode: z.enum(["in office", "hybrid", "remote"]).default("in office"),
  assistType: z
    .enum([
      "Hiring for my company",
      "Open to providing a referral",
      "Providing information only",
    ])
    .default("Providing information only"),
  salaryRange: z
    .object({
      min: z.string(),
      max: z.string().optional(),
    })
    .optional(),
  // phone: z.string().min(10).max(15),
  experience: z
    .object({
      min: z.string(),
      max: z.string().optional(),
    })
    .optional(),
  contact: z
    .object({
      linkedin: optionalUrl,
      facebook: optionalUrl,
      instagram: optionalUrl,
      email: optionalEmail,
    })
    .optional(),
});

type FormValues = z.infer<typeof schema>;

const PostJobForm: React.FC = () => {
  // const router = useRouter();
  const {
    handleSubmit,
    control,
    register,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    // defaultValues: defaultFormValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Inside OnSubmit", getValues());
    try {
      console.log("data :", data);
      // Your asynchronous logic here

      // Wait for asynchronous operations to complete
      // Example using async/await:
      // await someAsyncFunction();

      // Continue with navigation or other logic
      // router.push("/dashboard").catch((error) => {
      //   console.error("Failed to navigate to dashboard:", error);
      // });
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  console.log(errors);
  return (
    <div className="card w-full max-w-7xl ">
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
                placeholder="Google | Microsoft"
                className="input input-bordered w-full"
                {...register("companyName")}
              />
              {errors?.companyName?.message && (
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
              placeholder="Write about the overview of the company and expectations for the position."
              required
              {...register("jobDescription", {
                required: "Job description is required",
              })}
            />
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
          {/* <div className="join gap-4"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <label>
              <div className="label">
                <span className="label-text">
                  Experience Required (Select 0 for no experience required)
                </span>
              </div>
              <div className="flex gap-2 max-w-full">
                <input
                  {...register("experience.min", { required: false })}
                  type="number"
                  placeholder="Min (in Years)"
                  min={"0"}
                  max={getValues("experience.max")}
                  className={`input input-bordered w-full ${
                    errors?.experience?.min ? "border-red-600" : ""
                  }`}
                />
                <input
                  {...register("experience.max", { required: false })}
                  type="number"
                  placeholder="Max (in Years)"
                  min={getValues("experience.min")}
                  max={"50"}
                  className={`input input-bordered w-full ${
                    errors?.experience?.max ? "border-red-600" : ""
                  }`}
                />
              </div>
              {errors.experience?.min && (
                <span className="text-red-600 text-sm">
                  {errors.experience.min.message}
                </span>
              )}
              {errors.experience?.max && (
                <span className="text-red-600 text-sm">
                  {errors.experience.max.message}
                </span>
              )}
            </label>
            <Controller
              name="salaryRange"
              control={control}
              render={() => (
                <div>
                  <div className="label">
                    <span className="label-text">Salary Range (Per Year)</span>
                  </div>
                  <div className="flex gap-2 max-w-full">
                    <input
                      type="number"
                      placeholder="Min"
                      min={"0"}
                      max={getValues("salaryRange.max")}
                      className={`input input-bordered w-full ${
                        errors?.salaryRange?.max ? "border-red-600" : ""
                      }`}
                      {...register("salaryRange.min")}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      min={getValues("salaryRange.min")}
                      className={`input input-bordered w-full ${
                        errors?.salaryRange?.max ? "border-red-600" : ""
                      }`}
                      {...register("salaryRange.max")}
                    />
                  </div>
                </div>
              )}
            />
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
                <div className="flex gap-4 flex-col md:flex-row">
                  {[
                    "Hiring for my company",
                    "Open to providing a referral",
                    "Providing information only",
                  ].map((option) => (
                    <label key={option} className="label cursor-pointer gap-2">
                      <input
                        type="radio"
                        value={option}
                        defaultChecked={
                          option === "Providing information only" ? true : false
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
                  <span className="label-text star-label">Link to the Job</span>
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
                {errors.jobLink && (
                  <span className="text-red-600 text-sm">
                    {errors.jobLink.message}
                  </span>
                )}
              </label>
            </div>
            <h2 className="text-lg">Your Contact Details</h2>

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
                      errors?.contact?.[key] ? "border-red-600" : ""
                    }`}
                    {...register(`contact.${key}`, { required: false })}
                  />
                  {errors?.contact?.[key] && (
                    <span className="text-red-600 text-sm">
                      {errors?.contact?.[key]?.message}
                    </span>
                  )}
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-brand hover:bg-sky-700 text-white w-full mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJobForm;

// function capitalizeFirstLetter(str: string) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
