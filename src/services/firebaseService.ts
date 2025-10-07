
export const signInWithGoogleAction = async (idToken: string) => {
	const response = await fetch(`${import.meta.env.VITE_BASE_BACKEND_URL}/api/auth/google`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ idToken }),
		credentials: "include",
	});

	const data = await response.json();

	if (!response.ok) {
		throw data;
	}

	return data;
}
