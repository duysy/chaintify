import React from "react";
import Album from "../../views/Album";
import { useRouter } from "next/router";
export default function index() {
  const router = useRouter();
  const { id } = router.query;
  return <Album id={id} />;
}
