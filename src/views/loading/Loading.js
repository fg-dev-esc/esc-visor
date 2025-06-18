import { Spin } from "antd";

export default function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: 200 }}>
      <Spin size="large" />
    </div>
  );
}
