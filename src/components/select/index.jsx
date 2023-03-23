import React from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { getBooksAction } from "../../redux/action/getBooksAction";

const SelectComponent = () => {
  const dispatch = useDispatch();

  const selectCategory = (selectedValue) => {
    dispatch(getBooksAction(selectedValue));
  };

  return (
    <div>
      <Select
        showSearch
        style={{
          width: 200,
        }}
        onChange={(e) => {
          selectCategory(e);
        }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "computer",
            label: "Computer",
          },
          {
            value: "business",
            label: "Business",
          },
          {
            value: "mathematics",
            label: "Mathematics",
          },
          {
            value: "economics",
            label: "Economics",
          },
          {
            value: "history",
            label: "History",
          },
          {
            value: "poetry",
            label: "Poetry",
          },
        ]}
      />
    </div>
  );
};

export default SelectComponent;
