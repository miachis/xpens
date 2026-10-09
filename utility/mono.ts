require("dotenv").config();

const MonoAccountLinkingURL: string =
	"https://api.withmono.com/v2/accounts/initiate";

async function InititateAccountLinking(
	customerName: string,
	customerEmail: string,
) {
	fetch(MonoAccountLinkingURL, {
		method: "POST",
		headers: {
			"mono-sec-key": `${process.env.MONO_SEC_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			customer: {
				name: customerName,
				email: customerEmail,
			},
			scope: "auth",
			redirect_url: "https://mono.co",
		}),
	})
		.then((response) => response.json())
		.then((parsedResponse) => {
			return {
				url: parsedResponse.data.mono_url,
				customer: parsedResponse.data.customer,
			};
		})
		.catch((error) => {
			console.log(error);
			return;
		});
}
