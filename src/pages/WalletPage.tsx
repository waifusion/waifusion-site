import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Header from "../components/Header";

const StyledWalletPage = styled.div``;

const WalletPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <StyledWalletPage>
      <Header text={t("headers.wallet")} />
    </StyledWalletPage>
  );
};

export default WalletPage;