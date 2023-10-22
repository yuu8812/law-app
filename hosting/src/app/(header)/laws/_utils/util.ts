export const createSearchParam = <T>(searchParams: T, key: keyof T, value: T[keyof T]) => {
  searchParams[key] = value;
};

createSearchParam<LawsPageSearchParams>({ category: "all" }, "category", "desc");
