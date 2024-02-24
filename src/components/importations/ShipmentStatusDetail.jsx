/* eslint-disable react/prop-types */
import { Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import DataTable from "../ui/DataTable";

const ShipmentStatusDetail = ({ data = [] }) => {
  const { t } = useTranslation();
  const { height } = useViewportSize();

  const [selectedShipmentId, setSelectedShipmentId] = useState(null);

  let col = 0;
  const cols = t("shipments.columns", { returnObjects: true });

  const columns = [
    { label: "", field: "led", type: "led", width: 30 },
    { label: cols[col++], field: "referencia", align: "left", width: 150 },
    { label: cols[col++], field: "producto", align: "left", width: 200 },
    { label: cols[col++], field: "analista", align: "left", width: 200 },
    { label: cols[col++], field: "evento", align: "left", width: 200 },
    { label: cols[col++], field: "paisOrigen", align: "left", width: 200 },
    {
      label: cols[col++],
      field: "valorDelEmbarque",
      align: "right",
      width: 150,
      default: 0,
      type: "strToFloat",
      format: "es-ES",
    },
    {
      label: cols[col++],
      field: "valorDeLaOrdenDeCompra",
      align: "right",
      width: 150,
      default: 0,
      type: "strToFloat",
      format: "es-ES",
    },
    { label: cols[col++], field: "moneda", align: "center", width: 200, default: "---" },
    { label: cols[col++], field: "incoterm", align: "left", width: 200 },
    { label: cols[col++], field: "feus", align: "right", width: 200 },
    { label: cols[col++], field: "proveedor", align: "left", width: 200 },
    { label: cols[col++], field: "necesidadEnCd", align: "center", width: 160 },
    { label: cols[col++], field: "division", align: "left", width: 160 },
    { label: cols[col++], field: "departamento", align: "left", width: 160 },
    { label: cols[col++], field: "canal", align: "left", width: 160 },
  ];

  // const getData = async () => {
  //   setLoading(true);
  //   const params = {
  //     token: user.token,
  //   };

  //   try {
  //     const list = await findAllShipmentStatuses(params);
  //     if (list.message) {
  //       setError(list.message);
  //     } else {
  //       const ret = list.filter((i) => i !== "");
  //     }
  //   } catch (error) {
  //     setError(error);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);

  const onRowClick = (id) => {
    if (id) {
      setSelectedShipmentId(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <Stack spacing={"xs"}>
      {height ? (
        <DataTable
          data={data}
          columns={columns}
          h={height - 200}
          setSelectedRowId={onRowClick}
          selectedRowId={selectedShipmentId}
          // loading={loading}
        />
      ) : null}
    </Stack>
  );
};

export default ShipmentStatusDetail;
