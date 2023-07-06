"use client"
import React, { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Provider } from "react-redux";
import store from '@/store'

export default function Template({ children }: { children: React.ReactNode }) {
  console.log('121212')
  // const router = useRouter();
  //   router.events.on("routeChangeStart", () => {
  //     NProgress.start();
  //   });
  //   router.events.on("routeChangeComplete", () => {
  //     NProgress.done();
  //   });
  //   router.events.on("routeChangeError", () => {
  //     NProgress.done();
  //   });
  // useEffect(() => {


  // }, []); // eslint-disable-line

  return <Provider store={store}>
    {children}
  </Provider>
}
