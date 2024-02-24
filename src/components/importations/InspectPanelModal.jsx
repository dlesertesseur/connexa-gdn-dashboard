/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Modal } from "@mantine/core";
import ShipmentPanel from "./ShipmentPanel";
import TotalsPanel from "./TotalsPanel";

const InspectPanelModal = ({ opened, close, panel }) => {
  function createBody() {
    let component = null;

    switch (panel.name) {
      case "indicatorByScheduleCompliance":
        component = <ShipmentPanel panel={panel}/>
        break;
    
      default:
        component = <TotalsPanel panel={panel}/>
        break;
    }
    return(component);
  } 

  return (
    <Modal.Root opened={opened} onClose={close} size={"100%"} h={"100%"} centered>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>{panel.title}</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>{createBody()}</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default InspectPanelModal;
