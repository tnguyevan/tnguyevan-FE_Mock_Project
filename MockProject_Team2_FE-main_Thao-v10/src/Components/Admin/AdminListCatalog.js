import BootstrapTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "id",
    text: "Catalog ID",
  },
  {
    dataField: "name",
    text: "Catalog Name",
  },
  // {
  //   dataField: "image",
  //   text: " ",
  // },
];

const data = [
  {
    id: 1,
    name: "Áo Khoác",
    image: "res541d4fbafb5722a6b83cd1ac17de1ceafr.jpeg",
  },
  {
    id: 2,
    name: "Áo Sơ Mi",
    image: "goods_64_455952.webp",
  },
  {
    id: 3,
    name: "Áo Phông",
    image: "goods_00_457124.webp",
  },
  {
    id: 4,
    name: "Quần",
    image: "goods_67_445293.webp",
  },
  {
    id: 5,
    name: "Váy",
    image: "goods_32_458682.webp",
  },
  {
    id: 6,
    name: "Quần Jean",
    image: "goods_62_452524.webp",
  },
  {
    id: 7,
    name: "Áo Len",
    image: "res858283b0a1d2cdbb95d44622fda9ce24fr.jpeg",
  },
  {
    id: 8,
    name: "Vest",
    image: "A01_8225409_06_0_20220928180917_psz.jpeg",
  },
];

const AdminListCatalog = () => {
  return <BootstrapTable keyField="id" data={data} columns={columns} />;
};

export default AdminListCatalog;
