import { Pagination } from "types/common";
import { JobPost } from "types/jobPost";

export type ProductResponse = {
  ok: number;
  item: JobPost[];
  pagination: Pagination;
};
