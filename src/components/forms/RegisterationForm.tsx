import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";
import validator from "validator";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jnvSchools } from "~/constants/jnvList";
import { stateAndDistrict } from "~/constants/stateAndDistrict";
import { useRouter } from "next/router";
import Link from "next/link";
import type { Option } from "~/types/selectOption.type";
import ComboBoxWrapper from "../ui/ComboBoxWrapper";
import ListBoxWrapper from "../ui/ListBoxWrapper";
// import JObPostedSuccessfully from "../modals/JobPostedSuccessfully";
import FeedbackModal from "../modals/FeedbackModal";
// import {}
// import VerificationForm from "./VerificationForm";
const currentYear = new Date().getFullYear();
const years = () => {
  const startYear = 1980;
  const yearsArray = [];
  for (let year = startYear; year <= currentYear; year++) {
    yearsArray.push(year);
  }
  return yearsArray;
};

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Please enter a valid name" })
    .max(50, { message: "Please enter a valid name" }),
  email: z.string().email("Invalid email format"),
  phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
  gender: z
    .string({ required_error: "Please select a gender" })
    .refine((val) => val !== "", { message: "Please select a gender" }),
  age: z
    .string()
    .min(2, { message: "Age Must be greater than 10" })
    .max(3, { message: "Please select a valid age" }),
  state: z.string({ required_error: "Please select a state" }).min(1),
  district: z.string({ required_error: "Please select a district" }).min(1),
  jnv: z.string({ required_error: "Please select a jnv" }).min(1),
  passoutYear: z
    .number({ required_error: "Please select a year" })
    .min(1980, { message: "Please select a valid year" })
    .max(currentYear),
  occupation: z
    .string({
      required_error:
        "Occupation is required, else write student or unemployed",
    })
    .min(1, {
      message: "Occupation is required, else write student or unemployed",
    }),
  currentLocation: z.string().min(1),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    ),
  confirmPassword: z.string().min(8),
});

// const registrationSchema = schema.merge(passwordSchema);
type FormValues = z.infer<typeof schema>;

