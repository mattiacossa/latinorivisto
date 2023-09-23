import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {

 
  return (
    <ContainerBlock
      title="Dafne"
      description="Dafne"
    >
     
      <Hero />

    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {

  return {
    props: {
 
    },
  };
};
