import React, { useState } from "react";
import { useSelector } from "react-redux";
import BN from "bn.js";
import { useTranslation } from "react-i18next";

import { ContractHelper } from "../services/contract";
import { selectGlobalsData } from "../state/reducers/globals";
import { selectAddress } from "../state/reducers/user";
import Button from "./Button";

type Props = {
  refresh: () => Promise<void>;
  approved: boolean;
};

const StakeButton: React.FC<Props> = (props) => {
  const [t] = useTranslation();

  const globals = useSelector(selectGlobalsData);
  const address = useSelector(selectAddress);

  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(false);

  const approve = async () => {
    const contractHelper = new ContractHelper();
    await contractHelper.init();
    const wetContract = await contractHelper.getWetContract();

    wetContract.methods
      .approve(globals.farmAddress, new BN("9999999999999999999999999999"))
      .send()
      .on("transactionHash", (hash: any) => {
        setLoading(true);
      })
      .on("receipt", (receipt: any) => {
        props.refresh().then(() => setLoading(false));
      })
      .on("error", (err: any) => {
        setLoading(true);
      });
  };

  const stake = async () => {
    const contractHelper = new ContractHelper();
    await contractHelper.init();
    const farmContract = await contractHelper.getFarmContract();

    farmContract.methods
      .stake(amount)
      .send({ from: address })
      .on("transactionHash", (hash: any) => {
        setLoading(true);
      })
      .on("receipt", (receipt: any) => {
        setLoading(false);
      })
      .on("error", (err: any) => {
        setLoading(true);
      });
  };

  return (
    <Button
      primary
      onClick={() => {
        if (loading) return;
        if (!props.approved) approve();
        stake();
      }}
    >
      {loading
        ? t("loading")
        : props.approved
        ? t("buttons.approveWet")
        : t("buttons.stakeWet")}
    </Button>
  );
};

export default StakeButton;
