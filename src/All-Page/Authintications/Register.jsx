import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import useAuth from "./../../CustomHooks/useAuth";

export default function Register() {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // Form Submit
  const onSubmit = async (data) => {
    try {
      console.clear();

      // Firebase Auth Register
      await createUser(data.email, data.password);

      const displayData = {
        ...data,
        directorPhoto: data.directorPhoto?.[0]?.name || "",
        institutePhoto: data.institutePhoto?.[0]?.name || "",
        nationalIdPhoto: data.nationalIdPhoto?.[0]?.name || "",
        signaturePhoto: data.signaturePhoto?.[0]?.name || "",
      };

      console.log("REGISTER_FORM_SUBMIT", displayData);

      await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(displayData),
      });

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Your registration form has been submitted!",
        confirmButtonColor: "#4f46e5",
      });

      reset(); // form clear
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: err.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className="min-h-screen mt-5 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <div className="relative rounded-2xl px-6 py-8 shadow-lg hover:shadow-cyan-600/70 transition bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-100 text-center">
            Branch Registration
          </h1>
          <p className="text-base text-gray-400 text-center mt-1">
            Fill the form below to register
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Text Inputs */}
            {[
              { id: "instituteName", label: "Institute Name" },
              { id: "directorName", label: "Director Name" },
              { id: "fatherName", label: "Father's Name" },
              { id: "motherName", label: "Mother's Name" },
              { id: "email", label: "Email", type: "email" },
              { id: "mobileNumber", label: "Mobile Number" },
              { id: "address", label: "Address" },
              { id: "postOffice", label: "Post Office" },
              { id: "upazila", label: "Upazila" },
              { id: "district", label: "District" },
              { id: "username", label: "Username" },
              { id: "password", label: "Password", type: "password" },
            ].map((field) => (
              <div key={field.id} className="flex flex-col">
                <label className="block text-sm md:text-base text-gray-300 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  placeholder={field.label}
                  {...register(field.id, {
                    required: "This field is required",
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm md:text-base outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                    errors[field.id] ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors[field.id] && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors[field.id]?.message}
                  </p>
                )}
              </div>
            ))}

            {/* File Inputs */}
            {[
              { id: "directorPhoto", label: "Director Photo" },
              { id: "institutePhoto", label: "Institute Photo" },
              { id: "nationalIdPhoto", label: "National ID Photo" },
              { id: "signaturePhoto", label: "Signature Photo" },
            ].map((file) => (
              <div key={file.id} className="flex flex-col">
                <label className="block text-sm md:text-base text-gray-300 mb-1">
                  {file.label}
                </label>
                <input
                  type="file"
                  {...register(file.id, { required: "This field is required" })}
                  className={`w-full text-sm md:text-base border rounded-xl px-3 py-2 bg-gray-50 ${
                    errors[file.id] ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors[file.id] && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors[file.id]?.message}
                  </p>
                )}
              </div>
            ))}

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 text-lg transition"
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <p className="mt-6 text-center text-sm md:text-base text-gray-400">
            Already have an account?{" "}
            <NavLink to="/Login" className="text-indigo-400 hover:underline">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
