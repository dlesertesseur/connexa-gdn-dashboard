import { Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { HEADER_HIGHT } from "../../data/config";
import { useWindowSize } from "../../utils/hooks";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";
import { findAllShipmentStatuses } from "../../data/shipments";
import DataTable from "../ui/DataTable";
import ShipmentStatusDetailToolbar from "./ShipmentStatusDetailToolbar";

const ShipmentStatusDetail = () => {
  const { t } = useTranslation();
  const { user } = useUserContext();
  const [error, setError] = useState();

  const navigate = useNavigate();
  const wSize = useWindowSize();

  const [loading, setLoading] = useState(false);

  let col = 0;
  const cols = t("shipments.columns", { returnObjects: true });

  const columns = [
    { label: "", field: "led", type: "led", width: 30 },
    { label: cols[col++], field: "referencia", align: "left", width: 150 },
    { label: cols[col++], field: "producto", align: "left", width: 200 },
    { label: cols[col++], field: "analista", align: "left", width: 200 },
    { label: cols[col++], field: "evento", align: "left", width: 200 },
    { label: cols[col++], field: "paisOrigen", align: "left", width: 200 },
    { label: cols[col++], field: "valorDelEmbarque", align: "right", width: 150, default: 0, type:"strToFloat", format:"es-ES" },
    { label: cols[col++], field: "valorDeLaOrdenDeCompra", align: "right", width: 150, default: 0, type:"strToFloat", format:"es-ES" },
    { label: cols[col++], field: "moneda", align: "center", width: 200, default: "---" },
    { label: cols[col++], field: "incoterm", align: "left", width: 200 },
    { label: cols[col++], field: "feus", align: "right", width: 200 },
    { label: cols[col++], field: "proveedor", align: "left", width: 200 },
    { label: cols[col++], field: "necesidadEnCd", align: "center", width: 160 },
    { label: cols[col++], field: "division", align: "left", width: 160 },
    { label: cols[col++], field: "departamento", align: "left", width: 160 },
    { label: cols[col++], field: "canal", align: "left", width: 160 },
  ];

  const getData = async () => {
    setLoading(true);
    const params = {
      token: user.token,
    };

    try {
      const list = await findAllShipmentStatuses(params);
      if (list.message) {
        setError(list.message);
      } else {
        const ret = list.filter((i) => i !== "");
        //setStatuses(ret);

        // let events = await findAllBusinessObjectives(params);
        // events = events.filter((e) => e !== "");
        // events.unshift(t("importations.label.all"));
        // events = events.filter((e) => e !== null);
        // setBusinessObjectives(events);

        // let analysts = await findAllAnalysts(params);
        // analysts = analysts.filter((e) => e !== "");
        // analysts.unshift(t("importations.label.all"));
        // setAnalysts(analysts);

        // let buyers = await findAllBuyers(params);
        // buyers = buyers.filter((e) => e !== "");
        // buyers.unshift(t("importations.label.all"));
        // setBuyers(buyers);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);


  const onRowClick = (id) => {
    if (id) {
      //setSelectedShipmentId(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const onDoubleClick = (id) => {
    // const found = shipmentsByStatus.find((r) => r.id === id);
    // const params = {
    //   state: {
    //     reference: found.referencia,
    //   },
    //   options: { replace: true },
    // };
    // navigate("shipmentDetail", params);
  };

  const activeMap = (status) => {
    let ret = status.split(" ");
    ret = ret[0];
    ret = parseInt(ret);
    if (ret === 5) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Stack spacing={"xs"}>
      {/* <ShipmentStatusDetailToolbar
        title={statusSelected}
        activeMap={activeMap(statusSelected)}
        back={() => {
          setSelectedShipmentId(null);
          navigate("../");
        }}
        inspect={() => {
          onDoubleClick(selectedShipmentId);
        }}
      />
      <DataTable
        data={shipmentsByStatus}
        columns={columns}
        h={wSize.height - HEADER_HIGHT}
        setSelectedRowId={onRowClick}
        selectedRowId={selectedShipmentId}
        loading={loading}
        // setScrollYPos={setScrollYPos}
        // scrollYPos={scrollYPos}
        // selectedColumnId={selectedColumnId}
        // sortOrder={sortOrder}
        // setSelectedColumnId={setSelectedColumnId}
        // setSortOrder={setSortOrder}
        //onDoubleClick={onDoubleClick}
      /> */}
    </Stack>
  );
};

export default ShipmentStatusDetail;
