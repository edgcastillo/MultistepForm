import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Title = styled.h1`
  background-color: blue;
  color: white;
`;

export default function IndexPage() {
  return (
    <Title>
      <Link href="/step/1">
        <a href="#">Go to MultiStep Form</a>
      </Link>
    </Title>
  );
}
