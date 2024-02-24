/* eslint-disable react/prop-types */
import { Tabs } from "@mantine/core";
import { IconMoodAngry, IconMoodSmile } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ShipmentStatusDetail from "./ShipmentStatusDetail";

const ShipmentPanel = ({ panel }) => {
  const { t } = useTranslation();
  const [shipmentGoodList, setShipmentGoodList] = useState(null);
  const [shipmentBadList, setShipmentBadList] = useState(null);

  useEffect(() => {
    const shipmentGoodList = panel.data[0].data.map((s) => {
      return s.shipment;
    });
    setShipmentGoodList(shipmentGoodList);

    const shipmentBadList = panel.data[1].data.map((s) => {
      return s.shipment;
    });
    setShipmentBadList(shipmentBadList);
  }, [panel]);

  return (
    <Tabs defaultValue="good">
      <Tabs.List>
        <Tabs.Tab value="good" leftSection={<IconMoodSmile color="green" />}>
          {t("label.good")}
        </Tabs.Tab>
        <Tabs.Tab value="bad" leftSection={<IconMoodAngry color="red" />}>
          {t("label.bad")}
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="good">
        <ShipmentStatusDetail data={shipmentGoodList} />
      </Tabs.Panel>
      <Tabs.Panel value="bad" >
        <ShipmentStatusDetail data={shipmentBadList}/>
      </Tabs.Panel>
    </Tabs>
  );
};

export default ShipmentPanel;
