import type { NextPage } from "next";
import ItemList from "../components/itemsList";
import Layout from '../components/layout'
import Head from "next/head";
import useSWR from "swr";
import { url, item } from '../app/types_constant'
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR<item[] | undefined>(
    url,
    fetcher
  );
  return (
    <Box>
      <Head>
        <title>Fake Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />

      <main>{!data ? "nooo" : <ItemList items={data} />}</main>
    </Box>
  );
};

export default Home;
