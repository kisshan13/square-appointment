"use client";
import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return isLoading ? <p>Loading...</p> : null;
};

export default Loading;
