/* eslint-disable react/prop-types */
import { Tabs } from "@mantine/core";
import { IconMoodAngry, IconMoodSmile } from "@tabler/icons-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ShipmentPanel = ({ panel }) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log("panel data -> ", panel.data);
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

      <Tabs.Panel value="good"></Tabs.Panel>
      <Tabs.Panel value="bad"></Tabs.Panel>
    </Tabs>
  );
};

export default ShipmentPanel;
