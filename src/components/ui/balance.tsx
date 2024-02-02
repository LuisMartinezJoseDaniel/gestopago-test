import { BalanceResponse } from "@/interfaces/balance";
import axios from "@/lib/axios";
import { convertXML2Json } from "@/utils/convertXml2Json";
import { Card, CardBody } from "@nextui-org/react";

export const Balance = async () => {
  const res = await axios.get("/getBalance.do");

  const {
    RESPONSE: { SALDO_F },
  } = convertXML2Json<BalanceResponse>(res.data);

  return (
    <Card>
      <CardBody>
        <h3>Saldo disponible</h3>
        <p className="font-bold">${SALDO_F.text}</p>
      </CardBody>
    </Card>
  );
};
