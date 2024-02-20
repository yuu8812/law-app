/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

const RadioButton = <T extends FieldValues>({
  register,
  name,
  options,
}: {
  register: UseFormRegister<T>;
  name: Path<T>;
  options: { id: string; label: string; value: string }[];
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((radio, i) => {
        const { id, label, value } = radio;
        return (
          <div
            key={id}
            className="hover:bg-so_se_ji relative flex w-44 cursor-pointer flex-row items-center rounded bg-[#ffffff] shadow transition-all hover:text-white"
          >
            <input
              type="radio"
              value={value}
              {...register(name)}
              id={"selection_" + id + i}
              className="peer"
              name={name}
              defaultChecked={i === 0}
              hidden
            />
            <label
              htmlFor={"selection_" + id + i}
              className="peer-checked:bg-so_se_ji absolute left-1 z-10 h-4  w-4 cursor-pointer rounded-full border border-black hover:border-white peer-checked:border-white peer-hover:bg-white peer-hover:peer-checked:bg-slate-800"
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
