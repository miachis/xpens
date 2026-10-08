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
		},
	})
		.then(() => {})
		.catch((error) => {});
}
