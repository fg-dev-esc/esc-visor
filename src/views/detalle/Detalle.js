import { Col, Row } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Titulo from "../../components/titulo/Titulo";
import { widthMin } from "../../constants/cons";
import { setLoadingPage } from "../../context/actions/loadingActions";
import { startLoadServicio } from "../../context/actions/serviciosActions";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Loading from "../loading/Loading";
import Acciones from "./_Acciones";
import Datos from "./_Datos";

export default function Detalle() {
  const dispatch = useDispatch();
  const { folioAsignacion } = useParams();
  const { loadingPage } = useSelector((state) => state.loadingReducer);
  const { width } = useWindowDimensions();
  useEffect(async () => {
    dispatch(setLoadingPage(true));
    dispatch(startLoadServicio(folioAsignacion));
  }, []);

  if (loadingPage) return <Loading />;

  return (
    <Row gutter={[10, 10]}>
      <Col xs={24} md={16}>
        <Datos />
      </Col>
      <Col xs={24} md={8}>
   
        <Acciones />
      </Col>
    </Row>
  );
}