const Registration: React.FC = () => {
  // const [randomLine, setRandomLine] = useState<string>("");
  // const [stringOptions, setStringOptions] = useState<string[]>([]);
  // const [chances, setChances] = useState<number>(3);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [districtSelectOptions, setDistrictSelectOptions] = useState<Option[]>(
    [],
  );
  const [jnvSelectOptions, setJnvSelectOptions] = useState<Option[]>([]);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    register,
    // getValues,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.ok) {
          setShowModal(true);
          setTimeout(() => {
            void router.push("/login");
          }, 3000);
        }
        if (!res.ok) {
          const errorData = (await res.json()) as { message?: string };
          throw new Error(errorData?.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage =
          (error as { message?: string }) || "An error occurred";
        setShowError(
          errorMessage.message ? errorMessage.message : "An error occurred",
        );
        setShowErrorModal(true);
        setLoading(false);
      });
  };

  const handleStateChange = (selectedState: string) => {
    const districts = stateAndDistrict[selectedState];
    const jnvs = jnvSchools[selectedState];
    setDistrictOptions(districts ? districts : []);
    setJnvOptions(jnvs ? jnvs : []);
  };

  const setDistrictOptions = (districts: string[]) => {
    const districtOptions = districts.map((district, index) => ({
      id: index,
      label: district,
      value: district,
    }));

    setDistrictSelectOptions(districtOptions);
  };

  const setJnvOptions = (jnvs: string[]) => {
    const jnvOptions = jnvs.map((jnv, index) => ({
      id: index,
      label: jnv,
      value: jnv,
    }));

    setJnvSelectOptions(jnvOptions);
  };

  return (
    <>
      <FeedbackModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        primaryButtonText="Proceed to Login"
        title="Registration Successful"
        description="You can now login with your credentials"
        onClick={() => router.push("/login")}
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
      <div className="card bg-base-100 py-4 px-4 w-full max-w-2xl justify-center">
        <div className="card-body  w-full m-0 p-0">
          <h1 className="card-title">Register With Us</h1>
          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              <div className="label">
                <span className="label-text star-label">Name</span>
              </div>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                {...register("name")}
              />
              {errors?.name?.message && (
                <span className="text-red-600 text-sm">
                  {errors?.name?.message}
                </span>
              )}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <label>
                <div className="label">
                  <span className="label-text star-label">Email</span>
                </div>
                <input
                  type="text"
                  placeholder="john@doe.com"
                  className="input input-bordered w-full"
                  autoComplete="email"
                  {...register("email")}
                  // onChange={(e) => formState.trigger("email")}
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label>
                <div className="label">
                  <span className="label-text star-label">Phone</span>
                </div>
                <input
                  type="tel"
                  placeholder="+918989****90"
                  autoComplete="phone"
                  className="input input-bordered w-full"
                  {...register("phone")}
                />
                {errors.phone && (
                  <span className="text-red-600 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <Controller
                name="gender"
                control={control}
                rules={{
                  required: "Please select a Gender",
                }}
                render={({ field: { onChange, value } }) => (
                  <ListBoxWrapper
                    label="Gender"
                    placeholder="Select Gender"
                    value={value}
                    onChange={(e) => {
                      handleStateChange(e.toString());
                      onChange(e);
                    }}
                    options={["Male", "Female", "Others"].map(
                      (option, index) => ({
                        id: index,
                        label: option,
                        value: option,
                      }),
                    )}
                    error={errors.gender}
                    required={true}
                  />
                )}
              />
              <label>
                <div className="label">
                  <span className="label-text star-label">Age</span>
                </div>
                <input
                  type="number"
                  placeholder="24"
                  min={10}
                  max={120}
                  className="input input-bordered w-full"
                  {...register("age")}
                />
                {errors.age && (
                  <span className="text-red-600 text-sm">
                    {errors?.age?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <Controller
                name="state"
                control={control}
                rules={{
                  required: "Please select a State",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <ComboBoxWrapper
                    label="State"
                    placeholder="Select State"
                    value={value}
                    onChange={(e) => {
                      onChange(e);
                      handleStateChange(e?.toString());
                      // do your own change event
                    }}
                    onBlur={onBlur}
                    options={Object.keys(stateAndDistrict).map(
                      (state, index) => ({
                        id: index,
                        label: state,
                        value: state,
                      }),
                    )}
                    error={errors.state}
                    required={true}
                  />
                )}
              />
              <Controller
                name="district"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <ComboBoxWrapper
                    label="District"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    options={districtSelectOptions}
                    error={errors.district}
                    placeholder="Select District"
                    required={true}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <Controller
                name="jnv"
                control={control}
                rules={{
                  required: "Please select a user",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <ComboBoxWrapper
                    label="JNV"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    options={jnvSelectOptions}
                    error={errors.jnv}
                    placeholder="Select Jnv"
                    required={true}
                  />
                )}
              />
              <Controller
                name="passoutYear"
                control={control}
                rules={{
                  required: "Please select Passout Year",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <ComboBoxWrapper
                    label="Batch/Passout Year"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    options={years().map((year) => ({
                      id: year,
                      label: year.toString(),
                      value: year,
                    }))}
                    error={errors.passoutYear}
                    placeholder="Select Batch/Passout Year"
                    required={true}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <label>
                <div className="label">
                  <span className="label-text star-label">Occupation</span>
                </div>
                <input
                  type="text"
                  placeholder="Software Engineer"
                  className="input input-bordered w-full"
                  {...register("occupation")}
                />
                {errors.occupation && (
                  <span className=" text-red-600 text-sm">
                    {errors.occupation.message}
                  </span>
                )}
              </label>
              <label>
                <div className="label">
                  <span className="label-text star-label">
                    Current Location
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="City, State, Country"
                  className="input input-bordered w-full"
                  {...register("currentLocation")}
                />
                {errors.currentLocation && (
                  <span className=" text-red-600 text-sm">
                    {errors.currentLocation.message}
                  </span>
                )}
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <label>
                <div className="label">
                  <span className="label-text star-label">Password</span>
                </div>
                {/* Password */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    autoComplete="new-password"
                    {...register("password", { required: true, minLength: 8 })}
                    className=" input input-bordered block w-full pr-20"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <div
                      className="h-full flex items-center bg-transparent py-0 pl-2 pr-4 text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </div>
                  </div>
                </div>
                {!errors.password && (
                  <div className="label">
                    <span className="label-text text-xs">
                      Must contain uppercase/lowercase/numeric/special
                      characters
                      {/* - min 8 characters */}
                    </span>
                  </div>
                )}
                {errors.password && (
                  <span className=" text-red-600 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label>
                <div className="label">
                  <span className="label-text star-label">
                    Confirm Password
                  </span>
                </div>
                <input
                  type="text"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full"
                  {...register("confirmPassword", { required: true })}
                />
                {watch("password") !== watch("confirmPassword") && (
                  <div className="label">
                    <span className="text-red-600 text-sm">
                      Passwords do not match.
                    </span>
                  </div>
                )}
              </label>
            </div>
            <button
              className="btn btn-primary bg-brand hover:bg-blue-900 w-full mt-8"
              type="submit"
              disabled={
                !(isValid && watch("password") === watch("confirmPassword")) ||
                loading
              }
            >
              {loading && <span className="loading loading-spinner"></span>}
              Submit
            </button>
            <div className="flex gap-2 mt-2">
              Already have an account?
              <Link href="/login" className=" underline text-sky-800">
                Login here
              </Link>
            </div>
          </form>
          <button
            className="btn btn-primary bg-brand hover:bg-blue-900 w-full mt-8"
            onClick={() => setShowModal(true)}
          >
            Modal
          </button>
          {/* <VerificationForm />*/}
        </div>
      </div>
    </>
  );
};

export default Registration;
