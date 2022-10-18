import Head from "next/head";
import useWindowLocation from "hooks/useWindowLocation";
import { metadata } from "utils/metadata";

interface MetaDataProps {
	title: string;
	description: string;
	keywords?: string;
	previewImage?: string;
}

export default function MetaData({
	title,
	description,
	keywords,
	previewImage,
}: MetaDataProps) {
	const { currentURL } = useWindowLocation();

	return (
		<Head>
			<meta charSet="utf-8" />
			{/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
			/>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="description" content={description} />
			<title>{title}</title>
			<meta name="theme-color" content="#000" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
			<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
			<meta name="author" content={metadata.autor}></meta>
			<meta name="robots" content="index,follow" />
			<meta name="keywords" content={keywords} />

			{/* Og */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content={metadata.autor} />
			<meta property="og:url" content={currentURL} key="ogurl" />
			<meta property="og:image" content={previewImage} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={metadata.twitter_creator} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={previewImage} />
			<meta name="twitter:image:alt" content={title}></meta>
			<meta name="twitter:domain" content={currentURL} />
		</Head>
	);
}
