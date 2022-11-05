import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopNav from "../components/TopNav";
import Slide from "../components/Slide";
export default function Home() {
  return (
    <>
      <TopNav />
      <Slide />
    </>
  );
}
