import React, { useState, ChangeEvent } from "react";
import { z } from "zod";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jnvSchools } from "~/constants/jnvList";
import { stateAndDistrict } from "~/constants/stateAndDistrict";
import { useRouter } from "next/router";
import Link from "next/link";
import type { Option } from "~/types/selectOption.type";
import ComboBoxWrapper from "../ui/ComboBoxWrapper";
import ListBoxWrapper from "../ui/ListBoxWrapper";
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
  name: z.string().min(3).max(50),
  email: z.string().email(""),
  phone: z.string().min(10).max(15),
  gender: z.string().min(1),
  age: z.string().min(2).max(3),
  state: z.string().min(1),
  district: z.string().min(1),
  jnv: z.string().min(1),
  passoutYear: z.number().min(1980).max(currentYear),
  occupation: z.string().min(1),
  currentLocation: z.string().min(1),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    ),
  confirmPassword: z.string().min(8),
});

// const passwordSchema = z.object({
//   password: z
//     .string()
//     .min(8)
//     .regex(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//     ),
//   confirmPassword: z.string().min(8),
// });

// const registrationSchema = schema.merge(passwordSchema);
type FormValues = z.infer<typeof schema>;

const Registration: React.FC = () => {
  // const [randomLine, setRandomLine] = useState<string>("");
  // const [stringOptions, setStringOptions] = useState<string[]>([]);
  // const [chances, setChances] = useState<number>(3);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
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
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data :", data);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.ok &&
          router.push("/dashboard").catch((error) => {
            console.error("Failed to navigate to dashboard:", error);
          });
      })
      .catch((error) => {
        console.error("Error during form submission:", error);
      });
    // Add your registration logic here
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

  const handlePasswordMatch = (
    field: React.InputHTMLAttributes<HTMLInputElement>,
  ) => {
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");
    setIsPasswordMatch(password === confirmPassword);

    // Trigger validation for better user experience
    // Trigger validation
    field?.onChange &&
      field?.onChange({
        target: { value: field?.value },
      } as ChangeEvent<HTMLInputElement>);
    // field?.onChange(field?.value); // Validate the changed field
  };
  return (
    <div className="card bg-base-100 py-4 px-4 w-full max-w-2xl justify-center">
      <div className="card-body  w-full m-0 p-0">
        <h1 className="card-title">Register With Us</h1>
        <form
          className="flex flex-col gap-2 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            <div className="label">
              <span className="label-text">Name</span>
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
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="john@doe.com"
                className="input input-bordered w-full"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  {errors.email.message}
                </span>
              )}
            </label>
            <label>
              <div className="label">
                <span className="label-text">Phone</span>
              </div>
              <input
                type="tel"
                placeholder="+91-8989****90"
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
                />
              )}
            />
            <label>
              <div className="label">
                <span className="label-text">Age</span>
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
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <label>
              <div className="label">
                <span className="label-text">Occupation</span>
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
                <span className="label-text">Current Location</span>
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
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Enter Your Password"
                autoComplete="new-password"
                className="input input-bordered w-full"
                {...register("password", { required: true, minLength: 8 })}
                // onChange={(e) => handlePasswordMatch(e.target)} // Pass the field
              />
              {!errors.password && (
                <div className="label">
                  <span className="label-text">
                    Must contain uppercase/lowercase/numeric/special characters
                    - min 8 characters
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
                <span className="label-text">Confirm Password</span>
              </div>
              <input
                type="text"
                id="confirmPassword"
                autoComplete="confirm-password"
                placeholder="Enter Your Password"
                className="input input-bordered w-full"
                {...register("confirmPassword", { required: true })}
                // onChange={(e) => handlePasswordMatch(e.target)} // Pass the field
              />
              {/* {watch("password") === watch("confirmPassword") && ( */}
              {/* // <div className="label"> */}
              {/* <span className="label-text"> */}
              {/*give me a strong password label text */}
              {/* Make a strong password with a mix of letters (Aa), numbers,
                    and symbols - min 8 characters
                  </span>
                </div> */}
              {/* )} */}
              {watch("password") !== watch("confirmPassword") && (
                <p className="error">Passwords do not match.</p>
              )}
            </label>
          </div>
          <button
            className="btn btn-primary bg-brand hover:bg-blue-900 w-full mt-8"
            type="submit"
          >
            Submit
          </button>
          <div className="flex gap-2 mt-2">
            Already have an account?
            <Link href="/login" className=" underline text-sky-800">
              Login here
            </Link>
          </div>
        </form>
        {/* <VerificationForm /> */}
      </div>
    </div>
  );
};

export default Registration;
