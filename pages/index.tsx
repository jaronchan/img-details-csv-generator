import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { Card } from "../components/common/Card";
import { Hero } from "../components/layout/Hero";
import { OutlineButton } from "../components/common/OutlineButton";
import { ImageUploadButton } from "../components/files/ImageUploadButton";
import { useImages } from "../contexts/images/ImagesState";
import { DetailsTable } from "../components/table/DetailsTable";
import { CSVExportButton } from "../components/files/CSVExportButton";
import { GenerateTableButton } from "../components/table/GenerateTableButton";
import { CSVImportButton } from "../components/files/CSVImportButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Image Details Generator</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="none:container">
        <Hero>
          <Card className="max-w-2xl">
            <h1 className="text-4xl font-bold">Generate a image details CSV</h1>
          </Card>
        </Hero>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/4"></div>
          <div className="w-1/4">
            <ImageUploadButton />
          </div>
          <div className="w-1/4">
            <GenerateTableButton />
          </div>
          <div className="w-1/4"></div>
        </div>
        <div className="flex mb-4 space-x-2">
          <div className="w-1/4"></div>

          <div className="w-1/2">
            <CSVImportButton />
          </div>
          <div className="w-1/4"></div>
        </div>
        <div className="flex mb-8 space-x-2">
          <div className="w-1/4"></div>
          <div className="w-1/2">
            {/* <OutlineButton handleOnClick={() => {}}>Export</OutlineButton> */}
            <CSVExportButton />
          </div>
          <div className="w-1/4"></div>
        </div>
        <DetailsTable />
      </div>
    </div>
  );
}
