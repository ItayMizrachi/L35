import React from "react";
import LinksForm from "./links/LinksForm";
import LinksList from "./links/LinksList";

export default function LinksPage() {
  return (
    <div className="container">
      <h1>Links page</h1>
      <LinksList />
      <LinksForm />
    </div>
  );
}
