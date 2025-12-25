"use client";

import { redirect } from "next/navigation";

function Shop() {
  setTimeout(() => {
    redirect("/store");
  }, 2000);
  console.log("Done");

  //

  return <h1>You will be redirect to store page</h1>;
}

export default Shop;
