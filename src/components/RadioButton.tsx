/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

const RadioButton = <T extends FieldValues>({
  register,
  name,
  options,
  checkedValue,
}: {
  register: UseFormRegister<T>;
  name: Path<T>;
  options: { id: string; label: string; value: string }[];
  checkedValue?: string;
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((radio, i) => {
        const { id, label, value } = radio;
        return (
          <div
            key={id}
            className="relative flex w-44 cursor-pointer flex-row items-center rounded bg-[#ffffff] shadow transition-all md:md:hover:bg-so_se_ji md:md:hover:text-white"
          >
            <input
              type="radio"
              value={value}
              {...register(name)}
              id={"selection_" + id + i}
              className="peer"
              name={name}
              defaultChecked={!checkedValue && i === 0}
              defaultValue={checkedValue && checkedValue}
              hidden
            />
            <label
              htmlFor={"selection_" + id + i}
              className="peer-md:hover:bg-white peer-md:hover:peer-checked:bg-slate-800 absolute left-1 z-10  h-4 w-4 cursor-pointer rounded-full border border-black peer-checked:border-white peer-checked:bg-so_se_ji md:hover:border-white"
            />
            <label
              htmlFor={"selection_" + id + i}
              className="peer relative z-10 flex h-full w-full flex-1 cursor-pointer items-center justify-center gap-2 py-2"
            >
              <p className="">{label}</p>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButton;
