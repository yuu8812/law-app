import React, { Fragment } from "react";

import Citizen from "@/components/Citizen";
import Law from "@/components/Law";
import { FindWorldQuery } from "@/graphql/type";

const DescriptionArea = ({ data }: { data: FindWorldQuery }) => {
  return (
    <div className="absolute m-2 flex h-fit flex-1 flex-col gap-2 pt-10">
      <div className="flex flex-col gap-2">
        <div className="text-sm text-gray-500">地域内の決まり</div>
        {data.worlds_by_pk?.world_laws.length === 0 ? (
          <div className="text-sm">なし</div>
        ) : (
          data.worlds_by_pk?.world_laws.map((law, i) => {
            return (
              <Fragment key={i}>
                <Law id={law.law.id} title={law.law.law_revisions[0].title} description="" />
              </Fragment>
            );
          })
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm text-gray-500">個体</div>
        <div className="flex flex-wrap gap-[-2px]">
          {data.worlds_by_pk?.world_citizens_aggregate.nodes.map((citizen, i) => {
            return (
              <div className="py-[2px]" key={i}>
                <Citizen id={citizen.citizen.id} url={citizen.citizen.species_asset.image_url} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DescriptionArea;
