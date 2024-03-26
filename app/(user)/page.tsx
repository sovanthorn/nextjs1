"use client";
import { useRouter } from "next/navigation";
const session = "some session data";

export default function Home() {
	const router = useRouter();
	if (!session) {
		throw new Error("Auth is required to access this resource");
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<h1 className="text-6xl font-medium">Home Page</h1>
				<button
					onClick={() => router.push("/enroll")}
					className="p-4 bg-blue-300 rounded-xl text-2xl font-medium mt-4 text-[#333]"
				>
					Enroll Now
				</button>
			</div>
		</main>
	);
}
