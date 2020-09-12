import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { Card } from "../components/common/Card";
import { Hero } from "../components/layout/Hero";
import { UploadButton } from "../components/common/UploadButton";
import { ImageUploadButton } from "../components/files/ImageUploadButton";
import { useImages } from "../contexts/images/ImagesState";

export default function Home() {
  const imagesState = useImages();
  console.log(imagesState.imageFiles);
  return (
    <div>
      <Head>
        <title>Image Details Generator</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="none:container bg-gray-100">
        <Hero>
          <Card className="max-w-2xl">
            <h1 className="text-4xl font-bold">Generate a image details CSV</h1>
          </Card>
        </Hero>
        <div className="flex">
          <div className="w-1/4 m-4"></div>
          <div className="w-1/4 m-4">
            <ImageUploadButton />
          </div>
          <div className="w-1/4 m-4">
            <UploadButton type="csv" handleOnClick={() => {}} />
          </div>
          <div className="w-1/4 m-4"></div>
        </div>

        <div className="text-6xl">{imagesState.imageFiles.length}</div>
      </div>
    </div>
  );
}
