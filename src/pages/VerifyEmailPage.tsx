import { useLocation } from "react-router"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaHockeyPuck } from "react-icons/fa";
import { verifyEmailSchema, VerifyEmailSchema } from "../schema";
import { useVerifyEmail } from "../hooks/useVerifyEmail"
import Button from "../components/ui/Button";

export default function VerifyEmailPage() {
	const location = useLocation();
	const token = new URLSearchParams(location.search).get("token");
	const { verifyEmailMutation, verifyEmailPending } = useVerifyEmail();
	const { register, handleSubmit, formState: { errors } } = useForm<VerifyEmailSchema>({
		resolver: zodResolver(verifyEmailSchema),
		mode: "onChange",
		defaultValues: {
			token: token || "",
		}
	});

	const onSubmit = (formData: VerifyEmailSchema) => {
		verifyEmailMutation(formData.token);
	}

	return (
		<section className="flex justify-center items-center h-screen py-6 sm:py-0">
			<article className="hidden md:flex md:justify-center md:items-center md:flex-1 bg-[#f3f3f3] h-full">
				<h1 className="text-5xl font-bold opacity-80">Verify Email</h1>
			</article>
			<article className="flex justify-center items-center flex-1 h-full">
				<div className="flex flex-col items-center w-5/6">
					<form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
						<div className="relative w-full">
							<FaHockeyPuck
								className="absolute top-1/2 left-6 -translate-y-1/2"
								size={15}
							/>
							<input
								id="token"
								autoComplete="on"
								type="text"
								placeholder="Token"
								{...register("token")}
								className="w-full border bg-[#f3f3f3] border-[rgb(212,212,212,0.6)]  rounded-full text-sm py-2 pl-14 pr-4 outline-0"
							/>
						</div>
						{errors.token && (
							<p className="self-end text-xs -mt-2 text-red-500">
								{errors.token.message}
							</p>
						)}
						<Button disabled={verifyEmailPending} type="submit">
							{verifyEmailPending ? "Verifying..." : "Verify"}
						</Button>
					</form>
				</div>
			</article>
		</section>
	)
}
