"use client";
import Head from "next/head";
import Brand from "../../components/Brand";
import Navbar from "../../components/Navbar";
import FormSignup from "../../components/FormSignup";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
export default function Signup() {
  useEffect(() => {
    const token = Cookies.get("token");
    // console.log("token signin");
    // console.log(token);
    if (token) {
      redirect("/");
    }
  }, []);
  return (
    <>
      <Head>
        <title> Signup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-navy">
        <Navbar />
      </section>

      <section className="login header bg-navy">
        <div className="container">
          <div className="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero">
            <div className="col-md-6">
              <div className="hero-headline text-start">
                Expand Your <br className="d-none d-md-block" />
                Knowledge & Skills
              </div>
              <p className="hero-paragraph text-start">
                Kami menyediakan berbagai acara terbaik untuk membantu{" "}
                <br className="d-none d-lg-block" />
                anda dalam meningkatkan skills di bidang teknologi
              </p>
            </div>
            <div className="col-md-6">
              <FormSignup />
            </div>
          </div>
        </div>
      </section>

      <Brand className="pt-0 bg-navy" />
    </>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}