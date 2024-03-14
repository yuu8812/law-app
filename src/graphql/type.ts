import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "citizens" */
export type Citizens = {
  __typename?: 'citizens';
  created_at: Scalars['timestamptz']['output'];
  gender: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  owner_id: Scalars['uuid']['output'];
  /** An object relationship */
  species_asset: Species_Assets;
  species_asset_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An array relationship */
  world_citizens: Array<World_Citizens>;
  /** An aggregate relationship */
  world_citizens_aggregate: World_Citizens_Aggregate;
};


/** columns and relationships of "citizens" */
export type CitizensWorld_CitizensArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


/** columns and relationships of "citizens" */
export type CitizensWorld_Citizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};

/** aggregated selection of "citizens" */
export type Citizens_Aggregate = {
  __typename?: 'citizens_aggregate';
  aggregate?: Maybe<Citizens_Aggregate_Fields>;
  nodes: Array<Citizens>;
};

export type Citizens_Aggregate_Bool_Exp = {
  count?: InputMaybe<Citizens_Aggregate_Bool_Exp_Count>;
};

export type Citizens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Citizens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Citizens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "citizens" */
export type Citizens_Aggregate_Fields = {
  __typename?: 'citizens_aggregate_fields';
  avg?: Maybe<Citizens_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Citizens_Max_Fields>;
  min?: Maybe<Citizens_Min_Fields>;
  stddev?: Maybe<Citizens_Stddev_Fields>;
  stddev_pop?: Maybe<Citizens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Citizens_Stddev_Samp_Fields>;
  sum?: Maybe<Citizens_Sum_Fields>;
  var_pop?: Maybe<Citizens_Var_Pop_Fields>;
  var_samp?: Maybe<Citizens_Var_Samp_Fields>;
  variance?: Maybe<Citizens_Variance_Fields>;
};


/** aggregate fields of "citizens" */
export type Citizens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Citizens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "citizens" */
export type Citizens_Aggregate_Order_By = {
  avg?: InputMaybe<Citizens_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Citizens_Max_Order_By>;
  min?: InputMaybe<Citizens_Min_Order_By>;
  stddev?: InputMaybe<Citizens_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Citizens_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Citizens_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Citizens_Sum_Order_By>;
  var_pop?: InputMaybe<Citizens_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Citizens_Var_Samp_Order_By>;
  variance?: InputMaybe<Citizens_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "citizens" */
export type Citizens_Arr_Rel_Insert_Input = {
  data: Array<Citizens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Citizens_On_Conflict>;
};

/** aggregate avg on columns */
export type Citizens_Avg_Fields = {
  __typename?: 'citizens_avg_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "citizens" */
export type Citizens_Avg_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "citizens". All fields are combined with a logical 'AND'. */
export type Citizens_Bool_Exp = {
  _and?: InputMaybe<Array<Citizens_Bool_Exp>>;
  _not?: InputMaybe<Citizens_Bool_Exp>;
  _or?: InputMaybe<Array<Citizens_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  gender?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  species_asset?: InputMaybe<Species_Assets_Bool_Exp>;
  species_asset_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world_citizens?: InputMaybe<World_Citizens_Bool_Exp>;
  world_citizens_aggregate?: InputMaybe<World_Citizens_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "citizens" */
export const Citizens_Constraint = {
  /** unique or primary key constraint on columns "id" */
  CitizensPkey: 'citizens_pkey'
} as const;

export type Citizens_Constraint = typeof Citizens_Constraint[keyof typeof Citizens_Constraint];
/** input type for incrementing numeric columns in table "citizens" */
export type Citizens_Inc_Input = {
  gender?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "citizens" */
export type Citizens_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  species_asset?: InputMaybe<Species_Assets_Obj_Rel_Insert_Input>;
  species_asset_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world_citizens?: InputMaybe<World_Citizens_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Citizens_Max_Fields = {
  __typename?: 'citizens_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  species_asset_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "citizens" */
export type Citizens_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  species_asset_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Citizens_Min_Fields = {
  __typename?: 'citizens_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  species_asset_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "citizens" */
export type Citizens_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  species_asset_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "citizens" */
export type Citizens_Mutation_Response = {
  __typename?: 'citizens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Citizens>;
};

/** input type for inserting object relation for remote table "citizens" */
export type Citizens_Obj_Rel_Insert_Input = {
  data: Citizens_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Citizens_On_Conflict>;
};

/** on_conflict condition type for table "citizens" */
export type Citizens_On_Conflict = {
  constraint: Citizens_Constraint;
  update_columns?: Array<Citizens_Update_Column>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};

/** Ordering options when selecting data from "citizens". */
export type Citizens_Order_By = {
  created_at?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  species_asset?: InputMaybe<Species_Assets_Order_By>;
  species_asset_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world_citizens_aggregate?: InputMaybe<World_Citizens_Aggregate_Order_By>;
};

/** primary key columns input for table: citizens */
export type Citizens_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "citizens" */
export const Citizens_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Gender: 'gender',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  OwnerId: 'owner_id',
  /** column name */
  SpeciesAssetId: 'species_asset_id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Citizens_Select_Column = typeof Citizens_Select_Column[keyof typeof Citizens_Select_Column];
/** input type for updating data in table "citizens" */
export type Citizens_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  species_asset_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Citizens_Stddev_Fields = {
  __typename?: 'citizens_stddev_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "citizens" */
export type Citizens_Stddev_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Citizens_Stddev_Pop_Fields = {
  __typename?: 'citizens_stddev_pop_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "citizens" */
export type Citizens_Stddev_Pop_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Citizens_Stddev_Samp_Fields = {
  __typename?: 'citizens_stddev_samp_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "citizens" */
export type Citizens_Stddev_Samp_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "citizens" */
export type Citizens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Citizens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Citizens_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  species_asset_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Citizens_Sum_Fields = {
  __typename?: 'citizens_sum_fields';
  gender?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "citizens" */
export type Citizens_Sum_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** update columns of table "citizens" */
export const Citizens_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Gender: 'gender',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  OwnerId: 'owner_id',
  /** column name */
  SpeciesAssetId: 'species_asset_id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Citizens_Update_Column = typeof Citizens_Update_Column[keyof typeof Citizens_Update_Column];
export type Citizens_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Citizens_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Citizens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Citizens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Citizens_Var_Pop_Fields = {
  __typename?: 'citizens_var_pop_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "citizens" */
export type Citizens_Var_Pop_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Citizens_Var_Samp_Fields = {
  __typename?: 'citizens_var_samp_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "citizens" */
export type Citizens_Var_Samp_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Citizens_Variance_Fields = {
  __typename?: 'citizens_variance_fields';
  gender?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "citizens" */
export type Citizens_Variance_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export const Cursor_Ordering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC'
} as const;

export type Cursor_Ordering = typeof Cursor_Ordering[keyof typeof Cursor_Ordering];
export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "law_comment_reactions" */
export type Law_Comment_Reactions = {
  __typename?: 'law_comment_reactions';
  comment_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  law_comment: Law_Comments;
  type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "law_comment_reactions" */
export type Law_Comment_Reactions_Aggregate = {
  __typename?: 'law_comment_reactions_aggregate';
  aggregate?: Maybe<Law_Comment_Reactions_Aggregate_Fields>;
  nodes: Array<Law_Comment_Reactions>;
};

export type Law_Comment_Reactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Law_Comment_Reactions_Aggregate_Bool_Exp_Count>;
};

export type Law_Comment_Reactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "law_comment_reactions" */
export type Law_Comment_Reactions_Aggregate_Fields = {
  __typename?: 'law_comment_reactions_aggregate_fields';
  avg?: Maybe<Law_Comment_Reactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Comment_Reactions_Max_Fields>;
  min?: Maybe<Law_Comment_Reactions_Min_Fields>;
  stddev?: Maybe<Law_Comment_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<Law_Comment_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Law_Comment_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<Law_Comment_Reactions_Sum_Fields>;
  var_pop?: Maybe<Law_Comment_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<Law_Comment_Reactions_Var_Samp_Fields>;
  variance?: Maybe<Law_Comment_Reactions_Variance_Fields>;
};


/** aggregate fields of "law_comment_reactions" */
export type Law_Comment_Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "law_comment_reactions" */
export type Law_Comment_Reactions_Aggregate_Order_By = {
  avg?: InputMaybe<Law_Comment_Reactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Law_Comment_Reactions_Max_Order_By>;
  min?: InputMaybe<Law_Comment_Reactions_Min_Order_By>;
  stddev?: InputMaybe<Law_Comment_Reactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Law_Comment_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Law_Comment_Reactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Law_Comment_Reactions_Sum_Order_By>;
  var_pop?: InputMaybe<Law_Comment_Reactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Law_Comment_Reactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Law_Comment_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "law_comment_reactions" */
export type Law_Comment_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Law_Comment_Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Comment_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Law_Comment_Reactions_Avg_Fields = {
  __typename?: 'law_comment_reactions_avg_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Avg_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "law_comment_reactions". All fields are combined with a logical 'AND'. */
export type Law_Comment_Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Comment_Reactions_Bool_Exp>>;
  _not?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Comment_Reactions_Bool_Exp>>;
  comment_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  law_comment?: InputMaybe<Law_Comments_Bool_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_comment_reactions" */
export const Law_Comment_Reactions_Constraint = {
  /** unique or primary key constraint on columns "comment_id", "user_id", "type" */
  LawCommentReactionsPkey: 'law_comment_reactions_pkey'
} as const;

export type Law_Comment_Reactions_Constraint = typeof Law_Comment_Reactions_Constraint[keyof typeof Law_Comment_Reactions_Constraint];
/** input type for incrementing numeric columns in table "law_comment_reactions" */
export type Law_Comment_Reactions_Inc_Input = {
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "law_comment_reactions" */
export type Law_Comment_Reactions_Insert_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_comment?: InputMaybe<Law_Comments_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Law_Comment_Reactions_Max_Fields = {
  __typename?: 'law_comment_reactions_max_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Max_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Comment_Reactions_Min_Fields = {
  __typename?: 'law_comment_reactions_min_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Min_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "law_comment_reactions" */
export type Law_Comment_Reactions_Mutation_Response = {
  __typename?: 'law_comment_reactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Comment_Reactions>;
};

/** on_conflict condition type for table "law_comment_reactions" */
export type Law_Comment_Reactions_On_Conflict = {
  constraint: Law_Comment_Reactions_Constraint;
  update_columns?: Array<Law_Comment_Reactions_Update_Column>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "law_comment_reactions". */
export type Law_Comment_Reactions_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  law_comment?: InputMaybe<Law_Comments_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_comment_reactions */
export type Law_Comment_Reactions_Pk_Columns_Input = {
  comment_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "law_comment_reactions" */
export const Law_Comment_Reactions_Select_Column = {
  /** column name */
  CommentId: 'comment_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Comment_Reactions_Select_Column = typeof Law_Comment_Reactions_Select_Column[keyof typeof Law_Comment_Reactions_Select_Column];
/** input type for updating data in table "law_comment_reactions" */
export type Law_Comment_Reactions_Set_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Law_Comment_Reactions_Stddev_Fields = {
  __typename?: 'law_comment_reactions_stddev_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Stddev_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Law_Comment_Reactions_Stddev_Pop_Fields = {
  __typename?: 'law_comment_reactions_stddev_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Stddev_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Law_Comment_Reactions_Stddev_Samp_Fields = {
  __typename?: 'law_comment_reactions_stddev_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Stddev_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "law_comment_reactions" */
export type Law_Comment_Reactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Comment_Reactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Comment_Reactions_Stream_Cursor_Value_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Law_Comment_Reactions_Sum_Fields = {
  __typename?: 'law_comment_reactions_sum_fields';
  type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Sum_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** update columns of table "law_comment_reactions" */
export const Law_Comment_Reactions_Update_Column = {
  /** column name */
  CommentId: 'comment_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Comment_Reactions_Update_Column = typeof Law_Comment_Reactions_Update_Column[keyof typeof Law_Comment_Reactions_Update_Column];
export type Law_Comment_Reactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Law_Comment_Reactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Comment_Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Comment_Reactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Law_Comment_Reactions_Var_Pop_Fields = {
  __typename?: 'law_comment_reactions_var_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Var_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Law_Comment_Reactions_Var_Samp_Fields = {
  __typename?: 'law_comment_reactions_var_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Var_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Law_Comment_Reactions_Variance_Fields = {
  __typename?: 'law_comment_reactions_variance_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "law_comment_reactions" */
export type Law_Comment_Reactions_Variance_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** columns and relationships of "law_comments" */
export type Law_Comments = {
  __typename?: 'law_comments';
  author_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  law: Laws;
  /** An array relationship */
  law_comment_reactions: Array<Law_Comment_Reactions>;
  /** An aggregate relationship */
  law_comment_reactions_aggregate: Law_Comment_Reactions_Aggregate;
  law_id: Scalars['uuid']['output'];
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "law_comments" */
export type Law_CommentsLaw_Comment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comment_Reactions_Order_By>>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "law_comments" */
export type Law_CommentsLaw_Comment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comment_Reactions_Order_By>>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};

/** aggregated selection of "law_comments" */
export type Law_Comments_Aggregate = {
  __typename?: 'law_comments_aggregate';
  aggregate?: Maybe<Law_Comments_Aggregate_Fields>;
  nodes: Array<Law_Comments>;
};

export type Law_Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Law_Comments_Aggregate_Bool_Exp_Count>;
};

export type Law_Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Law_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Law_Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "law_comments" */
export type Law_Comments_Aggregate_Fields = {
  __typename?: 'law_comments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Comments_Max_Fields>;
  min?: Maybe<Law_Comments_Min_Fields>;
};


/** aggregate fields of "law_comments" */
export type Law_Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "law_comments" */
export type Law_Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Law_Comments_Max_Order_By>;
  min?: InputMaybe<Law_Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "law_comments" */
export type Law_Comments_Arr_Rel_Insert_Input = {
  data: Array<Law_Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "law_comments". All fields are combined with a logical 'AND'. */
export type Law_Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Comments_Bool_Exp>>;
  _not?: InputMaybe<Law_Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Comments_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_comment_reactions?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
  law_comment_reactions_aggregate?: InputMaybe<Law_Comment_Reactions_Aggregate_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "law_comments" */
export const Law_Comments_Constraint = {
  /** unique or primary key constraint on columns "id" */
  LawCommentsPkey: 'law_comments_pkey'
} as const;

export type Law_Comments_Constraint = typeof Law_Comments_Constraint[keyof typeof Law_Comments_Constraint];
/** input type for inserting data into table "law_comments" */
export type Law_Comments_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_comment_reactions?: InputMaybe<Law_Comment_Reactions_Arr_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Law_Comments_Max_Fields = {
  __typename?: 'law_comments_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "law_comments" */
export type Law_Comments_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Comments_Min_Fields = {
  __typename?: 'law_comments_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "law_comments" */
export type Law_Comments_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "law_comments" */
export type Law_Comments_Mutation_Response = {
  __typename?: 'law_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Comments>;
};

/** input type for inserting object relation for remote table "law_comments" */
export type Law_Comments_Obj_Rel_Insert_Input = {
  data: Law_Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Comments_On_Conflict>;
};

/** on_conflict condition type for table "law_comments" */
export type Law_Comments_On_Conflict = {
  constraint: Law_Comments_Constraint;
  update_columns?: Array<Law_Comments_Update_Column>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "law_comments". */
export type Law_Comments_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_comment_reactions_aggregate?: InputMaybe<Law_Comment_Reactions_Aggregate_Order_By>;
  law_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: law_comments */
export type Law_Comments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "law_comments" */
export const Law_Comments_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Law_Comments_Select_Column = typeof Law_Comments_Select_Column[keyof typeof Law_Comments_Select_Column];
/** input type for updating data in table "law_comments" */
export type Law_Comments_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "law_comments" */
export type Law_Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Comments_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "law_comments" */
export const Law_Comments_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Law_Comments_Update_Column = typeof Law_Comments_Update_Column[keyof typeof Law_Comments_Update_Column];
export type Law_Comments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Comments_Bool_Exp;
};

/** columns and relationships of "law_reactions" */
export type Law_Reactions = {
  __typename?: 'law_reactions';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "law_reactions" */
export type Law_Reactions_Aggregate = {
  __typename?: 'law_reactions_aggregate';
  aggregate?: Maybe<Law_Reactions_Aggregate_Fields>;
  nodes: Array<Law_Reactions>;
};

export type Law_Reactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Law_Reactions_Aggregate_Bool_Exp_Count>;
};

export type Law_Reactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Law_Reactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "law_reactions" */
export type Law_Reactions_Aggregate_Fields = {
  __typename?: 'law_reactions_aggregate_fields';
  avg?: Maybe<Law_Reactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Reactions_Max_Fields>;
  min?: Maybe<Law_Reactions_Min_Fields>;
  stddev?: Maybe<Law_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<Law_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Law_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<Law_Reactions_Sum_Fields>;
  var_pop?: Maybe<Law_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<Law_Reactions_Var_Samp_Fields>;
  variance?: Maybe<Law_Reactions_Variance_Fields>;
};


/** aggregate fields of "law_reactions" */
export type Law_Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "law_reactions" */
export type Law_Reactions_Aggregate_Order_By = {
  avg?: InputMaybe<Law_Reactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Law_Reactions_Max_Order_By>;
  min?: InputMaybe<Law_Reactions_Min_Order_By>;
  stddev?: InputMaybe<Law_Reactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Law_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Law_Reactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Law_Reactions_Sum_Order_By>;
  var_pop?: InputMaybe<Law_Reactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Law_Reactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Law_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "law_reactions" */
export type Law_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Law_Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Law_Reactions_Avg_Fields = {
  __typename?: 'law_reactions_avg_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "law_reactions" */
export type Law_Reactions_Avg_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "law_reactions". All fields are combined with a logical 'AND'. */
export type Law_Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Reactions_Bool_Exp>>;
  _not?: InputMaybe<Law_Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Reactions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_reactions" */
export const Law_Reactions_Constraint = {
  /** unique or primary key constraint on columns "user_id", "type", "law_id" */
  LawReactionsPkey: 'law_reactions_pkey'
} as const;

export type Law_Reactions_Constraint = typeof Law_Reactions_Constraint[keyof typeof Law_Reactions_Constraint];
/** input type for incrementing numeric columns in table "law_reactions" */
export type Law_Reactions_Inc_Input = {
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "law_reactions" */
export type Law_Reactions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Law_Reactions_Max_Fields = {
  __typename?: 'law_reactions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "law_reactions" */
export type Law_Reactions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Reactions_Min_Fields = {
  __typename?: 'law_reactions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "law_reactions" */
export type Law_Reactions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "law_reactions" */
export type Law_Reactions_Mutation_Response = {
  __typename?: 'law_reactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Reactions>;
};

/** on_conflict condition type for table "law_reactions" */
export type Law_Reactions_On_Conflict = {
  constraint: Law_Reactions_Constraint;
  update_columns?: Array<Law_Reactions_Update_Column>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "law_reactions". */
export type Law_Reactions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_reactions */
export type Law_Reactions_Pk_Columns_Input = {
  law_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "law_reactions" */
export const Law_Reactions_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Reactions_Select_Column = typeof Law_Reactions_Select_Column[keyof typeof Law_Reactions_Select_Column];
/** input type for updating data in table "law_reactions" */
export type Law_Reactions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Law_Reactions_Stddev_Fields = {
  __typename?: 'law_reactions_stddev_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "law_reactions" */
export type Law_Reactions_Stddev_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Law_Reactions_Stddev_Pop_Fields = {
  __typename?: 'law_reactions_stddev_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "law_reactions" */
export type Law_Reactions_Stddev_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Law_Reactions_Stddev_Samp_Fields = {
  __typename?: 'law_reactions_stddev_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "law_reactions" */
export type Law_Reactions_Stddev_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "law_reactions" */
export type Law_Reactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Reactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Reactions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Law_Reactions_Sum_Fields = {
  __typename?: 'law_reactions_sum_fields';
  type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "law_reactions" */
export type Law_Reactions_Sum_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** update columns of table "law_reactions" */
export const Law_Reactions_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Reactions_Update_Column = typeof Law_Reactions_Update_Column[keyof typeof Law_Reactions_Update_Column];
export type Law_Reactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Law_Reactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Reactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Law_Reactions_Var_Pop_Fields = {
  __typename?: 'law_reactions_var_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "law_reactions" */
export type Law_Reactions_Var_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Law_Reactions_Var_Samp_Fields = {
  __typename?: 'law_reactions_var_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "law_reactions" */
export type Law_Reactions_Var_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Law_Reactions_Variance_Fields = {
  __typename?: 'law_reactions_variance_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "law_reactions" */
export type Law_Reactions_Variance_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** columns and relationships of "law_revisions" */
export type Law_Revisions = {
  __typename?: 'law_revisions';
  block_json?: Maybe<Scalars['jsonb']['output']>;
  created_at: Scalars['timestamptz']['output'];
  data_xml?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  info_object?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  law: Laws;
  law_category?: Maybe<Scalars['String']['output']>;
  law_id: Scalars['uuid']['output'];
  law_image_url: Scalars['String']['output'];
  law_status?: Maybe<Scalars['Int']['output']>;
  law_type?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "law_revisions" */
export type Law_RevisionsBlock_JsonArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "law_revisions" */
export type Law_RevisionsInfo_ObjectArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "law_revisions" */
export type Law_Revisions_Aggregate = {
  __typename?: 'law_revisions_aggregate';
  aggregate?: Maybe<Law_Revisions_Aggregate_Fields>;
  nodes: Array<Law_Revisions>;
};

export type Law_Revisions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp_Count>;
};

export type Law_Revisions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Law_Revisions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "law_revisions" */
export type Law_Revisions_Aggregate_Fields = {
  __typename?: 'law_revisions_aggregate_fields';
  avg?: Maybe<Law_Revisions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Revisions_Max_Fields>;
  min?: Maybe<Law_Revisions_Min_Fields>;
  stddev?: Maybe<Law_Revisions_Stddev_Fields>;
  stddev_pop?: Maybe<Law_Revisions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Law_Revisions_Stddev_Samp_Fields>;
  sum?: Maybe<Law_Revisions_Sum_Fields>;
  var_pop?: Maybe<Law_Revisions_Var_Pop_Fields>;
  var_samp?: Maybe<Law_Revisions_Var_Samp_Fields>;
  variance?: Maybe<Law_Revisions_Variance_Fields>;
};


/** aggregate fields of "law_revisions" */
export type Law_Revisions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "law_revisions" */
export type Law_Revisions_Aggregate_Order_By = {
  avg?: InputMaybe<Law_Revisions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Law_Revisions_Max_Order_By>;
  min?: InputMaybe<Law_Revisions_Min_Order_By>;
  stddev?: InputMaybe<Law_Revisions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Law_Revisions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Law_Revisions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Law_Revisions_Sum_Order_By>;
  var_pop?: InputMaybe<Law_Revisions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Law_Revisions_Var_Samp_Order_By>;
  variance?: InputMaybe<Law_Revisions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Law_Revisions_Append_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
  info_object?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "law_revisions" */
export type Law_Revisions_Arr_Rel_Insert_Input = {
  data: Array<Law_Revisions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Revisions_On_Conflict>;
};

/** aggregate avg on columns */
export type Law_Revisions_Avg_Fields = {
  __typename?: 'law_revisions_avg_fields';
  law_status?: Maybe<Scalars['Float']['output']>;
  law_type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "law_revisions" */
export type Law_Revisions_Avg_Order_By = {
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "law_revisions". All fields are combined with a logical 'AND'. */
export type Law_Revisions_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Revisions_Bool_Exp>>;
  _not?: InputMaybe<Law_Revisions_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Revisions_Bool_Exp>>;
  block_json?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data_xml?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  info_object?: InputMaybe<Jsonb_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_category?: InputMaybe<String_Comparison_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  law_image_url?: InputMaybe<String_Comparison_Exp>;
  law_status?: InputMaybe<Int_Comparison_Exp>;
  law_type?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_revisions" */
export const Law_Revisions_Constraint = {
  /** unique or primary key constraint on columns "id" */
  LawRevisionsPkey: 'law_revisions_pkey'
} as const;

export type Law_Revisions_Constraint = typeof Law_Revisions_Constraint[keyof typeof Law_Revisions_Constraint];
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Law_Revisions_Delete_At_Path_Input = {
  block_json?: InputMaybe<Array<Scalars['String']['input']>>;
  info_object?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Law_Revisions_Delete_Elem_Input = {
  block_json?: InputMaybe<Scalars['Int']['input']>;
  info_object?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Law_Revisions_Delete_Key_Input = {
  block_json?: InputMaybe<Scalars['String']['input']>;
  info_object?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "law_revisions" */
export type Law_Revisions_Inc_Input = {
  law_status?: InputMaybe<Scalars['Int']['input']>;
  law_type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "law_revisions" */
export type Law_Revisions_Insert_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data_xml?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  info_object?: InputMaybe<Scalars['jsonb']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_category?: InputMaybe<Scalars['String']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_image_url?: InputMaybe<Scalars['String']['input']>;
  law_status?: InputMaybe<Scalars['Int']['input']>;
  law_type?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Law_Revisions_Max_Fields = {
  __typename?: 'law_revisions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  data_xml?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_category?: Maybe<Scalars['String']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  law_image_url?: Maybe<Scalars['String']['output']>;
  law_status?: Maybe<Scalars['Int']['output']>;
  law_type?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "law_revisions" */
export type Law_Revisions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data_xml?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_category?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_image_url?: InputMaybe<Order_By>;
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Revisions_Min_Fields = {
  __typename?: 'law_revisions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  data_xml?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_category?: Maybe<Scalars['String']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  law_image_url?: Maybe<Scalars['String']['output']>;
  law_status?: Maybe<Scalars['Int']['output']>;
  law_type?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "law_revisions" */
export type Law_Revisions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data_xml?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_category?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_image_url?: InputMaybe<Order_By>;
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "law_revisions" */
export type Law_Revisions_Mutation_Response = {
  __typename?: 'law_revisions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Revisions>;
};

/** on_conflict condition type for table "law_revisions" */
export type Law_Revisions_On_Conflict = {
  constraint: Law_Revisions_Constraint;
  update_columns?: Array<Law_Revisions_Update_Column>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};

/** Ordering options when selecting data from "law_revisions". */
export type Law_Revisions_Order_By = {
  block_json?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data_xml?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  info_object?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_category?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  law_image_url?: InputMaybe<Order_By>;
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_revisions */
export type Law_Revisions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Law_Revisions_Prepend_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
  info_object?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "law_revisions" */
export const Law_Revisions_Select_Column = {
  /** column name */
  BlockJson: 'block_json',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  DataXml: 'data_xml',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  InfoObject: 'info_object',
  /** column name */
  LawCategory: 'law_category',
  /** column name */
  LawId: 'law_id',
  /** column name */
  LawImageUrl: 'law_image_url',
  /** column name */
  LawStatus: 'law_status',
  /** column name */
  LawType: 'law_type',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Law_Revisions_Select_Column = typeof Law_Revisions_Select_Column[keyof typeof Law_Revisions_Select_Column];
/** input type for updating data in table "law_revisions" */
export type Law_Revisions_Set_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data_xml?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  info_object?: InputMaybe<Scalars['jsonb']['input']>;
  law_category?: InputMaybe<Scalars['String']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_image_url?: InputMaybe<Scalars['String']['input']>;
  law_status?: InputMaybe<Scalars['Int']['input']>;
  law_type?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Law_Revisions_Stddev_Fields = {
  __typename?: 'law_revisions_stddev_fields';
  law_status?: Maybe<Scalars['Float']['output']>;
  law_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "law_revisions" */
export type Law_Revisions_Stddev_Order_By = {
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Law_Revisions_Stddev_Pop_Fields = {
  __typename?: 'law_revisions_stddev_pop_fields';
  law_status?: Maybe<Scalars['Float']['output']>;
  law_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "law_revisions" */
export type Law_Revisions_Stddev_Pop_Order_By = {
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Law_Revisions_Stddev_Samp_Fields = {
  __typename?: 'law_revisions_stddev_samp_fields';
  law_status?: Maybe<Scalars['Float']['output']>;
  law_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "law_revisions" */
export type Law_Revisions_Stddev_Samp_Order_By = {
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "law_revisions" */
export type Law_Revisions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Revisions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Revisions_Stream_Cursor_Value_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data_xml?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  info_object?: InputMaybe<Scalars['jsonb']['input']>;
  law_category?: InputMaybe<Scalars['String']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  law_image_url?: InputMaybe<Scalars['String']['input']>;
  law_status?: InputMaybe<Scalars['Int']['input']>;
  law_type?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Law_Revisions_Sum_Fields = {
  __typename?: 'law_revisions_sum_fields';
  law_status?: Maybe<Scalars['Int']['output']>;
  law_type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "law_revisions" */
export type Law_Revisions_Sum_Order_By = {
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
};

/** update columns of table "law_revisions" */
export const Law_Revisions_Update_Column = {
  /** column name */
  BlockJson: 'block_json',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  DataXml: 'data_xml',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  InfoObject: 'info_object',
  /** column name */
  LawCategory: 'law_category',
  /** column name */
  LawId: 'law_id',
  /** column name */
  LawImageUrl: 'law_image_url',
  /** column name */
  LawStatus: 'law_status',
  /** column name */
  LawType: 'law_type',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Law_Revisions_Update_Column = typeof Law_Revisions_Update_Column[keyof typeof Law_Revisions_Update_Column];
export type Law_Revisions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Law_Revisions_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Law_Revisions_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Law_Revisions_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Law_Revisions_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Law_Revisions_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Law_Revisions_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Revisions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Revisions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Law_Revisions_Var_Pop_Fields = {
  __typename?: 'law_revisions_var_pop_fields';
  law_status?: Maybe<Scalars['Float']['output']>;
  law_type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "law_revisions" */
export type Law_Revisions_Var_Pop_Order_By = {
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Law_Revisions_Var_Samp_Fields = {
  __typename?: 'law_revisions_var_samp_fields';
  law_status?: Maybe<Scalars['Float']['output']>;
  law_type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "law_revisions" */
export type Law_Revisions_Var_Samp_Order_By = {
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Law_Revisions_Variance_Fields = {
  __typename?: 'law_revisions_variance_fields';
  law_status?: Maybe<Scalars['Float']['output']>;
  law_type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "law_revisions" */
export type Law_Revisions_Variance_Order_By = {
  law_status?: InputMaybe<Order_By>;
  law_type?: InputMaybe<Order_By>;
};

/** columns and relationships of "law_star_rates" */
export type Law_Star_Rates = {
  __typename?: 'law_star_rates';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  rate: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "law_star_rates" */
export type Law_Star_Rates_Aggregate = {
  __typename?: 'law_star_rates_aggregate';
  aggregate?: Maybe<Law_Star_Rates_Aggregate_Fields>;
  nodes: Array<Law_Star_Rates>;
};

export type Law_Star_Rates_Aggregate_Bool_Exp = {
  count?: InputMaybe<Law_Star_Rates_Aggregate_Bool_Exp_Count>;
};

export type Law_Star_Rates_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Law_Star_Rates_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "law_star_rates" */
export type Law_Star_Rates_Aggregate_Fields = {
  __typename?: 'law_star_rates_aggregate_fields';
  avg?: Maybe<Law_Star_Rates_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Law_Star_Rates_Max_Fields>;
  min?: Maybe<Law_Star_Rates_Min_Fields>;
  stddev?: Maybe<Law_Star_Rates_Stddev_Fields>;
  stddev_pop?: Maybe<Law_Star_Rates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Law_Star_Rates_Stddev_Samp_Fields>;
  sum?: Maybe<Law_Star_Rates_Sum_Fields>;
  var_pop?: Maybe<Law_Star_Rates_Var_Pop_Fields>;
  var_samp?: Maybe<Law_Star_Rates_Var_Samp_Fields>;
  variance?: Maybe<Law_Star_Rates_Variance_Fields>;
};


/** aggregate fields of "law_star_rates" */
export type Law_Star_Rates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "law_star_rates" */
export type Law_Star_Rates_Aggregate_Order_By = {
  avg?: InputMaybe<Law_Star_Rates_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Law_Star_Rates_Max_Order_By>;
  min?: InputMaybe<Law_Star_Rates_Min_Order_By>;
  stddev?: InputMaybe<Law_Star_Rates_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Law_Star_Rates_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Law_Star_Rates_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Law_Star_Rates_Sum_Order_By>;
  var_pop?: InputMaybe<Law_Star_Rates_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Law_Star_Rates_Var_Samp_Order_By>;
  variance?: InputMaybe<Law_Star_Rates_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "law_star_rates" */
export type Law_Star_Rates_Arr_Rel_Insert_Input = {
  data: Array<Law_Star_Rates_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Law_Star_Rates_On_Conflict>;
};

/** aggregate avg on columns */
export type Law_Star_Rates_Avg_Fields = {
  __typename?: 'law_star_rates_avg_fields';
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "law_star_rates" */
export type Law_Star_Rates_Avg_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "law_star_rates". All fields are combined with a logical 'AND'. */
export type Law_Star_Rates_Bool_Exp = {
  _and?: InputMaybe<Array<Law_Star_Rates_Bool_Exp>>;
  _not?: InputMaybe<Law_Star_Rates_Bool_Exp>;
  _or?: InputMaybe<Array<Law_Star_Rates_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  rate?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "law_star_rates" */
export const Law_Star_Rates_Constraint = {
  /** unique or primary key constraint on columns "user_id", "law_id" */
  LawStarRatesPkey: 'law_star_rates_pkey'
} as const;

export type Law_Star_Rates_Constraint = typeof Law_Star_Rates_Constraint[keyof typeof Law_Star_Rates_Constraint];
/** input type for incrementing numeric columns in table "law_star_rates" */
export type Law_Star_Rates_Inc_Input = {
  rate?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "law_star_rates" */
export type Law_Star_Rates_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Law_Star_Rates_Max_Fields = {
  __typename?: 'law_star_rates_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  rate?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "law_star_rates" */
export type Law_Star_Rates_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Law_Star_Rates_Min_Fields = {
  __typename?: 'law_star_rates_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  rate?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "law_star_rates" */
export type Law_Star_Rates_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "law_star_rates" */
export type Law_Star_Rates_Mutation_Response = {
  __typename?: 'law_star_rates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Law_Star_Rates>;
};

/** on_conflict condition type for table "law_star_rates" */
export type Law_Star_Rates_On_Conflict = {
  constraint: Law_Star_Rates_Constraint;
  update_columns?: Array<Law_Star_Rates_Update_Column>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};

/** Ordering options when selecting data from "law_star_rates". */
export type Law_Star_Rates_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: law_star_rates */
export type Law_Star_Rates_Pk_Columns_Input = {
  law_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "law_star_rates" */
export const Law_Star_Rates_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Rate: 'rate',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Star_Rates_Select_Column = typeof Law_Star_Rates_Select_Column[keyof typeof Law_Star_Rates_Select_Column];
/** input type for updating data in table "law_star_rates" */
export type Law_Star_Rates_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Law_Star_Rates_Stddev_Fields = {
  __typename?: 'law_star_rates_stddev_fields';
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "law_star_rates" */
export type Law_Star_Rates_Stddev_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Law_Star_Rates_Stddev_Pop_Fields = {
  __typename?: 'law_star_rates_stddev_pop_fields';
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "law_star_rates" */
export type Law_Star_Rates_Stddev_Pop_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Law_Star_Rates_Stddev_Samp_Fields = {
  __typename?: 'law_star_rates_stddev_samp_fields';
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "law_star_rates" */
export type Law_Star_Rates_Stddev_Samp_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "law_star_rates" */
export type Law_Star_Rates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Law_Star_Rates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Law_Star_Rates_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Law_Star_Rates_Sum_Fields = {
  __typename?: 'law_star_rates_sum_fields';
  rate?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "law_star_rates" */
export type Law_Star_Rates_Sum_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** update columns of table "law_star_rates" */
export const Law_Star_Rates_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  Rate: 'rate',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type Law_Star_Rates_Update_Column = typeof Law_Star_Rates_Update_Column[keyof typeof Law_Star_Rates_Update_Column];
export type Law_Star_Rates_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Law_Star_Rates_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Law_Star_Rates_Set_Input>;
  /** filter the rows which have to be updated */
  where: Law_Star_Rates_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Law_Star_Rates_Var_Pop_Fields = {
  __typename?: 'law_star_rates_var_pop_fields';
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "law_star_rates" */
export type Law_Star_Rates_Var_Pop_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Law_Star_Rates_Var_Samp_Fields = {
  __typename?: 'law_star_rates_var_samp_fields';
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "law_star_rates" */
export type Law_Star_Rates_Var_Samp_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Law_Star_Rates_Variance_Fields = {
  __typename?: 'law_star_rates_variance_fields';
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "law_star_rates" */
export type Law_Star_Rates_Variance_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** columns and relationships of "laws" */
export type Laws = {
  __typename?: 'laws';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  law_api_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  law_comments: Array<Law_Comments>;
  /** An aggregate relationship */
  law_comments_aggregate: Law_Comments_Aggregate;
  /** An array relationship */
  law_reactions: Array<Law_Reactions>;
  /** An aggregate relationship */
  law_reactions_aggregate: Law_Reactions_Aggregate;
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  /** An array relationship */
  law_star_rates: Array<Law_Star_Rates>;
  /** An aggregate relationship */
  law_star_rates_aggregate: Law_Star_Rates_Aggregate;
  newness: Scalars['Int']['output'];
  place: Scalars['String']['output'];
  promulgation_date?: Maybe<Scalars['String']['output']>;
  type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  /** An array relationship */
  world_laws: Array<World_Laws>;
  /** An aggregate relationship */
  world_laws_aggregate: World_Laws_Aggregate;
};


/** columns and relationships of "laws" */
export type LawsLaw_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Law_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comments_Order_By>>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comments_Order_By>>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Reactions_Order_By>>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Reactions_Order_By>>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_Star_RatesArgs = {
  distinct_on?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Star_Rates_Order_By>>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsLaw_Star_Rates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Star_Rates_Order_By>>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsWorld_LawsArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


/** columns and relationships of "laws" */
export type LawsWorld_Laws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};

/** aggregated selection of "laws" */
export type Laws_Aggregate = {
  __typename?: 'laws_aggregate';
  aggregate?: Maybe<Laws_Aggregate_Fields>;
  nodes: Array<Laws>;
};

export type Laws_Aggregate_Bool_Exp = {
  count?: InputMaybe<Laws_Aggregate_Bool_Exp_Count>;
};

export type Laws_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Laws_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laws_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "laws" */
export type Laws_Aggregate_Fields = {
  __typename?: 'laws_aggregate_fields';
  avg?: Maybe<Laws_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Laws_Max_Fields>;
  min?: Maybe<Laws_Min_Fields>;
  stddev?: Maybe<Laws_Stddev_Fields>;
  stddev_pop?: Maybe<Laws_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laws_Stddev_Samp_Fields>;
  sum?: Maybe<Laws_Sum_Fields>;
  var_pop?: Maybe<Laws_Var_Pop_Fields>;
  var_samp?: Maybe<Laws_Var_Samp_Fields>;
  variance?: Maybe<Laws_Variance_Fields>;
};


/** aggregate fields of "laws" */
export type Laws_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laws_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "laws" */
export type Laws_Aggregate_Order_By = {
  avg?: InputMaybe<Laws_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laws_Max_Order_By>;
  min?: InputMaybe<Laws_Min_Order_By>;
  stddev?: InputMaybe<Laws_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laws_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laws_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laws_Sum_Order_By>;
  var_pop?: InputMaybe<Laws_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laws_Var_Samp_Order_By>;
  variance?: InputMaybe<Laws_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laws" */
export type Laws_Arr_Rel_Insert_Input = {
  data: Array<Laws_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laws_On_Conflict>;
};

/** aggregate avg on columns */
export type Laws_Avg_Fields = {
  __typename?: 'laws_avg_fields';
  newness?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "laws" */
export type Laws_Avg_Order_By = {
  newness?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laws". All fields are combined with a logical 'AND'. */
export type Laws_Bool_Exp = {
  _and?: InputMaybe<Array<Laws_Bool_Exp>>;
  _not?: InputMaybe<Laws_Bool_Exp>;
  _or?: InputMaybe<Array<Laws_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  law_api_id?: InputMaybe<String_Comparison_Exp>;
  law_comments?: InputMaybe<Law_Comments_Bool_Exp>;
  law_comments_aggregate?: InputMaybe<Law_Comments_Aggregate_Bool_Exp>;
  law_reactions?: InputMaybe<Law_Reactions_Bool_Exp>;
  law_reactions_aggregate?: InputMaybe<Law_Reactions_Aggregate_Bool_Exp>;
  law_revisions?: InputMaybe<Law_Revisions_Bool_Exp>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Bool_Exp>;
  law_star_rates?: InputMaybe<Law_Star_Rates_Bool_Exp>;
  law_star_rates_aggregate?: InputMaybe<Law_Star_Rates_Aggregate_Bool_Exp>;
  newness?: InputMaybe<Int_Comparison_Exp>;
  place?: InputMaybe<String_Comparison_Exp>;
  promulgation_date?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world_laws?: InputMaybe<World_Laws_Bool_Exp>;
  world_laws_aggregate?: InputMaybe<World_Laws_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "laws" */
export const Laws_Constraint = {
  /** unique or primary key constraint on columns "law_api_id" */
  LawsLawApiIdKey: 'laws_law_api_id_key',
  /** unique or primary key constraint on columns "id" */
  LawsPkey: 'laws_pkey'
} as const;

export type Laws_Constraint = typeof Laws_Constraint[keyof typeof Laws_Constraint];
/** input type for incrementing numeric columns in table "laws" */
export type Laws_Inc_Input = {
  newness?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "laws" */
export type Laws_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_api_id?: InputMaybe<Scalars['String']['input']>;
  law_comments?: InputMaybe<Law_Comments_Arr_Rel_Insert_Input>;
  law_reactions?: InputMaybe<Law_Reactions_Arr_Rel_Insert_Input>;
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  law_star_rates?: InputMaybe<Law_Star_Rates_Arr_Rel_Insert_Input>;
  newness?: InputMaybe<Scalars['Int']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  promulgation_date?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world_laws?: InputMaybe<World_Laws_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Laws_Max_Fields = {
  __typename?: 'laws_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_api_id?: Maybe<Scalars['String']['output']>;
  newness?: Maybe<Scalars['Int']['output']>;
  place?: Maybe<Scalars['String']['output']>;
  promulgation_date?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "laws" */
export type Laws_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_api_id?: InputMaybe<Order_By>;
  newness?: InputMaybe<Order_By>;
  place?: InputMaybe<Order_By>;
  promulgation_date?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laws_Min_Fields = {
  __typename?: 'laws_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  law_api_id?: Maybe<Scalars['String']['output']>;
  newness?: Maybe<Scalars['Int']['output']>;
  place?: Maybe<Scalars['String']['output']>;
  promulgation_date?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "laws" */
export type Laws_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_api_id?: InputMaybe<Order_By>;
  newness?: InputMaybe<Order_By>;
  place?: InputMaybe<Order_By>;
  promulgation_date?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laws" */
export type Laws_Mutation_Response = {
  __typename?: 'laws_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Laws>;
};

/** input type for inserting object relation for remote table "laws" */
export type Laws_Obj_Rel_Insert_Input = {
  data: Laws_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Laws_On_Conflict>;
};

/** on_conflict condition type for table "laws" */
export type Laws_On_Conflict = {
  constraint: Laws_Constraint;
  update_columns?: Array<Laws_Update_Column>;
  where?: InputMaybe<Laws_Bool_Exp>;
};

/** Ordering options when selecting data from "laws". */
export type Laws_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  law_api_id?: InputMaybe<Order_By>;
  law_comments_aggregate?: InputMaybe<Law_Comments_Aggregate_Order_By>;
  law_reactions_aggregate?: InputMaybe<Law_Reactions_Aggregate_Order_By>;
  law_revisions_aggregate?: InputMaybe<Law_Revisions_Aggregate_Order_By>;
  law_star_rates_aggregate?: InputMaybe<Law_Star_Rates_Aggregate_Order_By>;
  newness?: InputMaybe<Order_By>;
  place?: InputMaybe<Order_By>;
  promulgation_date?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world_laws_aggregate?: InputMaybe<World_Laws_Aggregate_Order_By>;
};

/** primary key columns input for table: laws */
export type Laws_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "laws" */
export const Laws_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  LawApiId: 'law_api_id',
  /** column name */
  Newness: 'newness',
  /** column name */
  Place: 'place',
  /** column name */
  PromulgationDate: 'promulgation_date',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Laws_Select_Column = typeof Laws_Select_Column[keyof typeof Laws_Select_Column];
/** input type for updating data in table "laws" */
export type Laws_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_api_id?: InputMaybe<Scalars['String']['input']>;
  newness?: InputMaybe<Scalars['Int']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  promulgation_date?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Laws_Stddev_Fields = {
  __typename?: 'laws_stddev_fields';
  newness?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "laws" */
export type Laws_Stddev_Order_By = {
  newness?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laws_Stddev_Pop_Fields = {
  __typename?: 'laws_stddev_pop_fields';
  newness?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "laws" */
export type Laws_Stddev_Pop_Order_By = {
  newness?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laws_Stddev_Samp_Fields = {
  __typename?: 'laws_stddev_samp_fields';
  newness?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "laws" */
export type Laws_Stddev_Samp_Order_By = {
  newness?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laws" */
export type Laws_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laws_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laws_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  law_api_id?: InputMaybe<Scalars['String']['input']>;
  newness?: InputMaybe<Scalars['Int']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  promulgation_date?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Laws_Sum_Fields = {
  __typename?: 'laws_sum_fields';
  newness?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "laws" */
export type Laws_Sum_Order_By = {
  newness?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** update columns of table "laws" */
export const Laws_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  LawApiId: 'law_api_id',
  /** column name */
  Newness: 'newness',
  /** column name */
  Place: 'place',
  /** column name */
  PromulgationDate: 'promulgation_date',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Laws_Update_Column = typeof Laws_Update_Column[keyof typeof Laws_Update_Column];
export type Laws_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laws_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laws_Set_Input>;
  /** filter the rows which have to be updated */
  where: Laws_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laws_Var_Pop_Fields = {
  __typename?: 'laws_var_pop_fields';
  newness?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "laws" */
export type Laws_Var_Pop_Order_By = {
  newness?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laws_Var_Samp_Fields = {
  __typename?: 'laws_var_samp_fields';
  newness?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "laws" */
export type Laws_Var_Samp_Order_By = {
  newness?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laws_Variance_Fields = {
  __typename?: 'laws_variance_fields';
  newness?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "laws" */
export type Laws_Variance_Order_By = {
  newness?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** columns and relationships of "maintenances" */
export type Maintenances = {
  __typename?: 'maintenances';
  created_at: Scalars['timestamptz']['output'];
  end_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  start_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "maintenances" */
export type Maintenances_Aggregate = {
  __typename?: 'maintenances_aggregate';
  aggregate?: Maybe<Maintenances_Aggregate_Fields>;
  nodes: Array<Maintenances>;
};

/** aggregate fields of "maintenances" */
export type Maintenances_Aggregate_Fields = {
  __typename?: 'maintenances_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Maintenances_Max_Fields>;
  min?: Maybe<Maintenances_Min_Fields>;
};


/** aggregate fields of "maintenances" */
export type Maintenances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Maintenances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "maintenances". All fields are combined with a logical 'AND'. */
export type Maintenances_Bool_Exp = {
  _and?: InputMaybe<Array<Maintenances_Bool_Exp>>;
  _not?: InputMaybe<Maintenances_Bool_Exp>;
  _or?: InputMaybe<Array<Maintenances_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  start_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "maintenances" */
export const Maintenances_Constraint = {
  /** unique or primary key constraint on columns "id" */
  MaintenancesPkey: 'maintenances_pkey'
} as const;

export type Maintenances_Constraint = typeof Maintenances_Constraint[keyof typeof Maintenances_Constraint];
/** input type for inserting data into table "maintenances" */
export type Maintenances_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Maintenances_Max_Fields = {
  __typename?: 'maintenances_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Maintenances_Min_Fields = {
  __typename?: 'maintenances_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "maintenances" */
export type Maintenances_Mutation_Response = {
  __typename?: 'maintenances_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Maintenances>;
};

/** on_conflict condition type for table "maintenances" */
export type Maintenances_On_Conflict = {
  constraint: Maintenances_Constraint;
  update_columns?: Array<Maintenances_Update_Column>;
  where?: InputMaybe<Maintenances_Bool_Exp>;
};

/** Ordering options when selecting data from "maintenances". */
export type Maintenances_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: maintenances */
export type Maintenances_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "maintenances" */
export const Maintenances_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  EndTimestamp: 'end_timestamp',
  /** column name */
  Id: 'id',
  /** column name */
  StartTimestamp: 'start_timestamp',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Maintenances_Select_Column = typeof Maintenances_Select_Column[keyof typeof Maintenances_Select_Column];
/** input type for updating data in table "maintenances" */
export type Maintenances_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "maintenances" */
export type Maintenances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Maintenances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Maintenances_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "maintenances" */
export const Maintenances_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  EndTimestamp: 'end_timestamp',
  /** column name */
  Id: 'id',
  /** column name */
  StartTimestamp: 'start_timestamp',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Maintenances_Update_Column = typeof Maintenances_Update_Column[keyof typeof Maintenances_Update_Column];
export type Maintenances_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Maintenances_Set_Input>;
  /** filter the rows which have to be updated */
  where: Maintenances_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "citizens" */
  delete_citizens?: Maybe<Citizens_Mutation_Response>;
  /** delete single row from the table: "citizens" */
  delete_citizens_by_pk?: Maybe<Citizens>;
  /** delete data from the table: "law_comment_reactions" */
  delete_law_comment_reactions?: Maybe<Law_Comment_Reactions_Mutation_Response>;
  /** delete single row from the table: "law_comment_reactions" */
  delete_law_comment_reactions_by_pk?: Maybe<Law_Comment_Reactions>;
  /** delete data from the table: "law_comments" */
  delete_law_comments?: Maybe<Law_Comments_Mutation_Response>;
  /** delete single row from the table: "law_comments" */
  delete_law_comments_by_pk?: Maybe<Law_Comments>;
  /** delete data from the table: "law_reactions" */
  delete_law_reactions?: Maybe<Law_Reactions_Mutation_Response>;
  /** delete single row from the table: "law_reactions" */
  delete_law_reactions_by_pk?: Maybe<Law_Reactions>;
  /** delete data from the table: "law_revisions" */
  delete_law_revisions?: Maybe<Law_Revisions_Mutation_Response>;
  /** delete single row from the table: "law_revisions" */
  delete_law_revisions_by_pk?: Maybe<Law_Revisions>;
  /** delete data from the table: "law_star_rates" */
  delete_law_star_rates?: Maybe<Law_Star_Rates_Mutation_Response>;
  /** delete single row from the table: "law_star_rates" */
  delete_law_star_rates_by_pk?: Maybe<Law_Star_Rates>;
  /** delete data from the table: "laws" */
  delete_laws?: Maybe<Laws_Mutation_Response>;
  /** delete single row from the table: "laws" */
  delete_laws_by_pk?: Maybe<Laws>;
  /** delete data from the table: "maintenances" */
  delete_maintenances?: Maybe<Maintenances_Mutation_Response>;
  /** delete single row from the table: "maintenances" */
  delete_maintenances_by_pk?: Maybe<Maintenances>;
  /** delete data from the table: "species" */
  delete_species?: Maybe<Species_Mutation_Response>;
  /** delete data from the table: "species_assets" */
  delete_species_assets?: Maybe<Species_Assets_Mutation_Response>;
  /** delete single row from the table: "species_assets" */
  delete_species_assets_by_pk?: Maybe<Species_Assets>;
  /** delete single row from the table: "species" */
  delete_species_by_pk?: Maybe<Species>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "world_citizens" */
  delete_world_citizens?: Maybe<World_Citizens_Mutation_Response>;
  /** delete single row from the table: "world_citizens" */
  delete_world_citizens_by_pk?: Maybe<World_Citizens>;
  /** delete data from the table: "world_comment_reactions" */
  delete_world_comment_reactions?: Maybe<World_Comment_Reactions_Mutation_Response>;
  /** delete single row from the table: "world_comment_reactions" */
  delete_world_comment_reactions_by_pk?: Maybe<World_Comment_Reactions>;
  /** delete data from the table: "world_comments" */
  delete_world_comments?: Maybe<World_Comments_Mutation_Response>;
  /** delete single row from the table: "world_comments" */
  delete_world_comments_by_pk?: Maybe<World_Comments>;
  /** delete data from the table: "world_histories" */
  delete_world_histories?: Maybe<World_Histories_Mutation_Response>;
  /** delete single row from the table: "world_histories" */
  delete_world_histories_by_pk?: Maybe<World_Histories>;
  /** delete data from the table: "world_laws" */
  delete_world_laws?: Maybe<World_Laws_Mutation_Response>;
  /** delete single row from the table: "world_laws" */
  delete_world_laws_by_pk?: Maybe<World_Laws>;
  /** delete data from the table: "world_reactions" */
  delete_world_reactions?: Maybe<World_Reactions_Mutation_Response>;
  /** delete single row from the table: "world_reactions" */
  delete_world_reactions_by_pk?: Maybe<World_Reactions>;
  /** delete data from the table: "worlds" */
  delete_worlds?: Maybe<Worlds_Mutation_Response>;
  /** delete single row from the table: "worlds" */
  delete_worlds_by_pk?: Maybe<Worlds>;
  /** insert data into the table: "citizens" */
  insert_citizens?: Maybe<Citizens_Mutation_Response>;
  /** insert a single row into the table: "citizens" */
  insert_citizens_one?: Maybe<Citizens>;
  /** insert data into the table: "law_comment_reactions" */
  insert_law_comment_reactions?: Maybe<Law_Comment_Reactions_Mutation_Response>;
  /** insert a single row into the table: "law_comment_reactions" */
  insert_law_comment_reactions_one?: Maybe<Law_Comment_Reactions>;
  /** insert data into the table: "law_comments" */
  insert_law_comments?: Maybe<Law_Comments_Mutation_Response>;
  /** insert a single row into the table: "law_comments" */
  insert_law_comments_one?: Maybe<Law_Comments>;
  /** insert data into the table: "law_reactions" */
  insert_law_reactions?: Maybe<Law_Reactions_Mutation_Response>;
  /** insert a single row into the table: "law_reactions" */
  insert_law_reactions_one?: Maybe<Law_Reactions>;
  /** insert data into the table: "law_revisions" */
  insert_law_revisions?: Maybe<Law_Revisions_Mutation_Response>;
  /** insert a single row into the table: "law_revisions" */
  insert_law_revisions_one?: Maybe<Law_Revisions>;
  /** insert data into the table: "law_star_rates" */
  insert_law_star_rates?: Maybe<Law_Star_Rates_Mutation_Response>;
  /** insert a single row into the table: "law_star_rates" */
  insert_law_star_rates_one?: Maybe<Law_Star_Rates>;
  /** insert data into the table: "laws" */
  insert_laws?: Maybe<Laws_Mutation_Response>;
  /** insert a single row into the table: "laws" */
  insert_laws_one?: Maybe<Laws>;
  /** insert data into the table: "maintenances" */
  insert_maintenances?: Maybe<Maintenances_Mutation_Response>;
  /** insert a single row into the table: "maintenances" */
  insert_maintenances_one?: Maybe<Maintenances>;
  /** insert data into the table: "species" */
  insert_species?: Maybe<Species_Mutation_Response>;
  /** insert data into the table: "species_assets" */
  insert_species_assets?: Maybe<Species_Assets_Mutation_Response>;
  /** insert a single row into the table: "species_assets" */
  insert_species_assets_one?: Maybe<Species_Assets>;
  /** insert a single row into the table: "species" */
  insert_species_one?: Maybe<Species>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "world_citizens" */
  insert_world_citizens?: Maybe<World_Citizens_Mutation_Response>;
  /** insert a single row into the table: "world_citizens" */
  insert_world_citizens_one?: Maybe<World_Citizens>;
  /** insert data into the table: "world_comment_reactions" */
  insert_world_comment_reactions?: Maybe<World_Comment_Reactions_Mutation_Response>;
  /** insert a single row into the table: "world_comment_reactions" */
  insert_world_comment_reactions_one?: Maybe<World_Comment_Reactions>;
  /** insert data into the table: "world_comments" */
  insert_world_comments?: Maybe<World_Comments_Mutation_Response>;
  /** insert a single row into the table: "world_comments" */
  insert_world_comments_one?: Maybe<World_Comments>;
  /** insert data into the table: "world_histories" */
  insert_world_histories?: Maybe<World_Histories_Mutation_Response>;
  /** insert a single row into the table: "world_histories" */
  insert_world_histories_one?: Maybe<World_Histories>;
  /** insert data into the table: "world_laws" */
  insert_world_laws?: Maybe<World_Laws_Mutation_Response>;
  /** insert a single row into the table: "world_laws" */
  insert_world_laws_one?: Maybe<World_Laws>;
  /** insert data into the table: "world_reactions" */
  insert_world_reactions?: Maybe<World_Reactions_Mutation_Response>;
  /** insert a single row into the table: "world_reactions" */
  insert_world_reactions_one?: Maybe<World_Reactions>;
  /** insert data into the table: "worlds" */
  insert_worlds?: Maybe<Worlds_Mutation_Response>;
  /** insert a single row into the table: "worlds" */
  insert_worlds_one?: Maybe<Worlds>;
  /** update data of the table: "citizens" */
  update_citizens?: Maybe<Citizens_Mutation_Response>;
  /** update single row of the table: "citizens" */
  update_citizens_by_pk?: Maybe<Citizens>;
  /** update multiples rows of table: "citizens" */
  update_citizens_many?: Maybe<Array<Maybe<Citizens_Mutation_Response>>>;
  /** update data of the table: "law_comment_reactions" */
  update_law_comment_reactions?: Maybe<Law_Comment_Reactions_Mutation_Response>;
  /** update single row of the table: "law_comment_reactions" */
  update_law_comment_reactions_by_pk?: Maybe<Law_Comment_Reactions>;
  /** update multiples rows of table: "law_comment_reactions" */
  update_law_comment_reactions_many?: Maybe<Array<Maybe<Law_Comment_Reactions_Mutation_Response>>>;
  /** update data of the table: "law_comments" */
  update_law_comments?: Maybe<Law_Comments_Mutation_Response>;
  /** update single row of the table: "law_comments" */
  update_law_comments_by_pk?: Maybe<Law_Comments>;
  /** update multiples rows of table: "law_comments" */
  update_law_comments_many?: Maybe<Array<Maybe<Law_Comments_Mutation_Response>>>;
  /** update data of the table: "law_reactions" */
  update_law_reactions?: Maybe<Law_Reactions_Mutation_Response>;
  /** update single row of the table: "law_reactions" */
  update_law_reactions_by_pk?: Maybe<Law_Reactions>;
  /** update multiples rows of table: "law_reactions" */
  update_law_reactions_many?: Maybe<Array<Maybe<Law_Reactions_Mutation_Response>>>;
  /** update data of the table: "law_revisions" */
  update_law_revisions?: Maybe<Law_Revisions_Mutation_Response>;
  /** update single row of the table: "law_revisions" */
  update_law_revisions_by_pk?: Maybe<Law_Revisions>;
  /** update multiples rows of table: "law_revisions" */
  update_law_revisions_many?: Maybe<Array<Maybe<Law_Revisions_Mutation_Response>>>;
  /** update data of the table: "law_star_rates" */
  update_law_star_rates?: Maybe<Law_Star_Rates_Mutation_Response>;
  /** update single row of the table: "law_star_rates" */
  update_law_star_rates_by_pk?: Maybe<Law_Star_Rates>;
  /** update multiples rows of table: "law_star_rates" */
  update_law_star_rates_many?: Maybe<Array<Maybe<Law_Star_Rates_Mutation_Response>>>;
  /** update data of the table: "laws" */
  update_laws?: Maybe<Laws_Mutation_Response>;
  /** update single row of the table: "laws" */
  update_laws_by_pk?: Maybe<Laws>;
  /** update multiples rows of table: "laws" */
  update_laws_many?: Maybe<Array<Maybe<Laws_Mutation_Response>>>;
  /** update data of the table: "maintenances" */
  update_maintenances?: Maybe<Maintenances_Mutation_Response>;
  /** update single row of the table: "maintenances" */
  update_maintenances_by_pk?: Maybe<Maintenances>;
  /** update multiples rows of table: "maintenances" */
  update_maintenances_many?: Maybe<Array<Maybe<Maintenances_Mutation_Response>>>;
  /** update data of the table: "species" */
  update_species?: Maybe<Species_Mutation_Response>;
  /** update data of the table: "species_assets" */
  update_species_assets?: Maybe<Species_Assets_Mutation_Response>;
  /** update single row of the table: "species_assets" */
  update_species_assets_by_pk?: Maybe<Species_Assets>;
  /** update multiples rows of table: "species_assets" */
  update_species_assets_many?: Maybe<Array<Maybe<Species_Assets_Mutation_Response>>>;
  /** update single row of the table: "species" */
  update_species_by_pk?: Maybe<Species>;
  /** update multiples rows of table: "species" */
  update_species_many?: Maybe<Array<Maybe<Species_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "world_citizens" */
  update_world_citizens?: Maybe<World_Citizens_Mutation_Response>;
  /** update single row of the table: "world_citizens" */
  update_world_citizens_by_pk?: Maybe<World_Citizens>;
  /** update multiples rows of table: "world_citizens" */
  update_world_citizens_many?: Maybe<Array<Maybe<World_Citizens_Mutation_Response>>>;
  /** update data of the table: "world_comment_reactions" */
  update_world_comment_reactions?: Maybe<World_Comment_Reactions_Mutation_Response>;
  /** update single row of the table: "world_comment_reactions" */
  update_world_comment_reactions_by_pk?: Maybe<World_Comment_Reactions>;
  /** update multiples rows of table: "world_comment_reactions" */
  update_world_comment_reactions_many?: Maybe<Array<Maybe<World_Comment_Reactions_Mutation_Response>>>;
  /** update data of the table: "world_comments" */
  update_world_comments?: Maybe<World_Comments_Mutation_Response>;
  /** update single row of the table: "world_comments" */
  update_world_comments_by_pk?: Maybe<World_Comments>;
  /** update multiples rows of table: "world_comments" */
  update_world_comments_many?: Maybe<Array<Maybe<World_Comments_Mutation_Response>>>;
  /** update data of the table: "world_histories" */
  update_world_histories?: Maybe<World_Histories_Mutation_Response>;
  /** update single row of the table: "world_histories" */
  update_world_histories_by_pk?: Maybe<World_Histories>;
  /** update multiples rows of table: "world_histories" */
  update_world_histories_many?: Maybe<Array<Maybe<World_Histories_Mutation_Response>>>;
  /** update data of the table: "world_laws" */
  update_world_laws?: Maybe<World_Laws_Mutation_Response>;
  /** update single row of the table: "world_laws" */
  update_world_laws_by_pk?: Maybe<World_Laws>;
  /** update multiples rows of table: "world_laws" */
  update_world_laws_many?: Maybe<Array<Maybe<World_Laws_Mutation_Response>>>;
  /** update data of the table: "world_reactions" */
  update_world_reactions?: Maybe<World_Reactions_Mutation_Response>;
  /** update single row of the table: "world_reactions" */
  update_world_reactions_by_pk?: Maybe<World_Reactions>;
  /** update multiples rows of table: "world_reactions" */
  update_world_reactions_many?: Maybe<Array<Maybe<World_Reactions_Mutation_Response>>>;
  /** update data of the table: "worlds" */
  update_worlds?: Maybe<Worlds_Mutation_Response>;
  /** update single row of the table: "worlds" */
  update_worlds_by_pk?: Maybe<Worlds>;
  /** update multiples rows of table: "worlds" */
  update_worlds_many?: Maybe<Array<Maybe<Worlds_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CitizensArgs = {
  where: Citizens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Citizens_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_Comment_ReactionsArgs = {
  where: Law_Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Comment_Reactions_By_PkArgs = {
  comment_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_CommentsArgs = {
  where: Law_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_ReactionsArgs = {
  where: Law_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Reactions_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_RevisionsArgs = {
  where: Law_Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Revisions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Law_Star_RatesArgs = {
  where: Law_Star_Rates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Law_Star_Rates_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LawsArgs = {
  where: Laws_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laws_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MaintenancesArgs = {
  where: Maintenances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Maintenances_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SpeciesArgs = {
  where: Species_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Species_AssetsArgs = {
  where: Species_Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Species_Assets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Species_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_CitizensArgs = {
  where: World_Citizens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Citizens_By_PkArgs = {
  citizen_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_Comment_ReactionsArgs = {
  where: World_Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Comment_Reactions_By_PkArgs = {
  comment_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_CommentsArgs = {
  where: World_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_HistoriesArgs = {
  where: World_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_LawsArgs = {
  where: World_Laws_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Laws_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_World_ReactionsArgs = {
  where: World_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_World_Reactions_By_PkArgs = {
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WorldsArgs = {
  where: Worlds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Worlds_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CitizensArgs = {
  objects: Array<Citizens_Insert_Input>;
  on_conflict?: InputMaybe<Citizens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Citizens_OneArgs = {
  object: Citizens_Insert_Input;
  on_conflict?: InputMaybe<Citizens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Comment_ReactionsArgs = {
  objects: Array<Law_Comment_Reactions_Insert_Input>;
  on_conflict?: InputMaybe<Law_Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Comment_Reactions_OneArgs = {
  object: Law_Comment_Reactions_Insert_Input;
  on_conflict?: InputMaybe<Law_Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_CommentsArgs = {
  objects: Array<Law_Comments_Insert_Input>;
  on_conflict?: InputMaybe<Law_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Comments_OneArgs = {
  object: Law_Comments_Insert_Input;
  on_conflict?: InputMaybe<Law_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_ReactionsArgs = {
  objects: Array<Law_Reactions_Insert_Input>;
  on_conflict?: InputMaybe<Law_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Reactions_OneArgs = {
  object: Law_Reactions_Insert_Input;
  on_conflict?: InputMaybe<Law_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_RevisionsArgs = {
  objects: Array<Law_Revisions_Insert_Input>;
  on_conflict?: InputMaybe<Law_Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Revisions_OneArgs = {
  object: Law_Revisions_Insert_Input;
  on_conflict?: InputMaybe<Law_Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Star_RatesArgs = {
  objects: Array<Law_Star_Rates_Insert_Input>;
  on_conflict?: InputMaybe<Law_Star_Rates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Law_Star_Rates_OneArgs = {
  object: Law_Star_Rates_Insert_Input;
  on_conflict?: InputMaybe<Law_Star_Rates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LawsArgs = {
  objects: Array<Laws_Insert_Input>;
  on_conflict?: InputMaybe<Laws_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laws_OneArgs = {
  object: Laws_Insert_Input;
  on_conflict?: InputMaybe<Laws_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MaintenancesArgs = {
  objects: Array<Maintenances_Insert_Input>;
  on_conflict?: InputMaybe<Maintenances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Maintenances_OneArgs = {
  object: Maintenances_Insert_Input;
  on_conflict?: InputMaybe<Maintenances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SpeciesArgs = {
  objects: Array<Species_Insert_Input>;
  on_conflict?: InputMaybe<Species_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Species_AssetsArgs = {
  objects: Array<Species_Assets_Insert_Input>;
  on_conflict?: InputMaybe<Species_Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Species_Assets_OneArgs = {
  object: Species_Assets_Insert_Input;
  on_conflict?: InputMaybe<Species_Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Species_OneArgs = {
  object: Species_Insert_Input;
  on_conflict?: InputMaybe<Species_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_CitizensArgs = {
  objects: Array<World_Citizens_Insert_Input>;
  on_conflict?: InputMaybe<World_Citizens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Citizens_OneArgs = {
  object: World_Citizens_Insert_Input;
  on_conflict?: InputMaybe<World_Citizens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Comment_ReactionsArgs = {
  objects: Array<World_Comment_Reactions_Insert_Input>;
  on_conflict?: InputMaybe<World_Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Comment_Reactions_OneArgs = {
  object: World_Comment_Reactions_Insert_Input;
  on_conflict?: InputMaybe<World_Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_CommentsArgs = {
  objects: Array<World_Comments_Insert_Input>;
  on_conflict?: InputMaybe<World_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Comments_OneArgs = {
  object: World_Comments_Insert_Input;
  on_conflict?: InputMaybe<World_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_HistoriesArgs = {
  objects: Array<World_Histories_Insert_Input>;
  on_conflict?: InputMaybe<World_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Histories_OneArgs = {
  object: World_Histories_Insert_Input;
  on_conflict?: InputMaybe<World_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_LawsArgs = {
  objects: Array<World_Laws_Insert_Input>;
  on_conflict?: InputMaybe<World_Laws_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Laws_OneArgs = {
  object: World_Laws_Insert_Input;
  on_conflict?: InputMaybe<World_Laws_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_ReactionsArgs = {
  objects: Array<World_Reactions_Insert_Input>;
  on_conflict?: InputMaybe<World_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_World_Reactions_OneArgs = {
  object: World_Reactions_Insert_Input;
  on_conflict?: InputMaybe<World_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorldsArgs = {
  objects: Array<Worlds_Insert_Input>;
  on_conflict?: InputMaybe<Worlds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Worlds_OneArgs = {
  object: Worlds_Insert_Input;
  on_conflict?: InputMaybe<Worlds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CitizensArgs = {
  _inc?: InputMaybe<Citizens_Inc_Input>;
  _set?: InputMaybe<Citizens_Set_Input>;
  where: Citizens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Citizens_By_PkArgs = {
  _inc?: InputMaybe<Citizens_Inc_Input>;
  _set?: InputMaybe<Citizens_Set_Input>;
  pk_columns: Citizens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Citizens_ManyArgs = {
  updates: Array<Citizens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Comment_ReactionsArgs = {
  _inc?: InputMaybe<Law_Comment_Reactions_Inc_Input>;
  _set?: InputMaybe<Law_Comment_Reactions_Set_Input>;
  where: Law_Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Comment_Reactions_By_PkArgs = {
  _inc?: InputMaybe<Law_Comment_Reactions_Inc_Input>;
  _set?: InputMaybe<Law_Comment_Reactions_Set_Input>;
  pk_columns: Law_Comment_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Comment_Reactions_ManyArgs = {
  updates: Array<Law_Comment_Reactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_CommentsArgs = {
  _set?: InputMaybe<Law_Comments_Set_Input>;
  where: Law_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Comments_By_PkArgs = {
  _set?: InputMaybe<Law_Comments_Set_Input>;
  pk_columns: Law_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Comments_ManyArgs = {
  updates: Array<Law_Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_ReactionsArgs = {
  _inc?: InputMaybe<Law_Reactions_Inc_Input>;
  _set?: InputMaybe<Law_Reactions_Set_Input>;
  where: Law_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Reactions_By_PkArgs = {
  _inc?: InputMaybe<Law_Reactions_Inc_Input>;
  _set?: InputMaybe<Law_Reactions_Set_Input>;
  pk_columns: Law_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Reactions_ManyArgs = {
  updates: Array<Law_Reactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_RevisionsArgs = {
  _append?: InputMaybe<Law_Revisions_Append_Input>;
  _delete_at_path?: InputMaybe<Law_Revisions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Law_Revisions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Law_Revisions_Delete_Key_Input>;
  _inc?: InputMaybe<Law_Revisions_Inc_Input>;
  _prepend?: InputMaybe<Law_Revisions_Prepend_Input>;
  _set?: InputMaybe<Law_Revisions_Set_Input>;
  where: Law_Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Revisions_By_PkArgs = {
  _append?: InputMaybe<Law_Revisions_Append_Input>;
  _delete_at_path?: InputMaybe<Law_Revisions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Law_Revisions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Law_Revisions_Delete_Key_Input>;
  _inc?: InputMaybe<Law_Revisions_Inc_Input>;
  _prepend?: InputMaybe<Law_Revisions_Prepend_Input>;
  _set?: InputMaybe<Law_Revisions_Set_Input>;
  pk_columns: Law_Revisions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Revisions_ManyArgs = {
  updates: Array<Law_Revisions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Star_RatesArgs = {
  _inc?: InputMaybe<Law_Star_Rates_Inc_Input>;
  _set?: InputMaybe<Law_Star_Rates_Set_Input>;
  where: Law_Star_Rates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Star_Rates_By_PkArgs = {
  _inc?: InputMaybe<Law_Star_Rates_Inc_Input>;
  _set?: InputMaybe<Law_Star_Rates_Set_Input>;
  pk_columns: Law_Star_Rates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Law_Star_Rates_ManyArgs = {
  updates: Array<Law_Star_Rates_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LawsArgs = {
  _inc?: InputMaybe<Laws_Inc_Input>;
  _set?: InputMaybe<Laws_Set_Input>;
  where: Laws_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laws_By_PkArgs = {
  _inc?: InputMaybe<Laws_Inc_Input>;
  _set?: InputMaybe<Laws_Set_Input>;
  pk_columns: Laws_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laws_ManyArgs = {
  updates: Array<Laws_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MaintenancesArgs = {
  _set?: InputMaybe<Maintenances_Set_Input>;
  where: Maintenances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Maintenances_By_PkArgs = {
  _set?: InputMaybe<Maintenances_Set_Input>;
  pk_columns: Maintenances_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Maintenances_ManyArgs = {
  updates: Array<Maintenances_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SpeciesArgs = {
  _inc?: InputMaybe<Species_Inc_Input>;
  _set?: InputMaybe<Species_Set_Input>;
  where: Species_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Species_AssetsArgs = {
  _set?: InputMaybe<Species_Assets_Set_Input>;
  where: Species_Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Species_Assets_By_PkArgs = {
  _set?: InputMaybe<Species_Assets_Set_Input>;
  pk_columns: Species_Assets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Species_Assets_ManyArgs = {
  updates: Array<Species_Assets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Species_By_PkArgs = {
  _inc?: InputMaybe<Species_Inc_Input>;
  _set?: InputMaybe<Species_Set_Input>;
  pk_columns: Species_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Species_ManyArgs = {
  updates: Array<Species_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_CitizensArgs = {
  _inc?: InputMaybe<World_Citizens_Inc_Input>;
  _set?: InputMaybe<World_Citizens_Set_Input>;
  where: World_Citizens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Citizens_By_PkArgs = {
  _inc?: InputMaybe<World_Citizens_Inc_Input>;
  _set?: InputMaybe<World_Citizens_Set_Input>;
  pk_columns: World_Citizens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Citizens_ManyArgs = {
  updates: Array<World_Citizens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_Comment_ReactionsArgs = {
  _inc?: InputMaybe<World_Comment_Reactions_Inc_Input>;
  _set?: InputMaybe<World_Comment_Reactions_Set_Input>;
  where: World_Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Comment_Reactions_By_PkArgs = {
  _inc?: InputMaybe<World_Comment_Reactions_Inc_Input>;
  _set?: InputMaybe<World_Comment_Reactions_Set_Input>;
  pk_columns: World_Comment_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Comment_Reactions_ManyArgs = {
  updates: Array<World_Comment_Reactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_CommentsArgs = {
  _set?: InputMaybe<World_Comments_Set_Input>;
  where: World_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Comments_By_PkArgs = {
  _set?: InputMaybe<World_Comments_Set_Input>;
  pk_columns: World_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Comments_ManyArgs = {
  updates: Array<World_Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_HistoriesArgs = {
  _append?: InputMaybe<World_Histories_Append_Input>;
  _delete_at_path?: InputMaybe<World_Histories_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<World_Histories_Delete_Elem_Input>;
  _delete_key?: InputMaybe<World_Histories_Delete_Key_Input>;
  _inc?: InputMaybe<World_Histories_Inc_Input>;
  _prepend?: InputMaybe<World_Histories_Prepend_Input>;
  _set?: InputMaybe<World_Histories_Set_Input>;
  where: World_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Histories_By_PkArgs = {
  _append?: InputMaybe<World_Histories_Append_Input>;
  _delete_at_path?: InputMaybe<World_Histories_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<World_Histories_Delete_Elem_Input>;
  _delete_key?: InputMaybe<World_Histories_Delete_Key_Input>;
  _inc?: InputMaybe<World_Histories_Inc_Input>;
  _prepend?: InputMaybe<World_Histories_Prepend_Input>;
  _set?: InputMaybe<World_Histories_Set_Input>;
  pk_columns: World_Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Histories_ManyArgs = {
  updates: Array<World_Histories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_LawsArgs = {
  _set?: InputMaybe<World_Laws_Set_Input>;
  where: World_Laws_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Laws_By_PkArgs = {
  _set?: InputMaybe<World_Laws_Set_Input>;
  pk_columns: World_Laws_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Laws_ManyArgs = {
  updates: Array<World_Laws_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_World_ReactionsArgs = {
  _inc?: InputMaybe<World_Reactions_Inc_Input>;
  _set?: InputMaybe<World_Reactions_Set_Input>;
  where: World_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_World_Reactions_By_PkArgs = {
  _inc?: InputMaybe<World_Reactions_Inc_Input>;
  _set?: InputMaybe<World_Reactions_Set_Input>;
  pk_columns: World_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_World_Reactions_ManyArgs = {
  updates: Array<World_Reactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorldsArgs = {
  _inc?: InputMaybe<Worlds_Inc_Input>;
  _set?: InputMaybe<Worlds_Set_Input>;
  where: Worlds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Worlds_By_PkArgs = {
  _inc?: InputMaybe<Worlds_Inc_Input>;
  _set?: InputMaybe<Worlds_Set_Input>;
  pk_columns: Worlds_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Worlds_ManyArgs = {
  updates: Array<Worlds_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export const Order_By = {
  /** in ascending order, nulls last */
  Asc: 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst: 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast: 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc: 'desc',
  /** in descending order, nulls first */
  DescNullsFirst: 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast: 'desc_nulls_last'
} as const;

export type Order_By = typeof Order_By[keyof typeof Order_By];
export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  citizens: Array<Citizens>;
  /** An aggregate relationship */
  citizens_aggregate: Citizens_Aggregate;
  /** fetch data from the table: "citizens" using primary key columns */
  citizens_by_pk?: Maybe<Citizens>;
  /** An array relationship */
  law_comment_reactions: Array<Law_Comment_Reactions>;
  /** An aggregate relationship */
  law_comment_reactions_aggregate: Law_Comment_Reactions_Aggregate;
  /** fetch data from the table: "law_comment_reactions" using primary key columns */
  law_comment_reactions_by_pk?: Maybe<Law_Comment_Reactions>;
  /** An array relationship */
  law_comments: Array<Law_Comments>;
  /** An aggregate relationship */
  law_comments_aggregate: Law_Comments_Aggregate;
  /** fetch data from the table: "law_comments" using primary key columns */
  law_comments_by_pk?: Maybe<Law_Comments>;
  /** An array relationship */
  law_reactions: Array<Law_Reactions>;
  /** An aggregate relationship */
  law_reactions_aggregate: Law_Reactions_Aggregate;
  /** fetch data from the table: "law_reactions" using primary key columns */
  law_reactions_by_pk?: Maybe<Law_Reactions>;
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  /** fetch data from the table: "law_revisions" using primary key columns */
  law_revisions_by_pk?: Maybe<Law_Revisions>;
  /** An array relationship */
  law_star_rates: Array<Law_Star_Rates>;
  /** An aggregate relationship */
  law_star_rates_aggregate: Law_Star_Rates_Aggregate;
  /** fetch data from the table: "law_star_rates" using primary key columns */
  law_star_rates_by_pk?: Maybe<Law_Star_Rates>;
  /** An array relationship */
  laws: Array<Laws>;
  /** An aggregate relationship */
  laws_aggregate: Laws_Aggregate;
  /** fetch data from the table: "laws" using primary key columns */
  laws_by_pk?: Maybe<Laws>;
  /** fetch data from the table: "maintenances" */
  maintenances: Array<Maintenances>;
  /** fetch aggregated fields from the table: "maintenances" */
  maintenances_aggregate: Maintenances_Aggregate;
  /** fetch data from the table: "maintenances" using primary key columns */
  maintenances_by_pk?: Maybe<Maintenances>;
  /** fetch data from the table: "random_species_assets_view" */
  random_species_assets_view: Array<Random_Species_Assets_View>;
  /** fetch aggregated fields from the table: "random_species_assets_view" */
  random_species_assets_view_aggregate: Random_Species_Assets_View_Aggregate;
  /** fetch data from the table: "species" */
  species: Array<Species>;
  /** fetch aggregated fields from the table: "species" */
  species_aggregate: Species_Aggregate;
  /** An array relationship */
  species_assets: Array<Species_Assets>;
  /** An aggregate relationship */
  species_assets_aggregate: Species_Assets_Aggregate;
  /** fetch data from the table: "species_assets" using primary key columns */
  species_assets_by_pk?: Maybe<Species_Assets>;
  /** fetch data from the table: "species" using primary key columns */
  species_by_pk?: Maybe<Species>;
  /** fetch data from the table: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id: Array<Species_Percentage_View_With_World_Id>;
  /** fetch aggregated fields from the table: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id_aggregate: Species_Percentage_View_With_World_Id_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  world_citizens: Array<World_Citizens>;
  /** An aggregate relationship */
  world_citizens_aggregate: World_Citizens_Aggregate;
  /** fetch data from the table: "world_citizens" using primary key columns */
  world_citizens_by_pk?: Maybe<World_Citizens>;
  /** An array relationship */
  world_comment_reactions: Array<World_Comment_Reactions>;
  /** An aggregate relationship */
  world_comment_reactions_aggregate: World_Comment_Reactions_Aggregate;
  /** fetch data from the table: "world_comment_reactions" using primary key columns */
  world_comment_reactions_by_pk?: Maybe<World_Comment_Reactions>;
  /** An array relationship */
  world_comments: Array<World_Comments>;
  /** An aggregate relationship */
  world_comments_aggregate: World_Comments_Aggregate;
  /** fetch data from the table: "world_comments" using primary key columns */
  world_comments_by_pk?: Maybe<World_Comments>;
  /** An array relationship */
  world_histories: Array<World_Histories>;
  /** An aggregate relationship */
  world_histories_aggregate: World_Histories_Aggregate;
  /** fetch data from the table: "world_histories" using primary key columns */
  world_histories_by_pk?: Maybe<World_Histories>;
  /** An array relationship */
  world_laws: Array<World_Laws>;
  /** An aggregate relationship */
  world_laws_aggregate: World_Laws_Aggregate;
  /** fetch data from the table: "world_laws" using primary key columns */
  world_laws_by_pk?: Maybe<World_Laws>;
  /** An array relationship */
  world_reactions: Array<World_Reactions>;
  /** An aggregate relationship */
  world_reactions_aggregate: World_Reactions_Aggregate;
  /** fetch data from the table: "world_reactions" using primary key columns */
  world_reactions_by_pk?: Maybe<World_Reactions>;
  /** An array relationship */
  worlds: Array<Worlds>;
  /** An aggregate relationship */
  worlds_aggregate: Worlds_Aggregate;
  /** fetch data from the table: "worlds" using primary key columns */
  worlds_by_pk?: Maybe<Worlds>;
};


export type Query_RootCitizensArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


export type Query_RootCitizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


export type Query_RootCitizens_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLaw_Comment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comment_Reactions_Order_By>>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};


export type Query_RootLaw_Comment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comment_Reactions_Order_By>>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};


export type Query_RootLaw_Comment_Reactions_By_PkArgs = {
  comment_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootLaw_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Law_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comments_Order_By>>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};


export type Query_RootLaw_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comments_Order_By>>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};


export type Query_RootLaw_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLaw_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Reactions_Order_By>>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};


export type Query_RootLaw_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Reactions_Order_By>>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};


export type Query_RootLaw_Reactions_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootLaw_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Query_RootLaw_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Query_RootLaw_Revisions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLaw_Star_RatesArgs = {
  distinct_on?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Star_Rates_Order_By>>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};


export type Query_RootLaw_Star_Rates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Star_Rates_Order_By>>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};


export type Query_RootLaw_Star_Rates_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootLawsArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Query_RootLaws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Query_RootLaws_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMaintenancesArgs = {
  distinct_on?: InputMaybe<Array<Maintenances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maintenances_Order_By>>;
  where?: InputMaybe<Maintenances_Bool_Exp>;
};


export type Query_RootMaintenances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maintenances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maintenances_Order_By>>;
  where?: InputMaybe<Maintenances_Bool_Exp>;
};


export type Query_RootMaintenances_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRandom_Species_Assets_ViewArgs = {
  distinct_on?: InputMaybe<Array<Random_Species_Assets_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Random_Species_Assets_View_Order_By>>;
  where?: InputMaybe<Random_Species_Assets_View_Bool_Exp>;
};


export type Query_RootRandom_Species_Assets_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Random_Species_Assets_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Random_Species_Assets_View_Order_By>>;
  where?: InputMaybe<Random_Species_Assets_View_Bool_Exp>;
};


export type Query_RootSpeciesArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


export type Query_RootSpecies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


export type Query_RootSpecies_AssetsArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Query_RootSpecies_Assets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Query_RootSpecies_Assets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSpecies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSpecies_Percentage_View_With_World_IdArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


export type Query_RootSpecies_Percentage_View_With_World_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorld_CitizensArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Query_RootWorld_Citizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Query_RootWorld_Citizens_By_PkArgs = {
  citizen_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Query_RootWorld_Comment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comment_Reactions_Order_By>>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};


export type Query_RootWorld_Comment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comment_Reactions_Order_By>>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};


export type Query_RootWorld_Comment_Reactions_By_PkArgs = {
  comment_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootWorld_CommentsArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Query_RootWorld_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Query_RootWorld_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorld_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Query_RootWorld_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Query_RootWorld_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorld_LawsArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Query_RootWorld_Laws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Query_RootWorld_Laws_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Query_RootWorld_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Query_RootWorld_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Query_RootWorld_Reactions_By_PkArgs = {
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Query_RootWorldsArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


export type Query_RootWorlds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


export type Query_RootWorlds_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "random_species_assets_view" */
export type Random_Species_Assets_View = {
  __typename?: 'random_species_assets_view';
  species_asset_id?: Maybe<Scalars['uuid']['output']>;
  species_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "random_species_assets_view" */
export type Random_Species_Assets_View_Aggregate = {
  __typename?: 'random_species_assets_view_aggregate';
  aggregate?: Maybe<Random_Species_Assets_View_Aggregate_Fields>;
  nodes: Array<Random_Species_Assets_View>;
};

/** aggregate fields of "random_species_assets_view" */
export type Random_Species_Assets_View_Aggregate_Fields = {
  __typename?: 'random_species_assets_view_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Random_Species_Assets_View_Max_Fields>;
  min?: Maybe<Random_Species_Assets_View_Min_Fields>;
};


/** aggregate fields of "random_species_assets_view" */
export type Random_Species_Assets_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Random_Species_Assets_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "random_species_assets_view". All fields are combined with a logical 'AND'. */
export type Random_Species_Assets_View_Bool_Exp = {
  _and?: InputMaybe<Array<Random_Species_Assets_View_Bool_Exp>>;
  _not?: InputMaybe<Random_Species_Assets_View_Bool_Exp>;
  _or?: InputMaybe<Array<Random_Species_Assets_View_Bool_Exp>>;
  species_asset_id?: InputMaybe<Uuid_Comparison_Exp>;
  species_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Random_Species_Assets_View_Max_Fields = {
  __typename?: 'random_species_assets_view_max_fields';
  species_asset_id?: Maybe<Scalars['uuid']['output']>;
  species_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Random_Species_Assets_View_Min_Fields = {
  __typename?: 'random_species_assets_view_min_fields';
  species_asset_id?: Maybe<Scalars['uuid']['output']>;
  species_id?: Maybe<Scalars['uuid']['output']>;
};

/** Ordering options when selecting data from "random_species_assets_view". */
export type Random_Species_Assets_View_Order_By = {
  species_asset_id?: InputMaybe<Order_By>;
  species_id?: InputMaybe<Order_By>;
};

/** select columns of table "random_species_assets_view" */
export const Random_Species_Assets_View_Select_Column = {
  /** column name */
  SpeciesAssetId: 'species_asset_id',
  /** column name */
  SpeciesId: 'species_id'
} as const;

export type Random_Species_Assets_View_Select_Column = typeof Random_Species_Assets_View_Select_Column[keyof typeof Random_Species_Assets_View_Select_Column];
/** Streaming cursor of the table "random_species_assets_view" */
export type Random_Species_Assets_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Random_Species_Assets_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Random_Species_Assets_View_Stream_Cursor_Value_Input = {
  species_asset_id?: InputMaybe<Scalars['uuid']['input']>;
  species_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "species" */
export type Species = {
  __typename?: 'species';
  auto_incremental_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  species_assets: Array<Species_Assets>;
  /** An aggregate relationship */
  species_assets_aggregate: Species_Assets_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "species" */
export type SpeciesSpecies_AssetsArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


/** columns and relationships of "species" */
export type SpeciesSpecies_Assets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};

/** aggregated selection of "species" */
export type Species_Aggregate = {
  __typename?: 'species_aggregate';
  aggregate?: Maybe<Species_Aggregate_Fields>;
  nodes: Array<Species>;
};

/** aggregate fields of "species" */
export type Species_Aggregate_Fields = {
  __typename?: 'species_aggregate_fields';
  avg?: Maybe<Species_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Species_Max_Fields>;
  min?: Maybe<Species_Min_Fields>;
  stddev?: Maybe<Species_Stddev_Fields>;
  stddev_pop?: Maybe<Species_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Species_Stddev_Samp_Fields>;
  sum?: Maybe<Species_Sum_Fields>;
  var_pop?: Maybe<Species_Var_Pop_Fields>;
  var_samp?: Maybe<Species_Var_Samp_Fields>;
  variance?: Maybe<Species_Variance_Fields>;
};


/** aggregate fields of "species" */
export type Species_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Species_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** columns and relationships of "species_assets" */
export type Species_Assets = {
  __typename?: 'species_assets';
  /** An array relationship */
  citizens: Array<Citizens>;
  /** An aggregate relationship */
  citizens_aggregate: Citizens_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  image_url: Scalars['String']['output'];
  personality: Scalars['String']['output'];
  /** An object relationship */
  species: Species;
  species_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "species_assets" */
export type Species_AssetsCitizensArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


/** columns and relationships of "species_assets" */
export type Species_AssetsCitizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};

/** aggregated selection of "species_assets" */
export type Species_Assets_Aggregate = {
  __typename?: 'species_assets_aggregate';
  aggregate?: Maybe<Species_Assets_Aggregate_Fields>;
  nodes: Array<Species_Assets>;
};

export type Species_Assets_Aggregate_Bool_Exp = {
  count?: InputMaybe<Species_Assets_Aggregate_Bool_Exp_Count>;
};

export type Species_Assets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Species_Assets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Species_Assets_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "species_assets" */
export type Species_Assets_Aggregate_Fields = {
  __typename?: 'species_assets_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Species_Assets_Max_Fields>;
  min?: Maybe<Species_Assets_Min_Fields>;
};


/** aggregate fields of "species_assets" */
export type Species_Assets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Species_Assets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "species_assets" */
export type Species_Assets_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Species_Assets_Max_Order_By>;
  min?: InputMaybe<Species_Assets_Min_Order_By>;
};

/** input type for inserting array relation for remote table "species_assets" */
export type Species_Assets_Arr_Rel_Insert_Input = {
  data: Array<Species_Assets_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Species_Assets_On_Conflict>;
};

/** Boolean expression to filter rows from the table "species_assets". All fields are combined with a logical 'AND'. */
export type Species_Assets_Bool_Exp = {
  _and?: InputMaybe<Array<Species_Assets_Bool_Exp>>;
  _not?: InputMaybe<Species_Assets_Bool_Exp>;
  _or?: InputMaybe<Array<Species_Assets_Bool_Exp>>;
  citizens?: InputMaybe<Citizens_Bool_Exp>;
  citizens_aggregate?: InputMaybe<Citizens_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  personality?: InputMaybe<String_Comparison_Exp>;
  species?: InputMaybe<Species_Bool_Exp>;
  species_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "species_assets" */
export const Species_Assets_Constraint = {
  /** unique or primary key constraint on columns "id" */
  SpeciesAssetsPkey: 'species_assets_pkey'
} as const;

export type Species_Assets_Constraint = typeof Species_Assets_Constraint[keyof typeof Species_Assets_Constraint];
/** input type for inserting data into table "species_assets" */
export type Species_Assets_Insert_Input = {
  citizens?: InputMaybe<Citizens_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  personality?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Species_Obj_Rel_Insert_Input>;
  species_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Species_Assets_Max_Fields = {
  __typename?: 'species_assets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  personality?: Maybe<Scalars['String']['output']>;
  species_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "species_assets" */
export type Species_Assets_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  personality?: InputMaybe<Order_By>;
  species_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Species_Assets_Min_Fields = {
  __typename?: 'species_assets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  personality?: Maybe<Scalars['String']['output']>;
  species_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "species_assets" */
export type Species_Assets_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  personality?: InputMaybe<Order_By>;
  species_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "species_assets" */
export type Species_Assets_Mutation_Response = {
  __typename?: 'species_assets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Species_Assets>;
};

/** input type for inserting object relation for remote table "species_assets" */
export type Species_Assets_Obj_Rel_Insert_Input = {
  data: Species_Assets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Species_Assets_On_Conflict>;
};

/** on_conflict condition type for table "species_assets" */
export type Species_Assets_On_Conflict = {
  constraint: Species_Assets_Constraint;
  update_columns?: Array<Species_Assets_Update_Column>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};

/** Ordering options when selecting data from "species_assets". */
export type Species_Assets_Order_By = {
  citizens_aggregate?: InputMaybe<Citizens_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  personality?: InputMaybe<Order_By>;
  species?: InputMaybe<Species_Order_By>;
  species_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: species_assets */
export type Species_Assets_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "species_assets" */
export const Species_Assets_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  ImageUrl: 'image_url',
  /** column name */
  Personality: 'personality',
  /** column name */
  SpeciesId: 'species_id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Species_Assets_Select_Column = typeof Species_Assets_Select_Column[keyof typeof Species_Assets_Select_Column];
/** input type for updating data in table "species_assets" */
export type Species_Assets_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  personality?: InputMaybe<Scalars['String']['input']>;
  species_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "species_assets" */
export type Species_Assets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Species_Assets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Species_Assets_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  personality?: InputMaybe<Scalars['String']['input']>;
  species_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "species_assets" */
export const Species_Assets_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  ImageUrl: 'image_url',
  /** column name */
  Personality: 'personality',
  /** column name */
  SpeciesId: 'species_id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Species_Assets_Update_Column = typeof Species_Assets_Update_Column[keyof typeof Species_Assets_Update_Column];
export type Species_Assets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Species_Assets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Species_Assets_Bool_Exp;
};

/** aggregate avg on columns */
export type Species_Avg_Fields = {
  __typename?: 'species_avg_fields';
  auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "species". All fields are combined with a logical 'AND'. */
export type Species_Bool_Exp = {
  _and?: InputMaybe<Array<Species_Bool_Exp>>;
  _not?: InputMaybe<Species_Bool_Exp>;
  _or?: InputMaybe<Array<Species_Bool_Exp>>;
  auto_incremental_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  species_assets?: InputMaybe<Species_Assets_Bool_Exp>;
  species_assets_aggregate?: InputMaybe<Species_Assets_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "species" */
export const Species_Constraint = {
  /** unique or primary key constraint on columns "id" */
  SpeciesPkey: 'species_pkey'
} as const;

export type Species_Constraint = typeof Species_Constraint[keyof typeof Species_Constraint];
/** input type for incrementing numeric columns in table "species" */
export type Species_Inc_Input = {
  auto_incremental_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "species" */
export type Species_Insert_Input = {
  auto_incremental_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  species_assets?: InputMaybe<Species_Assets_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Species_Max_Fields = {
  __typename?: 'species_max_fields';
  auto_incremental_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Species_Min_Fields = {
  __typename?: 'species_min_fields';
  auto_incremental_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "species" */
export type Species_Mutation_Response = {
  __typename?: 'species_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Species>;
};

/** input type for inserting object relation for remote table "species" */
export type Species_Obj_Rel_Insert_Input = {
  data: Species_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Species_On_Conflict>;
};

/** on_conflict condition type for table "species" */
export type Species_On_Conflict = {
  constraint: Species_Constraint;
  update_columns?: Array<Species_Update_Column>;
  where?: InputMaybe<Species_Bool_Exp>;
};

/** Ordering options when selecting data from "species". */
export type Species_Order_By = {
  auto_incremental_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  species_assets_aggregate?: InputMaybe<Species_Assets_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id = {
  __typename?: 'species_percentage_view_with_world_id';
  percentage?: Maybe<Scalars['numeric']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Int']['output']>;
  species_name?: Maybe<Scalars['String']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Aggregate = {
  __typename?: 'species_percentage_view_with_world_id_aggregate';
  aggregate?: Maybe<Species_Percentage_View_With_World_Id_Aggregate_Fields>;
  nodes: Array<Species_Percentage_View_With_World_Id>;
};

export type Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp = {
  count?: InputMaybe<Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp_Count>;
};

export type Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Aggregate_Fields = {
  __typename?: 'species_percentage_view_with_world_id_aggregate_fields';
  avg?: Maybe<Species_Percentage_View_With_World_Id_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Species_Percentage_View_With_World_Id_Max_Fields>;
  min?: Maybe<Species_Percentage_View_With_World_Id_Min_Fields>;
  stddev?: Maybe<Species_Percentage_View_With_World_Id_Stddev_Fields>;
  stddev_pop?: Maybe<Species_Percentage_View_With_World_Id_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Species_Percentage_View_With_World_Id_Stddev_Samp_Fields>;
  sum?: Maybe<Species_Percentage_View_With_World_Id_Sum_Fields>;
  var_pop?: Maybe<Species_Percentage_View_With_World_Id_Var_Pop_Fields>;
  var_samp?: Maybe<Species_Percentage_View_With_World_Id_Var_Samp_Fields>;
  variance?: Maybe<Species_Percentage_View_With_World_Id_Variance_Fields>;
};


/** aggregate fields of "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Aggregate_Order_By = {
  avg?: InputMaybe<Species_Percentage_View_With_World_Id_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Species_Percentage_View_With_World_Id_Max_Order_By>;
  min?: InputMaybe<Species_Percentage_View_With_World_Id_Min_Order_By>;
  stddev?: InputMaybe<Species_Percentage_View_With_World_Id_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Species_Percentage_View_With_World_Id_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Species_Percentage_View_With_World_Id_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Species_Percentage_View_With_World_Id_Sum_Order_By>;
  var_pop?: InputMaybe<Species_Percentage_View_With_World_Id_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Species_Percentage_View_With_World_Id_Var_Samp_Order_By>;
  variance?: InputMaybe<Species_Percentage_View_With_World_Id_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Arr_Rel_Insert_Input = {
  data: Array<Species_Percentage_View_With_World_Id_Insert_Input>;
};

/** aggregate avg on columns */
export type Species_Percentage_View_With_World_Id_Avg_Fields = {
  __typename?: 'species_percentage_view_with_world_id_avg_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Avg_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "species_percentage_view_with_world_id". All fields are combined with a logical 'AND'. */
export type Species_Percentage_View_With_World_Id_Bool_Exp = {
  _and?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Bool_Exp>>;
  _not?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
  _or?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Bool_Exp>>;
  percentage?: InputMaybe<Numeric_Comparison_Exp>;
  species_auto_incremental_id?: InputMaybe<Int_Comparison_Exp>;
  species_name?: InputMaybe<String_Comparison_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Insert_Input = {
  percentage?: InputMaybe<Scalars['numeric']['input']>;
  species_auto_incremental_id?: InputMaybe<Scalars['Int']['input']>;
  species_name?: InputMaybe<Scalars['String']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Species_Percentage_View_With_World_Id_Max_Fields = {
  __typename?: 'species_percentage_view_with_world_id_max_fields';
  percentage?: Maybe<Scalars['numeric']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Int']['output']>;
  species_name?: Maybe<Scalars['String']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Max_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
  species_name?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Species_Percentage_View_With_World_Id_Min_Fields = {
  __typename?: 'species_percentage_view_with_world_id_min_fields';
  percentage?: Maybe<Scalars['numeric']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Int']['output']>;
  species_name?: Maybe<Scalars['String']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Min_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
  species_name?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "species_percentage_view_with_world_id". */
export type Species_Percentage_View_With_World_Id_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
  species_name?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** select columns of table "species_percentage_view_with_world_id" */
export const Species_Percentage_View_With_World_Id_Select_Column = {
  /** column name */
  Percentage: 'percentage',
  /** column name */
  SpeciesAutoIncrementalId: 'species_auto_incremental_id',
  /** column name */
  SpeciesName: 'species_name',
  /** column name */
  WorldId: 'world_id'
} as const;

export type Species_Percentage_View_With_World_Id_Select_Column = typeof Species_Percentage_View_With_World_Id_Select_Column[keyof typeof Species_Percentage_View_With_World_Id_Select_Column];
/** aggregate stddev on columns */
export type Species_Percentage_View_With_World_Id_Stddev_Fields = {
  __typename?: 'species_percentage_view_with_world_id_stddev_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Stddev_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Species_Percentage_View_With_World_Id_Stddev_Pop_Fields = {
  __typename?: 'species_percentage_view_with_world_id_stddev_pop_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Stddev_Pop_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Species_Percentage_View_With_World_Id_Stddev_Samp_Fields = {
  __typename?: 'species_percentage_view_with_world_id_stddev_samp_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Stddev_Samp_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Species_Percentage_View_With_World_Id_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Species_Percentage_View_With_World_Id_Stream_Cursor_Value_Input = {
  percentage?: InputMaybe<Scalars['numeric']['input']>;
  species_auto_incremental_id?: InputMaybe<Scalars['Int']['input']>;
  species_name?: InputMaybe<Scalars['String']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Species_Percentage_View_With_World_Id_Sum_Fields = {
  __typename?: 'species_percentage_view_with_world_id_sum_fields';
  percentage?: Maybe<Scalars['numeric']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Sum_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Species_Percentage_View_With_World_Id_Var_Pop_Fields = {
  __typename?: 'species_percentage_view_with_world_id_var_pop_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Var_Pop_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Species_Percentage_View_With_World_Id_Var_Samp_Fields = {
  __typename?: 'species_percentage_view_with_world_id_var_samp_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Var_Samp_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Species_Percentage_View_With_World_Id_Variance_Fields = {
  __typename?: 'species_percentage_view_with_world_id_variance_fields';
  percentage?: Maybe<Scalars['Float']['output']>;
  species_auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "species_percentage_view_with_world_id" */
export type Species_Percentage_View_With_World_Id_Variance_Order_By = {
  percentage?: InputMaybe<Order_By>;
  species_auto_incremental_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: species */
export type Species_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "species" */
export const Species_Select_Column = {
  /** column name */
  AutoIncrementalId: 'auto_incremental_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Species_Select_Column = typeof Species_Select_Column[keyof typeof Species_Select_Column];
/** input type for updating data in table "species" */
export type Species_Set_Input = {
  auto_incremental_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Species_Stddev_Fields = {
  __typename?: 'species_stddev_fields';
  auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Species_Stddev_Pop_Fields = {
  __typename?: 'species_stddev_pop_fields';
  auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Species_Stddev_Samp_Fields = {
  __typename?: 'species_stddev_samp_fields';
  auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "species" */
export type Species_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Species_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Species_Stream_Cursor_Value_Input = {
  auto_incremental_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Species_Sum_Fields = {
  __typename?: 'species_sum_fields';
  auto_incremental_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "species" */
export const Species_Update_Column = {
  /** column name */
  AutoIncrementalId: 'auto_incremental_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Species_Update_Column = typeof Species_Update_Column[keyof typeof Species_Update_Column];
export type Species_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Species_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Species_Set_Input>;
  /** filter the rows which have to be updated */
  where: Species_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Species_Var_Pop_Fields = {
  __typename?: 'species_var_pop_fields';
  auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Species_Var_Samp_Fields = {
  __typename?: 'species_var_samp_fields';
  auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Species_Variance_Fields = {
  __typename?: 'species_variance_fields';
  auto_incremental_id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  citizens: Array<Citizens>;
  /** An aggregate relationship */
  citizens_aggregate: Citizens_Aggregate;
  /** fetch data from the table: "citizens" using primary key columns */
  citizens_by_pk?: Maybe<Citizens>;
  /** fetch data from the table in a streaming manner: "citizens" */
  citizens_stream: Array<Citizens>;
  /** An array relationship */
  law_comment_reactions: Array<Law_Comment_Reactions>;
  /** An aggregate relationship */
  law_comment_reactions_aggregate: Law_Comment_Reactions_Aggregate;
  /** fetch data from the table: "law_comment_reactions" using primary key columns */
  law_comment_reactions_by_pk?: Maybe<Law_Comment_Reactions>;
  /** fetch data from the table in a streaming manner: "law_comment_reactions" */
  law_comment_reactions_stream: Array<Law_Comment_Reactions>;
  /** An array relationship */
  law_comments: Array<Law_Comments>;
  /** An aggregate relationship */
  law_comments_aggregate: Law_Comments_Aggregate;
  /** fetch data from the table: "law_comments" using primary key columns */
  law_comments_by_pk?: Maybe<Law_Comments>;
  /** fetch data from the table in a streaming manner: "law_comments" */
  law_comments_stream: Array<Law_Comments>;
  /** An array relationship */
  law_reactions: Array<Law_Reactions>;
  /** An aggregate relationship */
  law_reactions_aggregate: Law_Reactions_Aggregate;
  /** fetch data from the table: "law_reactions" using primary key columns */
  law_reactions_by_pk?: Maybe<Law_Reactions>;
  /** fetch data from the table in a streaming manner: "law_reactions" */
  law_reactions_stream: Array<Law_Reactions>;
  /** An array relationship */
  law_revisions: Array<Law_Revisions>;
  /** An aggregate relationship */
  law_revisions_aggregate: Law_Revisions_Aggregate;
  /** fetch data from the table: "law_revisions" using primary key columns */
  law_revisions_by_pk?: Maybe<Law_Revisions>;
  /** fetch data from the table in a streaming manner: "law_revisions" */
  law_revisions_stream: Array<Law_Revisions>;
  /** An array relationship */
  law_star_rates: Array<Law_Star_Rates>;
  /** An aggregate relationship */
  law_star_rates_aggregate: Law_Star_Rates_Aggregate;
  /** fetch data from the table: "law_star_rates" using primary key columns */
  law_star_rates_by_pk?: Maybe<Law_Star_Rates>;
  /** fetch data from the table in a streaming manner: "law_star_rates" */
  law_star_rates_stream: Array<Law_Star_Rates>;
  /** An array relationship */
  laws: Array<Laws>;
  /** An aggregate relationship */
  laws_aggregate: Laws_Aggregate;
  /** fetch data from the table: "laws" using primary key columns */
  laws_by_pk?: Maybe<Laws>;
  /** fetch data from the table in a streaming manner: "laws" */
  laws_stream: Array<Laws>;
  /** fetch data from the table: "maintenances" */
  maintenances: Array<Maintenances>;
  /** fetch aggregated fields from the table: "maintenances" */
  maintenances_aggregate: Maintenances_Aggregate;
  /** fetch data from the table: "maintenances" using primary key columns */
  maintenances_by_pk?: Maybe<Maintenances>;
  /** fetch data from the table in a streaming manner: "maintenances" */
  maintenances_stream: Array<Maintenances>;
  /** fetch data from the table: "random_species_assets_view" */
  random_species_assets_view: Array<Random_Species_Assets_View>;
  /** fetch aggregated fields from the table: "random_species_assets_view" */
  random_species_assets_view_aggregate: Random_Species_Assets_View_Aggregate;
  /** fetch data from the table in a streaming manner: "random_species_assets_view" */
  random_species_assets_view_stream: Array<Random_Species_Assets_View>;
  /** fetch data from the table: "species" */
  species: Array<Species>;
  /** fetch aggregated fields from the table: "species" */
  species_aggregate: Species_Aggregate;
  /** An array relationship */
  species_assets: Array<Species_Assets>;
  /** An aggregate relationship */
  species_assets_aggregate: Species_Assets_Aggregate;
  /** fetch data from the table: "species_assets" using primary key columns */
  species_assets_by_pk?: Maybe<Species_Assets>;
  /** fetch data from the table in a streaming manner: "species_assets" */
  species_assets_stream: Array<Species_Assets>;
  /** fetch data from the table: "species" using primary key columns */
  species_by_pk?: Maybe<Species>;
  /** fetch data from the table: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id: Array<Species_Percentage_View_With_World_Id>;
  /** fetch aggregated fields from the table: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id_aggregate: Species_Percentage_View_With_World_Id_Aggregate;
  /** fetch data from the table in a streaming manner: "species_percentage_view_with_world_id" */
  species_percentage_view_with_world_id_stream: Array<Species_Percentage_View_With_World_Id>;
  /** fetch data from the table in a streaming manner: "species" */
  species_stream: Array<Species>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  world_citizens: Array<World_Citizens>;
  /** An aggregate relationship */
  world_citizens_aggregate: World_Citizens_Aggregate;
  /** fetch data from the table: "world_citizens" using primary key columns */
  world_citizens_by_pk?: Maybe<World_Citizens>;
  /** fetch data from the table in a streaming manner: "world_citizens" */
  world_citizens_stream: Array<World_Citizens>;
  /** An array relationship */
  world_comment_reactions: Array<World_Comment_Reactions>;
  /** An aggregate relationship */
  world_comment_reactions_aggregate: World_Comment_Reactions_Aggregate;
  /** fetch data from the table: "world_comment_reactions" using primary key columns */
  world_comment_reactions_by_pk?: Maybe<World_Comment_Reactions>;
  /** fetch data from the table in a streaming manner: "world_comment_reactions" */
  world_comment_reactions_stream: Array<World_Comment_Reactions>;
  /** An array relationship */
  world_comments: Array<World_Comments>;
  /** An aggregate relationship */
  world_comments_aggregate: World_Comments_Aggregate;
  /** fetch data from the table: "world_comments" using primary key columns */
  world_comments_by_pk?: Maybe<World_Comments>;
  /** fetch data from the table in a streaming manner: "world_comments" */
  world_comments_stream: Array<World_Comments>;
  /** An array relationship */
  world_histories: Array<World_Histories>;
  /** An aggregate relationship */
  world_histories_aggregate: World_Histories_Aggregate;
  /** fetch data from the table: "world_histories" using primary key columns */
  world_histories_by_pk?: Maybe<World_Histories>;
  /** fetch data from the table in a streaming manner: "world_histories" */
  world_histories_stream: Array<World_Histories>;
  /** An array relationship */
  world_laws: Array<World_Laws>;
  /** An aggregate relationship */
  world_laws_aggregate: World_Laws_Aggregate;
  /** fetch data from the table: "world_laws" using primary key columns */
  world_laws_by_pk?: Maybe<World_Laws>;
  /** fetch data from the table in a streaming manner: "world_laws" */
  world_laws_stream: Array<World_Laws>;
  /** An array relationship */
  world_reactions: Array<World_Reactions>;
  /** An aggregate relationship */
  world_reactions_aggregate: World_Reactions_Aggregate;
  /** fetch data from the table: "world_reactions" using primary key columns */
  world_reactions_by_pk?: Maybe<World_Reactions>;
  /** fetch data from the table in a streaming manner: "world_reactions" */
  world_reactions_stream: Array<World_Reactions>;
  /** An array relationship */
  worlds: Array<Worlds>;
  /** An aggregate relationship */
  worlds_aggregate: Worlds_Aggregate;
  /** fetch data from the table: "worlds" using primary key columns */
  worlds_by_pk?: Maybe<Worlds>;
  /** fetch data from the table in a streaming manner: "worlds" */
  worlds_stream: Array<Worlds>;
};


export type Subscription_RootCitizensArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


export type Subscription_RootCitizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


export type Subscription_RootCitizens_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCitizens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Citizens_Stream_Cursor_Input>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


export type Subscription_RootLaw_Comment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comment_Reactions_Order_By>>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootLaw_Comment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comment_Reactions_Order_By>>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootLaw_Comment_Reactions_By_PkArgs = {
  comment_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Comment_Reactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Comment_Reactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootLaw_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Law_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comments_Order_By>>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};


export type Subscription_RootLaw_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comments_Order_By>>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};


export type Subscription_RootLaw_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Comments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};


export type Subscription_RootLaw_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Reactions_Order_By>>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};


export type Subscription_RootLaw_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Reactions_Order_By>>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};


export type Subscription_RootLaw_Reactions_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Reactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Reactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};


export type Subscription_RootLaw_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Subscription_RootLaw_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Revisions_Order_By>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Subscription_RootLaw_Revisions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Revisions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Revisions_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Revisions_Bool_Exp>;
};


export type Subscription_RootLaw_Star_RatesArgs = {
  distinct_on?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Star_Rates_Order_By>>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};


export type Subscription_RootLaw_Star_Rates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Star_Rates_Order_By>>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};


export type Subscription_RootLaw_Star_Rates_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootLaw_Star_Rates_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Law_Star_Rates_Stream_Cursor_Input>>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};


export type Subscription_RootLawsArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Subscription_RootLaws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Subscription_RootLaws_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLaws_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Laws_Stream_Cursor_Input>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


export type Subscription_RootMaintenancesArgs = {
  distinct_on?: InputMaybe<Array<Maintenances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maintenances_Order_By>>;
  where?: InputMaybe<Maintenances_Bool_Exp>;
};


export type Subscription_RootMaintenances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maintenances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maintenances_Order_By>>;
  where?: InputMaybe<Maintenances_Bool_Exp>;
};


export type Subscription_RootMaintenances_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMaintenances_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Maintenances_Stream_Cursor_Input>>;
  where?: InputMaybe<Maintenances_Bool_Exp>;
};


export type Subscription_RootRandom_Species_Assets_ViewArgs = {
  distinct_on?: InputMaybe<Array<Random_Species_Assets_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Random_Species_Assets_View_Order_By>>;
  where?: InputMaybe<Random_Species_Assets_View_Bool_Exp>;
};


export type Subscription_RootRandom_Species_Assets_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Random_Species_Assets_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Random_Species_Assets_View_Order_By>>;
  where?: InputMaybe<Random_Species_Assets_View_Bool_Exp>;
};


export type Subscription_RootRandom_Species_Assets_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Random_Species_Assets_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Random_Species_Assets_View_Bool_Exp>;
};


export type Subscription_RootSpeciesArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


export type Subscription_RootSpecies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Order_By>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


export type Subscription_RootSpecies_AssetsArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Subscription_RootSpecies_Assets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Assets_Order_By>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Subscription_RootSpecies_Assets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSpecies_Assets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Species_Assets_Stream_Cursor_Input>>;
  where?: InputMaybe<Species_Assets_Bool_Exp>;
};


export type Subscription_RootSpecies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSpecies_Percentage_View_With_World_IdArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


export type Subscription_RootSpecies_Percentage_View_With_World_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


export type Subscription_RootSpecies_Percentage_View_With_World_Id_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Species_Percentage_View_With_World_Id_Stream_Cursor_Input>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


export type Subscription_RootSpecies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Species_Stream_Cursor_Input>>;
  where?: InputMaybe<Species_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWorld_CitizensArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Subscription_RootWorld_Citizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Subscription_RootWorld_Citizens_By_PkArgs = {
  citizen_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Citizens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Citizens_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


export type Subscription_RootWorld_Comment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comment_Reactions_Order_By>>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootWorld_Comment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comment_Reactions_Order_By>>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootWorld_Comment_Reactions_By_PkArgs = {
  comment_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Comment_Reactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Comment_Reactions_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootWorld_CommentsArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Subscription_RootWorld_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Subscription_RootWorld_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Comments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


export type Subscription_RootWorld_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Subscription_RootWorld_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Subscription_RootWorld_Histories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


export type Subscription_RootWorld_LawsArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Subscription_RootWorld_Laws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Subscription_RootWorld_Laws_By_PkArgs = {
  law_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Laws_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Laws_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


export type Subscription_RootWorld_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Subscription_RootWorld_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Subscription_RootWorld_Reactions_By_PkArgs = {
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};


export type Subscription_RootWorld_Reactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<World_Reactions_Stream_Cursor_Input>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


export type Subscription_RootWorldsArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


export type Subscription_RootWorlds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


export type Subscription_RootWorlds_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorlds_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Worlds_Stream_Cursor_Input>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  age?: Maybe<Scalars['Int']['output']>;
  authentication_id: Scalars['String']['output'];
  /** An array relationship */
  citizens: Array<Citizens>;
  /** An aggregate relationship */
  citizens_aggregate: Citizens_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  icon_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  is_first_time: Scalars['Boolean']['output'];
  /** An array relationship */
  law_comment_reactions: Array<Law_Comment_Reactions>;
  /** An aggregate relationship */
  law_comment_reactions_aggregate: Law_Comment_Reactions_Aggregate;
  /** An array relationship */
  law_comments: Array<Law_Comments>;
  /** An aggregate relationship */
  law_comments_aggregate: Law_Comments_Aggregate;
  /** An array relationship */
  law_reactions: Array<Law_Reactions>;
  /** An aggregate relationship */
  law_reactions_aggregate: Law_Reactions_Aggregate;
  /** An array relationship */
  law_star_rates: Array<Law_Star_Rates>;
  /** An aggregate relationship */
  law_star_rates_aggregate: Law_Star_Rates_Aggregate;
  /** An array relationship */
  laws: Array<Laws>;
  /** An aggregate relationship */
  laws_aggregate: Laws_Aggregate;
  login_bonus_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  name: Scalars['String']['output'];
  status: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  world_comment_reactions: Array<World_Comment_Reactions>;
  /** An aggregate relationship */
  world_comment_reactions_aggregate: World_Comment_Reactions_Aggregate;
  /** An array relationship */
  world_comments: Array<World_Comments>;
  /** An aggregate relationship */
  world_comments_aggregate: World_Comments_Aggregate;
  /** An array relationship */
  world_reactions: Array<World_Reactions>;
  /** An aggregate relationship */
  world_reactions_aggregate: World_Reactions_Aggregate;
  /** An array relationship */
  worlds: Array<Worlds>;
  /** An aggregate relationship */
  worlds_aggregate: Worlds_Aggregate;
};


/** columns and relationships of "users" */
export type UsersCitizensArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCitizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Citizens_Order_By>>;
  where?: InputMaybe<Citizens_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_Comment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comment_Reactions_Order_By>>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_Comment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comment_Reactions_Order_By>>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Law_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comments_Order_By>>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comments_Order_By>>;
  where?: InputMaybe<Law_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Reactions_Order_By>>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Reactions_Order_By>>;
  where?: InputMaybe<Law_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_Star_RatesArgs = {
  distinct_on?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Star_Rates_Order_By>>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaw_Star_Rates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Law_Star_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Star_Rates_Order_By>>;
  where?: InputMaybe<Law_Star_Rates_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLawsArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLaws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By>>;
  where?: InputMaybe<Laws_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Comment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comment_Reactions_Order_By>>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Comment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comment_Reactions_Order_By>>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_CommentsArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorld_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorldsArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorlds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worlds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By>>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  age?: Maybe<Scalars['Float']['output']>;
  gender?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  age?: InputMaybe<Int_Comparison_Exp>;
  authentication_id?: InputMaybe<String_Comparison_Exp>;
  citizens?: InputMaybe<Citizens_Bool_Exp>;
  citizens_aggregate?: InputMaybe<Citizens_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<Int_Comparison_Exp>;
  icon_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_first_time?: InputMaybe<Boolean_Comparison_Exp>;
  law_comment_reactions?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
  law_comment_reactions_aggregate?: InputMaybe<Law_Comment_Reactions_Aggregate_Bool_Exp>;
  law_comments?: InputMaybe<Law_Comments_Bool_Exp>;
  law_comments_aggregate?: InputMaybe<Law_Comments_Aggregate_Bool_Exp>;
  law_reactions?: InputMaybe<Law_Reactions_Bool_Exp>;
  law_reactions_aggregate?: InputMaybe<Law_Reactions_Aggregate_Bool_Exp>;
  law_star_rates?: InputMaybe<Law_Star_Rates_Bool_Exp>;
  law_star_rates_aggregate?: InputMaybe<Law_Star_Rates_Aggregate_Bool_Exp>;
  laws?: InputMaybe<Laws_Bool_Exp>;
  laws_aggregate?: InputMaybe<Laws_Aggregate_Bool_Exp>;
  login_bonus_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  world_comment_reactions?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
  world_comment_reactions_aggregate?: InputMaybe<World_Comment_Reactions_Aggregate_Bool_Exp>;
  world_comments?: InputMaybe<World_Comments_Bool_Exp>;
  world_comments_aggregate?: InputMaybe<World_Comments_Aggregate_Bool_Exp>;
  world_reactions?: InputMaybe<World_Reactions_Bool_Exp>;
  world_reactions_aggregate?: InputMaybe<World_Reactions_Aggregate_Bool_Exp>;
  worlds?: InputMaybe<Worlds_Bool_Exp>;
  worlds_aggregate?: InputMaybe<Worlds_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export const Users_Constraint = {
  /** unique or primary key constraint on columns "id" */
  UsersPkey: 'users_pkey'
} as const;

export type Users_Constraint = typeof Users_Constraint[keyof typeof Users_Constraint];
/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  citizens?: InputMaybe<Citizens_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_first_time?: InputMaybe<Scalars['Boolean']['input']>;
  law_comment_reactions?: InputMaybe<Law_Comment_Reactions_Arr_Rel_Insert_Input>;
  law_comments?: InputMaybe<Law_Comments_Arr_Rel_Insert_Input>;
  law_reactions?: InputMaybe<Law_Reactions_Arr_Rel_Insert_Input>;
  law_star_rates?: InputMaybe<Law_Star_Rates_Arr_Rel_Insert_Input>;
  laws?: InputMaybe<Laws_Arr_Rel_Insert_Input>;
  login_bonus_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_comment_reactions?: InputMaybe<World_Comment_Reactions_Arr_Rel_Insert_Input>;
  world_comments?: InputMaybe<World_Comments_Arr_Rel_Insert_Input>;
  world_reactions?: InputMaybe<World_Reactions_Arr_Rel_Insert_Input>;
  worlds?: InputMaybe<Worlds_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  age?: Maybe<Scalars['Int']['output']>;
  authentication_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  icon_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  login_bonus_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  age?: Maybe<Scalars['Int']['output']>;
  authentication_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  icon_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  login_bonus_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  age?: InputMaybe<Order_By>;
  authentication_id?: InputMaybe<Order_By>;
  citizens_aggregate?: InputMaybe<Citizens_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  icon_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_first_time?: InputMaybe<Order_By>;
  law_comment_reactions_aggregate?: InputMaybe<Law_Comment_Reactions_Aggregate_Order_By>;
  law_comments_aggregate?: InputMaybe<Law_Comments_Aggregate_Order_By>;
  law_reactions_aggregate?: InputMaybe<Law_Reactions_Aggregate_Order_By>;
  law_star_rates_aggregate?: InputMaybe<Law_Star_Rates_Aggregate_Order_By>;
  laws_aggregate?: InputMaybe<Laws_Aggregate_Order_By>;
  login_bonus_timestamp?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_comment_reactions_aggregate?: InputMaybe<World_Comment_Reactions_Aggregate_Order_By>;
  world_comments_aggregate?: InputMaybe<World_Comments_Aggregate_Order_By>;
  world_reactions_aggregate?: InputMaybe<World_Reactions_Aggregate_Order_By>;
  worlds_aggregate?: InputMaybe<Worlds_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export const Users_Select_Column = {
  /** column name */
  Age: 'age',
  /** column name */
  AuthenticationId: 'authentication_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Email: 'email',
  /** column name */
  Gender: 'gender',
  /** column name */
  IconUrl: 'icon_url',
  /** column name */
  Id: 'id',
  /** column name */
  IsFirstTime: 'is_first_time',
  /** column name */
  LoginBonusTimestamp: 'login_bonus_timestamp',
  /** column name */
  Name: 'name',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Users_Select_Column = typeof Users_Select_Column[keyof typeof Users_Select_Column];
/** input type for updating data in table "users" */
export type Users_Set_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_first_time?: InputMaybe<Scalars['Boolean']['input']>;
  login_bonus_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  age?: Maybe<Scalars['Float']['output']>;
  gender?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
  gender?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
  gender?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_first_time?: InputMaybe<Scalars['Boolean']['input']>;
  login_bonus_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  age?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export const Users_Update_Column = {
  /** column name */
  Age: 'age',
  /** column name */
  AuthenticationId: 'authentication_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Email: 'email',
  /** column name */
  Gender: 'gender',
  /** column name */
  IconUrl: 'icon_url',
  /** column name */
  Id: 'id',
  /** column name */
  IsFirstTime: 'is_first_time',
  /** column name */
  LoginBonusTimestamp: 'login_bonus_timestamp',
  /** column name */
  Name: 'name',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Users_Update_Column = typeof Users_Update_Column[keyof typeof Users_Update_Column];
export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
  gender?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
  gender?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  age?: Maybe<Scalars['Float']['output']>;
  gender?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "world_citizens" */
export type World_Citizens = {
  __typename?: 'world_citizens';
  /** An object relationship */
  citizen: Citizens;
  citizen_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  status: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_citizens" */
export type World_Citizens_Aggregate = {
  __typename?: 'world_citizens_aggregate';
  aggregate?: Maybe<World_Citizens_Aggregate_Fields>;
  nodes: Array<World_Citizens>;
};

export type World_Citizens_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Citizens_Aggregate_Bool_Exp_Count>;
};

export type World_Citizens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Citizens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Citizens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_citizens" */
export type World_Citizens_Aggregate_Fields = {
  __typename?: 'world_citizens_aggregate_fields';
  avg?: Maybe<World_Citizens_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Citizens_Max_Fields>;
  min?: Maybe<World_Citizens_Min_Fields>;
  stddev?: Maybe<World_Citizens_Stddev_Fields>;
  stddev_pop?: Maybe<World_Citizens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Citizens_Stddev_Samp_Fields>;
  sum?: Maybe<World_Citizens_Sum_Fields>;
  var_pop?: Maybe<World_Citizens_Var_Pop_Fields>;
  var_samp?: Maybe<World_Citizens_Var_Samp_Fields>;
  variance?: Maybe<World_Citizens_Variance_Fields>;
};


/** aggregate fields of "world_citizens" */
export type World_Citizens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Citizens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_citizens" */
export type World_Citizens_Aggregate_Order_By = {
  avg?: InputMaybe<World_Citizens_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Citizens_Max_Order_By>;
  min?: InputMaybe<World_Citizens_Min_Order_By>;
  stddev?: InputMaybe<World_Citizens_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Citizens_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Citizens_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Citizens_Sum_Order_By>;
  var_pop?: InputMaybe<World_Citizens_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Citizens_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Citizens_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "world_citizens" */
export type World_Citizens_Arr_Rel_Insert_Input = {
  data: Array<World_Citizens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Citizens_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Citizens_Avg_Fields = {
  __typename?: 'world_citizens_avg_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_citizens" */
export type World_Citizens_Avg_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_citizens". All fields are combined with a logical 'AND'. */
export type World_Citizens_Bool_Exp = {
  _and?: InputMaybe<Array<World_Citizens_Bool_Exp>>;
  _not?: InputMaybe<World_Citizens_Bool_Exp>;
  _or?: InputMaybe<Array<World_Citizens_Bool_Exp>>;
  citizen?: InputMaybe<Citizens_Bool_Exp>;
  citizen_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_citizens" */
export const World_Citizens_Constraint = {
  /** unique or primary key constraint on columns "world_id", "citizen_id" */
  WorldCitizensPkey: 'world_citizens_pkey'
} as const;

export type World_Citizens_Constraint = typeof World_Citizens_Constraint[keyof typeof World_Citizens_Constraint];
/** input type for incrementing numeric columns in table "world_citizens" */
export type World_Citizens_Inc_Input = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_citizens" */
export type World_Citizens_Insert_Input = {
  citizen?: InputMaybe<Citizens_Obj_Rel_Insert_Input>;
  citizen_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Citizens_Max_Fields = {
  __typename?: 'world_citizens_max_fields';
  citizen_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_citizens" */
export type World_Citizens_Max_Order_By = {
  citizen_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Citizens_Min_Fields = {
  __typename?: 'world_citizens_min_fields';
  citizen_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_citizens" */
export type World_Citizens_Min_Order_By = {
  citizen_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_citizens" */
export type World_Citizens_Mutation_Response = {
  __typename?: 'world_citizens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Citizens>;
};

/** on_conflict condition type for table "world_citizens" */
export type World_Citizens_On_Conflict = {
  constraint: World_Citizens_Constraint;
  update_columns?: Array<World_Citizens_Update_Column>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};

/** Ordering options when selecting data from "world_citizens". */
export type World_Citizens_Order_By = {
  citizen?: InputMaybe<Citizens_Order_By>;
  citizen_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_citizens */
export type World_Citizens_Pk_Columns_Input = {
  citizen_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};

/** select columns of table "world_citizens" */
export const World_Citizens_Select_Column = {
  /** column name */
  CitizenId: 'citizen_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Citizens_Select_Column = typeof World_Citizens_Select_Column[keyof typeof World_Citizens_Select_Column];
/** input type for updating data in table "world_citizens" */
export type World_Citizens_Set_Input = {
  citizen_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type World_Citizens_Stddev_Fields = {
  __typename?: 'world_citizens_stddev_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_citizens" */
export type World_Citizens_Stddev_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Citizens_Stddev_Pop_Fields = {
  __typename?: 'world_citizens_stddev_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_citizens" */
export type World_Citizens_Stddev_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Citizens_Stddev_Samp_Fields = {
  __typename?: 'world_citizens_stddev_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_citizens" */
export type World_Citizens_Stddev_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_citizens" */
export type World_Citizens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Citizens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Citizens_Stream_Cursor_Value_Input = {
  citizen_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type World_Citizens_Sum_Fields = {
  __typename?: 'world_citizens_sum_fields';
  status?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_citizens" */
export type World_Citizens_Sum_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** update columns of table "world_citizens" */
export const World_Citizens_Update_Column = {
  /** column name */
  CitizenId: 'citizen_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Citizens_Update_Column = typeof World_Citizens_Update_Column[keyof typeof World_Citizens_Update_Column];
export type World_Citizens_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Citizens_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Citizens_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Citizens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Citizens_Var_Pop_Fields = {
  __typename?: 'world_citizens_var_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_citizens" */
export type World_Citizens_Var_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Citizens_Var_Samp_Fields = {
  __typename?: 'world_citizens_var_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_citizens" */
export type World_Citizens_Var_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Citizens_Variance_Fields = {
  __typename?: 'world_citizens_variance_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_citizens" */
export type World_Citizens_Variance_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** columns and relationships of "world_comment_reactions" */
export type World_Comment_Reactions = {
  __typename?: 'world_comment_reactions';
  comment_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  world_comment: World_Comments;
};

/** aggregated selection of "world_comment_reactions" */
export type World_Comment_Reactions_Aggregate = {
  __typename?: 'world_comment_reactions_aggregate';
  aggregate?: Maybe<World_Comment_Reactions_Aggregate_Fields>;
  nodes: Array<World_Comment_Reactions>;
};

export type World_Comment_Reactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Comment_Reactions_Aggregate_Bool_Exp_Count>;
};

export type World_Comment_Reactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_comment_reactions" */
export type World_Comment_Reactions_Aggregate_Fields = {
  __typename?: 'world_comment_reactions_aggregate_fields';
  avg?: Maybe<World_Comment_Reactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Comment_Reactions_Max_Fields>;
  min?: Maybe<World_Comment_Reactions_Min_Fields>;
  stddev?: Maybe<World_Comment_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<World_Comment_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Comment_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<World_Comment_Reactions_Sum_Fields>;
  var_pop?: Maybe<World_Comment_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<World_Comment_Reactions_Var_Samp_Fields>;
  variance?: Maybe<World_Comment_Reactions_Variance_Fields>;
};


/** aggregate fields of "world_comment_reactions" */
export type World_Comment_Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_comment_reactions" */
export type World_Comment_Reactions_Aggregate_Order_By = {
  avg?: InputMaybe<World_Comment_Reactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Comment_Reactions_Max_Order_By>;
  min?: InputMaybe<World_Comment_Reactions_Min_Order_By>;
  stddev?: InputMaybe<World_Comment_Reactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Comment_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Comment_Reactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Comment_Reactions_Sum_Order_By>;
  var_pop?: InputMaybe<World_Comment_Reactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Comment_Reactions_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Comment_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "world_comment_reactions" */
export type World_Comment_Reactions_Arr_Rel_Insert_Input = {
  data: Array<World_Comment_Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Comment_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Comment_Reactions_Avg_Fields = {
  __typename?: 'world_comment_reactions_avg_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Avg_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_comment_reactions". All fields are combined with a logical 'AND'. */
export type World_Comment_Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<World_Comment_Reactions_Bool_Exp>>;
  _not?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<World_Comment_Reactions_Bool_Exp>>;
  comment_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  world_comment?: InputMaybe<World_Comments_Bool_Exp>;
};

/** unique or primary key constraints on table "world_comment_reactions" */
export const World_Comment_Reactions_Constraint = {
  /** unique or primary key constraint on columns "comment_id", "user_id", "type" */
  WorldCommentReactionsPkey: 'world_comment_reactions_pkey'
} as const;

export type World_Comment_Reactions_Constraint = typeof World_Comment_Reactions_Constraint[keyof typeof World_Comment_Reactions_Constraint];
/** input type for incrementing numeric columns in table "world_comment_reactions" */
export type World_Comment_Reactions_Inc_Input = {
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_comment_reactions" */
export type World_Comment_Reactions_Insert_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_comment?: InputMaybe<World_Comments_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type World_Comment_Reactions_Max_Fields = {
  __typename?: 'world_comment_reactions_max_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Max_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Comment_Reactions_Min_Fields = {
  __typename?: 'world_comment_reactions_min_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Min_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_comment_reactions" */
export type World_Comment_Reactions_Mutation_Response = {
  __typename?: 'world_comment_reactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Comment_Reactions>;
};

/** on_conflict condition type for table "world_comment_reactions" */
export type World_Comment_Reactions_On_Conflict = {
  constraint: World_Comment_Reactions_Constraint;
  update_columns?: Array<World_Comment_Reactions_Update_Column>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "world_comment_reactions". */
export type World_Comment_Reactions_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_comment?: InputMaybe<World_Comments_Order_By>;
};

/** primary key columns input for table: world_comment_reactions */
export type World_Comment_Reactions_Pk_Columns_Input = {
  comment_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "world_comment_reactions" */
export const World_Comment_Reactions_Select_Column = {
  /** column name */
  CommentId: 'comment_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type World_Comment_Reactions_Select_Column = typeof World_Comment_Reactions_Select_Column[keyof typeof World_Comment_Reactions_Select_Column];
/** input type for updating data in table "world_comment_reactions" */
export type World_Comment_Reactions_Set_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type World_Comment_Reactions_Stddev_Fields = {
  __typename?: 'world_comment_reactions_stddev_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Stddev_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Comment_Reactions_Stddev_Pop_Fields = {
  __typename?: 'world_comment_reactions_stddev_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Stddev_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Comment_Reactions_Stddev_Samp_Fields = {
  __typename?: 'world_comment_reactions_stddev_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Stddev_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_comment_reactions" */
export type World_Comment_Reactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Comment_Reactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Comment_Reactions_Stream_Cursor_Value_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type World_Comment_Reactions_Sum_Fields = {
  __typename?: 'world_comment_reactions_sum_fields';
  type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Sum_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** update columns of table "world_comment_reactions" */
export const World_Comment_Reactions_Update_Column = {
  /** column name */
  CommentId: 'comment_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type World_Comment_Reactions_Update_Column = typeof World_Comment_Reactions_Update_Column[keyof typeof World_Comment_Reactions_Update_Column];
export type World_Comment_Reactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Comment_Reactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Comment_Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Comment_Reactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Comment_Reactions_Var_Pop_Fields = {
  __typename?: 'world_comment_reactions_var_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Var_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Comment_Reactions_Var_Samp_Fields = {
  __typename?: 'world_comment_reactions_var_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Var_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Comment_Reactions_Variance_Fields = {
  __typename?: 'world_comment_reactions_variance_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_comment_reactions" */
export type World_Comment_Reactions_Variance_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** columns and relationships of "world_comments" */
export type World_Comments = {
  __typename?: 'world_comments';
  author_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  world: Worlds;
  /** An array relationship */
  world_comment_reactions: Array<World_Comment_Reactions>;
  /** An aggregate relationship */
  world_comment_reactions_aggregate: World_Comment_Reactions_Aggregate;
  world_id: Scalars['uuid']['output'];
};


/** columns and relationships of "world_comments" */
export type World_CommentsWorld_Comment_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comment_Reactions_Order_By>>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "world_comments" */
export type World_CommentsWorld_Comment_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comment_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comment_Reactions_Order_By>>;
  where?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
};

/** aggregated selection of "world_comments" */
export type World_Comments_Aggregate = {
  __typename?: 'world_comments_aggregate';
  aggregate?: Maybe<World_Comments_Aggregate_Fields>;
  nodes: Array<World_Comments>;
};

export type World_Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Comments_Aggregate_Bool_Exp_Count>;
};

export type World_Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_comments" */
export type World_Comments_Aggregate_Fields = {
  __typename?: 'world_comments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<World_Comments_Max_Fields>;
  min?: Maybe<World_Comments_Min_Fields>;
};


/** aggregate fields of "world_comments" */
export type World_Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_comments" */
export type World_Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Comments_Max_Order_By>;
  min?: InputMaybe<World_Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "world_comments" */
export type World_Comments_Arr_Rel_Insert_Input = {
  data: Array<World_Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "world_comments". All fields are combined with a logical 'AND'. */
export type World_Comments_Bool_Exp = {
  _and?: InputMaybe<Array<World_Comments_Bool_Exp>>;
  _not?: InputMaybe<World_Comments_Bool_Exp>;
  _or?: InputMaybe<Array<World_Comments_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_comment_reactions?: InputMaybe<World_Comment_Reactions_Bool_Exp>;
  world_comment_reactions_aggregate?: InputMaybe<World_Comment_Reactions_Aggregate_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_comments" */
export const World_Comments_Constraint = {
  /** unique or primary key constraint on columns "id" */
  WorldCommentsPkey: 'world_comments_pkey'
} as const;

export type World_Comments_Constraint = typeof World_Comments_Constraint[keyof typeof World_Comments_Constraint];
/** input type for inserting data into table "world_comments" */
export type World_Comments_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_comment_reactions?: InputMaybe<World_Comment_Reactions_Arr_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Comments_Max_Fields = {
  __typename?: 'world_comments_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_comments" */
export type World_Comments_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Comments_Min_Fields = {
  __typename?: 'world_comments_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_comments" */
export type World_Comments_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_comments" */
export type World_Comments_Mutation_Response = {
  __typename?: 'world_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Comments>;
};

/** input type for inserting object relation for remote table "world_comments" */
export type World_Comments_Obj_Rel_Insert_Input = {
  data: World_Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Comments_On_Conflict>;
};

/** on_conflict condition type for table "world_comments" */
export type World_Comments_On_Conflict = {
  constraint: World_Comments_Constraint;
  update_columns?: Array<World_Comments_Update_Column>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "world_comments". */
export type World_Comments_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_comment_reactions_aggregate?: InputMaybe<World_Comment_Reactions_Aggregate_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_comments */
export type World_Comments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "world_comments" */
export const World_Comments_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Comments_Select_Column = typeof World_Comments_Select_Column[keyof typeof World_Comments_Select_Column];
/** input type for updating data in table "world_comments" */
export type World_Comments_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "world_comments" */
export type World_Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Comments_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "world_comments" */
export const World_Comments_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Text: 'text',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Comments_Update_Column = typeof World_Comments_Update_Column[keyof typeof World_Comments_Update_Column];
export type World_Comments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Comments_Bool_Exp;
};

/** columns and relationships of "world_histories" */
export type World_Histories = {
  __typename?: 'world_histories';
  block_json?: Maybe<Scalars['jsonb']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  official_language: Scalars['String']['output'];
  public_security: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
  world_image_url: Scalars['String']['output'];
};


/** columns and relationships of "world_histories" */
export type World_HistoriesBlock_JsonArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "world_histories" */
export type World_Histories_Aggregate = {
  __typename?: 'world_histories_aggregate';
  aggregate?: Maybe<World_Histories_Aggregate_Fields>;
  nodes: Array<World_Histories>;
};

export type World_Histories_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Histories_Aggregate_Bool_Exp_Count>;
};

export type World_Histories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Histories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_histories" */
export type World_Histories_Aggregate_Fields = {
  __typename?: 'world_histories_aggregate_fields';
  avg?: Maybe<World_Histories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Histories_Max_Fields>;
  min?: Maybe<World_Histories_Min_Fields>;
  stddev?: Maybe<World_Histories_Stddev_Fields>;
  stddev_pop?: Maybe<World_Histories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Histories_Stddev_Samp_Fields>;
  sum?: Maybe<World_Histories_Sum_Fields>;
  var_pop?: Maybe<World_Histories_Var_Pop_Fields>;
  var_samp?: Maybe<World_Histories_Var_Samp_Fields>;
  variance?: Maybe<World_Histories_Variance_Fields>;
};


/** aggregate fields of "world_histories" */
export type World_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_histories" */
export type World_Histories_Aggregate_Order_By = {
  avg?: InputMaybe<World_Histories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Histories_Max_Order_By>;
  min?: InputMaybe<World_Histories_Min_Order_By>;
  stddev?: InputMaybe<World_Histories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Histories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Histories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Histories_Sum_Order_By>;
  var_pop?: InputMaybe<World_Histories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Histories_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Histories_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type World_Histories_Append_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "world_histories" */
export type World_Histories_Arr_Rel_Insert_Input = {
  data: Array<World_Histories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Histories_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Histories_Avg_Fields = {
  __typename?: 'world_histories_avg_fields';
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_histories" */
export type World_Histories_Avg_Order_By = {
  public_security?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_histories". All fields are combined with a logical 'AND'. */
export type World_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<World_Histories_Bool_Exp>>;
  _not?: InputMaybe<World_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<World_Histories_Bool_Exp>>;
  block_json?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  official_language?: InputMaybe<String_Comparison_Exp>;
  public_security?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
  world_image_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_histories" */
export const World_Histories_Constraint = {
  /** unique or primary key constraint on columns "id" */
  WorldHistoriesPkey: 'world_histories_pkey'
} as const;

export type World_Histories_Constraint = typeof World_Histories_Constraint[keyof typeof World_Histories_Constraint];
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type World_Histories_Delete_At_Path_Input = {
  block_json?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type World_Histories_Delete_Elem_Input = {
  block_json?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type World_Histories_Delete_Key_Input = {
  block_json?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "world_histories" */
export type World_Histories_Inc_Input = {
  public_security?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_histories" */
export type World_Histories_Insert_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  official_language?: InputMaybe<Scalars['String']['input']>;
  public_security?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
  world_image_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type World_Histories_Max_Fields = {
  __typename?: 'world_histories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  official_language?: Maybe<Scalars['String']['output']>;
  public_security?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
  world_image_url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "world_histories" */
export type World_Histories_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
  world_image_url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Histories_Min_Fields = {
  __typename?: 'world_histories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  official_language?: Maybe<Scalars['String']['output']>;
  public_security?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
  world_image_url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "world_histories" */
export type World_Histories_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
  world_image_url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_histories" */
export type World_Histories_Mutation_Response = {
  __typename?: 'world_histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Histories>;
};

/** on_conflict condition type for table "world_histories" */
export type World_Histories_On_Conflict = {
  constraint: World_Histories_Constraint;
  update_columns?: Array<World_Histories_Update_Column>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "world_histories". */
export type World_Histories_Order_By = {
  block_json?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  official_language?: InputMaybe<Order_By>;
  public_security?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
  world_image_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_histories */
export type World_Histories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type World_Histories_Prepend_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "world_histories" */
export const World_Histories_Select_Column = {
  /** column name */
  BlockJson: 'block_json',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  OfficialLanguage: 'official_language',
  /** column name */
  PublicSecurity: 'public_security',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id',
  /** column name */
  WorldImageUrl: 'world_image_url'
} as const;

export type World_Histories_Select_Column = typeof World_Histories_Select_Column[keyof typeof World_Histories_Select_Column];
/** input type for updating data in table "world_histories" */
export type World_Histories_Set_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  official_language?: InputMaybe<Scalars['String']['input']>;
  public_security?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
  world_image_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type World_Histories_Stddev_Fields = {
  __typename?: 'world_histories_stddev_fields';
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_histories" */
export type World_Histories_Stddev_Order_By = {
  public_security?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Histories_Stddev_Pop_Fields = {
  __typename?: 'world_histories_stddev_pop_fields';
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_histories" */
export type World_Histories_Stddev_Pop_Order_By = {
  public_security?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Histories_Stddev_Samp_Fields = {
  __typename?: 'world_histories_stddev_samp_fields';
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_histories" */
export type World_Histories_Stddev_Samp_Order_By = {
  public_security?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_histories" */
export type World_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Histories_Stream_Cursor_Value_Input = {
  block_json?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  official_language?: InputMaybe<Scalars['String']['input']>;
  public_security?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
  world_image_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type World_Histories_Sum_Fields = {
  __typename?: 'world_histories_sum_fields';
  public_security?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_histories" */
export type World_Histories_Sum_Order_By = {
  public_security?: InputMaybe<Order_By>;
};

/** update columns of table "world_histories" */
export const World_Histories_Update_Column = {
  /** column name */
  BlockJson: 'block_json',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  OfficialLanguage: 'official_language',
  /** column name */
  PublicSecurity: 'public_security',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id',
  /** column name */
  WorldImageUrl: 'world_image_url'
} as const;

export type World_Histories_Update_Column = typeof World_Histories_Update_Column[keyof typeof World_Histories_Update_Column];
export type World_Histories_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<World_Histories_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<World_Histories_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<World_Histories_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<World_Histories_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Histories_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<World_Histories_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Histories_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Histories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Histories_Var_Pop_Fields = {
  __typename?: 'world_histories_var_pop_fields';
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_histories" */
export type World_Histories_Var_Pop_Order_By = {
  public_security?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Histories_Var_Samp_Fields = {
  __typename?: 'world_histories_var_samp_fields';
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_histories" */
export type World_Histories_Var_Samp_Order_By = {
  public_security?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Histories_Variance_Fields = {
  __typename?: 'world_histories_variance_fields';
  public_security?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_histories" */
export type World_Histories_Variance_Order_By = {
  public_security?: InputMaybe<Order_By>;
};

/** columns and relationships of "world_laws" */
export type World_Laws = {
  __typename?: 'world_laws';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  law: Laws;
  law_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_laws" */
export type World_Laws_Aggregate = {
  __typename?: 'world_laws_aggregate';
  aggregate?: Maybe<World_Laws_Aggregate_Fields>;
  nodes: Array<World_Laws>;
};

export type World_Laws_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Laws_Aggregate_Bool_Exp_Count>;
};

export type World_Laws_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Laws_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Laws_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_laws" */
export type World_Laws_Aggregate_Fields = {
  __typename?: 'world_laws_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<World_Laws_Max_Fields>;
  min?: Maybe<World_Laws_Min_Fields>;
};


/** aggregate fields of "world_laws" */
export type World_Laws_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Laws_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_laws" */
export type World_Laws_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Laws_Max_Order_By>;
  min?: InputMaybe<World_Laws_Min_Order_By>;
};

/** input type for inserting array relation for remote table "world_laws" */
export type World_Laws_Arr_Rel_Insert_Input = {
  data: Array<World_Laws_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Laws_On_Conflict>;
};

/** Boolean expression to filter rows from the table "world_laws". All fields are combined with a logical 'AND'. */
export type World_Laws_Bool_Exp = {
  _and?: InputMaybe<Array<World_Laws_Bool_Exp>>;
  _not?: InputMaybe<World_Laws_Bool_Exp>;
  _or?: InputMaybe<Array<World_Laws_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  law?: InputMaybe<Laws_Bool_Exp>;
  law_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_laws" */
export const World_Laws_Constraint = {
  /** unique or primary key constraint on columns "world_id", "law_id" */
  WorldLawsPkey: 'world_laws_pkey'
} as const;

export type World_Laws_Constraint = typeof World_Laws_Constraint[keyof typeof World_Laws_Constraint];
/** input type for inserting data into table "world_laws" */
export type World_Laws_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law?: InputMaybe<Laws_Obj_Rel_Insert_Input>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Laws_Max_Fields = {
  __typename?: 'world_laws_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_laws" */
export type World_Laws_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Laws_Min_Fields = {
  __typename?: 'world_laws_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  law_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_laws" */
export type World_Laws_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_laws" */
export type World_Laws_Mutation_Response = {
  __typename?: 'world_laws_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Laws>;
};

/** on_conflict condition type for table "world_laws" */
export type World_Laws_On_Conflict = {
  constraint: World_Laws_Constraint;
  update_columns?: Array<World_Laws_Update_Column>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};

/** Ordering options when selecting data from "world_laws". */
export type World_Laws_Order_By = {
  created_at?: InputMaybe<Order_By>;
  law?: InputMaybe<Laws_Order_By>;
  law_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_laws */
export type World_Laws_Pk_Columns_Input = {
  law_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};

/** select columns of table "world_laws" */
export const World_Laws_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Laws_Select_Column = typeof World_Laws_Select_Column[keyof typeof World_Laws_Select_Column];
/** input type for updating data in table "world_laws" */
export type World_Laws_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "world_laws" */
export type World_Laws_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Laws_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Laws_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  law_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "world_laws" */
export const World_Laws_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  LawId: 'law_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Laws_Update_Column = typeof World_Laws_Update_Column[keyof typeof World_Laws_Update_Column];
export type World_Laws_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Laws_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Laws_Bool_Exp;
};

/** columns and relationships of "world_reactions" */
export type World_Reactions = {
  __typename?: 'world_reactions';
  created_at: Scalars['timestamptz']['output'];
  type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  world: Worlds;
  world_id: Scalars['uuid']['output'];
};

/** aggregated selection of "world_reactions" */
export type World_Reactions_Aggregate = {
  __typename?: 'world_reactions_aggregate';
  aggregate?: Maybe<World_Reactions_Aggregate_Fields>;
  nodes: Array<World_Reactions>;
};

export type World_Reactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<World_Reactions_Aggregate_Bool_Exp_Count>;
};

export type World_Reactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<World_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<World_Reactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "world_reactions" */
export type World_Reactions_Aggregate_Fields = {
  __typename?: 'world_reactions_aggregate_fields';
  avg?: Maybe<World_Reactions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<World_Reactions_Max_Fields>;
  min?: Maybe<World_Reactions_Min_Fields>;
  stddev?: Maybe<World_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<World_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<World_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<World_Reactions_Sum_Fields>;
  var_pop?: Maybe<World_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<World_Reactions_Var_Samp_Fields>;
  variance?: Maybe<World_Reactions_Variance_Fields>;
};


/** aggregate fields of "world_reactions" */
export type World_Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<World_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "world_reactions" */
export type World_Reactions_Aggregate_Order_By = {
  avg?: InputMaybe<World_Reactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<World_Reactions_Max_Order_By>;
  min?: InputMaybe<World_Reactions_Min_Order_By>;
  stddev?: InputMaybe<World_Reactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<World_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<World_Reactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<World_Reactions_Sum_Order_By>;
  var_pop?: InputMaybe<World_Reactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<World_Reactions_Var_Samp_Order_By>;
  variance?: InputMaybe<World_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "world_reactions" */
export type World_Reactions_Arr_Rel_Insert_Input = {
  data: Array<World_Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<World_Reactions_On_Conflict>;
};

/** aggregate avg on columns */
export type World_Reactions_Avg_Fields = {
  __typename?: 'world_reactions_avg_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "world_reactions" */
export type World_Reactions_Avg_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "world_reactions". All fields are combined with a logical 'AND'. */
export type World_Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<World_Reactions_Bool_Exp>>;
  _not?: InputMaybe<World_Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<World_Reactions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  world?: InputMaybe<Worlds_Bool_Exp>;
  world_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "world_reactions" */
export const World_Reactions_Constraint = {
  /** unique or primary key constraint on columns "world_id", "user_id", "type" */
  WorldReactionsPkey: 'world_reactions_pkey'
} as const;

export type World_Reactions_Constraint = typeof World_Reactions_Constraint[keyof typeof World_Reactions_Constraint];
/** input type for incrementing numeric columns in table "world_reactions" */
export type World_Reactions_Inc_Input = {
  type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "world_reactions" */
export type World_Reactions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world?: InputMaybe<Worlds_Obj_Rel_Insert_Input>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type World_Reactions_Max_Fields = {
  __typename?: 'world_reactions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "world_reactions" */
export type World_Reactions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type World_Reactions_Min_Fields = {
  __typename?: 'world_reactions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  world_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "world_reactions" */
export type World_Reactions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "world_reactions" */
export type World_Reactions_Mutation_Response = {
  __typename?: 'world_reactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<World_Reactions>;
};

/** on_conflict condition type for table "world_reactions" */
export type World_Reactions_On_Conflict = {
  constraint: World_Reactions_Constraint;
  update_columns?: Array<World_Reactions_Update_Column>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "world_reactions". */
export type World_Reactions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  world?: InputMaybe<Worlds_Order_By>;
  world_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: world_reactions */
export type World_Reactions_Pk_Columns_Input = {
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
};

/** select columns of table "world_reactions" */
export const World_Reactions_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Reactions_Select_Column = typeof World_Reactions_Select_Column[keyof typeof World_Reactions_Select_Column];
/** input type for updating data in table "world_reactions" */
export type World_Reactions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type World_Reactions_Stddev_Fields = {
  __typename?: 'world_reactions_stddev_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "world_reactions" */
export type World_Reactions_Stddev_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type World_Reactions_Stddev_Pop_Fields = {
  __typename?: 'world_reactions_stddev_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "world_reactions" */
export type World_Reactions_Stddev_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type World_Reactions_Stddev_Samp_Fields = {
  __typename?: 'world_reactions_stddev_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "world_reactions" */
export type World_Reactions_Stddev_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "world_reactions" */
export type World_Reactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: World_Reactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type World_Reactions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type World_Reactions_Sum_Fields = {
  __typename?: 'world_reactions_sum_fields';
  type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "world_reactions" */
export type World_Reactions_Sum_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** update columns of table "world_reactions" */
export const World_Reactions_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Type: 'type',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
  /** column name */
  WorldId: 'world_id'
} as const;

export type World_Reactions_Update_Column = typeof World_Reactions_Update_Column[keyof typeof World_Reactions_Update_Column];
export type World_Reactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<World_Reactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<World_Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: World_Reactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type World_Reactions_Var_Pop_Fields = {
  __typename?: 'world_reactions_var_pop_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "world_reactions" */
export type World_Reactions_Var_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type World_Reactions_Var_Samp_Fields = {
  __typename?: 'world_reactions_var_samp_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "world_reactions" */
export type World_Reactions_Var_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type World_Reactions_Variance_Fields = {
  __typename?: 'world_reactions_variance_fields';
  type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "world_reactions" */
export type World_Reactions_Variance_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** columns and relationships of "worlds" */
export type Worlds = {
  __typename?: 'worlds';
  author_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  species_percentage: Array<Species_Percentage_View_With_World_Id>;
  /** An aggregate relationship */
  species_percentage_aggregate: Species_Percentage_View_With_World_Id_Aggregate;
  status: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An array relationship */
  world_citizens: Array<World_Citizens>;
  /** An aggregate relationship */
  world_citizens_aggregate: World_Citizens_Aggregate;
  /** An array relationship */
  world_comments: Array<World_Comments>;
  /** An aggregate relationship */
  world_comments_aggregate: World_Comments_Aggregate;
  /** An array relationship */
  world_histories: Array<World_Histories>;
  /** An aggregate relationship */
  world_histories_aggregate: World_Histories_Aggregate;
  /** An array relationship */
  world_laws: Array<World_Laws>;
  /** An aggregate relationship */
  world_laws_aggregate: World_Laws_Aggregate;
  /** An array relationship */
  world_reactions: Array<World_Reactions>;
  /** An aggregate relationship */
  world_reactions_aggregate: World_Reactions_Aggregate;
};


/** columns and relationships of "worlds" */
export type WorldsSpecies_PercentageArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsSpecies_Percentage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Species_Percentage_View_With_World_Id_Order_By>>;
  where?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_CitizensArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Citizens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Citizens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Citizens_Order_By>>;
  where?: InputMaybe<World_Citizens_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_CommentsArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By>>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Histories_Order_By>>;
  where?: InputMaybe<World_Histories_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_LawsArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Laws_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Laws_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Laws_Order_By>>;
  where?: InputMaybe<World_Laws_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};


/** columns and relationships of "worlds" */
export type WorldsWorld_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<World_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Reactions_Order_By>>;
  where?: InputMaybe<World_Reactions_Bool_Exp>;
};

/** aggregated selection of "worlds" */
export type Worlds_Aggregate = {
  __typename?: 'worlds_aggregate';
  aggregate?: Maybe<Worlds_Aggregate_Fields>;
  nodes: Array<Worlds>;
};

export type Worlds_Aggregate_Bool_Exp = {
  count?: InputMaybe<Worlds_Aggregate_Bool_Exp_Count>;
};

export type Worlds_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Worlds_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Worlds_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "worlds" */
export type Worlds_Aggregate_Fields = {
  __typename?: 'worlds_aggregate_fields';
  avg?: Maybe<Worlds_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Worlds_Max_Fields>;
  min?: Maybe<Worlds_Min_Fields>;
  stddev?: Maybe<Worlds_Stddev_Fields>;
  stddev_pop?: Maybe<Worlds_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Worlds_Stddev_Samp_Fields>;
  sum?: Maybe<Worlds_Sum_Fields>;
  var_pop?: Maybe<Worlds_Var_Pop_Fields>;
  var_samp?: Maybe<Worlds_Var_Samp_Fields>;
  variance?: Maybe<Worlds_Variance_Fields>;
};


/** aggregate fields of "worlds" */
export type Worlds_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Worlds_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "worlds" */
export type Worlds_Aggregate_Order_By = {
  avg?: InputMaybe<Worlds_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Worlds_Max_Order_By>;
  min?: InputMaybe<Worlds_Min_Order_By>;
  stddev?: InputMaybe<Worlds_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Worlds_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Worlds_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Worlds_Sum_Order_By>;
  var_pop?: InputMaybe<Worlds_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Worlds_Var_Samp_Order_By>;
  variance?: InputMaybe<Worlds_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "worlds" */
export type Worlds_Arr_Rel_Insert_Input = {
  data: Array<Worlds_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Worlds_On_Conflict>;
};

/** aggregate avg on columns */
export type Worlds_Avg_Fields = {
  __typename?: 'worlds_avg_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "worlds" */
export type Worlds_Avg_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "worlds". All fields are combined with a logical 'AND'. */
export type Worlds_Bool_Exp = {
  _and?: InputMaybe<Array<Worlds_Bool_Exp>>;
  _not?: InputMaybe<Worlds_Bool_Exp>;
  _or?: InputMaybe<Array<Worlds_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  species_percentage?: InputMaybe<Species_Percentage_View_With_World_Id_Bool_Exp>;
  species_percentage_aggregate?: InputMaybe<Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  world_citizens?: InputMaybe<World_Citizens_Bool_Exp>;
  world_citizens_aggregate?: InputMaybe<World_Citizens_Aggregate_Bool_Exp>;
  world_comments?: InputMaybe<World_Comments_Bool_Exp>;
  world_comments_aggregate?: InputMaybe<World_Comments_Aggregate_Bool_Exp>;
  world_histories?: InputMaybe<World_Histories_Bool_Exp>;
  world_histories_aggregate?: InputMaybe<World_Histories_Aggregate_Bool_Exp>;
  world_laws?: InputMaybe<World_Laws_Bool_Exp>;
  world_laws_aggregate?: InputMaybe<World_Laws_Aggregate_Bool_Exp>;
  world_reactions?: InputMaybe<World_Reactions_Bool_Exp>;
  world_reactions_aggregate?: InputMaybe<World_Reactions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "worlds" */
export const Worlds_Constraint = {
  /** unique or primary key constraint on columns "id" */
  WorldsPkey: 'worlds_pkey'
} as const;

export type Worlds_Constraint = typeof Worlds_Constraint[keyof typeof Worlds_Constraint];
/** input type for incrementing numeric columns in table "worlds" */
export type Worlds_Inc_Input = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "worlds" */
export type Worlds_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  species_percentage?: InputMaybe<Species_Percentage_View_With_World_Id_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  world_citizens?: InputMaybe<World_Citizens_Arr_Rel_Insert_Input>;
  world_comments?: InputMaybe<World_Comments_Arr_Rel_Insert_Input>;
  world_histories?: InputMaybe<World_Histories_Arr_Rel_Insert_Input>;
  world_laws?: InputMaybe<World_Laws_Arr_Rel_Insert_Input>;
  world_reactions?: InputMaybe<World_Reactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Worlds_Max_Fields = {
  __typename?: 'worlds_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "worlds" */
export type Worlds_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Worlds_Min_Fields = {
  __typename?: 'worlds_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "worlds" */
export type Worlds_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "worlds" */
export type Worlds_Mutation_Response = {
  __typename?: 'worlds_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Worlds>;
};

/** input type for inserting object relation for remote table "worlds" */
export type Worlds_Obj_Rel_Insert_Input = {
  data: Worlds_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Worlds_On_Conflict>;
};

/** on_conflict condition type for table "worlds" */
export type Worlds_On_Conflict = {
  constraint: Worlds_Constraint;
  update_columns?: Array<Worlds_Update_Column>;
  where?: InputMaybe<Worlds_Bool_Exp>;
};

/** Ordering options when selecting data from "worlds". */
export type Worlds_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  species_percentage_aggregate?: InputMaybe<Species_Percentage_View_With_World_Id_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  world_citizens_aggregate?: InputMaybe<World_Citizens_Aggregate_Order_By>;
  world_comments_aggregate?: InputMaybe<World_Comments_Aggregate_Order_By>;
  world_histories_aggregate?: InputMaybe<World_Histories_Aggregate_Order_By>;
  world_laws_aggregate?: InputMaybe<World_Laws_Aggregate_Order_By>;
  world_reactions_aggregate?: InputMaybe<World_Reactions_Aggregate_Order_By>;
};

/** primary key columns input for table: worlds */
export type Worlds_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "worlds" */
export const Worlds_Select_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Worlds_Select_Column = typeof Worlds_Select_Column[keyof typeof Worlds_Select_Column];
/** input type for updating data in table "worlds" */
export type Worlds_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Worlds_Stddev_Fields = {
  __typename?: 'worlds_stddev_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "worlds" */
export type Worlds_Stddev_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Worlds_Stddev_Pop_Fields = {
  __typename?: 'worlds_stddev_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "worlds" */
export type Worlds_Stddev_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Worlds_Stddev_Samp_Fields = {
  __typename?: 'worlds_stddev_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "worlds" */
export type Worlds_Stddev_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "worlds" */
export type Worlds_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Worlds_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Worlds_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Worlds_Sum_Fields = {
  __typename?: 'worlds_sum_fields';
  status?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "worlds" */
export type Worlds_Sum_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** update columns of table "worlds" */
export const Worlds_Update_Column = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type Worlds_Update_Column = typeof Worlds_Update_Column[keyof typeof Worlds_Update_Column];
export type Worlds_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Worlds_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Worlds_Set_Input>;
  /** filter the rows which have to be updated */
  where: Worlds_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Worlds_Var_Pop_Fields = {
  __typename?: 'worlds_var_pop_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "worlds" */
export type Worlds_Var_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Worlds_Var_Samp_Fields = {
  __typename?: 'worlds_var_samp_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "worlds" */
export type Worlds_Var_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Worlds_Variance_Fields = {
  __typename?: 'worlds_variance_fields';
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "worlds" */
export type Worlds_Variance_Order_By = {
  status?: InputMaybe<Order_By>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  String_comparison_exp: String_Comparison_Exp;
  citizens: ResolverTypeWrapper<Citizens>;
  citizens_aggregate: ResolverTypeWrapper<Citizens_Aggregate>;
  citizens_aggregate_bool_exp: Citizens_Aggregate_Bool_Exp;
  citizens_aggregate_bool_exp_count: Citizens_Aggregate_Bool_Exp_Count;
  citizens_aggregate_fields: ResolverTypeWrapper<Citizens_Aggregate_Fields>;
  citizens_aggregate_order_by: Citizens_Aggregate_Order_By;
  citizens_arr_rel_insert_input: Citizens_Arr_Rel_Insert_Input;
  citizens_avg_fields: ResolverTypeWrapper<Citizens_Avg_Fields>;
  citizens_avg_order_by: Citizens_Avg_Order_By;
  citizens_bool_exp: Citizens_Bool_Exp;
  citizens_constraint: Citizens_Constraint;
  citizens_inc_input: Citizens_Inc_Input;
  citizens_insert_input: Citizens_Insert_Input;
  citizens_max_fields: ResolverTypeWrapper<Citizens_Max_Fields>;
  citizens_max_order_by: Citizens_Max_Order_By;
  citizens_min_fields: ResolverTypeWrapper<Citizens_Min_Fields>;
  citizens_min_order_by: Citizens_Min_Order_By;
  citizens_mutation_response: ResolverTypeWrapper<Citizens_Mutation_Response>;
  citizens_obj_rel_insert_input: Citizens_Obj_Rel_Insert_Input;
  citizens_on_conflict: Citizens_On_Conflict;
  citizens_order_by: Citizens_Order_By;
  citizens_pk_columns_input: Citizens_Pk_Columns_Input;
  citizens_select_column: Citizens_Select_Column;
  citizens_set_input: Citizens_Set_Input;
  citizens_stddev_fields: ResolverTypeWrapper<Citizens_Stddev_Fields>;
  citizens_stddev_order_by: Citizens_Stddev_Order_By;
  citizens_stddev_pop_fields: ResolverTypeWrapper<Citizens_Stddev_Pop_Fields>;
  citizens_stddev_pop_order_by: Citizens_Stddev_Pop_Order_By;
  citizens_stddev_samp_fields: ResolverTypeWrapper<Citizens_Stddev_Samp_Fields>;
  citizens_stddev_samp_order_by: Citizens_Stddev_Samp_Order_By;
  citizens_stream_cursor_input: Citizens_Stream_Cursor_Input;
  citizens_stream_cursor_value_input: Citizens_Stream_Cursor_Value_Input;
  citizens_sum_fields: ResolverTypeWrapper<Citizens_Sum_Fields>;
  citizens_sum_order_by: Citizens_Sum_Order_By;
  citizens_update_column: Citizens_Update_Column;
  citizens_updates: Citizens_Updates;
  citizens_var_pop_fields: ResolverTypeWrapper<Citizens_Var_Pop_Fields>;
  citizens_var_pop_order_by: Citizens_Var_Pop_Order_By;
  citizens_var_samp_fields: ResolverTypeWrapper<Citizens_Var_Samp_Fields>;
  citizens_var_samp_order_by: Citizens_Var_Samp_Order_By;
  citizens_variance_fields: ResolverTypeWrapper<Citizens_Variance_Fields>;
  citizens_variance_order_by: Citizens_Variance_Order_By;
  cursor_ordering: Cursor_Ordering;
  jsonb: ResolverTypeWrapper<Scalars['jsonb']['output']>;
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  law_comment_reactions: ResolverTypeWrapper<Law_Comment_Reactions>;
  law_comment_reactions_aggregate: ResolverTypeWrapper<Law_Comment_Reactions_Aggregate>;
  law_comment_reactions_aggregate_bool_exp: Law_Comment_Reactions_Aggregate_Bool_Exp;
  law_comment_reactions_aggregate_bool_exp_count: Law_Comment_Reactions_Aggregate_Bool_Exp_Count;
  law_comment_reactions_aggregate_fields: ResolverTypeWrapper<Law_Comment_Reactions_Aggregate_Fields>;
  law_comment_reactions_aggregate_order_by: Law_Comment_Reactions_Aggregate_Order_By;
  law_comment_reactions_arr_rel_insert_input: Law_Comment_Reactions_Arr_Rel_Insert_Input;
  law_comment_reactions_avg_fields: ResolverTypeWrapper<Law_Comment_Reactions_Avg_Fields>;
  law_comment_reactions_avg_order_by: Law_Comment_Reactions_Avg_Order_By;
  law_comment_reactions_bool_exp: Law_Comment_Reactions_Bool_Exp;
  law_comment_reactions_constraint: Law_Comment_Reactions_Constraint;
  law_comment_reactions_inc_input: Law_Comment_Reactions_Inc_Input;
  law_comment_reactions_insert_input: Law_Comment_Reactions_Insert_Input;
  law_comment_reactions_max_fields: ResolverTypeWrapper<Law_Comment_Reactions_Max_Fields>;
  law_comment_reactions_max_order_by: Law_Comment_Reactions_Max_Order_By;
  law_comment_reactions_min_fields: ResolverTypeWrapper<Law_Comment_Reactions_Min_Fields>;
  law_comment_reactions_min_order_by: Law_Comment_Reactions_Min_Order_By;
  law_comment_reactions_mutation_response: ResolverTypeWrapper<Law_Comment_Reactions_Mutation_Response>;
  law_comment_reactions_on_conflict: Law_Comment_Reactions_On_Conflict;
  law_comment_reactions_order_by: Law_Comment_Reactions_Order_By;
  law_comment_reactions_pk_columns_input: Law_Comment_Reactions_Pk_Columns_Input;
  law_comment_reactions_select_column: Law_Comment_Reactions_Select_Column;
  law_comment_reactions_set_input: Law_Comment_Reactions_Set_Input;
  law_comment_reactions_stddev_fields: ResolverTypeWrapper<Law_Comment_Reactions_Stddev_Fields>;
  law_comment_reactions_stddev_order_by: Law_Comment_Reactions_Stddev_Order_By;
  law_comment_reactions_stddev_pop_fields: ResolverTypeWrapper<Law_Comment_Reactions_Stddev_Pop_Fields>;
  law_comment_reactions_stddev_pop_order_by: Law_Comment_Reactions_Stddev_Pop_Order_By;
  law_comment_reactions_stddev_samp_fields: ResolverTypeWrapper<Law_Comment_Reactions_Stddev_Samp_Fields>;
  law_comment_reactions_stddev_samp_order_by: Law_Comment_Reactions_Stddev_Samp_Order_By;
  law_comment_reactions_stream_cursor_input: Law_Comment_Reactions_Stream_Cursor_Input;
  law_comment_reactions_stream_cursor_value_input: Law_Comment_Reactions_Stream_Cursor_Value_Input;
  law_comment_reactions_sum_fields: ResolverTypeWrapper<Law_Comment_Reactions_Sum_Fields>;
  law_comment_reactions_sum_order_by: Law_Comment_Reactions_Sum_Order_By;
  law_comment_reactions_update_column: Law_Comment_Reactions_Update_Column;
  law_comment_reactions_updates: Law_Comment_Reactions_Updates;
  law_comment_reactions_var_pop_fields: ResolverTypeWrapper<Law_Comment_Reactions_Var_Pop_Fields>;
  law_comment_reactions_var_pop_order_by: Law_Comment_Reactions_Var_Pop_Order_By;
  law_comment_reactions_var_samp_fields: ResolverTypeWrapper<Law_Comment_Reactions_Var_Samp_Fields>;
  law_comment_reactions_var_samp_order_by: Law_Comment_Reactions_Var_Samp_Order_By;
  law_comment_reactions_variance_fields: ResolverTypeWrapper<Law_Comment_Reactions_Variance_Fields>;
  law_comment_reactions_variance_order_by: Law_Comment_Reactions_Variance_Order_By;
  law_comments: ResolverTypeWrapper<Law_Comments>;
  law_comments_aggregate: ResolverTypeWrapper<Law_Comments_Aggregate>;
  law_comments_aggregate_bool_exp: Law_Comments_Aggregate_Bool_Exp;
  law_comments_aggregate_bool_exp_count: Law_Comments_Aggregate_Bool_Exp_Count;
  law_comments_aggregate_fields: ResolverTypeWrapper<Law_Comments_Aggregate_Fields>;
  law_comments_aggregate_order_by: Law_Comments_Aggregate_Order_By;
  law_comments_arr_rel_insert_input: Law_Comments_Arr_Rel_Insert_Input;
  law_comments_bool_exp: Law_Comments_Bool_Exp;
  law_comments_constraint: Law_Comments_Constraint;
  law_comments_insert_input: Law_Comments_Insert_Input;
  law_comments_max_fields: ResolverTypeWrapper<Law_Comments_Max_Fields>;
  law_comments_max_order_by: Law_Comments_Max_Order_By;
  law_comments_min_fields: ResolverTypeWrapper<Law_Comments_Min_Fields>;
  law_comments_min_order_by: Law_Comments_Min_Order_By;
  law_comments_mutation_response: ResolverTypeWrapper<Law_Comments_Mutation_Response>;
  law_comments_obj_rel_insert_input: Law_Comments_Obj_Rel_Insert_Input;
  law_comments_on_conflict: Law_Comments_On_Conflict;
  law_comments_order_by: Law_Comments_Order_By;
  law_comments_pk_columns_input: Law_Comments_Pk_Columns_Input;
  law_comments_select_column: Law_Comments_Select_Column;
  law_comments_set_input: Law_Comments_Set_Input;
  law_comments_stream_cursor_input: Law_Comments_Stream_Cursor_Input;
  law_comments_stream_cursor_value_input: Law_Comments_Stream_Cursor_Value_Input;
  law_comments_update_column: Law_Comments_Update_Column;
  law_comments_updates: Law_Comments_Updates;
  law_reactions: ResolverTypeWrapper<Law_Reactions>;
  law_reactions_aggregate: ResolverTypeWrapper<Law_Reactions_Aggregate>;
  law_reactions_aggregate_bool_exp: Law_Reactions_Aggregate_Bool_Exp;
  law_reactions_aggregate_bool_exp_count: Law_Reactions_Aggregate_Bool_Exp_Count;
  law_reactions_aggregate_fields: ResolverTypeWrapper<Law_Reactions_Aggregate_Fields>;
  law_reactions_aggregate_order_by: Law_Reactions_Aggregate_Order_By;
  law_reactions_arr_rel_insert_input: Law_Reactions_Arr_Rel_Insert_Input;
  law_reactions_avg_fields: ResolverTypeWrapper<Law_Reactions_Avg_Fields>;
  law_reactions_avg_order_by: Law_Reactions_Avg_Order_By;
  law_reactions_bool_exp: Law_Reactions_Bool_Exp;
  law_reactions_constraint: Law_Reactions_Constraint;
  law_reactions_inc_input: Law_Reactions_Inc_Input;
  law_reactions_insert_input: Law_Reactions_Insert_Input;
  law_reactions_max_fields: ResolverTypeWrapper<Law_Reactions_Max_Fields>;
  law_reactions_max_order_by: Law_Reactions_Max_Order_By;
  law_reactions_min_fields: ResolverTypeWrapper<Law_Reactions_Min_Fields>;
  law_reactions_min_order_by: Law_Reactions_Min_Order_By;
  law_reactions_mutation_response: ResolverTypeWrapper<Law_Reactions_Mutation_Response>;
  law_reactions_on_conflict: Law_Reactions_On_Conflict;
  law_reactions_order_by: Law_Reactions_Order_By;
  law_reactions_pk_columns_input: Law_Reactions_Pk_Columns_Input;
  law_reactions_select_column: Law_Reactions_Select_Column;
  law_reactions_set_input: Law_Reactions_Set_Input;
  law_reactions_stddev_fields: ResolverTypeWrapper<Law_Reactions_Stddev_Fields>;
  law_reactions_stddev_order_by: Law_Reactions_Stddev_Order_By;
  law_reactions_stddev_pop_fields: ResolverTypeWrapper<Law_Reactions_Stddev_Pop_Fields>;
  law_reactions_stddev_pop_order_by: Law_Reactions_Stddev_Pop_Order_By;
  law_reactions_stddev_samp_fields: ResolverTypeWrapper<Law_Reactions_Stddev_Samp_Fields>;
  law_reactions_stddev_samp_order_by: Law_Reactions_Stddev_Samp_Order_By;
  law_reactions_stream_cursor_input: Law_Reactions_Stream_Cursor_Input;
  law_reactions_stream_cursor_value_input: Law_Reactions_Stream_Cursor_Value_Input;
  law_reactions_sum_fields: ResolverTypeWrapper<Law_Reactions_Sum_Fields>;
  law_reactions_sum_order_by: Law_Reactions_Sum_Order_By;
  law_reactions_update_column: Law_Reactions_Update_Column;
  law_reactions_updates: Law_Reactions_Updates;
  law_reactions_var_pop_fields: ResolverTypeWrapper<Law_Reactions_Var_Pop_Fields>;
  law_reactions_var_pop_order_by: Law_Reactions_Var_Pop_Order_By;
  law_reactions_var_samp_fields: ResolverTypeWrapper<Law_Reactions_Var_Samp_Fields>;
  law_reactions_var_samp_order_by: Law_Reactions_Var_Samp_Order_By;
  law_reactions_variance_fields: ResolverTypeWrapper<Law_Reactions_Variance_Fields>;
  law_reactions_variance_order_by: Law_Reactions_Variance_Order_By;
  law_revisions: ResolverTypeWrapper<Law_Revisions>;
  law_revisions_aggregate: ResolverTypeWrapper<Law_Revisions_Aggregate>;
  law_revisions_aggregate_bool_exp: Law_Revisions_Aggregate_Bool_Exp;
  law_revisions_aggregate_bool_exp_count: Law_Revisions_Aggregate_Bool_Exp_Count;
  law_revisions_aggregate_fields: ResolverTypeWrapper<Law_Revisions_Aggregate_Fields>;
  law_revisions_aggregate_order_by: Law_Revisions_Aggregate_Order_By;
  law_revisions_append_input: Law_Revisions_Append_Input;
  law_revisions_arr_rel_insert_input: Law_Revisions_Arr_Rel_Insert_Input;
  law_revisions_avg_fields: ResolverTypeWrapper<Law_Revisions_Avg_Fields>;
  law_revisions_avg_order_by: Law_Revisions_Avg_Order_By;
  law_revisions_bool_exp: Law_Revisions_Bool_Exp;
  law_revisions_constraint: Law_Revisions_Constraint;
  law_revisions_delete_at_path_input: Law_Revisions_Delete_At_Path_Input;
  law_revisions_delete_elem_input: Law_Revisions_Delete_Elem_Input;
  law_revisions_delete_key_input: Law_Revisions_Delete_Key_Input;
  law_revisions_inc_input: Law_Revisions_Inc_Input;
  law_revisions_insert_input: Law_Revisions_Insert_Input;
  law_revisions_max_fields: ResolverTypeWrapper<Law_Revisions_Max_Fields>;
  law_revisions_max_order_by: Law_Revisions_Max_Order_By;
  law_revisions_min_fields: ResolverTypeWrapper<Law_Revisions_Min_Fields>;
  law_revisions_min_order_by: Law_Revisions_Min_Order_By;
  law_revisions_mutation_response: ResolverTypeWrapper<Law_Revisions_Mutation_Response>;
  law_revisions_on_conflict: Law_Revisions_On_Conflict;
  law_revisions_order_by: Law_Revisions_Order_By;
  law_revisions_pk_columns_input: Law_Revisions_Pk_Columns_Input;
  law_revisions_prepend_input: Law_Revisions_Prepend_Input;
  law_revisions_select_column: Law_Revisions_Select_Column;
  law_revisions_set_input: Law_Revisions_Set_Input;
  law_revisions_stddev_fields: ResolverTypeWrapper<Law_Revisions_Stddev_Fields>;
  law_revisions_stddev_order_by: Law_Revisions_Stddev_Order_By;
  law_revisions_stddev_pop_fields: ResolverTypeWrapper<Law_Revisions_Stddev_Pop_Fields>;
  law_revisions_stddev_pop_order_by: Law_Revisions_Stddev_Pop_Order_By;
  law_revisions_stddev_samp_fields: ResolverTypeWrapper<Law_Revisions_Stddev_Samp_Fields>;
  law_revisions_stddev_samp_order_by: Law_Revisions_Stddev_Samp_Order_By;
  law_revisions_stream_cursor_input: Law_Revisions_Stream_Cursor_Input;
  law_revisions_stream_cursor_value_input: Law_Revisions_Stream_Cursor_Value_Input;
  law_revisions_sum_fields: ResolverTypeWrapper<Law_Revisions_Sum_Fields>;
  law_revisions_sum_order_by: Law_Revisions_Sum_Order_By;
  law_revisions_update_column: Law_Revisions_Update_Column;
  law_revisions_updates: Law_Revisions_Updates;
  law_revisions_var_pop_fields: ResolverTypeWrapper<Law_Revisions_Var_Pop_Fields>;
  law_revisions_var_pop_order_by: Law_Revisions_Var_Pop_Order_By;
  law_revisions_var_samp_fields: ResolverTypeWrapper<Law_Revisions_Var_Samp_Fields>;
  law_revisions_var_samp_order_by: Law_Revisions_Var_Samp_Order_By;
  law_revisions_variance_fields: ResolverTypeWrapper<Law_Revisions_Variance_Fields>;
  law_revisions_variance_order_by: Law_Revisions_Variance_Order_By;
  law_star_rates: ResolverTypeWrapper<Law_Star_Rates>;
  law_star_rates_aggregate: ResolverTypeWrapper<Law_Star_Rates_Aggregate>;
  law_star_rates_aggregate_bool_exp: Law_Star_Rates_Aggregate_Bool_Exp;
  law_star_rates_aggregate_bool_exp_count: Law_Star_Rates_Aggregate_Bool_Exp_Count;
  law_star_rates_aggregate_fields: ResolverTypeWrapper<Law_Star_Rates_Aggregate_Fields>;
  law_star_rates_aggregate_order_by: Law_Star_Rates_Aggregate_Order_By;
  law_star_rates_arr_rel_insert_input: Law_Star_Rates_Arr_Rel_Insert_Input;
  law_star_rates_avg_fields: ResolverTypeWrapper<Law_Star_Rates_Avg_Fields>;
  law_star_rates_avg_order_by: Law_Star_Rates_Avg_Order_By;
  law_star_rates_bool_exp: Law_Star_Rates_Bool_Exp;
  law_star_rates_constraint: Law_Star_Rates_Constraint;
  law_star_rates_inc_input: Law_Star_Rates_Inc_Input;
  law_star_rates_insert_input: Law_Star_Rates_Insert_Input;
  law_star_rates_max_fields: ResolverTypeWrapper<Law_Star_Rates_Max_Fields>;
  law_star_rates_max_order_by: Law_Star_Rates_Max_Order_By;
  law_star_rates_min_fields: ResolverTypeWrapper<Law_Star_Rates_Min_Fields>;
  law_star_rates_min_order_by: Law_Star_Rates_Min_Order_By;
  law_star_rates_mutation_response: ResolverTypeWrapper<Law_Star_Rates_Mutation_Response>;
  law_star_rates_on_conflict: Law_Star_Rates_On_Conflict;
  law_star_rates_order_by: Law_Star_Rates_Order_By;
  law_star_rates_pk_columns_input: Law_Star_Rates_Pk_Columns_Input;
  law_star_rates_select_column: Law_Star_Rates_Select_Column;
  law_star_rates_set_input: Law_Star_Rates_Set_Input;
  law_star_rates_stddev_fields: ResolverTypeWrapper<Law_Star_Rates_Stddev_Fields>;
  law_star_rates_stddev_order_by: Law_Star_Rates_Stddev_Order_By;
  law_star_rates_stddev_pop_fields: ResolverTypeWrapper<Law_Star_Rates_Stddev_Pop_Fields>;
  law_star_rates_stddev_pop_order_by: Law_Star_Rates_Stddev_Pop_Order_By;
  law_star_rates_stddev_samp_fields: ResolverTypeWrapper<Law_Star_Rates_Stddev_Samp_Fields>;
  law_star_rates_stddev_samp_order_by: Law_Star_Rates_Stddev_Samp_Order_By;
  law_star_rates_stream_cursor_input: Law_Star_Rates_Stream_Cursor_Input;
  law_star_rates_stream_cursor_value_input: Law_Star_Rates_Stream_Cursor_Value_Input;
  law_star_rates_sum_fields: ResolverTypeWrapper<Law_Star_Rates_Sum_Fields>;
  law_star_rates_sum_order_by: Law_Star_Rates_Sum_Order_By;
  law_star_rates_update_column: Law_Star_Rates_Update_Column;
  law_star_rates_updates: Law_Star_Rates_Updates;
  law_star_rates_var_pop_fields: ResolverTypeWrapper<Law_Star_Rates_Var_Pop_Fields>;
  law_star_rates_var_pop_order_by: Law_Star_Rates_Var_Pop_Order_By;
  law_star_rates_var_samp_fields: ResolverTypeWrapper<Law_Star_Rates_Var_Samp_Fields>;
  law_star_rates_var_samp_order_by: Law_Star_Rates_Var_Samp_Order_By;
  law_star_rates_variance_fields: ResolverTypeWrapper<Law_Star_Rates_Variance_Fields>;
  law_star_rates_variance_order_by: Law_Star_Rates_Variance_Order_By;
  laws: ResolverTypeWrapper<Laws>;
  laws_aggregate: ResolverTypeWrapper<Laws_Aggregate>;
  laws_aggregate_bool_exp: Laws_Aggregate_Bool_Exp;
  laws_aggregate_bool_exp_count: Laws_Aggregate_Bool_Exp_Count;
  laws_aggregate_fields: ResolverTypeWrapper<Laws_Aggregate_Fields>;
  laws_aggregate_order_by: Laws_Aggregate_Order_By;
  laws_arr_rel_insert_input: Laws_Arr_Rel_Insert_Input;
  laws_avg_fields: ResolverTypeWrapper<Laws_Avg_Fields>;
  laws_avg_order_by: Laws_Avg_Order_By;
  laws_bool_exp: Laws_Bool_Exp;
  laws_constraint: Laws_Constraint;
  laws_inc_input: Laws_Inc_Input;
  laws_insert_input: Laws_Insert_Input;
  laws_max_fields: ResolverTypeWrapper<Laws_Max_Fields>;
  laws_max_order_by: Laws_Max_Order_By;
  laws_min_fields: ResolverTypeWrapper<Laws_Min_Fields>;
  laws_min_order_by: Laws_Min_Order_By;
  laws_mutation_response: ResolverTypeWrapper<Laws_Mutation_Response>;
  laws_obj_rel_insert_input: Laws_Obj_Rel_Insert_Input;
  laws_on_conflict: Laws_On_Conflict;
  laws_order_by: Laws_Order_By;
  laws_pk_columns_input: Laws_Pk_Columns_Input;
  laws_select_column: Laws_Select_Column;
  laws_set_input: Laws_Set_Input;
  laws_stddev_fields: ResolverTypeWrapper<Laws_Stddev_Fields>;
  laws_stddev_order_by: Laws_Stddev_Order_By;
  laws_stddev_pop_fields: ResolverTypeWrapper<Laws_Stddev_Pop_Fields>;
  laws_stddev_pop_order_by: Laws_Stddev_Pop_Order_By;
  laws_stddev_samp_fields: ResolverTypeWrapper<Laws_Stddev_Samp_Fields>;
  laws_stddev_samp_order_by: Laws_Stddev_Samp_Order_By;
  laws_stream_cursor_input: Laws_Stream_Cursor_Input;
  laws_stream_cursor_value_input: Laws_Stream_Cursor_Value_Input;
  laws_sum_fields: ResolverTypeWrapper<Laws_Sum_Fields>;
  laws_sum_order_by: Laws_Sum_Order_By;
  laws_update_column: Laws_Update_Column;
  laws_updates: Laws_Updates;
  laws_var_pop_fields: ResolverTypeWrapper<Laws_Var_Pop_Fields>;
  laws_var_pop_order_by: Laws_Var_Pop_Order_By;
  laws_var_samp_fields: ResolverTypeWrapper<Laws_Var_Samp_Fields>;
  laws_var_samp_order_by: Laws_Var_Samp_Order_By;
  laws_variance_fields: ResolverTypeWrapper<Laws_Variance_Fields>;
  laws_variance_order_by: Laws_Variance_Order_By;
  maintenances: ResolverTypeWrapper<Maintenances>;
  maintenances_aggregate: ResolverTypeWrapper<Maintenances_Aggregate>;
  maintenances_aggregate_fields: ResolverTypeWrapper<Maintenances_Aggregate_Fields>;
  maintenances_bool_exp: Maintenances_Bool_Exp;
  maintenances_constraint: Maintenances_Constraint;
  maintenances_insert_input: Maintenances_Insert_Input;
  maintenances_max_fields: ResolverTypeWrapper<Maintenances_Max_Fields>;
  maintenances_min_fields: ResolverTypeWrapper<Maintenances_Min_Fields>;
  maintenances_mutation_response: ResolverTypeWrapper<Maintenances_Mutation_Response>;
  maintenances_on_conflict: Maintenances_On_Conflict;
  maintenances_order_by: Maintenances_Order_By;
  maintenances_pk_columns_input: Maintenances_Pk_Columns_Input;
  maintenances_select_column: Maintenances_Select_Column;
  maintenances_set_input: Maintenances_Set_Input;
  maintenances_stream_cursor_input: Maintenances_Stream_Cursor_Input;
  maintenances_stream_cursor_value_input: Maintenances_Stream_Cursor_Value_Input;
  maintenances_update_column: Maintenances_Update_Column;
  maintenances_updates: Maintenances_Updates;
  mutation_root: ResolverTypeWrapper<{}>;
  numeric: ResolverTypeWrapper<Scalars['numeric']['output']>;
  numeric_comparison_exp: Numeric_Comparison_Exp;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  random_species_assets_view: ResolverTypeWrapper<Random_Species_Assets_View>;
  random_species_assets_view_aggregate: ResolverTypeWrapper<Random_Species_Assets_View_Aggregate>;
  random_species_assets_view_aggregate_fields: ResolverTypeWrapper<Random_Species_Assets_View_Aggregate_Fields>;
  random_species_assets_view_bool_exp: Random_Species_Assets_View_Bool_Exp;
  random_species_assets_view_max_fields: ResolverTypeWrapper<Random_Species_Assets_View_Max_Fields>;
  random_species_assets_view_min_fields: ResolverTypeWrapper<Random_Species_Assets_View_Min_Fields>;
  random_species_assets_view_order_by: Random_Species_Assets_View_Order_By;
  random_species_assets_view_select_column: Random_Species_Assets_View_Select_Column;
  random_species_assets_view_stream_cursor_input: Random_Species_Assets_View_Stream_Cursor_Input;
  random_species_assets_view_stream_cursor_value_input: Random_Species_Assets_View_Stream_Cursor_Value_Input;
  species: ResolverTypeWrapper<Species>;
  species_aggregate: ResolverTypeWrapper<Species_Aggregate>;
  species_aggregate_fields: ResolverTypeWrapper<Species_Aggregate_Fields>;
  species_assets: ResolverTypeWrapper<Species_Assets>;
  species_assets_aggregate: ResolverTypeWrapper<Species_Assets_Aggregate>;
  species_assets_aggregate_bool_exp: Species_Assets_Aggregate_Bool_Exp;
  species_assets_aggregate_bool_exp_count: Species_Assets_Aggregate_Bool_Exp_Count;
  species_assets_aggregate_fields: ResolverTypeWrapper<Species_Assets_Aggregate_Fields>;
  species_assets_aggregate_order_by: Species_Assets_Aggregate_Order_By;
  species_assets_arr_rel_insert_input: Species_Assets_Arr_Rel_Insert_Input;
  species_assets_bool_exp: Species_Assets_Bool_Exp;
  species_assets_constraint: Species_Assets_Constraint;
  species_assets_insert_input: Species_Assets_Insert_Input;
  species_assets_max_fields: ResolverTypeWrapper<Species_Assets_Max_Fields>;
  species_assets_max_order_by: Species_Assets_Max_Order_By;
  species_assets_min_fields: ResolverTypeWrapper<Species_Assets_Min_Fields>;
  species_assets_min_order_by: Species_Assets_Min_Order_By;
  species_assets_mutation_response: ResolverTypeWrapper<Species_Assets_Mutation_Response>;
  species_assets_obj_rel_insert_input: Species_Assets_Obj_Rel_Insert_Input;
  species_assets_on_conflict: Species_Assets_On_Conflict;
  species_assets_order_by: Species_Assets_Order_By;
  species_assets_pk_columns_input: Species_Assets_Pk_Columns_Input;
  species_assets_select_column: Species_Assets_Select_Column;
  species_assets_set_input: Species_Assets_Set_Input;
  species_assets_stream_cursor_input: Species_Assets_Stream_Cursor_Input;
  species_assets_stream_cursor_value_input: Species_Assets_Stream_Cursor_Value_Input;
  species_assets_update_column: Species_Assets_Update_Column;
  species_assets_updates: Species_Assets_Updates;
  species_avg_fields: ResolverTypeWrapper<Species_Avg_Fields>;
  species_bool_exp: Species_Bool_Exp;
  species_constraint: Species_Constraint;
  species_inc_input: Species_Inc_Input;
  species_insert_input: Species_Insert_Input;
  species_max_fields: ResolverTypeWrapper<Species_Max_Fields>;
  species_min_fields: ResolverTypeWrapper<Species_Min_Fields>;
  species_mutation_response: ResolverTypeWrapper<Species_Mutation_Response>;
  species_obj_rel_insert_input: Species_Obj_Rel_Insert_Input;
  species_on_conflict: Species_On_Conflict;
  species_order_by: Species_Order_By;
  species_percentage_view_with_world_id: ResolverTypeWrapper<Species_Percentage_View_With_World_Id>;
  species_percentage_view_with_world_id_aggregate: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Aggregate>;
  species_percentage_view_with_world_id_aggregate_bool_exp: Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp;
  species_percentage_view_with_world_id_aggregate_bool_exp_count: Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp_Count;
  species_percentage_view_with_world_id_aggregate_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Aggregate_Fields>;
  species_percentage_view_with_world_id_aggregate_order_by: Species_Percentage_View_With_World_Id_Aggregate_Order_By;
  species_percentage_view_with_world_id_arr_rel_insert_input: Species_Percentage_View_With_World_Id_Arr_Rel_Insert_Input;
  species_percentage_view_with_world_id_avg_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Avg_Fields>;
  species_percentage_view_with_world_id_avg_order_by: Species_Percentage_View_With_World_Id_Avg_Order_By;
  species_percentage_view_with_world_id_bool_exp: Species_Percentage_View_With_World_Id_Bool_Exp;
  species_percentage_view_with_world_id_insert_input: Species_Percentage_View_With_World_Id_Insert_Input;
  species_percentage_view_with_world_id_max_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Max_Fields>;
  species_percentage_view_with_world_id_max_order_by: Species_Percentage_View_With_World_Id_Max_Order_By;
  species_percentage_view_with_world_id_min_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Min_Fields>;
  species_percentage_view_with_world_id_min_order_by: Species_Percentage_View_With_World_Id_Min_Order_By;
  species_percentage_view_with_world_id_order_by: Species_Percentage_View_With_World_Id_Order_By;
  species_percentage_view_with_world_id_select_column: Species_Percentage_View_With_World_Id_Select_Column;
  species_percentage_view_with_world_id_stddev_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Stddev_Fields>;
  species_percentage_view_with_world_id_stddev_order_by: Species_Percentage_View_With_World_Id_Stddev_Order_By;
  species_percentage_view_with_world_id_stddev_pop_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Stddev_Pop_Fields>;
  species_percentage_view_with_world_id_stddev_pop_order_by: Species_Percentage_View_With_World_Id_Stddev_Pop_Order_By;
  species_percentage_view_with_world_id_stddev_samp_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Stddev_Samp_Fields>;
  species_percentage_view_with_world_id_stddev_samp_order_by: Species_Percentage_View_With_World_Id_Stddev_Samp_Order_By;
  species_percentage_view_with_world_id_stream_cursor_input: Species_Percentage_View_With_World_Id_Stream_Cursor_Input;
  species_percentage_view_with_world_id_stream_cursor_value_input: Species_Percentage_View_With_World_Id_Stream_Cursor_Value_Input;
  species_percentage_view_with_world_id_sum_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Sum_Fields>;
  species_percentage_view_with_world_id_sum_order_by: Species_Percentage_View_With_World_Id_Sum_Order_By;
  species_percentage_view_with_world_id_var_pop_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Var_Pop_Fields>;
  species_percentage_view_with_world_id_var_pop_order_by: Species_Percentage_View_With_World_Id_Var_Pop_Order_By;
  species_percentage_view_with_world_id_var_samp_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Var_Samp_Fields>;
  species_percentage_view_with_world_id_var_samp_order_by: Species_Percentage_View_With_World_Id_Var_Samp_Order_By;
  species_percentage_view_with_world_id_variance_fields: ResolverTypeWrapper<Species_Percentage_View_With_World_Id_Variance_Fields>;
  species_percentage_view_with_world_id_variance_order_by: Species_Percentage_View_With_World_Id_Variance_Order_By;
  species_pk_columns_input: Species_Pk_Columns_Input;
  species_select_column: Species_Select_Column;
  species_set_input: Species_Set_Input;
  species_stddev_fields: ResolverTypeWrapper<Species_Stddev_Fields>;
  species_stddev_pop_fields: ResolverTypeWrapper<Species_Stddev_Pop_Fields>;
  species_stddev_samp_fields: ResolverTypeWrapper<Species_Stddev_Samp_Fields>;
  species_stream_cursor_input: Species_Stream_Cursor_Input;
  species_stream_cursor_value_input: Species_Stream_Cursor_Value_Input;
  species_sum_fields: ResolverTypeWrapper<Species_Sum_Fields>;
  species_update_column: Species_Update_Column;
  species_updates: Species_Updates;
  species_var_pop_fields: ResolverTypeWrapper<Species_Var_Pop_Fields>;
  species_var_samp_fields: ResolverTypeWrapper<Species_Var_Samp_Fields>;
  species_variance_fields: ResolverTypeWrapper<Species_Variance_Fields>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']['output']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_avg_fields: ResolverTypeWrapper<Users_Avg_Fields>;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_inc_input: Users_Inc_Input;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_stddev_fields: ResolverTypeWrapper<Users_Stddev_Fields>;
  users_stddev_pop_fields: ResolverTypeWrapper<Users_Stddev_Pop_Fields>;
  users_stddev_samp_fields: ResolverTypeWrapper<Users_Stddev_Samp_Fields>;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_sum_fields: ResolverTypeWrapper<Users_Sum_Fields>;
  users_update_column: Users_Update_Column;
  users_updates: Users_Updates;
  users_var_pop_fields: ResolverTypeWrapper<Users_Var_Pop_Fields>;
  users_var_samp_fields: ResolverTypeWrapper<Users_Var_Samp_Fields>;
  users_variance_fields: ResolverTypeWrapper<Users_Variance_Fields>;
  uuid: ResolverTypeWrapper<Scalars['uuid']['output']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
  world_citizens: ResolverTypeWrapper<World_Citizens>;
  world_citizens_aggregate: ResolverTypeWrapper<World_Citizens_Aggregate>;
  world_citizens_aggregate_bool_exp: World_Citizens_Aggregate_Bool_Exp;
  world_citizens_aggregate_bool_exp_count: World_Citizens_Aggregate_Bool_Exp_Count;
  world_citizens_aggregate_fields: ResolverTypeWrapper<World_Citizens_Aggregate_Fields>;
  world_citizens_aggregate_order_by: World_Citizens_Aggregate_Order_By;
  world_citizens_arr_rel_insert_input: World_Citizens_Arr_Rel_Insert_Input;
  world_citizens_avg_fields: ResolverTypeWrapper<World_Citizens_Avg_Fields>;
  world_citizens_avg_order_by: World_Citizens_Avg_Order_By;
  world_citizens_bool_exp: World_Citizens_Bool_Exp;
  world_citizens_constraint: World_Citizens_Constraint;
  world_citizens_inc_input: World_Citizens_Inc_Input;
  world_citizens_insert_input: World_Citizens_Insert_Input;
  world_citizens_max_fields: ResolverTypeWrapper<World_Citizens_Max_Fields>;
  world_citizens_max_order_by: World_Citizens_Max_Order_By;
  world_citizens_min_fields: ResolverTypeWrapper<World_Citizens_Min_Fields>;
  world_citizens_min_order_by: World_Citizens_Min_Order_By;
  world_citizens_mutation_response: ResolverTypeWrapper<World_Citizens_Mutation_Response>;
  world_citizens_on_conflict: World_Citizens_On_Conflict;
  world_citizens_order_by: World_Citizens_Order_By;
  world_citizens_pk_columns_input: World_Citizens_Pk_Columns_Input;
  world_citizens_select_column: World_Citizens_Select_Column;
  world_citizens_set_input: World_Citizens_Set_Input;
  world_citizens_stddev_fields: ResolverTypeWrapper<World_Citizens_Stddev_Fields>;
  world_citizens_stddev_order_by: World_Citizens_Stddev_Order_By;
  world_citizens_stddev_pop_fields: ResolverTypeWrapper<World_Citizens_Stddev_Pop_Fields>;
  world_citizens_stddev_pop_order_by: World_Citizens_Stddev_Pop_Order_By;
  world_citizens_stddev_samp_fields: ResolverTypeWrapper<World_Citizens_Stddev_Samp_Fields>;
  world_citizens_stddev_samp_order_by: World_Citizens_Stddev_Samp_Order_By;
  world_citizens_stream_cursor_input: World_Citizens_Stream_Cursor_Input;
  world_citizens_stream_cursor_value_input: World_Citizens_Stream_Cursor_Value_Input;
  world_citizens_sum_fields: ResolverTypeWrapper<World_Citizens_Sum_Fields>;
  world_citizens_sum_order_by: World_Citizens_Sum_Order_By;
  world_citizens_update_column: World_Citizens_Update_Column;
  world_citizens_updates: World_Citizens_Updates;
  world_citizens_var_pop_fields: ResolverTypeWrapper<World_Citizens_Var_Pop_Fields>;
  world_citizens_var_pop_order_by: World_Citizens_Var_Pop_Order_By;
  world_citizens_var_samp_fields: ResolverTypeWrapper<World_Citizens_Var_Samp_Fields>;
  world_citizens_var_samp_order_by: World_Citizens_Var_Samp_Order_By;
  world_citizens_variance_fields: ResolverTypeWrapper<World_Citizens_Variance_Fields>;
  world_citizens_variance_order_by: World_Citizens_Variance_Order_By;
  world_comment_reactions: ResolverTypeWrapper<World_Comment_Reactions>;
  world_comment_reactions_aggregate: ResolverTypeWrapper<World_Comment_Reactions_Aggregate>;
  world_comment_reactions_aggregate_bool_exp: World_Comment_Reactions_Aggregate_Bool_Exp;
  world_comment_reactions_aggregate_bool_exp_count: World_Comment_Reactions_Aggregate_Bool_Exp_Count;
  world_comment_reactions_aggregate_fields: ResolverTypeWrapper<World_Comment_Reactions_Aggregate_Fields>;
  world_comment_reactions_aggregate_order_by: World_Comment_Reactions_Aggregate_Order_By;
  world_comment_reactions_arr_rel_insert_input: World_Comment_Reactions_Arr_Rel_Insert_Input;
  world_comment_reactions_avg_fields: ResolverTypeWrapper<World_Comment_Reactions_Avg_Fields>;
  world_comment_reactions_avg_order_by: World_Comment_Reactions_Avg_Order_By;
  world_comment_reactions_bool_exp: World_Comment_Reactions_Bool_Exp;
  world_comment_reactions_constraint: World_Comment_Reactions_Constraint;
  world_comment_reactions_inc_input: World_Comment_Reactions_Inc_Input;
  world_comment_reactions_insert_input: World_Comment_Reactions_Insert_Input;
  world_comment_reactions_max_fields: ResolverTypeWrapper<World_Comment_Reactions_Max_Fields>;
  world_comment_reactions_max_order_by: World_Comment_Reactions_Max_Order_By;
  world_comment_reactions_min_fields: ResolverTypeWrapper<World_Comment_Reactions_Min_Fields>;
  world_comment_reactions_min_order_by: World_Comment_Reactions_Min_Order_By;
  world_comment_reactions_mutation_response: ResolverTypeWrapper<World_Comment_Reactions_Mutation_Response>;
  world_comment_reactions_on_conflict: World_Comment_Reactions_On_Conflict;
  world_comment_reactions_order_by: World_Comment_Reactions_Order_By;
  world_comment_reactions_pk_columns_input: World_Comment_Reactions_Pk_Columns_Input;
  world_comment_reactions_select_column: World_Comment_Reactions_Select_Column;
  world_comment_reactions_set_input: World_Comment_Reactions_Set_Input;
  world_comment_reactions_stddev_fields: ResolverTypeWrapper<World_Comment_Reactions_Stddev_Fields>;
  world_comment_reactions_stddev_order_by: World_Comment_Reactions_Stddev_Order_By;
  world_comment_reactions_stddev_pop_fields: ResolverTypeWrapper<World_Comment_Reactions_Stddev_Pop_Fields>;
  world_comment_reactions_stddev_pop_order_by: World_Comment_Reactions_Stddev_Pop_Order_By;
  world_comment_reactions_stddev_samp_fields: ResolverTypeWrapper<World_Comment_Reactions_Stddev_Samp_Fields>;
  world_comment_reactions_stddev_samp_order_by: World_Comment_Reactions_Stddev_Samp_Order_By;
  world_comment_reactions_stream_cursor_input: World_Comment_Reactions_Stream_Cursor_Input;
  world_comment_reactions_stream_cursor_value_input: World_Comment_Reactions_Stream_Cursor_Value_Input;
  world_comment_reactions_sum_fields: ResolverTypeWrapper<World_Comment_Reactions_Sum_Fields>;
  world_comment_reactions_sum_order_by: World_Comment_Reactions_Sum_Order_By;
  world_comment_reactions_update_column: World_Comment_Reactions_Update_Column;
  world_comment_reactions_updates: World_Comment_Reactions_Updates;
  world_comment_reactions_var_pop_fields: ResolverTypeWrapper<World_Comment_Reactions_Var_Pop_Fields>;
  world_comment_reactions_var_pop_order_by: World_Comment_Reactions_Var_Pop_Order_By;
  world_comment_reactions_var_samp_fields: ResolverTypeWrapper<World_Comment_Reactions_Var_Samp_Fields>;
  world_comment_reactions_var_samp_order_by: World_Comment_Reactions_Var_Samp_Order_By;
  world_comment_reactions_variance_fields: ResolverTypeWrapper<World_Comment_Reactions_Variance_Fields>;
  world_comment_reactions_variance_order_by: World_Comment_Reactions_Variance_Order_By;
  world_comments: ResolverTypeWrapper<World_Comments>;
  world_comments_aggregate: ResolverTypeWrapper<World_Comments_Aggregate>;
  world_comments_aggregate_bool_exp: World_Comments_Aggregate_Bool_Exp;
  world_comments_aggregate_bool_exp_count: World_Comments_Aggregate_Bool_Exp_Count;
  world_comments_aggregate_fields: ResolverTypeWrapper<World_Comments_Aggregate_Fields>;
  world_comments_aggregate_order_by: World_Comments_Aggregate_Order_By;
  world_comments_arr_rel_insert_input: World_Comments_Arr_Rel_Insert_Input;
  world_comments_bool_exp: World_Comments_Bool_Exp;
  world_comments_constraint: World_Comments_Constraint;
  world_comments_insert_input: World_Comments_Insert_Input;
  world_comments_max_fields: ResolverTypeWrapper<World_Comments_Max_Fields>;
  world_comments_max_order_by: World_Comments_Max_Order_By;
  world_comments_min_fields: ResolverTypeWrapper<World_Comments_Min_Fields>;
  world_comments_min_order_by: World_Comments_Min_Order_By;
  world_comments_mutation_response: ResolverTypeWrapper<World_Comments_Mutation_Response>;
  world_comments_obj_rel_insert_input: World_Comments_Obj_Rel_Insert_Input;
  world_comments_on_conflict: World_Comments_On_Conflict;
  world_comments_order_by: World_Comments_Order_By;
  world_comments_pk_columns_input: World_Comments_Pk_Columns_Input;
  world_comments_select_column: World_Comments_Select_Column;
  world_comments_set_input: World_Comments_Set_Input;
  world_comments_stream_cursor_input: World_Comments_Stream_Cursor_Input;
  world_comments_stream_cursor_value_input: World_Comments_Stream_Cursor_Value_Input;
  world_comments_update_column: World_Comments_Update_Column;
  world_comments_updates: World_Comments_Updates;
  world_histories: ResolverTypeWrapper<World_Histories>;
  world_histories_aggregate: ResolverTypeWrapper<World_Histories_Aggregate>;
  world_histories_aggregate_bool_exp: World_Histories_Aggregate_Bool_Exp;
  world_histories_aggregate_bool_exp_count: World_Histories_Aggregate_Bool_Exp_Count;
  world_histories_aggregate_fields: ResolverTypeWrapper<World_Histories_Aggregate_Fields>;
  world_histories_aggregate_order_by: World_Histories_Aggregate_Order_By;
  world_histories_append_input: World_Histories_Append_Input;
  world_histories_arr_rel_insert_input: World_Histories_Arr_Rel_Insert_Input;
  world_histories_avg_fields: ResolverTypeWrapper<World_Histories_Avg_Fields>;
  world_histories_avg_order_by: World_Histories_Avg_Order_By;
  world_histories_bool_exp: World_Histories_Bool_Exp;
  world_histories_constraint: World_Histories_Constraint;
  world_histories_delete_at_path_input: World_Histories_Delete_At_Path_Input;
  world_histories_delete_elem_input: World_Histories_Delete_Elem_Input;
  world_histories_delete_key_input: World_Histories_Delete_Key_Input;
  world_histories_inc_input: World_Histories_Inc_Input;
  world_histories_insert_input: World_Histories_Insert_Input;
  world_histories_max_fields: ResolverTypeWrapper<World_Histories_Max_Fields>;
  world_histories_max_order_by: World_Histories_Max_Order_By;
  world_histories_min_fields: ResolverTypeWrapper<World_Histories_Min_Fields>;
  world_histories_min_order_by: World_Histories_Min_Order_By;
  world_histories_mutation_response: ResolverTypeWrapper<World_Histories_Mutation_Response>;
  world_histories_on_conflict: World_Histories_On_Conflict;
  world_histories_order_by: World_Histories_Order_By;
  world_histories_pk_columns_input: World_Histories_Pk_Columns_Input;
  world_histories_prepend_input: World_Histories_Prepend_Input;
  world_histories_select_column: World_Histories_Select_Column;
  world_histories_set_input: World_Histories_Set_Input;
  world_histories_stddev_fields: ResolverTypeWrapper<World_Histories_Stddev_Fields>;
  world_histories_stddev_order_by: World_Histories_Stddev_Order_By;
  world_histories_stddev_pop_fields: ResolverTypeWrapper<World_Histories_Stddev_Pop_Fields>;
  world_histories_stddev_pop_order_by: World_Histories_Stddev_Pop_Order_By;
  world_histories_stddev_samp_fields: ResolverTypeWrapper<World_Histories_Stddev_Samp_Fields>;
  world_histories_stddev_samp_order_by: World_Histories_Stddev_Samp_Order_By;
  world_histories_stream_cursor_input: World_Histories_Stream_Cursor_Input;
  world_histories_stream_cursor_value_input: World_Histories_Stream_Cursor_Value_Input;
  world_histories_sum_fields: ResolverTypeWrapper<World_Histories_Sum_Fields>;
  world_histories_sum_order_by: World_Histories_Sum_Order_By;
  world_histories_update_column: World_Histories_Update_Column;
  world_histories_updates: World_Histories_Updates;
  world_histories_var_pop_fields: ResolverTypeWrapper<World_Histories_Var_Pop_Fields>;
  world_histories_var_pop_order_by: World_Histories_Var_Pop_Order_By;
  world_histories_var_samp_fields: ResolverTypeWrapper<World_Histories_Var_Samp_Fields>;
  world_histories_var_samp_order_by: World_Histories_Var_Samp_Order_By;
  world_histories_variance_fields: ResolverTypeWrapper<World_Histories_Variance_Fields>;
  world_histories_variance_order_by: World_Histories_Variance_Order_By;
  world_laws: ResolverTypeWrapper<World_Laws>;
  world_laws_aggregate: ResolverTypeWrapper<World_Laws_Aggregate>;
  world_laws_aggregate_bool_exp: World_Laws_Aggregate_Bool_Exp;
  world_laws_aggregate_bool_exp_count: World_Laws_Aggregate_Bool_Exp_Count;
  world_laws_aggregate_fields: ResolverTypeWrapper<World_Laws_Aggregate_Fields>;
  world_laws_aggregate_order_by: World_Laws_Aggregate_Order_By;
  world_laws_arr_rel_insert_input: World_Laws_Arr_Rel_Insert_Input;
  world_laws_bool_exp: World_Laws_Bool_Exp;
  world_laws_constraint: World_Laws_Constraint;
  world_laws_insert_input: World_Laws_Insert_Input;
  world_laws_max_fields: ResolverTypeWrapper<World_Laws_Max_Fields>;
  world_laws_max_order_by: World_Laws_Max_Order_By;
  world_laws_min_fields: ResolverTypeWrapper<World_Laws_Min_Fields>;
  world_laws_min_order_by: World_Laws_Min_Order_By;
  world_laws_mutation_response: ResolverTypeWrapper<World_Laws_Mutation_Response>;
  world_laws_on_conflict: World_Laws_On_Conflict;
  world_laws_order_by: World_Laws_Order_By;
  world_laws_pk_columns_input: World_Laws_Pk_Columns_Input;
  world_laws_select_column: World_Laws_Select_Column;
  world_laws_set_input: World_Laws_Set_Input;
  world_laws_stream_cursor_input: World_Laws_Stream_Cursor_Input;
  world_laws_stream_cursor_value_input: World_Laws_Stream_Cursor_Value_Input;
  world_laws_update_column: World_Laws_Update_Column;
  world_laws_updates: World_Laws_Updates;
  world_reactions: ResolverTypeWrapper<World_Reactions>;
  world_reactions_aggregate: ResolverTypeWrapper<World_Reactions_Aggregate>;
  world_reactions_aggregate_bool_exp: World_Reactions_Aggregate_Bool_Exp;
  world_reactions_aggregate_bool_exp_count: World_Reactions_Aggregate_Bool_Exp_Count;
  world_reactions_aggregate_fields: ResolverTypeWrapper<World_Reactions_Aggregate_Fields>;
  world_reactions_aggregate_order_by: World_Reactions_Aggregate_Order_By;
  world_reactions_arr_rel_insert_input: World_Reactions_Arr_Rel_Insert_Input;
  world_reactions_avg_fields: ResolverTypeWrapper<World_Reactions_Avg_Fields>;
  world_reactions_avg_order_by: World_Reactions_Avg_Order_By;
  world_reactions_bool_exp: World_Reactions_Bool_Exp;
  world_reactions_constraint: World_Reactions_Constraint;
  world_reactions_inc_input: World_Reactions_Inc_Input;
  world_reactions_insert_input: World_Reactions_Insert_Input;
  world_reactions_max_fields: ResolverTypeWrapper<World_Reactions_Max_Fields>;
  world_reactions_max_order_by: World_Reactions_Max_Order_By;
  world_reactions_min_fields: ResolverTypeWrapper<World_Reactions_Min_Fields>;
  world_reactions_min_order_by: World_Reactions_Min_Order_By;
  world_reactions_mutation_response: ResolverTypeWrapper<World_Reactions_Mutation_Response>;
  world_reactions_on_conflict: World_Reactions_On_Conflict;
  world_reactions_order_by: World_Reactions_Order_By;
  world_reactions_pk_columns_input: World_Reactions_Pk_Columns_Input;
  world_reactions_select_column: World_Reactions_Select_Column;
  world_reactions_set_input: World_Reactions_Set_Input;
  world_reactions_stddev_fields: ResolverTypeWrapper<World_Reactions_Stddev_Fields>;
  world_reactions_stddev_order_by: World_Reactions_Stddev_Order_By;
  world_reactions_stddev_pop_fields: ResolverTypeWrapper<World_Reactions_Stddev_Pop_Fields>;
  world_reactions_stddev_pop_order_by: World_Reactions_Stddev_Pop_Order_By;
  world_reactions_stddev_samp_fields: ResolverTypeWrapper<World_Reactions_Stddev_Samp_Fields>;
  world_reactions_stddev_samp_order_by: World_Reactions_Stddev_Samp_Order_By;
  world_reactions_stream_cursor_input: World_Reactions_Stream_Cursor_Input;
  world_reactions_stream_cursor_value_input: World_Reactions_Stream_Cursor_Value_Input;
  world_reactions_sum_fields: ResolverTypeWrapper<World_Reactions_Sum_Fields>;
  world_reactions_sum_order_by: World_Reactions_Sum_Order_By;
  world_reactions_update_column: World_Reactions_Update_Column;
  world_reactions_updates: World_Reactions_Updates;
  world_reactions_var_pop_fields: ResolverTypeWrapper<World_Reactions_Var_Pop_Fields>;
  world_reactions_var_pop_order_by: World_Reactions_Var_Pop_Order_By;
  world_reactions_var_samp_fields: ResolverTypeWrapper<World_Reactions_Var_Samp_Fields>;
  world_reactions_var_samp_order_by: World_Reactions_Var_Samp_Order_By;
  world_reactions_variance_fields: ResolverTypeWrapper<World_Reactions_Variance_Fields>;
  world_reactions_variance_order_by: World_Reactions_Variance_Order_By;
  worlds: ResolverTypeWrapper<Worlds>;
  worlds_aggregate: ResolverTypeWrapper<Worlds_Aggregate>;
  worlds_aggregate_bool_exp: Worlds_Aggregate_Bool_Exp;
  worlds_aggregate_bool_exp_count: Worlds_Aggregate_Bool_Exp_Count;
  worlds_aggregate_fields: ResolverTypeWrapper<Worlds_Aggregate_Fields>;
  worlds_aggregate_order_by: Worlds_Aggregate_Order_By;
  worlds_arr_rel_insert_input: Worlds_Arr_Rel_Insert_Input;
  worlds_avg_fields: ResolverTypeWrapper<Worlds_Avg_Fields>;
  worlds_avg_order_by: Worlds_Avg_Order_By;
  worlds_bool_exp: Worlds_Bool_Exp;
  worlds_constraint: Worlds_Constraint;
  worlds_inc_input: Worlds_Inc_Input;
  worlds_insert_input: Worlds_Insert_Input;
  worlds_max_fields: ResolverTypeWrapper<Worlds_Max_Fields>;
  worlds_max_order_by: Worlds_Max_Order_By;
  worlds_min_fields: ResolverTypeWrapper<Worlds_Min_Fields>;
  worlds_min_order_by: Worlds_Min_Order_By;
  worlds_mutation_response: ResolverTypeWrapper<Worlds_Mutation_Response>;
  worlds_obj_rel_insert_input: Worlds_Obj_Rel_Insert_Input;
  worlds_on_conflict: Worlds_On_Conflict;
  worlds_order_by: Worlds_Order_By;
  worlds_pk_columns_input: Worlds_Pk_Columns_Input;
  worlds_select_column: Worlds_Select_Column;
  worlds_set_input: Worlds_Set_Input;
  worlds_stddev_fields: ResolverTypeWrapper<Worlds_Stddev_Fields>;
  worlds_stddev_order_by: Worlds_Stddev_Order_By;
  worlds_stddev_pop_fields: ResolverTypeWrapper<Worlds_Stddev_Pop_Fields>;
  worlds_stddev_pop_order_by: Worlds_Stddev_Pop_Order_By;
  worlds_stddev_samp_fields: ResolverTypeWrapper<Worlds_Stddev_Samp_Fields>;
  worlds_stddev_samp_order_by: Worlds_Stddev_Samp_Order_By;
  worlds_stream_cursor_input: Worlds_Stream_Cursor_Input;
  worlds_stream_cursor_value_input: Worlds_Stream_Cursor_Value_Input;
  worlds_sum_fields: ResolverTypeWrapper<Worlds_Sum_Fields>;
  worlds_sum_order_by: Worlds_Sum_Order_By;
  worlds_update_column: Worlds_Update_Column;
  worlds_updates: Worlds_Updates;
  worlds_var_pop_fields: ResolverTypeWrapper<Worlds_Var_Pop_Fields>;
  worlds_var_pop_order_by: Worlds_Var_Pop_Order_By;
  worlds_var_samp_fields: ResolverTypeWrapper<Worlds_Var_Samp_Fields>;
  worlds_var_samp_order_by: Worlds_Var_Samp_Order_By;
  worlds_variance_fields: ResolverTypeWrapper<Worlds_Variance_Fields>;
  worlds_variance_order_by: Worlds_Variance_Order_By;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars['String']['output'];
  String_comparison_exp: String_Comparison_Exp;
  citizens: Citizens;
  citizens_aggregate: Citizens_Aggregate;
  citizens_aggregate_bool_exp: Citizens_Aggregate_Bool_Exp;
  citizens_aggregate_bool_exp_count: Citizens_Aggregate_Bool_Exp_Count;
  citizens_aggregate_fields: Citizens_Aggregate_Fields;
  citizens_aggregate_order_by: Citizens_Aggregate_Order_By;
  citizens_arr_rel_insert_input: Citizens_Arr_Rel_Insert_Input;
  citizens_avg_fields: Citizens_Avg_Fields;
  citizens_avg_order_by: Citizens_Avg_Order_By;
  citizens_bool_exp: Citizens_Bool_Exp;
  citizens_inc_input: Citizens_Inc_Input;
  citizens_insert_input: Citizens_Insert_Input;
  citizens_max_fields: Citizens_Max_Fields;
  citizens_max_order_by: Citizens_Max_Order_By;
  citizens_min_fields: Citizens_Min_Fields;
  citizens_min_order_by: Citizens_Min_Order_By;
  citizens_mutation_response: Citizens_Mutation_Response;
  citizens_obj_rel_insert_input: Citizens_Obj_Rel_Insert_Input;
  citizens_on_conflict: Citizens_On_Conflict;
  citizens_order_by: Citizens_Order_By;
  citizens_pk_columns_input: Citizens_Pk_Columns_Input;
  citizens_set_input: Citizens_Set_Input;
  citizens_stddev_fields: Citizens_Stddev_Fields;
  citizens_stddev_order_by: Citizens_Stddev_Order_By;
  citizens_stddev_pop_fields: Citizens_Stddev_Pop_Fields;
  citizens_stddev_pop_order_by: Citizens_Stddev_Pop_Order_By;
  citizens_stddev_samp_fields: Citizens_Stddev_Samp_Fields;
  citizens_stddev_samp_order_by: Citizens_Stddev_Samp_Order_By;
  citizens_stream_cursor_input: Citizens_Stream_Cursor_Input;
  citizens_stream_cursor_value_input: Citizens_Stream_Cursor_Value_Input;
  citizens_sum_fields: Citizens_Sum_Fields;
  citizens_sum_order_by: Citizens_Sum_Order_By;
  citizens_updates: Citizens_Updates;
  citizens_var_pop_fields: Citizens_Var_Pop_Fields;
  citizens_var_pop_order_by: Citizens_Var_Pop_Order_By;
  citizens_var_samp_fields: Citizens_Var_Samp_Fields;
  citizens_var_samp_order_by: Citizens_Var_Samp_Order_By;
  citizens_variance_fields: Citizens_Variance_Fields;
  citizens_variance_order_by: Citizens_Variance_Order_By;
  jsonb: Scalars['jsonb']['output'];
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  law_comment_reactions: Law_Comment_Reactions;
  law_comment_reactions_aggregate: Law_Comment_Reactions_Aggregate;
  law_comment_reactions_aggregate_bool_exp: Law_Comment_Reactions_Aggregate_Bool_Exp;
  law_comment_reactions_aggregate_bool_exp_count: Law_Comment_Reactions_Aggregate_Bool_Exp_Count;
  law_comment_reactions_aggregate_fields: Law_Comment_Reactions_Aggregate_Fields;
  law_comment_reactions_aggregate_order_by: Law_Comment_Reactions_Aggregate_Order_By;
  law_comment_reactions_arr_rel_insert_input: Law_Comment_Reactions_Arr_Rel_Insert_Input;
  law_comment_reactions_avg_fields: Law_Comment_Reactions_Avg_Fields;
  law_comment_reactions_avg_order_by: Law_Comment_Reactions_Avg_Order_By;
  law_comment_reactions_bool_exp: Law_Comment_Reactions_Bool_Exp;
  law_comment_reactions_inc_input: Law_Comment_Reactions_Inc_Input;
  law_comment_reactions_insert_input: Law_Comment_Reactions_Insert_Input;
  law_comment_reactions_max_fields: Law_Comment_Reactions_Max_Fields;
  law_comment_reactions_max_order_by: Law_Comment_Reactions_Max_Order_By;
  law_comment_reactions_min_fields: Law_Comment_Reactions_Min_Fields;
  law_comment_reactions_min_order_by: Law_Comment_Reactions_Min_Order_By;
  law_comment_reactions_mutation_response: Law_Comment_Reactions_Mutation_Response;
  law_comment_reactions_on_conflict: Law_Comment_Reactions_On_Conflict;
  law_comment_reactions_order_by: Law_Comment_Reactions_Order_By;
  law_comment_reactions_pk_columns_input: Law_Comment_Reactions_Pk_Columns_Input;
  law_comment_reactions_set_input: Law_Comment_Reactions_Set_Input;
  law_comment_reactions_stddev_fields: Law_Comment_Reactions_Stddev_Fields;
  law_comment_reactions_stddev_order_by: Law_Comment_Reactions_Stddev_Order_By;
  law_comment_reactions_stddev_pop_fields: Law_Comment_Reactions_Stddev_Pop_Fields;
  law_comment_reactions_stddev_pop_order_by: Law_Comment_Reactions_Stddev_Pop_Order_By;
  law_comment_reactions_stddev_samp_fields: Law_Comment_Reactions_Stddev_Samp_Fields;
  law_comment_reactions_stddev_samp_order_by: Law_Comment_Reactions_Stddev_Samp_Order_By;
  law_comment_reactions_stream_cursor_input: Law_Comment_Reactions_Stream_Cursor_Input;
  law_comment_reactions_stream_cursor_value_input: Law_Comment_Reactions_Stream_Cursor_Value_Input;
  law_comment_reactions_sum_fields: Law_Comment_Reactions_Sum_Fields;
  law_comment_reactions_sum_order_by: Law_Comment_Reactions_Sum_Order_By;
  law_comment_reactions_updates: Law_Comment_Reactions_Updates;
  law_comment_reactions_var_pop_fields: Law_Comment_Reactions_Var_Pop_Fields;
  law_comment_reactions_var_pop_order_by: Law_Comment_Reactions_Var_Pop_Order_By;
  law_comment_reactions_var_samp_fields: Law_Comment_Reactions_Var_Samp_Fields;
  law_comment_reactions_var_samp_order_by: Law_Comment_Reactions_Var_Samp_Order_By;
  law_comment_reactions_variance_fields: Law_Comment_Reactions_Variance_Fields;
  law_comment_reactions_variance_order_by: Law_Comment_Reactions_Variance_Order_By;
  law_comments: Law_Comments;
  law_comments_aggregate: Law_Comments_Aggregate;
  law_comments_aggregate_bool_exp: Law_Comments_Aggregate_Bool_Exp;
  law_comments_aggregate_bool_exp_count: Law_Comments_Aggregate_Bool_Exp_Count;
  law_comments_aggregate_fields: Law_Comments_Aggregate_Fields;
  law_comments_aggregate_order_by: Law_Comments_Aggregate_Order_By;
  law_comments_arr_rel_insert_input: Law_Comments_Arr_Rel_Insert_Input;
  law_comments_bool_exp: Law_Comments_Bool_Exp;
  law_comments_insert_input: Law_Comments_Insert_Input;
  law_comments_max_fields: Law_Comments_Max_Fields;
  law_comments_max_order_by: Law_Comments_Max_Order_By;
  law_comments_min_fields: Law_Comments_Min_Fields;
  law_comments_min_order_by: Law_Comments_Min_Order_By;
  law_comments_mutation_response: Law_Comments_Mutation_Response;
  law_comments_obj_rel_insert_input: Law_Comments_Obj_Rel_Insert_Input;
  law_comments_on_conflict: Law_Comments_On_Conflict;
  law_comments_order_by: Law_Comments_Order_By;
  law_comments_pk_columns_input: Law_Comments_Pk_Columns_Input;
  law_comments_set_input: Law_Comments_Set_Input;
  law_comments_stream_cursor_input: Law_Comments_Stream_Cursor_Input;
  law_comments_stream_cursor_value_input: Law_Comments_Stream_Cursor_Value_Input;
  law_comments_updates: Law_Comments_Updates;
  law_reactions: Law_Reactions;
  law_reactions_aggregate: Law_Reactions_Aggregate;
  law_reactions_aggregate_bool_exp: Law_Reactions_Aggregate_Bool_Exp;
  law_reactions_aggregate_bool_exp_count: Law_Reactions_Aggregate_Bool_Exp_Count;
  law_reactions_aggregate_fields: Law_Reactions_Aggregate_Fields;
  law_reactions_aggregate_order_by: Law_Reactions_Aggregate_Order_By;
  law_reactions_arr_rel_insert_input: Law_Reactions_Arr_Rel_Insert_Input;
  law_reactions_avg_fields: Law_Reactions_Avg_Fields;
  law_reactions_avg_order_by: Law_Reactions_Avg_Order_By;
  law_reactions_bool_exp: Law_Reactions_Bool_Exp;
  law_reactions_inc_input: Law_Reactions_Inc_Input;
  law_reactions_insert_input: Law_Reactions_Insert_Input;
  law_reactions_max_fields: Law_Reactions_Max_Fields;
  law_reactions_max_order_by: Law_Reactions_Max_Order_By;
  law_reactions_min_fields: Law_Reactions_Min_Fields;
  law_reactions_min_order_by: Law_Reactions_Min_Order_By;
  law_reactions_mutation_response: Law_Reactions_Mutation_Response;
  law_reactions_on_conflict: Law_Reactions_On_Conflict;
  law_reactions_order_by: Law_Reactions_Order_By;
  law_reactions_pk_columns_input: Law_Reactions_Pk_Columns_Input;
  law_reactions_set_input: Law_Reactions_Set_Input;
  law_reactions_stddev_fields: Law_Reactions_Stddev_Fields;
  law_reactions_stddev_order_by: Law_Reactions_Stddev_Order_By;
  law_reactions_stddev_pop_fields: Law_Reactions_Stddev_Pop_Fields;
  law_reactions_stddev_pop_order_by: Law_Reactions_Stddev_Pop_Order_By;
  law_reactions_stddev_samp_fields: Law_Reactions_Stddev_Samp_Fields;
  law_reactions_stddev_samp_order_by: Law_Reactions_Stddev_Samp_Order_By;
  law_reactions_stream_cursor_input: Law_Reactions_Stream_Cursor_Input;
  law_reactions_stream_cursor_value_input: Law_Reactions_Stream_Cursor_Value_Input;
  law_reactions_sum_fields: Law_Reactions_Sum_Fields;
  law_reactions_sum_order_by: Law_Reactions_Sum_Order_By;
  law_reactions_updates: Law_Reactions_Updates;
  law_reactions_var_pop_fields: Law_Reactions_Var_Pop_Fields;
  law_reactions_var_pop_order_by: Law_Reactions_Var_Pop_Order_By;
  law_reactions_var_samp_fields: Law_Reactions_Var_Samp_Fields;
  law_reactions_var_samp_order_by: Law_Reactions_Var_Samp_Order_By;
  law_reactions_variance_fields: Law_Reactions_Variance_Fields;
  law_reactions_variance_order_by: Law_Reactions_Variance_Order_By;
  law_revisions: Law_Revisions;
  law_revisions_aggregate: Law_Revisions_Aggregate;
  law_revisions_aggregate_bool_exp: Law_Revisions_Aggregate_Bool_Exp;
  law_revisions_aggregate_bool_exp_count: Law_Revisions_Aggregate_Bool_Exp_Count;
  law_revisions_aggregate_fields: Law_Revisions_Aggregate_Fields;
  law_revisions_aggregate_order_by: Law_Revisions_Aggregate_Order_By;
  law_revisions_append_input: Law_Revisions_Append_Input;
  law_revisions_arr_rel_insert_input: Law_Revisions_Arr_Rel_Insert_Input;
  law_revisions_avg_fields: Law_Revisions_Avg_Fields;
  law_revisions_avg_order_by: Law_Revisions_Avg_Order_By;
  law_revisions_bool_exp: Law_Revisions_Bool_Exp;
  law_revisions_delete_at_path_input: Law_Revisions_Delete_At_Path_Input;
  law_revisions_delete_elem_input: Law_Revisions_Delete_Elem_Input;
  law_revisions_delete_key_input: Law_Revisions_Delete_Key_Input;
  law_revisions_inc_input: Law_Revisions_Inc_Input;
  law_revisions_insert_input: Law_Revisions_Insert_Input;
  law_revisions_max_fields: Law_Revisions_Max_Fields;
  law_revisions_max_order_by: Law_Revisions_Max_Order_By;
  law_revisions_min_fields: Law_Revisions_Min_Fields;
  law_revisions_min_order_by: Law_Revisions_Min_Order_By;
  law_revisions_mutation_response: Law_Revisions_Mutation_Response;
  law_revisions_on_conflict: Law_Revisions_On_Conflict;
  law_revisions_order_by: Law_Revisions_Order_By;
  law_revisions_pk_columns_input: Law_Revisions_Pk_Columns_Input;
  law_revisions_prepend_input: Law_Revisions_Prepend_Input;
  law_revisions_set_input: Law_Revisions_Set_Input;
  law_revisions_stddev_fields: Law_Revisions_Stddev_Fields;
  law_revisions_stddev_order_by: Law_Revisions_Stddev_Order_By;
  law_revisions_stddev_pop_fields: Law_Revisions_Stddev_Pop_Fields;
  law_revisions_stddev_pop_order_by: Law_Revisions_Stddev_Pop_Order_By;
  law_revisions_stddev_samp_fields: Law_Revisions_Stddev_Samp_Fields;
  law_revisions_stddev_samp_order_by: Law_Revisions_Stddev_Samp_Order_By;
  law_revisions_stream_cursor_input: Law_Revisions_Stream_Cursor_Input;
  law_revisions_stream_cursor_value_input: Law_Revisions_Stream_Cursor_Value_Input;
  law_revisions_sum_fields: Law_Revisions_Sum_Fields;
  law_revisions_sum_order_by: Law_Revisions_Sum_Order_By;
  law_revisions_updates: Law_Revisions_Updates;
  law_revisions_var_pop_fields: Law_Revisions_Var_Pop_Fields;
  law_revisions_var_pop_order_by: Law_Revisions_Var_Pop_Order_By;
  law_revisions_var_samp_fields: Law_Revisions_Var_Samp_Fields;
  law_revisions_var_samp_order_by: Law_Revisions_Var_Samp_Order_By;
  law_revisions_variance_fields: Law_Revisions_Variance_Fields;
  law_revisions_variance_order_by: Law_Revisions_Variance_Order_By;
  law_star_rates: Law_Star_Rates;
  law_star_rates_aggregate: Law_Star_Rates_Aggregate;
  law_star_rates_aggregate_bool_exp: Law_Star_Rates_Aggregate_Bool_Exp;
  law_star_rates_aggregate_bool_exp_count: Law_Star_Rates_Aggregate_Bool_Exp_Count;
  law_star_rates_aggregate_fields: Law_Star_Rates_Aggregate_Fields;
  law_star_rates_aggregate_order_by: Law_Star_Rates_Aggregate_Order_By;
  law_star_rates_arr_rel_insert_input: Law_Star_Rates_Arr_Rel_Insert_Input;
  law_star_rates_avg_fields: Law_Star_Rates_Avg_Fields;
  law_star_rates_avg_order_by: Law_Star_Rates_Avg_Order_By;
  law_star_rates_bool_exp: Law_Star_Rates_Bool_Exp;
  law_star_rates_inc_input: Law_Star_Rates_Inc_Input;
  law_star_rates_insert_input: Law_Star_Rates_Insert_Input;
  law_star_rates_max_fields: Law_Star_Rates_Max_Fields;
  law_star_rates_max_order_by: Law_Star_Rates_Max_Order_By;
  law_star_rates_min_fields: Law_Star_Rates_Min_Fields;
  law_star_rates_min_order_by: Law_Star_Rates_Min_Order_By;
  law_star_rates_mutation_response: Law_Star_Rates_Mutation_Response;
  law_star_rates_on_conflict: Law_Star_Rates_On_Conflict;
  law_star_rates_order_by: Law_Star_Rates_Order_By;
  law_star_rates_pk_columns_input: Law_Star_Rates_Pk_Columns_Input;
  law_star_rates_set_input: Law_Star_Rates_Set_Input;
  law_star_rates_stddev_fields: Law_Star_Rates_Stddev_Fields;
  law_star_rates_stddev_order_by: Law_Star_Rates_Stddev_Order_By;
  law_star_rates_stddev_pop_fields: Law_Star_Rates_Stddev_Pop_Fields;
  law_star_rates_stddev_pop_order_by: Law_Star_Rates_Stddev_Pop_Order_By;
  law_star_rates_stddev_samp_fields: Law_Star_Rates_Stddev_Samp_Fields;
  law_star_rates_stddev_samp_order_by: Law_Star_Rates_Stddev_Samp_Order_By;
  law_star_rates_stream_cursor_input: Law_Star_Rates_Stream_Cursor_Input;
  law_star_rates_stream_cursor_value_input: Law_Star_Rates_Stream_Cursor_Value_Input;
  law_star_rates_sum_fields: Law_Star_Rates_Sum_Fields;
  law_star_rates_sum_order_by: Law_Star_Rates_Sum_Order_By;
  law_star_rates_updates: Law_Star_Rates_Updates;
  law_star_rates_var_pop_fields: Law_Star_Rates_Var_Pop_Fields;
  law_star_rates_var_pop_order_by: Law_Star_Rates_Var_Pop_Order_By;
  law_star_rates_var_samp_fields: Law_Star_Rates_Var_Samp_Fields;
  law_star_rates_var_samp_order_by: Law_Star_Rates_Var_Samp_Order_By;
  law_star_rates_variance_fields: Law_Star_Rates_Variance_Fields;
  law_star_rates_variance_order_by: Law_Star_Rates_Variance_Order_By;
  laws: Laws;
  laws_aggregate: Laws_Aggregate;
  laws_aggregate_bool_exp: Laws_Aggregate_Bool_Exp;
  laws_aggregate_bool_exp_count: Laws_Aggregate_Bool_Exp_Count;
  laws_aggregate_fields: Laws_Aggregate_Fields;
  laws_aggregate_order_by: Laws_Aggregate_Order_By;
  laws_arr_rel_insert_input: Laws_Arr_Rel_Insert_Input;
  laws_avg_fields: Laws_Avg_Fields;
  laws_avg_order_by: Laws_Avg_Order_By;
  laws_bool_exp: Laws_Bool_Exp;
  laws_inc_input: Laws_Inc_Input;
  laws_insert_input: Laws_Insert_Input;
  laws_max_fields: Laws_Max_Fields;
  laws_max_order_by: Laws_Max_Order_By;
  laws_min_fields: Laws_Min_Fields;
  laws_min_order_by: Laws_Min_Order_By;
  laws_mutation_response: Laws_Mutation_Response;
  laws_obj_rel_insert_input: Laws_Obj_Rel_Insert_Input;
  laws_on_conflict: Laws_On_Conflict;
  laws_order_by: Laws_Order_By;
  laws_pk_columns_input: Laws_Pk_Columns_Input;
  laws_set_input: Laws_Set_Input;
  laws_stddev_fields: Laws_Stddev_Fields;
  laws_stddev_order_by: Laws_Stddev_Order_By;
  laws_stddev_pop_fields: Laws_Stddev_Pop_Fields;
  laws_stddev_pop_order_by: Laws_Stddev_Pop_Order_By;
  laws_stddev_samp_fields: Laws_Stddev_Samp_Fields;
  laws_stddev_samp_order_by: Laws_Stddev_Samp_Order_By;
  laws_stream_cursor_input: Laws_Stream_Cursor_Input;
  laws_stream_cursor_value_input: Laws_Stream_Cursor_Value_Input;
  laws_sum_fields: Laws_Sum_Fields;
  laws_sum_order_by: Laws_Sum_Order_By;
  laws_updates: Laws_Updates;
  laws_var_pop_fields: Laws_Var_Pop_Fields;
  laws_var_pop_order_by: Laws_Var_Pop_Order_By;
  laws_var_samp_fields: Laws_Var_Samp_Fields;
  laws_var_samp_order_by: Laws_Var_Samp_Order_By;
  laws_variance_fields: Laws_Variance_Fields;
  laws_variance_order_by: Laws_Variance_Order_By;
  maintenances: Maintenances;
  maintenances_aggregate: Maintenances_Aggregate;
  maintenances_aggregate_fields: Maintenances_Aggregate_Fields;
  maintenances_bool_exp: Maintenances_Bool_Exp;
  maintenances_insert_input: Maintenances_Insert_Input;
  maintenances_max_fields: Maintenances_Max_Fields;
  maintenances_min_fields: Maintenances_Min_Fields;
  maintenances_mutation_response: Maintenances_Mutation_Response;
  maintenances_on_conflict: Maintenances_On_Conflict;
  maintenances_order_by: Maintenances_Order_By;
  maintenances_pk_columns_input: Maintenances_Pk_Columns_Input;
  maintenances_set_input: Maintenances_Set_Input;
  maintenances_stream_cursor_input: Maintenances_Stream_Cursor_Input;
  maintenances_stream_cursor_value_input: Maintenances_Stream_Cursor_Value_Input;
  maintenances_updates: Maintenances_Updates;
  mutation_root: {};
  numeric: Scalars['numeric']['output'];
  numeric_comparison_exp: Numeric_Comparison_Exp;
  query_root: {};
  random_species_assets_view: Random_Species_Assets_View;
  random_species_assets_view_aggregate: Random_Species_Assets_View_Aggregate;
  random_species_assets_view_aggregate_fields: Random_Species_Assets_View_Aggregate_Fields;
  random_species_assets_view_bool_exp: Random_Species_Assets_View_Bool_Exp;
  random_species_assets_view_max_fields: Random_Species_Assets_View_Max_Fields;
  random_species_assets_view_min_fields: Random_Species_Assets_View_Min_Fields;
  random_species_assets_view_order_by: Random_Species_Assets_View_Order_By;
  random_species_assets_view_stream_cursor_input: Random_Species_Assets_View_Stream_Cursor_Input;
  random_species_assets_view_stream_cursor_value_input: Random_Species_Assets_View_Stream_Cursor_Value_Input;
  species: Species;
  species_aggregate: Species_Aggregate;
  species_aggregate_fields: Species_Aggregate_Fields;
  species_assets: Species_Assets;
  species_assets_aggregate: Species_Assets_Aggregate;
  species_assets_aggregate_bool_exp: Species_Assets_Aggregate_Bool_Exp;
  species_assets_aggregate_bool_exp_count: Species_Assets_Aggregate_Bool_Exp_Count;
  species_assets_aggregate_fields: Species_Assets_Aggregate_Fields;
  species_assets_aggregate_order_by: Species_Assets_Aggregate_Order_By;
  species_assets_arr_rel_insert_input: Species_Assets_Arr_Rel_Insert_Input;
  species_assets_bool_exp: Species_Assets_Bool_Exp;
  species_assets_insert_input: Species_Assets_Insert_Input;
  species_assets_max_fields: Species_Assets_Max_Fields;
  species_assets_max_order_by: Species_Assets_Max_Order_By;
  species_assets_min_fields: Species_Assets_Min_Fields;
  species_assets_min_order_by: Species_Assets_Min_Order_By;
  species_assets_mutation_response: Species_Assets_Mutation_Response;
  species_assets_obj_rel_insert_input: Species_Assets_Obj_Rel_Insert_Input;
  species_assets_on_conflict: Species_Assets_On_Conflict;
  species_assets_order_by: Species_Assets_Order_By;
  species_assets_pk_columns_input: Species_Assets_Pk_Columns_Input;
  species_assets_set_input: Species_Assets_Set_Input;
  species_assets_stream_cursor_input: Species_Assets_Stream_Cursor_Input;
  species_assets_stream_cursor_value_input: Species_Assets_Stream_Cursor_Value_Input;
  species_assets_updates: Species_Assets_Updates;
  species_avg_fields: Species_Avg_Fields;
  species_bool_exp: Species_Bool_Exp;
  species_inc_input: Species_Inc_Input;
  species_insert_input: Species_Insert_Input;
  species_max_fields: Species_Max_Fields;
  species_min_fields: Species_Min_Fields;
  species_mutation_response: Species_Mutation_Response;
  species_obj_rel_insert_input: Species_Obj_Rel_Insert_Input;
  species_on_conflict: Species_On_Conflict;
  species_order_by: Species_Order_By;
  species_percentage_view_with_world_id: Species_Percentage_View_With_World_Id;
  species_percentage_view_with_world_id_aggregate: Species_Percentage_View_With_World_Id_Aggregate;
  species_percentage_view_with_world_id_aggregate_bool_exp: Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp;
  species_percentage_view_with_world_id_aggregate_bool_exp_count: Species_Percentage_View_With_World_Id_Aggregate_Bool_Exp_Count;
  species_percentage_view_with_world_id_aggregate_fields: Species_Percentage_View_With_World_Id_Aggregate_Fields;
  species_percentage_view_with_world_id_aggregate_order_by: Species_Percentage_View_With_World_Id_Aggregate_Order_By;
  species_percentage_view_with_world_id_arr_rel_insert_input: Species_Percentage_View_With_World_Id_Arr_Rel_Insert_Input;
  species_percentage_view_with_world_id_avg_fields: Species_Percentage_View_With_World_Id_Avg_Fields;
  species_percentage_view_with_world_id_avg_order_by: Species_Percentage_View_With_World_Id_Avg_Order_By;
  species_percentage_view_with_world_id_bool_exp: Species_Percentage_View_With_World_Id_Bool_Exp;
  species_percentage_view_with_world_id_insert_input: Species_Percentage_View_With_World_Id_Insert_Input;
  species_percentage_view_with_world_id_max_fields: Species_Percentage_View_With_World_Id_Max_Fields;
  species_percentage_view_with_world_id_max_order_by: Species_Percentage_View_With_World_Id_Max_Order_By;
  species_percentage_view_with_world_id_min_fields: Species_Percentage_View_With_World_Id_Min_Fields;
  species_percentage_view_with_world_id_min_order_by: Species_Percentage_View_With_World_Id_Min_Order_By;
  species_percentage_view_with_world_id_order_by: Species_Percentage_View_With_World_Id_Order_By;
  species_percentage_view_with_world_id_stddev_fields: Species_Percentage_View_With_World_Id_Stddev_Fields;
  species_percentage_view_with_world_id_stddev_order_by: Species_Percentage_View_With_World_Id_Stddev_Order_By;
  species_percentage_view_with_world_id_stddev_pop_fields: Species_Percentage_View_With_World_Id_Stddev_Pop_Fields;
  species_percentage_view_with_world_id_stddev_pop_order_by: Species_Percentage_View_With_World_Id_Stddev_Pop_Order_By;
  species_percentage_view_with_world_id_stddev_samp_fields: Species_Percentage_View_With_World_Id_Stddev_Samp_Fields;
  species_percentage_view_with_world_id_stddev_samp_order_by: Species_Percentage_View_With_World_Id_Stddev_Samp_Order_By;
  species_percentage_view_with_world_id_stream_cursor_input: Species_Percentage_View_With_World_Id_Stream_Cursor_Input;
  species_percentage_view_with_world_id_stream_cursor_value_input: Species_Percentage_View_With_World_Id_Stream_Cursor_Value_Input;
  species_percentage_view_with_world_id_sum_fields: Species_Percentage_View_With_World_Id_Sum_Fields;
  species_percentage_view_with_world_id_sum_order_by: Species_Percentage_View_With_World_Id_Sum_Order_By;
  species_percentage_view_with_world_id_var_pop_fields: Species_Percentage_View_With_World_Id_Var_Pop_Fields;
  species_percentage_view_with_world_id_var_pop_order_by: Species_Percentage_View_With_World_Id_Var_Pop_Order_By;
  species_percentage_view_with_world_id_var_samp_fields: Species_Percentage_View_With_World_Id_Var_Samp_Fields;
  species_percentage_view_with_world_id_var_samp_order_by: Species_Percentage_View_With_World_Id_Var_Samp_Order_By;
  species_percentage_view_with_world_id_variance_fields: Species_Percentage_View_With_World_Id_Variance_Fields;
  species_percentage_view_with_world_id_variance_order_by: Species_Percentage_View_With_World_Id_Variance_Order_By;
  species_pk_columns_input: Species_Pk_Columns_Input;
  species_set_input: Species_Set_Input;
  species_stddev_fields: Species_Stddev_Fields;
  species_stddev_pop_fields: Species_Stddev_Pop_Fields;
  species_stddev_samp_fields: Species_Stddev_Samp_Fields;
  species_stream_cursor_input: Species_Stream_Cursor_Input;
  species_stream_cursor_value_input: Species_Stream_Cursor_Value_Input;
  species_sum_fields: Species_Sum_Fields;
  species_updates: Species_Updates;
  species_var_pop_fields: Species_Var_Pop_Fields;
  species_var_samp_fields: Species_Var_Samp_Fields;
  species_variance_fields: Species_Variance_Fields;
  subscription_root: {};
  timestamptz: Scalars['timestamptz']['output'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_avg_fields: Users_Avg_Fields;
  users_bool_exp: Users_Bool_Exp;
  users_inc_input: Users_Inc_Input;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  users_stddev_fields: Users_Stddev_Fields;
  users_stddev_pop_fields: Users_Stddev_Pop_Fields;
  users_stddev_samp_fields: Users_Stddev_Samp_Fields;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_sum_fields: Users_Sum_Fields;
  users_updates: Users_Updates;
  users_var_pop_fields: Users_Var_Pop_Fields;
  users_var_samp_fields: Users_Var_Samp_Fields;
  users_variance_fields: Users_Variance_Fields;
  uuid: Scalars['uuid']['output'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
  world_citizens: World_Citizens;
  world_citizens_aggregate: World_Citizens_Aggregate;
  world_citizens_aggregate_bool_exp: World_Citizens_Aggregate_Bool_Exp;
  world_citizens_aggregate_bool_exp_count: World_Citizens_Aggregate_Bool_Exp_Count;
  world_citizens_aggregate_fields: World_Citizens_Aggregate_Fields;
  world_citizens_aggregate_order_by: World_Citizens_Aggregate_Order_By;
  world_citizens_arr_rel_insert_input: World_Citizens_Arr_Rel_Insert_Input;
  world_citizens_avg_fields: World_Citizens_Avg_Fields;
  world_citizens_avg_order_by: World_Citizens_Avg_Order_By;
  world_citizens_bool_exp: World_Citizens_Bool_Exp;
  world_citizens_inc_input: World_Citizens_Inc_Input;
  world_citizens_insert_input: World_Citizens_Insert_Input;
  world_citizens_max_fields: World_Citizens_Max_Fields;
  world_citizens_max_order_by: World_Citizens_Max_Order_By;
  world_citizens_min_fields: World_Citizens_Min_Fields;
  world_citizens_min_order_by: World_Citizens_Min_Order_By;
  world_citizens_mutation_response: World_Citizens_Mutation_Response;
  world_citizens_on_conflict: World_Citizens_On_Conflict;
  world_citizens_order_by: World_Citizens_Order_By;
  world_citizens_pk_columns_input: World_Citizens_Pk_Columns_Input;
  world_citizens_set_input: World_Citizens_Set_Input;
  world_citizens_stddev_fields: World_Citizens_Stddev_Fields;
  world_citizens_stddev_order_by: World_Citizens_Stddev_Order_By;
  world_citizens_stddev_pop_fields: World_Citizens_Stddev_Pop_Fields;
  world_citizens_stddev_pop_order_by: World_Citizens_Stddev_Pop_Order_By;
  world_citizens_stddev_samp_fields: World_Citizens_Stddev_Samp_Fields;
  world_citizens_stddev_samp_order_by: World_Citizens_Stddev_Samp_Order_By;
  world_citizens_stream_cursor_input: World_Citizens_Stream_Cursor_Input;
  world_citizens_stream_cursor_value_input: World_Citizens_Stream_Cursor_Value_Input;
  world_citizens_sum_fields: World_Citizens_Sum_Fields;
  world_citizens_sum_order_by: World_Citizens_Sum_Order_By;
  world_citizens_updates: World_Citizens_Updates;
  world_citizens_var_pop_fields: World_Citizens_Var_Pop_Fields;
  world_citizens_var_pop_order_by: World_Citizens_Var_Pop_Order_By;
  world_citizens_var_samp_fields: World_Citizens_Var_Samp_Fields;
  world_citizens_var_samp_order_by: World_Citizens_Var_Samp_Order_By;
  world_citizens_variance_fields: World_Citizens_Variance_Fields;
  world_citizens_variance_order_by: World_Citizens_Variance_Order_By;
  world_comment_reactions: World_Comment_Reactions;
  world_comment_reactions_aggregate: World_Comment_Reactions_Aggregate;
  world_comment_reactions_aggregate_bool_exp: World_Comment_Reactions_Aggregate_Bool_Exp;
  world_comment_reactions_aggregate_bool_exp_count: World_Comment_Reactions_Aggregate_Bool_Exp_Count;
  world_comment_reactions_aggregate_fields: World_Comment_Reactions_Aggregate_Fields;
  world_comment_reactions_aggregate_order_by: World_Comment_Reactions_Aggregate_Order_By;
  world_comment_reactions_arr_rel_insert_input: World_Comment_Reactions_Arr_Rel_Insert_Input;
  world_comment_reactions_avg_fields: World_Comment_Reactions_Avg_Fields;
  world_comment_reactions_avg_order_by: World_Comment_Reactions_Avg_Order_By;
  world_comment_reactions_bool_exp: World_Comment_Reactions_Bool_Exp;
  world_comment_reactions_inc_input: World_Comment_Reactions_Inc_Input;
  world_comment_reactions_insert_input: World_Comment_Reactions_Insert_Input;
  world_comment_reactions_max_fields: World_Comment_Reactions_Max_Fields;
  world_comment_reactions_max_order_by: World_Comment_Reactions_Max_Order_By;
  world_comment_reactions_min_fields: World_Comment_Reactions_Min_Fields;
  world_comment_reactions_min_order_by: World_Comment_Reactions_Min_Order_By;
  world_comment_reactions_mutation_response: World_Comment_Reactions_Mutation_Response;
  world_comment_reactions_on_conflict: World_Comment_Reactions_On_Conflict;
  world_comment_reactions_order_by: World_Comment_Reactions_Order_By;
  world_comment_reactions_pk_columns_input: World_Comment_Reactions_Pk_Columns_Input;
  world_comment_reactions_set_input: World_Comment_Reactions_Set_Input;
  world_comment_reactions_stddev_fields: World_Comment_Reactions_Stddev_Fields;
  world_comment_reactions_stddev_order_by: World_Comment_Reactions_Stddev_Order_By;
  world_comment_reactions_stddev_pop_fields: World_Comment_Reactions_Stddev_Pop_Fields;
  world_comment_reactions_stddev_pop_order_by: World_Comment_Reactions_Stddev_Pop_Order_By;
  world_comment_reactions_stddev_samp_fields: World_Comment_Reactions_Stddev_Samp_Fields;
  world_comment_reactions_stddev_samp_order_by: World_Comment_Reactions_Stddev_Samp_Order_By;
  world_comment_reactions_stream_cursor_input: World_Comment_Reactions_Stream_Cursor_Input;
  world_comment_reactions_stream_cursor_value_input: World_Comment_Reactions_Stream_Cursor_Value_Input;
  world_comment_reactions_sum_fields: World_Comment_Reactions_Sum_Fields;
  world_comment_reactions_sum_order_by: World_Comment_Reactions_Sum_Order_By;
  world_comment_reactions_updates: World_Comment_Reactions_Updates;
  world_comment_reactions_var_pop_fields: World_Comment_Reactions_Var_Pop_Fields;
  world_comment_reactions_var_pop_order_by: World_Comment_Reactions_Var_Pop_Order_By;
  world_comment_reactions_var_samp_fields: World_Comment_Reactions_Var_Samp_Fields;
  world_comment_reactions_var_samp_order_by: World_Comment_Reactions_Var_Samp_Order_By;
  world_comment_reactions_variance_fields: World_Comment_Reactions_Variance_Fields;
  world_comment_reactions_variance_order_by: World_Comment_Reactions_Variance_Order_By;
  world_comments: World_Comments;
  world_comments_aggregate: World_Comments_Aggregate;
  world_comments_aggregate_bool_exp: World_Comments_Aggregate_Bool_Exp;
  world_comments_aggregate_bool_exp_count: World_Comments_Aggregate_Bool_Exp_Count;
  world_comments_aggregate_fields: World_Comments_Aggregate_Fields;
  world_comments_aggregate_order_by: World_Comments_Aggregate_Order_By;
  world_comments_arr_rel_insert_input: World_Comments_Arr_Rel_Insert_Input;
  world_comments_bool_exp: World_Comments_Bool_Exp;
  world_comments_insert_input: World_Comments_Insert_Input;
  world_comments_max_fields: World_Comments_Max_Fields;
  world_comments_max_order_by: World_Comments_Max_Order_By;
  world_comments_min_fields: World_Comments_Min_Fields;
  world_comments_min_order_by: World_Comments_Min_Order_By;
  world_comments_mutation_response: World_Comments_Mutation_Response;
  world_comments_obj_rel_insert_input: World_Comments_Obj_Rel_Insert_Input;
  world_comments_on_conflict: World_Comments_On_Conflict;
  world_comments_order_by: World_Comments_Order_By;
  world_comments_pk_columns_input: World_Comments_Pk_Columns_Input;
  world_comments_set_input: World_Comments_Set_Input;
  world_comments_stream_cursor_input: World_Comments_Stream_Cursor_Input;
  world_comments_stream_cursor_value_input: World_Comments_Stream_Cursor_Value_Input;
  world_comments_updates: World_Comments_Updates;
  world_histories: World_Histories;
  world_histories_aggregate: World_Histories_Aggregate;
  world_histories_aggregate_bool_exp: World_Histories_Aggregate_Bool_Exp;
  world_histories_aggregate_bool_exp_count: World_Histories_Aggregate_Bool_Exp_Count;
  world_histories_aggregate_fields: World_Histories_Aggregate_Fields;
  world_histories_aggregate_order_by: World_Histories_Aggregate_Order_By;
  world_histories_append_input: World_Histories_Append_Input;
  world_histories_arr_rel_insert_input: World_Histories_Arr_Rel_Insert_Input;
  world_histories_avg_fields: World_Histories_Avg_Fields;
  world_histories_avg_order_by: World_Histories_Avg_Order_By;
  world_histories_bool_exp: World_Histories_Bool_Exp;
  world_histories_delete_at_path_input: World_Histories_Delete_At_Path_Input;
  world_histories_delete_elem_input: World_Histories_Delete_Elem_Input;
  world_histories_delete_key_input: World_Histories_Delete_Key_Input;
  world_histories_inc_input: World_Histories_Inc_Input;
  world_histories_insert_input: World_Histories_Insert_Input;
  world_histories_max_fields: World_Histories_Max_Fields;
  world_histories_max_order_by: World_Histories_Max_Order_By;
  world_histories_min_fields: World_Histories_Min_Fields;
  world_histories_min_order_by: World_Histories_Min_Order_By;
  world_histories_mutation_response: World_Histories_Mutation_Response;
  world_histories_on_conflict: World_Histories_On_Conflict;
  world_histories_order_by: World_Histories_Order_By;
  world_histories_pk_columns_input: World_Histories_Pk_Columns_Input;
  world_histories_prepend_input: World_Histories_Prepend_Input;
  world_histories_set_input: World_Histories_Set_Input;
  world_histories_stddev_fields: World_Histories_Stddev_Fields;
  world_histories_stddev_order_by: World_Histories_Stddev_Order_By;
  world_histories_stddev_pop_fields: World_Histories_Stddev_Pop_Fields;
  world_histories_stddev_pop_order_by: World_Histories_Stddev_Pop_Order_By;
  world_histories_stddev_samp_fields: World_Histories_Stddev_Samp_Fields;
  world_histories_stddev_samp_order_by: World_Histories_Stddev_Samp_Order_By;
  world_histories_stream_cursor_input: World_Histories_Stream_Cursor_Input;
  world_histories_stream_cursor_value_input: World_Histories_Stream_Cursor_Value_Input;
  world_histories_sum_fields: World_Histories_Sum_Fields;
  world_histories_sum_order_by: World_Histories_Sum_Order_By;
  world_histories_updates: World_Histories_Updates;
  world_histories_var_pop_fields: World_Histories_Var_Pop_Fields;
  world_histories_var_pop_order_by: World_Histories_Var_Pop_Order_By;
  world_histories_var_samp_fields: World_Histories_Var_Samp_Fields;
  world_histories_var_samp_order_by: World_Histories_Var_Samp_Order_By;
  world_histories_variance_fields: World_Histories_Variance_Fields;
  world_histories_variance_order_by: World_Histories_Variance_Order_By;
  world_laws: World_Laws;
  world_laws_aggregate: World_Laws_Aggregate;
  world_laws_aggregate_bool_exp: World_Laws_Aggregate_Bool_Exp;
  world_laws_aggregate_bool_exp_count: World_Laws_Aggregate_Bool_Exp_Count;
  world_laws_aggregate_fields: World_Laws_Aggregate_Fields;
  world_laws_aggregate_order_by: World_Laws_Aggregate_Order_By;
  world_laws_arr_rel_insert_input: World_Laws_Arr_Rel_Insert_Input;
  world_laws_bool_exp: World_Laws_Bool_Exp;
  world_laws_insert_input: World_Laws_Insert_Input;
  world_laws_max_fields: World_Laws_Max_Fields;
  world_laws_max_order_by: World_Laws_Max_Order_By;
  world_laws_min_fields: World_Laws_Min_Fields;
  world_laws_min_order_by: World_Laws_Min_Order_By;
  world_laws_mutation_response: World_Laws_Mutation_Response;
  world_laws_on_conflict: World_Laws_On_Conflict;
  world_laws_order_by: World_Laws_Order_By;
  world_laws_pk_columns_input: World_Laws_Pk_Columns_Input;
  world_laws_set_input: World_Laws_Set_Input;
  world_laws_stream_cursor_input: World_Laws_Stream_Cursor_Input;
  world_laws_stream_cursor_value_input: World_Laws_Stream_Cursor_Value_Input;
  world_laws_updates: World_Laws_Updates;
  world_reactions: World_Reactions;
  world_reactions_aggregate: World_Reactions_Aggregate;
  world_reactions_aggregate_bool_exp: World_Reactions_Aggregate_Bool_Exp;
  world_reactions_aggregate_bool_exp_count: World_Reactions_Aggregate_Bool_Exp_Count;
  world_reactions_aggregate_fields: World_Reactions_Aggregate_Fields;
  world_reactions_aggregate_order_by: World_Reactions_Aggregate_Order_By;
  world_reactions_arr_rel_insert_input: World_Reactions_Arr_Rel_Insert_Input;
  world_reactions_avg_fields: World_Reactions_Avg_Fields;
  world_reactions_avg_order_by: World_Reactions_Avg_Order_By;
  world_reactions_bool_exp: World_Reactions_Bool_Exp;
  world_reactions_inc_input: World_Reactions_Inc_Input;
  world_reactions_insert_input: World_Reactions_Insert_Input;
  world_reactions_max_fields: World_Reactions_Max_Fields;
  world_reactions_max_order_by: World_Reactions_Max_Order_By;
  world_reactions_min_fields: World_Reactions_Min_Fields;
  world_reactions_min_order_by: World_Reactions_Min_Order_By;
  world_reactions_mutation_response: World_Reactions_Mutation_Response;
  world_reactions_on_conflict: World_Reactions_On_Conflict;
  world_reactions_order_by: World_Reactions_Order_By;
  world_reactions_pk_columns_input: World_Reactions_Pk_Columns_Input;
  world_reactions_set_input: World_Reactions_Set_Input;
  world_reactions_stddev_fields: World_Reactions_Stddev_Fields;
  world_reactions_stddev_order_by: World_Reactions_Stddev_Order_By;
  world_reactions_stddev_pop_fields: World_Reactions_Stddev_Pop_Fields;
  world_reactions_stddev_pop_order_by: World_Reactions_Stddev_Pop_Order_By;
  world_reactions_stddev_samp_fields: World_Reactions_Stddev_Samp_Fields;
  world_reactions_stddev_samp_order_by: World_Reactions_Stddev_Samp_Order_By;
  world_reactions_stream_cursor_input: World_Reactions_Stream_Cursor_Input;
  world_reactions_stream_cursor_value_input: World_Reactions_Stream_Cursor_Value_Input;
  world_reactions_sum_fields: World_Reactions_Sum_Fields;
  world_reactions_sum_order_by: World_Reactions_Sum_Order_By;
  world_reactions_updates: World_Reactions_Updates;
  world_reactions_var_pop_fields: World_Reactions_Var_Pop_Fields;
  world_reactions_var_pop_order_by: World_Reactions_Var_Pop_Order_By;
  world_reactions_var_samp_fields: World_Reactions_Var_Samp_Fields;
  world_reactions_var_samp_order_by: World_Reactions_Var_Samp_Order_By;
  world_reactions_variance_fields: World_Reactions_Variance_Fields;
  world_reactions_variance_order_by: World_Reactions_Variance_Order_By;
  worlds: Worlds;
  worlds_aggregate: Worlds_Aggregate;
  worlds_aggregate_bool_exp: Worlds_Aggregate_Bool_Exp;
  worlds_aggregate_bool_exp_count: Worlds_Aggregate_Bool_Exp_Count;
  worlds_aggregate_fields: Worlds_Aggregate_Fields;
  worlds_aggregate_order_by: Worlds_Aggregate_Order_By;
  worlds_arr_rel_insert_input: Worlds_Arr_Rel_Insert_Input;
  worlds_avg_fields: Worlds_Avg_Fields;
  worlds_avg_order_by: Worlds_Avg_Order_By;
  worlds_bool_exp: Worlds_Bool_Exp;
  worlds_inc_input: Worlds_Inc_Input;
  worlds_insert_input: Worlds_Insert_Input;
  worlds_max_fields: Worlds_Max_Fields;
  worlds_max_order_by: Worlds_Max_Order_By;
  worlds_min_fields: Worlds_Min_Fields;
  worlds_min_order_by: Worlds_Min_Order_By;
  worlds_mutation_response: Worlds_Mutation_Response;
  worlds_obj_rel_insert_input: Worlds_Obj_Rel_Insert_Input;
  worlds_on_conflict: Worlds_On_Conflict;
  worlds_order_by: Worlds_Order_By;
  worlds_pk_columns_input: Worlds_Pk_Columns_Input;
  worlds_set_input: Worlds_Set_Input;
  worlds_stddev_fields: Worlds_Stddev_Fields;
  worlds_stddev_order_by: Worlds_Stddev_Order_By;
  worlds_stddev_pop_fields: Worlds_Stddev_Pop_Fields;
  worlds_stddev_pop_order_by: Worlds_Stddev_Pop_Order_By;
  worlds_stddev_samp_fields: Worlds_Stddev_Samp_Fields;
  worlds_stddev_samp_order_by: Worlds_Stddev_Samp_Order_By;
  worlds_stream_cursor_input: Worlds_Stream_Cursor_Input;
  worlds_stream_cursor_value_input: Worlds_Stream_Cursor_Value_Input;
  worlds_sum_fields: Worlds_Sum_Fields;
  worlds_sum_order_by: Worlds_Sum_Order_By;
  worlds_updates: Worlds_Updates;
  worlds_var_pop_fields: Worlds_Var_Pop_Fields;
  worlds_var_pop_order_by: Worlds_Var_Pop_Order_By;
  worlds_var_samp_fields: Worlds_Var_Samp_Fields;
  worlds_var_samp_order_by: Worlds_Var_Samp_Order_By;
  worlds_variance_fields: Worlds_Variance_Fields;
  worlds_variance_order_by: Worlds_Variance_Order_By;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean']['input'];
  ttl?: Scalars['Int']['input'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CitizensResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens'] = ResolversParentTypes['citizens']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  species_asset?: Resolver<ResolversTypes['species_assets'], ParentType, ContextType>;
  species_asset_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  world_citizens?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType, Partial<CitizensWorld_CitizensArgs>>;
  world_citizens_aggregate?: Resolver<ResolversTypes['world_citizens_aggregate'], ParentType, ContextType, Partial<CitizensWorld_Citizens_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_aggregate'] = ResolversParentTypes['citizens_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['citizens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_aggregate_fields'] = ResolversParentTypes['citizens_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['citizens_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Citizens_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['citizens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['citizens_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['citizens_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['citizens_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['citizens_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['citizens_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['citizens_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['citizens_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['citizens_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_avg_fields'] = ResolversParentTypes['citizens_avg_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_max_fields'] = ResolversParentTypes['citizens_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  species_asset_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_min_fields'] = ResolversParentTypes['citizens_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  species_asset_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_mutation_response'] = ResolversParentTypes['citizens_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_stddev_fields'] = ResolversParentTypes['citizens_stddev_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_stddev_pop_fields'] = ResolversParentTypes['citizens_stddev_pop_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_stddev_samp_fields'] = ResolversParentTypes['citizens_stddev_samp_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_sum_fields'] = ResolversParentTypes['citizens_sum_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_var_pop_fields'] = ResolversParentTypes['citizens_var_pop_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_var_samp_fields'] = ResolversParentTypes['citizens_var_samp_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Citizens_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['citizens_variance_fields'] = ResolversParentTypes['citizens_variance_fields']> = {
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['jsonb'], any> {
  name: 'jsonb';
}

export type Law_Comment_ReactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions'] = ResolversParentTypes['law_comment_reactions']> = {
  comment_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  law_comment?: Resolver<ResolversTypes['law_comments'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_aggregate'] = ResolversParentTypes['law_comment_reactions_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_comment_reactions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_comment_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_aggregate_fields'] = ResolversParentTypes['law_comment_reactions_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['law_comment_reactions_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Comment_Reactions_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_comment_reactions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_comment_reactions_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['law_comment_reactions_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['law_comment_reactions_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['law_comment_reactions_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['law_comment_reactions_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['law_comment_reactions_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['law_comment_reactions_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['law_comment_reactions_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_avg_fields'] = ResolversParentTypes['law_comment_reactions_avg_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_max_fields'] = ResolversParentTypes['law_comment_reactions_max_fields']> = {
  comment_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_min_fields'] = ResolversParentTypes['law_comment_reactions_min_fields']> = {
  comment_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_mutation_response'] = ResolversParentTypes['law_comment_reactions_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_comment_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_stddev_fields'] = ResolversParentTypes['law_comment_reactions_stddev_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_stddev_pop_fields'] = ResolversParentTypes['law_comment_reactions_stddev_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_stddev_samp_fields'] = ResolversParentTypes['law_comment_reactions_stddev_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_sum_fields'] = ResolversParentTypes['law_comment_reactions_sum_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_var_pop_fields'] = ResolversParentTypes['law_comment_reactions_var_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_var_samp_fields'] = ResolversParentTypes['law_comment_reactions_var_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comment_Reactions_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comment_reactions_variance_fields'] = ResolversParentTypes['law_comment_reactions_variance_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_CommentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comments'] = ResolversParentTypes['law_comments']> = {
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  law?: Resolver<ResolversTypes['laws'], ParentType, ContextType>;
  law_comment_reactions?: Resolver<Array<ResolversTypes['law_comment_reactions']>, ParentType, ContextType, Partial<Law_CommentsLaw_Comment_ReactionsArgs>>;
  law_comment_reactions_aggregate?: Resolver<ResolversTypes['law_comment_reactions_aggregate'], ParentType, ContextType, Partial<Law_CommentsLaw_Comment_Reactions_AggregateArgs>>;
  law_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comments_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comments_aggregate'] = ResolversParentTypes['law_comments_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_comments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comments_aggregate_fields'] = ResolversParentTypes['law_comments_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Comments_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_comments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_comments_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comments_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comments_max_fields'] = ResolversParentTypes['law_comments_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comments_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comments_min_fields'] = ResolversParentTypes['law_comments_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Comments_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_comments_mutation_response'] = ResolversParentTypes['law_comments_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_ReactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions'] = ResolversParentTypes['law_reactions']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  law?: Resolver<ResolversTypes['laws'], ParentType, ContextType>;
  law_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_aggregate'] = ResolversParentTypes['law_reactions_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_reactions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_aggregate_fields'] = ResolversParentTypes['law_reactions_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['law_reactions_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Reactions_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_reactions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_reactions_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['law_reactions_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['law_reactions_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['law_reactions_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['law_reactions_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['law_reactions_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['law_reactions_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['law_reactions_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_avg_fields'] = ResolversParentTypes['law_reactions_avg_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_max_fields'] = ResolversParentTypes['law_reactions_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_min_fields'] = ResolversParentTypes['law_reactions_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_mutation_response'] = ResolversParentTypes['law_reactions_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_stddev_fields'] = ResolversParentTypes['law_reactions_stddev_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_stddev_pop_fields'] = ResolversParentTypes['law_reactions_stddev_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_stddev_samp_fields'] = ResolversParentTypes['law_reactions_stddev_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_sum_fields'] = ResolversParentTypes['law_reactions_sum_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_var_pop_fields'] = ResolversParentTypes['law_reactions_var_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_var_samp_fields'] = ResolversParentTypes['law_reactions_var_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Reactions_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_reactions_variance_fields'] = ResolversParentTypes['law_reactions_variance_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_RevisionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions'] = ResolversParentTypes['law_revisions']> = {
  block_json?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<Law_RevisionsBlock_JsonArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  data_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  info_object?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<Law_RevisionsInfo_ObjectArgs>>;
  law?: Resolver<ResolversTypes['laws'], ParentType, ContextType>;
  law_category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  law_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  law_image_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  law_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_aggregate'] = ResolversParentTypes['law_revisions_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_revisions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_aggregate_fields'] = ResolversParentTypes['law_revisions_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['law_revisions_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Revisions_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_revisions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_revisions_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['law_revisions_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['law_revisions_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['law_revisions_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['law_revisions_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['law_revisions_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['law_revisions_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['law_revisions_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_avg_fields'] = ResolversParentTypes['law_revisions_avg_fields']> = {
  law_status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_max_fields'] = ResolversParentTypes['law_revisions_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  data_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  law_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_min_fields'] = ResolversParentTypes['law_revisions_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  data_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  law_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_mutation_response'] = ResolversParentTypes['law_revisions_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_stddev_fields'] = ResolversParentTypes['law_revisions_stddev_fields']> = {
  law_status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_stddev_pop_fields'] = ResolversParentTypes['law_revisions_stddev_pop_fields']> = {
  law_status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_stddev_samp_fields'] = ResolversParentTypes['law_revisions_stddev_samp_fields']> = {
  law_status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_sum_fields'] = ResolversParentTypes['law_revisions_sum_fields']> = {
  law_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_var_pop_fields'] = ResolversParentTypes['law_revisions_var_pop_fields']> = {
  law_status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_var_samp_fields'] = ResolversParentTypes['law_revisions_var_samp_fields']> = {
  law_status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Revisions_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_revisions_variance_fields'] = ResolversParentTypes['law_revisions_variance_fields']> = {
  law_status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  law_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_RatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates'] = ResolversParentTypes['law_star_rates']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  law?: Resolver<ResolversTypes['laws'], ParentType, ContextType>;
  law_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_aggregate'] = ResolversParentTypes['law_star_rates_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['law_star_rates_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['law_star_rates']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_aggregate_fields'] = ResolversParentTypes['law_star_rates_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['law_star_rates_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Law_Star_Rates_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['law_star_rates_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['law_star_rates_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['law_star_rates_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['law_star_rates_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['law_star_rates_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['law_star_rates_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['law_star_rates_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['law_star_rates_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['law_star_rates_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_avg_fields'] = ResolversParentTypes['law_star_rates_avg_fields']> = {
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_max_fields'] = ResolversParentTypes['law_star_rates_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_min_fields'] = ResolversParentTypes['law_star_rates_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_mutation_response'] = ResolversParentTypes['law_star_rates_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['law_star_rates']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_stddev_fields'] = ResolversParentTypes['law_star_rates_stddev_fields']> = {
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_stddev_pop_fields'] = ResolversParentTypes['law_star_rates_stddev_pop_fields']> = {
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_stddev_samp_fields'] = ResolversParentTypes['law_star_rates_stddev_samp_fields']> = {
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_sum_fields'] = ResolversParentTypes['law_star_rates_sum_fields']> = {
  rate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_var_pop_fields'] = ResolversParentTypes['law_star_rates_var_pop_fields']> = {
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_var_samp_fields'] = ResolversParentTypes['law_star_rates_var_samp_fields']> = {
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Law_Star_Rates_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['law_star_rates_variance_fields'] = ResolversParentTypes['law_star_rates_variance_fields']> = {
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LawsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws'] = ResolversParentTypes['laws']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  law_api_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  law_comments?: Resolver<Array<ResolversTypes['law_comments']>, ParentType, ContextType, Partial<LawsLaw_CommentsArgs>>;
  law_comments_aggregate?: Resolver<ResolversTypes['law_comments_aggregate'], ParentType, ContextType, Partial<LawsLaw_Comments_AggregateArgs>>;
  law_reactions?: Resolver<Array<ResolversTypes['law_reactions']>, ParentType, ContextType, Partial<LawsLaw_ReactionsArgs>>;
  law_reactions_aggregate?: Resolver<ResolversTypes['law_reactions_aggregate'], ParentType, ContextType, Partial<LawsLaw_Reactions_AggregateArgs>>;
  law_revisions?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType, Partial<LawsLaw_RevisionsArgs>>;
  law_revisions_aggregate?: Resolver<ResolversTypes['law_revisions_aggregate'], ParentType, ContextType, Partial<LawsLaw_Revisions_AggregateArgs>>;
  law_star_rates?: Resolver<Array<ResolversTypes['law_star_rates']>, ParentType, ContextType, Partial<LawsLaw_Star_RatesArgs>>;
  law_star_rates_aggregate?: Resolver<ResolversTypes['law_star_rates_aggregate'], ParentType, ContextType, Partial<LawsLaw_Star_Rates_AggregateArgs>>;
  newness?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  place?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  promulgation_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  world_laws?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType, Partial<LawsWorld_LawsArgs>>;
  world_laws_aggregate?: Resolver<ResolversTypes['world_laws_aggregate'], ParentType, ContextType, Partial<LawsWorld_Laws_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_aggregate'] = ResolversParentTypes['laws_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['laws_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['laws']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_aggregate_fields'] = ResolversParentTypes['laws_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['laws_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Laws_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['laws_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['laws_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['laws_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['laws_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['laws_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['laws_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['laws_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['laws_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['laws_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_avg_fields'] = ResolversParentTypes['laws_avg_fields']> = {
  newness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_max_fields'] = ResolversParentTypes['laws_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_api_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  place?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promulgation_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_min_fields'] = ResolversParentTypes['laws_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  law_api_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  place?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promulgation_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_mutation_response'] = ResolversParentTypes['laws_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['laws']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_stddev_fields'] = ResolversParentTypes['laws_stddev_fields']> = {
  newness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_stddev_pop_fields'] = ResolversParentTypes['laws_stddev_pop_fields']> = {
  newness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_stddev_samp_fields'] = ResolversParentTypes['laws_stddev_samp_fields']> = {
  newness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_sum_fields'] = ResolversParentTypes['laws_sum_fields']> = {
  newness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_var_pop_fields'] = ResolversParentTypes['laws_var_pop_fields']> = {
  newness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_var_samp_fields'] = ResolversParentTypes['laws_var_samp_fields']> = {
  newness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Laws_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['laws_variance_fields'] = ResolversParentTypes['laws_variance_fields']> = {
  newness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MaintenancesResolvers<ContextType = any, ParentType extends ResolversParentTypes['maintenances'] = ResolversParentTypes['maintenances']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  end_timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  start_timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Maintenances_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['maintenances_aggregate'] = ResolversParentTypes['maintenances_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['maintenances_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['maintenances']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Maintenances_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['maintenances_aggregate_fields'] = ResolversParentTypes['maintenances_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Maintenances_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['maintenances_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['maintenances_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Maintenances_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['maintenances_max_fields'] = ResolversParentTypes['maintenances_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  end_timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  start_timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Maintenances_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['maintenances_min_fields'] = ResolversParentTypes['maintenances_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  end_timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  start_timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Maintenances_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['maintenances_mutation_response'] = ResolversParentTypes['maintenances_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['maintenances']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_citizens?: Resolver<Maybe<ResolversTypes['citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CitizensArgs, 'where'>>;
  delete_citizens_by_pk?: Resolver<Maybe<ResolversTypes['citizens']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Citizens_By_PkArgs, 'id'>>;
  delete_law_comment_reactions?: Resolver<Maybe<ResolversTypes['law_comment_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Comment_ReactionsArgs, 'where'>>;
  delete_law_comment_reactions_by_pk?: Resolver<Maybe<ResolversTypes['law_comment_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Comment_Reactions_By_PkArgs, 'comment_id' | 'type' | 'user_id'>>;
  delete_law_comments?: Resolver<Maybe<ResolversTypes['law_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_CommentsArgs, 'where'>>;
  delete_law_comments_by_pk?: Resolver<Maybe<ResolversTypes['law_comments']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Comments_By_PkArgs, 'id'>>;
  delete_law_reactions?: Resolver<Maybe<ResolversTypes['law_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_ReactionsArgs, 'where'>>;
  delete_law_reactions_by_pk?: Resolver<Maybe<ResolversTypes['law_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Reactions_By_PkArgs, 'law_id' | 'type' | 'user_id'>>;
  delete_law_revisions?: Resolver<Maybe<ResolversTypes['law_revisions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_RevisionsArgs, 'where'>>;
  delete_law_revisions_by_pk?: Resolver<Maybe<ResolversTypes['law_revisions']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Revisions_By_PkArgs, 'id'>>;
  delete_law_star_rates?: Resolver<Maybe<ResolversTypes['law_star_rates_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Star_RatesArgs, 'where'>>;
  delete_law_star_rates_by_pk?: Resolver<Maybe<ResolversTypes['law_star_rates']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Law_Star_Rates_By_PkArgs, 'law_id' | 'user_id'>>;
  delete_laws?: Resolver<Maybe<ResolversTypes['laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_LawsArgs, 'where'>>;
  delete_laws_by_pk?: Resolver<Maybe<ResolversTypes['laws']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Laws_By_PkArgs, 'id'>>;
  delete_maintenances?: Resolver<Maybe<ResolversTypes['maintenances_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_MaintenancesArgs, 'where'>>;
  delete_maintenances_by_pk?: Resolver<Maybe<ResolversTypes['maintenances']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Maintenances_By_PkArgs, 'id'>>;
  delete_species?: Resolver<Maybe<ResolversTypes['species_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_SpeciesArgs, 'where'>>;
  delete_species_assets?: Resolver<Maybe<ResolversTypes['species_assets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Species_AssetsArgs, 'where'>>;
  delete_species_assets_by_pk?: Resolver<Maybe<ResolversTypes['species_assets']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Species_Assets_By_PkArgs, 'id'>>;
  delete_species_by_pk?: Resolver<Maybe<ResolversTypes['species']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Species_By_PkArgs, 'id'>>;
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UsersArgs, 'where'>>;
  delete_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Users_By_PkArgs, 'id'>>;
  delete_world_citizens?: Resolver<Maybe<ResolversTypes['world_citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_CitizensArgs, 'where'>>;
  delete_world_citizens_by_pk?: Resolver<Maybe<ResolversTypes['world_citizens']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Citizens_By_PkArgs, 'citizen_id' | 'world_id'>>;
  delete_world_comment_reactions?: Resolver<Maybe<ResolversTypes['world_comment_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Comment_ReactionsArgs, 'where'>>;
  delete_world_comment_reactions_by_pk?: Resolver<Maybe<ResolversTypes['world_comment_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Comment_Reactions_By_PkArgs, 'comment_id' | 'type' | 'user_id'>>;
  delete_world_comments?: Resolver<Maybe<ResolversTypes['world_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_CommentsArgs, 'where'>>;
  delete_world_comments_by_pk?: Resolver<Maybe<ResolversTypes['world_comments']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Comments_By_PkArgs, 'id'>>;
  delete_world_histories?: Resolver<Maybe<ResolversTypes['world_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_HistoriesArgs, 'where'>>;
  delete_world_histories_by_pk?: Resolver<Maybe<ResolversTypes['world_histories']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Histories_By_PkArgs, 'id'>>;
  delete_world_laws?: Resolver<Maybe<ResolversTypes['world_laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_LawsArgs, 'where'>>;
  delete_world_laws_by_pk?: Resolver<Maybe<ResolversTypes['world_laws']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Laws_By_PkArgs, 'law_id' | 'world_id'>>;
  delete_world_reactions?: Resolver<Maybe<ResolversTypes['world_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_ReactionsArgs, 'where'>>;
  delete_world_reactions_by_pk?: Resolver<Maybe<ResolversTypes['world_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_World_Reactions_By_PkArgs, 'type' | 'user_id' | 'world_id'>>;
  delete_worlds?: Resolver<Maybe<ResolversTypes['worlds_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_WorldsArgs, 'where'>>;
  delete_worlds_by_pk?: Resolver<Maybe<ResolversTypes['worlds']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Worlds_By_PkArgs, 'id'>>;
  insert_citizens?: Resolver<Maybe<ResolversTypes['citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CitizensArgs, 'objects'>>;
  insert_citizens_one?: Resolver<Maybe<ResolversTypes['citizens']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Citizens_OneArgs, 'object'>>;
  insert_law_comment_reactions?: Resolver<Maybe<ResolversTypes['law_comment_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Comment_ReactionsArgs, 'objects'>>;
  insert_law_comment_reactions_one?: Resolver<Maybe<ResolversTypes['law_comment_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Comment_Reactions_OneArgs, 'object'>>;
  insert_law_comments?: Resolver<Maybe<ResolversTypes['law_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_CommentsArgs, 'objects'>>;
  insert_law_comments_one?: Resolver<Maybe<ResolversTypes['law_comments']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Comments_OneArgs, 'object'>>;
  insert_law_reactions?: Resolver<Maybe<ResolversTypes['law_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_ReactionsArgs, 'objects'>>;
  insert_law_reactions_one?: Resolver<Maybe<ResolversTypes['law_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Reactions_OneArgs, 'object'>>;
  insert_law_revisions?: Resolver<Maybe<ResolversTypes['law_revisions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_RevisionsArgs, 'objects'>>;
  insert_law_revisions_one?: Resolver<Maybe<ResolversTypes['law_revisions']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Revisions_OneArgs, 'object'>>;
  insert_law_star_rates?: Resolver<Maybe<ResolversTypes['law_star_rates_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Star_RatesArgs, 'objects'>>;
  insert_law_star_rates_one?: Resolver<Maybe<ResolversTypes['law_star_rates']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Law_Star_Rates_OneArgs, 'object'>>;
  insert_laws?: Resolver<Maybe<ResolversTypes['laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_LawsArgs, 'objects'>>;
  insert_laws_one?: Resolver<Maybe<ResolversTypes['laws']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Laws_OneArgs, 'object'>>;
  insert_maintenances?: Resolver<Maybe<ResolversTypes['maintenances_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_MaintenancesArgs, 'objects'>>;
  insert_maintenances_one?: Resolver<Maybe<ResolversTypes['maintenances']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Maintenances_OneArgs, 'object'>>;
  insert_species?: Resolver<Maybe<ResolversTypes['species_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_SpeciesArgs, 'objects'>>;
  insert_species_assets?: Resolver<Maybe<ResolversTypes['species_assets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Species_AssetsArgs, 'objects'>>;
  insert_species_assets_one?: Resolver<Maybe<ResolversTypes['species_assets']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Species_Assets_OneArgs, 'object'>>;
  insert_species_one?: Resolver<Maybe<ResolversTypes['species']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Species_OneArgs, 'object'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>>;
  insert_users_one?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Users_OneArgs, 'object'>>;
  insert_world_citizens?: Resolver<Maybe<ResolversTypes['world_citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_CitizensArgs, 'objects'>>;
  insert_world_citizens_one?: Resolver<Maybe<ResolversTypes['world_citizens']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Citizens_OneArgs, 'object'>>;
  insert_world_comment_reactions?: Resolver<Maybe<ResolversTypes['world_comment_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Comment_ReactionsArgs, 'objects'>>;
  insert_world_comment_reactions_one?: Resolver<Maybe<ResolversTypes['world_comment_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Comment_Reactions_OneArgs, 'object'>>;
  insert_world_comments?: Resolver<Maybe<ResolversTypes['world_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_CommentsArgs, 'objects'>>;
  insert_world_comments_one?: Resolver<Maybe<ResolversTypes['world_comments']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Comments_OneArgs, 'object'>>;
  insert_world_histories?: Resolver<Maybe<ResolversTypes['world_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_HistoriesArgs, 'objects'>>;
  insert_world_histories_one?: Resolver<Maybe<ResolversTypes['world_histories']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Histories_OneArgs, 'object'>>;
  insert_world_laws?: Resolver<Maybe<ResolversTypes['world_laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_LawsArgs, 'objects'>>;
  insert_world_laws_one?: Resolver<Maybe<ResolversTypes['world_laws']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Laws_OneArgs, 'object'>>;
  insert_world_reactions?: Resolver<Maybe<ResolversTypes['world_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_ReactionsArgs, 'objects'>>;
  insert_world_reactions_one?: Resolver<Maybe<ResolversTypes['world_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_World_Reactions_OneArgs, 'object'>>;
  insert_worlds?: Resolver<Maybe<ResolversTypes['worlds_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_WorldsArgs, 'objects'>>;
  insert_worlds_one?: Resolver<Maybe<ResolversTypes['worlds']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Worlds_OneArgs, 'object'>>;
  update_citizens?: Resolver<Maybe<ResolversTypes['citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CitizensArgs, 'where'>>;
  update_citizens_by_pk?: Resolver<Maybe<ResolversTypes['citizens']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Citizens_By_PkArgs, 'pk_columns'>>;
  update_citizens_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['citizens_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Citizens_ManyArgs, 'updates'>>;
  update_law_comment_reactions?: Resolver<Maybe<ResolversTypes['law_comment_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Comment_ReactionsArgs, 'where'>>;
  update_law_comment_reactions_by_pk?: Resolver<Maybe<ResolversTypes['law_comment_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Comment_Reactions_By_PkArgs, 'pk_columns'>>;
  update_law_comment_reactions_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_comment_reactions_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Comment_Reactions_ManyArgs, 'updates'>>;
  update_law_comments?: Resolver<Maybe<ResolversTypes['law_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_CommentsArgs, 'where'>>;
  update_law_comments_by_pk?: Resolver<Maybe<ResolversTypes['law_comments']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Comments_By_PkArgs, 'pk_columns'>>;
  update_law_comments_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_comments_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Comments_ManyArgs, 'updates'>>;
  update_law_reactions?: Resolver<Maybe<ResolversTypes['law_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_ReactionsArgs, 'where'>>;
  update_law_reactions_by_pk?: Resolver<Maybe<ResolversTypes['law_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Reactions_By_PkArgs, 'pk_columns'>>;
  update_law_reactions_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_reactions_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Reactions_ManyArgs, 'updates'>>;
  update_law_revisions?: Resolver<Maybe<ResolversTypes['law_revisions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_RevisionsArgs, 'where'>>;
  update_law_revisions_by_pk?: Resolver<Maybe<ResolversTypes['law_revisions']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Revisions_By_PkArgs, 'pk_columns'>>;
  update_law_revisions_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_revisions_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Revisions_ManyArgs, 'updates'>>;
  update_law_star_rates?: Resolver<Maybe<ResolversTypes['law_star_rates_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Star_RatesArgs, 'where'>>;
  update_law_star_rates_by_pk?: Resolver<Maybe<ResolversTypes['law_star_rates']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Star_Rates_By_PkArgs, 'pk_columns'>>;
  update_law_star_rates_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['law_star_rates_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Law_Star_Rates_ManyArgs, 'updates'>>;
  update_laws?: Resolver<Maybe<ResolversTypes['laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_LawsArgs, 'where'>>;
  update_laws_by_pk?: Resolver<Maybe<ResolversTypes['laws']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Laws_By_PkArgs, 'pk_columns'>>;
  update_laws_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['laws_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Laws_ManyArgs, 'updates'>>;
  update_maintenances?: Resolver<Maybe<ResolversTypes['maintenances_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_MaintenancesArgs, 'where'>>;
  update_maintenances_by_pk?: Resolver<Maybe<ResolversTypes['maintenances']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Maintenances_By_PkArgs, 'pk_columns'>>;
  update_maintenances_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['maintenances_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Maintenances_ManyArgs, 'updates'>>;
  update_species?: Resolver<Maybe<ResolversTypes['species_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_SpeciesArgs, 'where'>>;
  update_species_assets?: Resolver<Maybe<ResolversTypes['species_assets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_AssetsArgs, 'where'>>;
  update_species_assets_by_pk?: Resolver<Maybe<ResolversTypes['species_assets']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_Assets_By_PkArgs, 'pk_columns'>>;
  update_species_assets_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['species_assets_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_Assets_ManyArgs, 'updates'>>;
  update_species_by_pk?: Resolver<Maybe<ResolversTypes['species']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_By_PkArgs, 'pk_columns'>>;
  update_species_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['species_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Species_ManyArgs, 'updates'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>>;
  update_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_By_PkArgs, 'pk_columns'>>;
  update_users_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['users_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_ManyArgs, 'updates'>>;
  update_world_citizens?: Resolver<Maybe<ResolversTypes['world_citizens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_CitizensArgs, 'where'>>;
  update_world_citizens_by_pk?: Resolver<Maybe<ResolversTypes['world_citizens']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Citizens_By_PkArgs, 'pk_columns'>>;
  update_world_citizens_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_citizens_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Citizens_ManyArgs, 'updates'>>;
  update_world_comment_reactions?: Resolver<Maybe<ResolversTypes['world_comment_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Comment_ReactionsArgs, 'where'>>;
  update_world_comment_reactions_by_pk?: Resolver<Maybe<ResolversTypes['world_comment_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Comment_Reactions_By_PkArgs, 'pk_columns'>>;
  update_world_comment_reactions_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_comment_reactions_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Comment_Reactions_ManyArgs, 'updates'>>;
  update_world_comments?: Resolver<Maybe<ResolversTypes['world_comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_CommentsArgs, 'where'>>;
  update_world_comments_by_pk?: Resolver<Maybe<ResolversTypes['world_comments']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Comments_By_PkArgs, 'pk_columns'>>;
  update_world_comments_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_comments_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Comments_ManyArgs, 'updates'>>;
  update_world_histories?: Resolver<Maybe<ResolversTypes['world_histories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_HistoriesArgs, 'where'>>;
  update_world_histories_by_pk?: Resolver<Maybe<ResolversTypes['world_histories']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Histories_By_PkArgs, 'pk_columns'>>;
  update_world_histories_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_histories_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Histories_ManyArgs, 'updates'>>;
  update_world_laws?: Resolver<Maybe<ResolversTypes['world_laws_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_LawsArgs, 'where'>>;
  update_world_laws_by_pk?: Resolver<Maybe<ResolversTypes['world_laws']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Laws_By_PkArgs, 'pk_columns'>>;
  update_world_laws_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_laws_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Laws_ManyArgs, 'updates'>>;
  update_world_reactions?: Resolver<Maybe<ResolversTypes['world_reactions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_ReactionsArgs, 'where'>>;
  update_world_reactions_by_pk?: Resolver<Maybe<ResolversTypes['world_reactions']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Reactions_By_PkArgs, 'pk_columns'>>;
  update_world_reactions_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['world_reactions_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_World_Reactions_ManyArgs, 'updates'>>;
  update_worlds?: Resolver<Maybe<ResolversTypes['worlds_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_WorldsArgs, 'where'>>;
  update_worlds_by_pk?: Resolver<Maybe<ResolversTypes['worlds']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Worlds_By_PkArgs, 'pk_columns'>>;
  update_worlds_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['worlds_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Worlds_ManyArgs, 'updates'>>;
};

export interface NumericScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['numeric'], any> {
  name: 'numeric';
}

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  citizens?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType, Partial<Query_RootCitizensArgs>>;
  citizens_aggregate?: Resolver<ResolversTypes['citizens_aggregate'], ParentType, ContextType, Partial<Query_RootCitizens_AggregateArgs>>;
  citizens_by_pk?: Resolver<Maybe<ResolversTypes['citizens']>, ParentType, ContextType, RequireFields<Query_RootCitizens_By_PkArgs, 'id'>>;
  law_comment_reactions?: Resolver<Array<ResolversTypes['law_comment_reactions']>, ParentType, ContextType, Partial<Query_RootLaw_Comment_ReactionsArgs>>;
  law_comment_reactions_aggregate?: Resolver<ResolversTypes['law_comment_reactions_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Comment_Reactions_AggregateArgs>>;
  law_comment_reactions_by_pk?: Resolver<Maybe<ResolversTypes['law_comment_reactions']>, ParentType, ContextType, RequireFields<Query_RootLaw_Comment_Reactions_By_PkArgs, 'comment_id' | 'type' | 'user_id'>>;
  law_comments?: Resolver<Array<ResolversTypes['law_comments']>, ParentType, ContextType, Partial<Query_RootLaw_CommentsArgs>>;
  law_comments_aggregate?: Resolver<ResolversTypes['law_comments_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Comments_AggregateArgs>>;
  law_comments_by_pk?: Resolver<Maybe<ResolversTypes['law_comments']>, ParentType, ContextType, RequireFields<Query_RootLaw_Comments_By_PkArgs, 'id'>>;
  law_reactions?: Resolver<Array<ResolversTypes['law_reactions']>, ParentType, ContextType, Partial<Query_RootLaw_ReactionsArgs>>;
  law_reactions_aggregate?: Resolver<ResolversTypes['law_reactions_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Reactions_AggregateArgs>>;
  law_reactions_by_pk?: Resolver<Maybe<ResolversTypes['law_reactions']>, ParentType, ContextType, RequireFields<Query_RootLaw_Reactions_By_PkArgs, 'law_id' | 'type' | 'user_id'>>;
  law_revisions?: Resolver<Array<ResolversTypes['law_revisions']>, ParentType, ContextType, Partial<Query_RootLaw_RevisionsArgs>>;
  law_revisions_aggregate?: Resolver<ResolversTypes['law_revisions_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Revisions_AggregateArgs>>;
  law_revisions_by_pk?: Resolver<Maybe<ResolversTypes['law_revisions']>, ParentType, ContextType, RequireFields<Query_RootLaw_Revisions_By_PkArgs, 'id'>>;
  law_star_rates?: Resolver<Array<ResolversTypes['law_star_rates']>, ParentType, ContextType, Partial<Query_RootLaw_Star_RatesArgs>>;
  law_star_rates_aggregate?: Resolver<ResolversTypes['law_star_rates_aggregate'], ParentType, ContextType, Partial<Query_RootLaw_Star_Rates_AggregateArgs>>;
  law_star_rates_by_pk?: Resolver<Maybe<ResolversTypes['law_star_rates']>, ParentType, ContextType, RequireFields<Query_RootLaw_Star_Rates_By_PkArgs, 'law_id' | 'user_id'>>;
  laws?: Resolver<Array<ResolversTypes['laws']>, ParentType, ContextType, Partial<Query_RootLawsArgs>>;
  laws_aggregate?: Resolver<ResolversTypes['laws_aggregate'], ParentType, ContextType, Partial<Query_RootLaws_AggregateArgs>>;
  laws_by_pk?: Resolver<Maybe<ResolversTypes['laws']>, ParentType, ContextType, RequireFields<Query_RootLaws_By_PkArgs, 'id'>>;
  maintenances?: Resolver<Array<ResolversTypes['maintenances']>, ParentType, ContextType, Partial<Query_RootMaintenancesArgs>>;
  maintenances_aggregate?: Resolver<ResolversTypes['maintenances_aggregate'], ParentType, ContextType, Partial<Query_RootMaintenances_AggregateArgs>>;
  maintenances_by_pk?: Resolver<Maybe<ResolversTypes['maintenances']>, ParentType, ContextType, RequireFields<Query_RootMaintenances_By_PkArgs, 'id'>>;
  random_species_assets_view?: Resolver<Array<ResolversTypes['random_species_assets_view']>, ParentType, ContextType, Partial<Query_RootRandom_Species_Assets_ViewArgs>>;
  random_species_assets_view_aggregate?: Resolver<ResolversTypes['random_species_assets_view_aggregate'], ParentType, ContextType, Partial<Query_RootRandom_Species_Assets_View_AggregateArgs>>;
  species?: Resolver<Array<ResolversTypes['species']>, ParentType, ContextType, Partial<Query_RootSpeciesArgs>>;
  species_aggregate?: Resolver<ResolversTypes['species_aggregate'], ParentType, ContextType, Partial<Query_RootSpecies_AggregateArgs>>;
  species_assets?: Resolver<Array<ResolversTypes['species_assets']>, ParentType, ContextType, Partial<Query_RootSpecies_AssetsArgs>>;
  species_assets_aggregate?: Resolver<ResolversTypes['species_assets_aggregate'], ParentType, ContextType, Partial<Query_RootSpecies_Assets_AggregateArgs>>;
  species_assets_by_pk?: Resolver<Maybe<ResolversTypes['species_assets']>, ParentType, ContextType, RequireFields<Query_RootSpecies_Assets_By_PkArgs, 'id'>>;
  species_by_pk?: Resolver<Maybe<ResolversTypes['species']>, ParentType, ContextType, RequireFields<Query_RootSpecies_By_PkArgs, 'id'>>;
  species_percentage_view_with_world_id?: Resolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, ParentType, ContextType, Partial<Query_RootSpecies_Percentage_View_With_World_IdArgs>>;
  species_percentage_view_with_world_id_aggregate?: Resolver<ResolversTypes['species_percentage_view_with_world_id_aggregate'], ParentType, ContextType, Partial<Query_RootSpecies_Percentage_View_With_World_Id_AggregateArgs>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, Partial<Query_RootUsersArgs>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, Partial<Query_RootUsers_AggregateArgs>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsers_By_PkArgs, 'id'>>;
  world_citizens?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType, Partial<Query_RootWorld_CitizensArgs>>;
  world_citizens_aggregate?: Resolver<ResolversTypes['world_citizens_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Citizens_AggregateArgs>>;
  world_citizens_by_pk?: Resolver<Maybe<ResolversTypes['world_citizens']>, ParentType, ContextType, RequireFields<Query_RootWorld_Citizens_By_PkArgs, 'citizen_id' | 'world_id'>>;
  world_comment_reactions?: Resolver<Array<ResolversTypes['world_comment_reactions']>, ParentType, ContextType, Partial<Query_RootWorld_Comment_ReactionsArgs>>;
  world_comment_reactions_aggregate?: Resolver<ResolversTypes['world_comment_reactions_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Comment_Reactions_AggregateArgs>>;
  world_comment_reactions_by_pk?: Resolver<Maybe<ResolversTypes['world_comment_reactions']>, ParentType, ContextType, RequireFields<Query_RootWorld_Comment_Reactions_By_PkArgs, 'comment_id' | 'type' | 'user_id'>>;
  world_comments?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType, Partial<Query_RootWorld_CommentsArgs>>;
  world_comments_aggregate?: Resolver<ResolversTypes['world_comments_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Comments_AggregateArgs>>;
  world_comments_by_pk?: Resolver<Maybe<ResolversTypes['world_comments']>, ParentType, ContextType, RequireFields<Query_RootWorld_Comments_By_PkArgs, 'id'>>;
  world_histories?: Resolver<Array<ResolversTypes['world_histories']>, ParentType, ContextType, Partial<Query_RootWorld_HistoriesArgs>>;
  world_histories_aggregate?: Resolver<ResolversTypes['world_histories_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Histories_AggregateArgs>>;
  world_histories_by_pk?: Resolver<Maybe<ResolversTypes['world_histories']>, ParentType, ContextType, RequireFields<Query_RootWorld_Histories_By_PkArgs, 'id'>>;
  world_laws?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType, Partial<Query_RootWorld_LawsArgs>>;
  world_laws_aggregate?: Resolver<ResolversTypes['world_laws_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Laws_AggregateArgs>>;
  world_laws_by_pk?: Resolver<Maybe<ResolversTypes['world_laws']>, ParentType, ContextType, RequireFields<Query_RootWorld_Laws_By_PkArgs, 'law_id' | 'world_id'>>;
  world_reactions?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType, Partial<Query_RootWorld_ReactionsArgs>>;
  world_reactions_aggregate?: Resolver<ResolversTypes['world_reactions_aggregate'], ParentType, ContextType, Partial<Query_RootWorld_Reactions_AggregateArgs>>;
  world_reactions_by_pk?: Resolver<Maybe<ResolversTypes['world_reactions']>, ParentType, ContextType, RequireFields<Query_RootWorld_Reactions_By_PkArgs, 'type' | 'user_id' | 'world_id'>>;
  worlds?: Resolver<Array<ResolversTypes['worlds']>, ParentType, ContextType, Partial<Query_RootWorldsArgs>>;
  worlds_aggregate?: Resolver<ResolversTypes['worlds_aggregate'], ParentType, ContextType, Partial<Query_RootWorlds_AggregateArgs>>;
  worlds_by_pk?: Resolver<Maybe<ResolversTypes['worlds']>, ParentType, ContextType, RequireFields<Query_RootWorlds_By_PkArgs, 'id'>>;
};

export type Random_Species_Assets_ViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['random_species_assets_view'] = ResolversParentTypes['random_species_assets_view']> = {
  species_asset_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  species_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Random_Species_Assets_View_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['random_species_assets_view_aggregate'] = ResolversParentTypes['random_species_assets_view_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['random_species_assets_view_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['random_species_assets_view']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Random_Species_Assets_View_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['random_species_assets_view_aggregate_fields'] = ResolversParentTypes['random_species_assets_view_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Random_Species_Assets_View_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['random_species_assets_view_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['random_species_assets_view_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Random_Species_Assets_View_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['random_species_assets_view_max_fields'] = ResolversParentTypes['random_species_assets_view_max_fields']> = {
  species_asset_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  species_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Random_Species_Assets_View_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['random_species_assets_view_min_fields'] = ResolversParentTypes['random_species_assets_view_min_fields']> = {
  species_asset_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  species_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['species'] = ResolversParentTypes['species']> = {
  auto_incremental_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species_assets?: Resolver<Array<ResolversTypes['species_assets']>, ParentType, ContextType, Partial<SpeciesSpecies_AssetsArgs>>;
  species_assets_aggregate?: Resolver<ResolversTypes['species_assets_aggregate'], ParentType, ContextType, Partial<SpeciesSpecies_Assets_AggregateArgs>>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_aggregate'] = ResolversParentTypes['species_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['species_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['species']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_aggregate_fields'] = ResolversParentTypes['species_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['species_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Species_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['species_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['species_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['species_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['species_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['species_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['species_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['species_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['species_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['species_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_AssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets'] = ResolversParentTypes['species_assets']> = {
  citizens?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType, Partial<Species_AssetsCitizensArgs>>;
  citizens_aggregate?: Resolver<ResolversTypes['citizens_aggregate'], ParentType, ContextType, Partial<Species_AssetsCitizens_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  image_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['species'], ParentType, ContextType>;
  species_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_aggregate'] = ResolversParentTypes['species_assets_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['species_assets_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['species_assets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_aggregate_fields'] = ResolversParentTypes['species_assets_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Species_Assets_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['species_assets_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['species_assets_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_max_fields'] = ResolversParentTypes['species_assets_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_min_fields'] = ResolversParentTypes['species_assets_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Assets_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_assets_mutation_response'] = ResolversParentTypes['species_assets_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['species_assets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_avg_fields'] = ResolversParentTypes['species_avg_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_max_fields'] = ResolversParentTypes['species_max_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_min_fields'] = ResolversParentTypes['species_min_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_mutation_response'] = ResolversParentTypes['species_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['species']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id'] = ResolversParentTypes['species_percentage_view_with_world_id']> = {
  percentage?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  species_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_aggregate'] = ResolversParentTypes['species_percentage_view_with_world_id_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_aggregate_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Species_Percentage_View_With_World_Id_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['species_percentage_view_with_world_id_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_avg_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_avg_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_max_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_max_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  species_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_min_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_min_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  species_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_stddev_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_stddev_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_stddev_pop_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_stddev_pop_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_stddev_samp_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_stddev_samp_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_sum_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_sum_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_var_pop_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_var_pop_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_var_samp_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_var_samp_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Percentage_View_With_World_Id_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_percentage_view_with_world_id_variance_fields'] = ResolversParentTypes['species_percentage_view_with_world_id_variance_fields']> = {
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  species_auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_stddev_fields'] = ResolversParentTypes['species_stddev_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_stddev_pop_fields'] = ResolversParentTypes['species_stddev_pop_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_stddev_samp_fields'] = ResolversParentTypes['species_stddev_samp_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_sum_fields'] = ResolversParentTypes['species_sum_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_var_pop_fields'] = ResolversParentTypes['species_var_pop_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_var_samp_fields'] = ResolversParentTypes['species_var_samp_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Species_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['species_variance_fields'] = ResolversParentTypes['species_variance_fields']> = {
  auto_incremental_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  citizens?: SubscriptionResolver<Array<ResolversTypes['citizens']>, "citizens", ParentType, ContextType, Partial<Subscription_RootCitizensArgs>>;
  citizens_aggregate?: SubscriptionResolver<ResolversTypes['citizens_aggregate'], "citizens_aggregate", ParentType, ContextType, Partial<Subscription_RootCitizens_AggregateArgs>>;
  citizens_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['citizens']>, "citizens_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCitizens_By_PkArgs, 'id'>>;
  citizens_stream?: SubscriptionResolver<Array<ResolversTypes['citizens']>, "citizens_stream", ParentType, ContextType, RequireFields<Subscription_RootCitizens_StreamArgs, 'batch_size' | 'cursor'>>;
  law_comment_reactions?: SubscriptionResolver<Array<ResolversTypes['law_comment_reactions']>, "law_comment_reactions", ParentType, ContextType, Partial<Subscription_RootLaw_Comment_ReactionsArgs>>;
  law_comment_reactions_aggregate?: SubscriptionResolver<ResolversTypes['law_comment_reactions_aggregate'], "law_comment_reactions_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Comment_Reactions_AggregateArgs>>;
  law_comment_reactions_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_comment_reactions']>, "law_comment_reactions_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Comment_Reactions_By_PkArgs, 'comment_id' | 'type' | 'user_id'>>;
  law_comment_reactions_stream?: SubscriptionResolver<Array<ResolversTypes['law_comment_reactions']>, "law_comment_reactions_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Comment_Reactions_StreamArgs, 'batch_size' | 'cursor'>>;
  law_comments?: SubscriptionResolver<Array<ResolversTypes['law_comments']>, "law_comments", ParentType, ContextType, Partial<Subscription_RootLaw_CommentsArgs>>;
  law_comments_aggregate?: SubscriptionResolver<ResolversTypes['law_comments_aggregate'], "law_comments_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Comments_AggregateArgs>>;
  law_comments_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_comments']>, "law_comments_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Comments_By_PkArgs, 'id'>>;
  law_comments_stream?: SubscriptionResolver<Array<ResolversTypes['law_comments']>, "law_comments_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Comments_StreamArgs, 'batch_size' | 'cursor'>>;
  law_reactions?: SubscriptionResolver<Array<ResolversTypes['law_reactions']>, "law_reactions", ParentType, ContextType, Partial<Subscription_RootLaw_ReactionsArgs>>;
  law_reactions_aggregate?: SubscriptionResolver<ResolversTypes['law_reactions_aggregate'], "law_reactions_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Reactions_AggregateArgs>>;
  law_reactions_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_reactions']>, "law_reactions_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Reactions_By_PkArgs, 'law_id' | 'type' | 'user_id'>>;
  law_reactions_stream?: SubscriptionResolver<Array<ResolversTypes['law_reactions']>, "law_reactions_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Reactions_StreamArgs, 'batch_size' | 'cursor'>>;
  law_revisions?: SubscriptionResolver<Array<ResolversTypes['law_revisions']>, "law_revisions", ParentType, ContextType, Partial<Subscription_RootLaw_RevisionsArgs>>;
  law_revisions_aggregate?: SubscriptionResolver<ResolversTypes['law_revisions_aggregate'], "law_revisions_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Revisions_AggregateArgs>>;
  law_revisions_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_revisions']>, "law_revisions_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Revisions_By_PkArgs, 'id'>>;
  law_revisions_stream?: SubscriptionResolver<Array<ResolversTypes['law_revisions']>, "law_revisions_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Revisions_StreamArgs, 'batch_size' | 'cursor'>>;
  law_star_rates?: SubscriptionResolver<Array<ResolversTypes['law_star_rates']>, "law_star_rates", ParentType, ContextType, Partial<Subscription_RootLaw_Star_RatesArgs>>;
  law_star_rates_aggregate?: SubscriptionResolver<ResolversTypes['law_star_rates_aggregate'], "law_star_rates_aggregate", ParentType, ContextType, Partial<Subscription_RootLaw_Star_Rates_AggregateArgs>>;
  law_star_rates_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['law_star_rates']>, "law_star_rates_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaw_Star_Rates_By_PkArgs, 'law_id' | 'user_id'>>;
  law_star_rates_stream?: SubscriptionResolver<Array<ResolversTypes['law_star_rates']>, "law_star_rates_stream", ParentType, ContextType, RequireFields<Subscription_RootLaw_Star_Rates_StreamArgs, 'batch_size' | 'cursor'>>;
  laws?: SubscriptionResolver<Array<ResolversTypes['laws']>, "laws", ParentType, ContextType, Partial<Subscription_RootLawsArgs>>;
  laws_aggregate?: SubscriptionResolver<ResolversTypes['laws_aggregate'], "laws_aggregate", ParentType, ContextType, Partial<Subscription_RootLaws_AggregateArgs>>;
  laws_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['laws']>, "laws_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLaws_By_PkArgs, 'id'>>;
  laws_stream?: SubscriptionResolver<Array<ResolversTypes['laws']>, "laws_stream", ParentType, ContextType, RequireFields<Subscription_RootLaws_StreamArgs, 'batch_size' | 'cursor'>>;
  maintenances?: SubscriptionResolver<Array<ResolversTypes['maintenances']>, "maintenances", ParentType, ContextType, Partial<Subscription_RootMaintenancesArgs>>;
  maintenances_aggregate?: SubscriptionResolver<ResolversTypes['maintenances_aggregate'], "maintenances_aggregate", ParentType, ContextType, Partial<Subscription_RootMaintenances_AggregateArgs>>;
  maintenances_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['maintenances']>, "maintenances_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMaintenances_By_PkArgs, 'id'>>;
  maintenances_stream?: SubscriptionResolver<Array<ResolversTypes['maintenances']>, "maintenances_stream", ParentType, ContextType, RequireFields<Subscription_RootMaintenances_StreamArgs, 'batch_size' | 'cursor'>>;
  random_species_assets_view?: SubscriptionResolver<Array<ResolversTypes['random_species_assets_view']>, "random_species_assets_view", ParentType, ContextType, Partial<Subscription_RootRandom_Species_Assets_ViewArgs>>;
  random_species_assets_view_aggregate?: SubscriptionResolver<ResolversTypes['random_species_assets_view_aggregate'], "random_species_assets_view_aggregate", ParentType, ContextType, Partial<Subscription_RootRandom_Species_Assets_View_AggregateArgs>>;
  random_species_assets_view_stream?: SubscriptionResolver<Array<ResolversTypes['random_species_assets_view']>, "random_species_assets_view_stream", ParentType, ContextType, RequireFields<Subscription_RootRandom_Species_Assets_View_StreamArgs, 'batch_size' | 'cursor'>>;
  species?: SubscriptionResolver<Array<ResolversTypes['species']>, "species", ParentType, ContextType, Partial<Subscription_RootSpeciesArgs>>;
  species_aggregate?: SubscriptionResolver<ResolversTypes['species_aggregate'], "species_aggregate", ParentType, ContextType, Partial<Subscription_RootSpecies_AggregateArgs>>;
  species_assets?: SubscriptionResolver<Array<ResolversTypes['species_assets']>, "species_assets", ParentType, ContextType, Partial<Subscription_RootSpecies_AssetsArgs>>;
  species_assets_aggregate?: SubscriptionResolver<ResolversTypes['species_assets_aggregate'], "species_assets_aggregate", ParentType, ContextType, Partial<Subscription_RootSpecies_Assets_AggregateArgs>>;
  species_assets_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['species_assets']>, "species_assets_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSpecies_Assets_By_PkArgs, 'id'>>;
  species_assets_stream?: SubscriptionResolver<Array<ResolversTypes['species_assets']>, "species_assets_stream", ParentType, ContextType, RequireFields<Subscription_RootSpecies_Assets_StreamArgs, 'batch_size' | 'cursor'>>;
  species_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['species']>, "species_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSpecies_By_PkArgs, 'id'>>;
  species_percentage_view_with_world_id?: SubscriptionResolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, "species_percentage_view_with_world_id", ParentType, ContextType, Partial<Subscription_RootSpecies_Percentage_View_With_World_IdArgs>>;
  species_percentage_view_with_world_id_aggregate?: SubscriptionResolver<ResolversTypes['species_percentage_view_with_world_id_aggregate'], "species_percentage_view_with_world_id_aggregate", ParentType, ContextType, Partial<Subscription_RootSpecies_Percentage_View_With_World_Id_AggregateArgs>>;
  species_percentage_view_with_world_id_stream?: SubscriptionResolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, "species_percentage_view_with_world_id_stream", ParentType, ContextType, RequireFields<Subscription_RootSpecies_Percentage_View_With_World_Id_StreamArgs, 'batch_size' | 'cursor'>>;
  species_stream?: SubscriptionResolver<Array<ResolversTypes['species']>, "species_stream", ParentType, ContextType, RequireFields<Subscription_RootSpecies_StreamArgs, 'batch_size' | 'cursor'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, Partial<Subscription_RootUsersArgs>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, Partial<Subscription_RootUsers_AggregateArgs>>;
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUsers_By_PkArgs, 'id'>>;
  users_stream?: SubscriptionResolver<Array<ResolversTypes['users']>, "users_stream", ParentType, ContextType, RequireFields<Subscription_RootUsers_StreamArgs, 'batch_size' | 'cursor'>>;
  world_citizens?: SubscriptionResolver<Array<ResolversTypes['world_citizens']>, "world_citizens", ParentType, ContextType, Partial<Subscription_RootWorld_CitizensArgs>>;
  world_citizens_aggregate?: SubscriptionResolver<ResolversTypes['world_citizens_aggregate'], "world_citizens_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Citizens_AggregateArgs>>;
  world_citizens_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_citizens']>, "world_citizens_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Citizens_By_PkArgs, 'citizen_id' | 'world_id'>>;
  world_citizens_stream?: SubscriptionResolver<Array<ResolversTypes['world_citizens']>, "world_citizens_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Citizens_StreamArgs, 'batch_size' | 'cursor'>>;
  world_comment_reactions?: SubscriptionResolver<Array<ResolversTypes['world_comment_reactions']>, "world_comment_reactions", ParentType, ContextType, Partial<Subscription_RootWorld_Comment_ReactionsArgs>>;
  world_comment_reactions_aggregate?: SubscriptionResolver<ResolversTypes['world_comment_reactions_aggregate'], "world_comment_reactions_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Comment_Reactions_AggregateArgs>>;
  world_comment_reactions_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_comment_reactions']>, "world_comment_reactions_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Comment_Reactions_By_PkArgs, 'comment_id' | 'type' | 'user_id'>>;
  world_comment_reactions_stream?: SubscriptionResolver<Array<ResolversTypes['world_comment_reactions']>, "world_comment_reactions_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Comment_Reactions_StreamArgs, 'batch_size' | 'cursor'>>;
  world_comments?: SubscriptionResolver<Array<ResolversTypes['world_comments']>, "world_comments", ParentType, ContextType, Partial<Subscription_RootWorld_CommentsArgs>>;
  world_comments_aggregate?: SubscriptionResolver<ResolversTypes['world_comments_aggregate'], "world_comments_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Comments_AggregateArgs>>;
  world_comments_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_comments']>, "world_comments_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Comments_By_PkArgs, 'id'>>;
  world_comments_stream?: SubscriptionResolver<Array<ResolversTypes['world_comments']>, "world_comments_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Comments_StreamArgs, 'batch_size' | 'cursor'>>;
  world_histories?: SubscriptionResolver<Array<ResolversTypes['world_histories']>, "world_histories", ParentType, ContextType, Partial<Subscription_RootWorld_HistoriesArgs>>;
  world_histories_aggregate?: SubscriptionResolver<ResolversTypes['world_histories_aggregate'], "world_histories_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Histories_AggregateArgs>>;
  world_histories_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_histories']>, "world_histories_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Histories_By_PkArgs, 'id'>>;
  world_histories_stream?: SubscriptionResolver<Array<ResolversTypes['world_histories']>, "world_histories_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Histories_StreamArgs, 'batch_size' | 'cursor'>>;
  world_laws?: SubscriptionResolver<Array<ResolversTypes['world_laws']>, "world_laws", ParentType, ContextType, Partial<Subscription_RootWorld_LawsArgs>>;
  world_laws_aggregate?: SubscriptionResolver<ResolversTypes['world_laws_aggregate'], "world_laws_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Laws_AggregateArgs>>;
  world_laws_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_laws']>, "world_laws_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Laws_By_PkArgs, 'law_id' | 'world_id'>>;
  world_laws_stream?: SubscriptionResolver<Array<ResolversTypes['world_laws']>, "world_laws_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Laws_StreamArgs, 'batch_size' | 'cursor'>>;
  world_reactions?: SubscriptionResolver<Array<ResolversTypes['world_reactions']>, "world_reactions", ParentType, ContextType, Partial<Subscription_RootWorld_ReactionsArgs>>;
  world_reactions_aggregate?: SubscriptionResolver<ResolversTypes['world_reactions_aggregate'], "world_reactions_aggregate", ParentType, ContextType, Partial<Subscription_RootWorld_Reactions_AggregateArgs>>;
  world_reactions_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['world_reactions']>, "world_reactions_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorld_Reactions_By_PkArgs, 'type' | 'user_id' | 'world_id'>>;
  world_reactions_stream?: SubscriptionResolver<Array<ResolversTypes['world_reactions']>, "world_reactions_stream", ParentType, ContextType, RequireFields<Subscription_RootWorld_Reactions_StreamArgs, 'batch_size' | 'cursor'>>;
  worlds?: SubscriptionResolver<Array<ResolversTypes['worlds']>, "worlds", ParentType, ContextType, Partial<Subscription_RootWorldsArgs>>;
  worlds_aggregate?: SubscriptionResolver<ResolversTypes['worlds_aggregate'], "worlds_aggregate", ParentType, ContextType, Partial<Subscription_RootWorlds_AggregateArgs>>;
  worlds_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['worlds']>, "worlds_by_pk", ParentType, ContextType, RequireFields<Subscription_RootWorlds_By_PkArgs, 'id'>>;
  worlds_stream?: SubscriptionResolver<Array<ResolversTypes['worlds']>, "worlds_stream", ParentType, ContextType, RequireFields<Subscription_RootWorlds_StreamArgs, 'batch_size' | 'cursor'>>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  authentication_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  citizens?: Resolver<Array<ResolversTypes['citizens']>, ParentType, ContextType, Partial<UsersCitizensArgs>>;
  citizens_aggregate?: Resolver<ResolversTypes['citizens_aggregate'], ParentType, ContextType, Partial<UsersCitizens_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  icon_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  is_first_time?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  law_comment_reactions?: Resolver<Array<ResolversTypes['law_comment_reactions']>, ParentType, ContextType, Partial<UsersLaw_Comment_ReactionsArgs>>;
  law_comment_reactions_aggregate?: Resolver<ResolversTypes['law_comment_reactions_aggregate'], ParentType, ContextType, Partial<UsersLaw_Comment_Reactions_AggregateArgs>>;
  law_comments?: Resolver<Array<ResolversTypes['law_comments']>, ParentType, ContextType, Partial<UsersLaw_CommentsArgs>>;
  law_comments_aggregate?: Resolver<ResolversTypes['law_comments_aggregate'], ParentType, ContextType, Partial<UsersLaw_Comments_AggregateArgs>>;
  law_reactions?: Resolver<Array<ResolversTypes['law_reactions']>, ParentType, ContextType, Partial<UsersLaw_ReactionsArgs>>;
  law_reactions_aggregate?: Resolver<ResolversTypes['law_reactions_aggregate'], ParentType, ContextType, Partial<UsersLaw_Reactions_AggregateArgs>>;
  law_star_rates?: Resolver<Array<ResolversTypes['law_star_rates']>, ParentType, ContextType, Partial<UsersLaw_Star_RatesArgs>>;
  law_star_rates_aggregate?: Resolver<ResolversTypes['law_star_rates_aggregate'], ParentType, ContextType, Partial<UsersLaw_Star_Rates_AggregateArgs>>;
  laws?: Resolver<Array<ResolversTypes['laws']>, ParentType, ContextType, Partial<UsersLawsArgs>>;
  laws_aggregate?: Resolver<ResolversTypes['laws_aggregate'], ParentType, ContextType, Partial<UsersLaws_AggregateArgs>>;
  login_bonus_timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  world_comment_reactions?: Resolver<Array<ResolversTypes['world_comment_reactions']>, ParentType, ContextType, Partial<UsersWorld_Comment_ReactionsArgs>>;
  world_comment_reactions_aggregate?: Resolver<ResolversTypes['world_comment_reactions_aggregate'], ParentType, ContextType, Partial<UsersWorld_Comment_Reactions_AggregateArgs>>;
  world_comments?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType, Partial<UsersWorld_CommentsArgs>>;
  world_comments_aggregate?: Resolver<ResolversTypes['world_comments_aggregate'], ParentType, ContextType, Partial<UsersWorld_Comments_AggregateArgs>>;
  world_reactions?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType, Partial<UsersWorld_ReactionsArgs>>;
  world_reactions_aggregate?: Resolver<ResolversTypes['world_reactions_aggregate'], ParentType, ContextType, Partial<UsersWorld_Reactions_AggregateArgs>>;
  worlds?: Resolver<Array<ResolversTypes['worlds']>, ParentType, ContextType, Partial<UsersWorldsArgs>>;
  worlds_aggregate?: Resolver<ResolversTypes['worlds_aggregate'], ParentType, ContextType, Partial<UsersWorlds_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['users_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Users_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['users_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['users_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['users_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['users_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['users_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['users_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['users_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_avg_fields'] = ResolversParentTypes['users_avg_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  authentication_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  icon_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  login_bonus_timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  authentication_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  icon_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  login_bonus_timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_stddev_fields'] = ResolversParentTypes['users_stddev_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_stddev_pop_fields'] = ResolversParentTypes['users_stddev_pop_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_stddev_samp_fields'] = ResolversParentTypes['users_stddev_samp_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_sum_fields'] = ResolversParentTypes['users_sum_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_var_pop_fields'] = ResolversParentTypes['users_var_pop_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_var_samp_fields'] = ResolversParentTypes['users_var_samp_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_variance_fields'] = ResolversParentTypes['users_variance_fields']> = {
  age?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type World_CitizensResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens'] = ResolversParentTypes['world_citizens']> = {
  citizen?: Resolver<ResolversTypes['citizens'], ParentType, ContextType>;
  citizen_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_aggregate'] = ResolversParentTypes['world_citizens_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_citizens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_aggregate_fields'] = ResolversParentTypes['world_citizens_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_citizens_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Citizens_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_citizens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_citizens_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_citizens_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_citizens_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_citizens_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_citizens_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_citizens_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_citizens_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_citizens_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_avg_fields'] = ResolversParentTypes['world_citizens_avg_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_max_fields'] = ResolversParentTypes['world_citizens_max_fields']> = {
  citizen_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_min_fields'] = ResolversParentTypes['world_citizens_min_fields']> = {
  citizen_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_mutation_response'] = ResolversParentTypes['world_citizens_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_stddev_fields'] = ResolversParentTypes['world_citizens_stddev_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_stddev_pop_fields'] = ResolversParentTypes['world_citizens_stddev_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_stddev_samp_fields'] = ResolversParentTypes['world_citizens_stddev_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_sum_fields'] = ResolversParentTypes['world_citizens_sum_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_var_pop_fields'] = ResolversParentTypes['world_citizens_var_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_var_samp_fields'] = ResolversParentTypes['world_citizens_var_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Citizens_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_citizens_variance_fields'] = ResolversParentTypes['world_citizens_variance_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_ReactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions'] = ResolversParentTypes['world_comment_reactions']> = {
  comment_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  world_comment?: Resolver<ResolversTypes['world_comments'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_aggregate'] = ResolversParentTypes['world_comment_reactions_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_comment_reactions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_comment_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_aggregate_fields'] = ResolversParentTypes['world_comment_reactions_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_comment_reactions_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Comment_Reactions_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_comment_reactions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_comment_reactions_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_comment_reactions_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_comment_reactions_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_comment_reactions_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_comment_reactions_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_comment_reactions_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_comment_reactions_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_comment_reactions_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_avg_fields'] = ResolversParentTypes['world_comment_reactions_avg_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_max_fields'] = ResolversParentTypes['world_comment_reactions_max_fields']> = {
  comment_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_min_fields'] = ResolversParentTypes['world_comment_reactions_min_fields']> = {
  comment_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_mutation_response'] = ResolversParentTypes['world_comment_reactions_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_comment_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_stddev_fields'] = ResolversParentTypes['world_comment_reactions_stddev_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_stddev_pop_fields'] = ResolversParentTypes['world_comment_reactions_stddev_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_stddev_samp_fields'] = ResolversParentTypes['world_comment_reactions_stddev_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_sum_fields'] = ResolversParentTypes['world_comment_reactions_sum_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_var_pop_fields'] = ResolversParentTypes['world_comment_reactions_var_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_var_samp_fields'] = ResolversParentTypes['world_comment_reactions_var_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comment_Reactions_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comment_reactions_variance_fields'] = ResolversParentTypes['world_comment_reactions_variance_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_CommentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments'] = ResolversParentTypes['world_comments']> = {
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_comment_reactions?: Resolver<Array<ResolversTypes['world_comment_reactions']>, ParentType, ContextType, Partial<World_CommentsWorld_Comment_ReactionsArgs>>;
  world_comment_reactions_aggregate?: Resolver<ResolversTypes['world_comment_reactions_aggregate'], ParentType, ContextType, Partial<World_CommentsWorld_Comment_Reactions_AggregateArgs>>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_aggregate'] = ResolversParentTypes['world_comments_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_comments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_aggregate_fields'] = ResolversParentTypes['world_comments_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Comments_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_comments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_comments_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_max_fields'] = ResolversParentTypes['world_comments_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_min_fields'] = ResolversParentTypes['world_comments_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Comments_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_comments_mutation_response'] = ResolversParentTypes['world_comments_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_HistoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories'] = ResolversParentTypes['world_histories']> = {
  block_json?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<World_HistoriesBlock_JsonArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  official_language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  public_security?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  world_image_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_aggregate'] = ResolversParentTypes['world_histories_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_histories_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_histories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_aggregate_fields'] = ResolversParentTypes['world_histories_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_histories_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Histories_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_histories_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_histories_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_histories_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_histories_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_histories_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_histories_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_histories_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_histories_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_histories_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_avg_fields'] = ResolversParentTypes['world_histories_avg_fields']> = {
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_max_fields'] = ResolversParentTypes['world_histories_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  official_language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_min_fields'] = ResolversParentTypes['world_histories_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  official_language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  public_security?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_mutation_response'] = ResolversParentTypes['world_histories_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_histories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_stddev_fields'] = ResolversParentTypes['world_histories_stddev_fields']> = {
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_stddev_pop_fields'] = ResolversParentTypes['world_histories_stddev_pop_fields']> = {
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_stddev_samp_fields'] = ResolversParentTypes['world_histories_stddev_samp_fields']> = {
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_sum_fields'] = ResolversParentTypes['world_histories_sum_fields']> = {
  public_security?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_var_pop_fields'] = ResolversParentTypes['world_histories_var_pop_fields']> = {
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_var_samp_fields'] = ResolversParentTypes['world_histories_var_samp_fields']> = {
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Histories_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_histories_variance_fields'] = ResolversParentTypes['world_histories_variance_fields']> = {
  public_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_LawsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws'] = ResolversParentTypes['world_laws']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  law?: Resolver<ResolversTypes['laws'], ParentType, ContextType>;
  law_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_aggregate'] = ResolversParentTypes['world_laws_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_laws_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_aggregate_fields'] = ResolversParentTypes['world_laws_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Laws_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_laws_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_laws_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_max_fields'] = ResolversParentTypes['world_laws_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_min_fields'] = ResolversParentTypes['world_laws_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  law_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Laws_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_laws_mutation_response'] = ResolversParentTypes['world_laws_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_ReactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions'] = ResolversParentTypes['world_reactions']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  world?: Resolver<ResolversTypes['worlds'], ParentType, ContextType>;
  world_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_aggregate'] = ResolversParentTypes['world_reactions_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['world_reactions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_aggregate_fields'] = ResolversParentTypes['world_reactions_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['world_reactions_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<World_Reactions_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['world_reactions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['world_reactions_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['world_reactions_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['world_reactions_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['world_reactions_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['world_reactions_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['world_reactions_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['world_reactions_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['world_reactions_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_avg_fields'] = ResolversParentTypes['world_reactions_avg_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_max_fields'] = ResolversParentTypes['world_reactions_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_min_fields'] = ResolversParentTypes['world_reactions_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  world_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_mutation_response'] = ResolversParentTypes['world_reactions_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_stddev_fields'] = ResolversParentTypes['world_reactions_stddev_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_stddev_pop_fields'] = ResolversParentTypes['world_reactions_stddev_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_stddev_samp_fields'] = ResolversParentTypes['world_reactions_stddev_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_sum_fields'] = ResolversParentTypes['world_reactions_sum_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_var_pop_fields'] = ResolversParentTypes['world_reactions_var_pop_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_var_samp_fields'] = ResolversParentTypes['world_reactions_var_samp_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type World_Reactions_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['world_reactions_variance_fields'] = ResolversParentTypes['world_reactions_variance_fields']> = {
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds'] = ResolversParentTypes['worlds']> = {
  author_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  species_percentage?: Resolver<Array<ResolversTypes['species_percentage_view_with_world_id']>, ParentType, ContextType, Partial<WorldsSpecies_PercentageArgs>>;
  species_percentage_aggregate?: Resolver<ResolversTypes['species_percentage_view_with_world_id_aggregate'], ParentType, ContextType, Partial<WorldsSpecies_Percentage_AggregateArgs>>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  world_citizens?: Resolver<Array<ResolversTypes['world_citizens']>, ParentType, ContextType, Partial<WorldsWorld_CitizensArgs>>;
  world_citizens_aggregate?: Resolver<ResolversTypes['world_citizens_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Citizens_AggregateArgs>>;
  world_comments?: Resolver<Array<ResolversTypes['world_comments']>, ParentType, ContextType, Partial<WorldsWorld_CommentsArgs>>;
  world_comments_aggregate?: Resolver<ResolversTypes['world_comments_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Comments_AggregateArgs>>;
  world_histories?: Resolver<Array<ResolversTypes['world_histories']>, ParentType, ContextType, Partial<WorldsWorld_HistoriesArgs>>;
  world_histories_aggregate?: Resolver<ResolversTypes['world_histories_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Histories_AggregateArgs>>;
  world_laws?: Resolver<Array<ResolversTypes['world_laws']>, ParentType, ContextType, Partial<WorldsWorld_LawsArgs>>;
  world_laws_aggregate?: Resolver<ResolversTypes['world_laws_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Laws_AggregateArgs>>;
  world_reactions?: Resolver<Array<ResolversTypes['world_reactions']>, ParentType, ContextType, Partial<WorldsWorld_ReactionsArgs>>;
  world_reactions_aggregate?: Resolver<ResolversTypes['world_reactions_aggregate'], ParentType, ContextType, Partial<WorldsWorld_Reactions_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_aggregate'] = ResolversParentTypes['worlds_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['worlds_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['worlds']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_aggregate_fields'] = ResolversParentTypes['worlds_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['worlds_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Worlds_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['worlds_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['worlds_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['worlds_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['worlds_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['worlds_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['worlds_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['worlds_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['worlds_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['worlds_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_avg_fields'] = ResolversParentTypes['worlds_avg_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_max_fields'] = ResolversParentTypes['worlds_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_min_fields'] = ResolversParentTypes['worlds_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_mutation_response'] = ResolversParentTypes['worlds_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['worlds']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_stddev_fields'] = ResolversParentTypes['worlds_stddev_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_stddev_pop_fields'] = ResolversParentTypes['worlds_stddev_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_stddev_samp_fields'] = ResolversParentTypes['worlds_stddev_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_sum_fields'] = ResolversParentTypes['worlds_sum_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_var_pop_fields'] = ResolversParentTypes['worlds_var_pop_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_var_samp_fields'] = ResolversParentTypes['worlds_var_samp_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Worlds_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['worlds_variance_fields'] = ResolversParentTypes['worlds_variance_fields']> = {
  status?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  citizens?: CitizensResolvers<ContextType>;
  citizens_aggregate?: Citizens_AggregateResolvers<ContextType>;
  citizens_aggregate_fields?: Citizens_Aggregate_FieldsResolvers<ContextType>;
  citizens_avg_fields?: Citizens_Avg_FieldsResolvers<ContextType>;
  citizens_max_fields?: Citizens_Max_FieldsResolvers<ContextType>;
  citizens_min_fields?: Citizens_Min_FieldsResolvers<ContextType>;
  citizens_mutation_response?: Citizens_Mutation_ResponseResolvers<ContextType>;
  citizens_stddev_fields?: Citizens_Stddev_FieldsResolvers<ContextType>;
  citizens_stddev_pop_fields?: Citizens_Stddev_Pop_FieldsResolvers<ContextType>;
  citizens_stddev_samp_fields?: Citizens_Stddev_Samp_FieldsResolvers<ContextType>;
  citizens_sum_fields?: Citizens_Sum_FieldsResolvers<ContextType>;
  citizens_var_pop_fields?: Citizens_Var_Pop_FieldsResolvers<ContextType>;
  citizens_var_samp_fields?: Citizens_Var_Samp_FieldsResolvers<ContextType>;
  citizens_variance_fields?: Citizens_Variance_FieldsResolvers<ContextType>;
  jsonb?: GraphQLScalarType;
  law_comment_reactions?: Law_Comment_ReactionsResolvers<ContextType>;
  law_comment_reactions_aggregate?: Law_Comment_Reactions_AggregateResolvers<ContextType>;
  law_comment_reactions_aggregate_fields?: Law_Comment_Reactions_Aggregate_FieldsResolvers<ContextType>;
  law_comment_reactions_avg_fields?: Law_Comment_Reactions_Avg_FieldsResolvers<ContextType>;
  law_comment_reactions_max_fields?: Law_Comment_Reactions_Max_FieldsResolvers<ContextType>;
  law_comment_reactions_min_fields?: Law_Comment_Reactions_Min_FieldsResolvers<ContextType>;
  law_comment_reactions_mutation_response?: Law_Comment_Reactions_Mutation_ResponseResolvers<ContextType>;
  law_comment_reactions_stddev_fields?: Law_Comment_Reactions_Stddev_FieldsResolvers<ContextType>;
  law_comment_reactions_stddev_pop_fields?: Law_Comment_Reactions_Stddev_Pop_FieldsResolvers<ContextType>;
  law_comment_reactions_stddev_samp_fields?: Law_Comment_Reactions_Stddev_Samp_FieldsResolvers<ContextType>;
  law_comment_reactions_sum_fields?: Law_Comment_Reactions_Sum_FieldsResolvers<ContextType>;
  law_comment_reactions_var_pop_fields?: Law_Comment_Reactions_Var_Pop_FieldsResolvers<ContextType>;
  law_comment_reactions_var_samp_fields?: Law_Comment_Reactions_Var_Samp_FieldsResolvers<ContextType>;
  law_comment_reactions_variance_fields?: Law_Comment_Reactions_Variance_FieldsResolvers<ContextType>;
  law_comments?: Law_CommentsResolvers<ContextType>;
  law_comments_aggregate?: Law_Comments_AggregateResolvers<ContextType>;
  law_comments_aggregate_fields?: Law_Comments_Aggregate_FieldsResolvers<ContextType>;
  law_comments_max_fields?: Law_Comments_Max_FieldsResolvers<ContextType>;
  law_comments_min_fields?: Law_Comments_Min_FieldsResolvers<ContextType>;
  law_comments_mutation_response?: Law_Comments_Mutation_ResponseResolvers<ContextType>;
  law_reactions?: Law_ReactionsResolvers<ContextType>;
  law_reactions_aggregate?: Law_Reactions_AggregateResolvers<ContextType>;
  law_reactions_aggregate_fields?: Law_Reactions_Aggregate_FieldsResolvers<ContextType>;
  law_reactions_avg_fields?: Law_Reactions_Avg_FieldsResolvers<ContextType>;
  law_reactions_max_fields?: Law_Reactions_Max_FieldsResolvers<ContextType>;
  law_reactions_min_fields?: Law_Reactions_Min_FieldsResolvers<ContextType>;
  law_reactions_mutation_response?: Law_Reactions_Mutation_ResponseResolvers<ContextType>;
  law_reactions_stddev_fields?: Law_Reactions_Stddev_FieldsResolvers<ContextType>;
  law_reactions_stddev_pop_fields?: Law_Reactions_Stddev_Pop_FieldsResolvers<ContextType>;
  law_reactions_stddev_samp_fields?: Law_Reactions_Stddev_Samp_FieldsResolvers<ContextType>;
  law_reactions_sum_fields?: Law_Reactions_Sum_FieldsResolvers<ContextType>;
  law_reactions_var_pop_fields?: Law_Reactions_Var_Pop_FieldsResolvers<ContextType>;
  law_reactions_var_samp_fields?: Law_Reactions_Var_Samp_FieldsResolvers<ContextType>;
  law_reactions_variance_fields?: Law_Reactions_Variance_FieldsResolvers<ContextType>;
  law_revisions?: Law_RevisionsResolvers<ContextType>;
  law_revisions_aggregate?: Law_Revisions_AggregateResolvers<ContextType>;
  law_revisions_aggregate_fields?: Law_Revisions_Aggregate_FieldsResolvers<ContextType>;
  law_revisions_avg_fields?: Law_Revisions_Avg_FieldsResolvers<ContextType>;
  law_revisions_max_fields?: Law_Revisions_Max_FieldsResolvers<ContextType>;
  law_revisions_min_fields?: Law_Revisions_Min_FieldsResolvers<ContextType>;
  law_revisions_mutation_response?: Law_Revisions_Mutation_ResponseResolvers<ContextType>;
  law_revisions_stddev_fields?: Law_Revisions_Stddev_FieldsResolvers<ContextType>;
  law_revisions_stddev_pop_fields?: Law_Revisions_Stddev_Pop_FieldsResolvers<ContextType>;
  law_revisions_stddev_samp_fields?: Law_Revisions_Stddev_Samp_FieldsResolvers<ContextType>;
  law_revisions_sum_fields?: Law_Revisions_Sum_FieldsResolvers<ContextType>;
  law_revisions_var_pop_fields?: Law_Revisions_Var_Pop_FieldsResolvers<ContextType>;
  law_revisions_var_samp_fields?: Law_Revisions_Var_Samp_FieldsResolvers<ContextType>;
  law_revisions_variance_fields?: Law_Revisions_Variance_FieldsResolvers<ContextType>;
  law_star_rates?: Law_Star_RatesResolvers<ContextType>;
  law_star_rates_aggregate?: Law_Star_Rates_AggregateResolvers<ContextType>;
  law_star_rates_aggregate_fields?: Law_Star_Rates_Aggregate_FieldsResolvers<ContextType>;
  law_star_rates_avg_fields?: Law_Star_Rates_Avg_FieldsResolvers<ContextType>;
  law_star_rates_max_fields?: Law_Star_Rates_Max_FieldsResolvers<ContextType>;
  law_star_rates_min_fields?: Law_Star_Rates_Min_FieldsResolvers<ContextType>;
  law_star_rates_mutation_response?: Law_Star_Rates_Mutation_ResponseResolvers<ContextType>;
  law_star_rates_stddev_fields?: Law_Star_Rates_Stddev_FieldsResolvers<ContextType>;
  law_star_rates_stddev_pop_fields?: Law_Star_Rates_Stddev_Pop_FieldsResolvers<ContextType>;
  law_star_rates_stddev_samp_fields?: Law_Star_Rates_Stddev_Samp_FieldsResolvers<ContextType>;
  law_star_rates_sum_fields?: Law_Star_Rates_Sum_FieldsResolvers<ContextType>;
  law_star_rates_var_pop_fields?: Law_Star_Rates_Var_Pop_FieldsResolvers<ContextType>;
  law_star_rates_var_samp_fields?: Law_Star_Rates_Var_Samp_FieldsResolvers<ContextType>;
  law_star_rates_variance_fields?: Law_Star_Rates_Variance_FieldsResolvers<ContextType>;
  laws?: LawsResolvers<ContextType>;
  laws_aggregate?: Laws_AggregateResolvers<ContextType>;
  laws_aggregate_fields?: Laws_Aggregate_FieldsResolvers<ContextType>;
  laws_avg_fields?: Laws_Avg_FieldsResolvers<ContextType>;
  laws_max_fields?: Laws_Max_FieldsResolvers<ContextType>;
  laws_min_fields?: Laws_Min_FieldsResolvers<ContextType>;
  laws_mutation_response?: Laws_Mutation_ResponseResolvers<ContextType>;
  laws_stddev_fields?: Laws_Stddev_FieldsResolvers<ContextType>;
  laws_stddev_pop_fields?: Laws_Stddev_Pop_FieldsResolvers<ContextType>;
  laws_stddev_samp_fields?: Laws_Stddev_Samp_FieldsResolvers<ContextType>;
  laws_sum_fields?: Laws_Sum_FieldsResolvers<ContextType>;
  laws_var_pop_fields?: Laws_Var_Pop_FieldsResolvers<ContextType>;
  laws_var_samp_fields?: Laws_Var_Samp_FieldsResolvers<ContextType>;
  laws_variance_fields?: Laws_Variance_FieldsResolvers<ContextType>;
  maintenances?: MaintenancesResolvers<ContextType>;
  maintenances_aggregate?: Maintenances_AggregateResolvers<ContextType>;
  maintenances_aggregate_fields?: Maintenances_Aggregate_FieldsResolvers<ContextType>;
  maintenances_max_fields?: Maintenances_Max_FieldsResolvers<ContextType>;
  maintenances_min_fields?: Maintenances_Min_FieldsResolvers<ContextType>;
  maintenances_mutation_response?: Maintenances_Mutation_ResponseResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  numeric?: GraphQLScalarType;
  query_root?: Query_RootResolvers<ContextType>;
  random_species_assets_view?: Random_Species_Assets_ViewResolvers<ContextType>;
  random_species_assets_view_aggregate?: Random_Species_Assets_View_AggregateResolvers<ContextType>;
  random_species_assets_view_aggregate_fields?: Random_Species_Assets_View_Aggregate_FieldsResolvers<ContextType>;
  random_species_assets_view_max_fields?: Random_Species_Assets_View_Max_FieldsResolvers<ContextType>;
  random_species_assets_view_min_fields?: Random_Species_Assets_View_Min_FieldsResolvers<ContextType>;
  species?: SpeciesResolvers<ContextType>;
  species_aggregate?: Species_AggregateResolvers<ContextType>;
  species_aggregate_fields?: Species_Aggregate_FieldsResolvers<ContextType>;
  species_assets?: Species_AssetsResolvers<ContextType>;
  species_assets_aggregate?: Species_Assets_AggregateResolvers<ContextType>;
  species_assets_aggregate_fields?: Species_Assets_Aggregate_FieldsResolvers<ContextType>;
  species_assets_max_fields?: Species_Assets_Max_FieldsResolvers<ContextType>;
  species_assets_min_fields?: Species_Assets_Min_FieldsResolvers<ContextType>;
  species_assets_mutation_response?: Species_Assets_Mutation_ResponseResolvers<ContextType>;
  species_avg_fields?: Species_Avg_FieldsResolvers<ContextType>;
  species_max_fields?: Species_Max_FieldsResolvers<ContextType>;
  species_min_fields?: Species_Min_FieldsResolvers<ContextType>;
  species_mutation_response?: Species_Mutation_ResponseResolvers<ContextType>;
  species_percentage_view_with_world_id?: Species_Percentage_View_With_World_IdResolvers<ContextType>;
  species_percentage_view_with_world_id_aggregate?: Species_Percentage_View_With_World_Id_AggregateResolvers<ContextType>;
  species_percentage_view_with_world_id_aggregate_fields?: Species_Percentage_View_With_World_Id_Aggregate_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_avg_fields?: Species_Percentage_View_With_World_Id_Avg_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_max_fields?: Species_Percentage_View_With_World_Id_Max_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_min_fields?: Species_Percentage_View_With_World_Id_Min_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_stddev_fields?: Species_Percentage_View_With_World_Id_Stddev_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_stddev_pop_fields?: Species_Percentage_View_With_World_Id_Stddev_Pop_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_stddev_samp_fields?: Species_Percentage_View_With_World_Id_Stddev_Samp_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_sum_fields?: Species_Percentage_View_With_World_Id_Sum_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_var_pop_fields?: Species_Percentage_View_With_World_Id_Var_Pop_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_var_samp_fields?: Species_Percentage_View_With_World_Id_Var_Samp_FieldsResolvers<ContextType>;
  species_percentage_view_with_world_id_variance_fields?: Species_Percentage_View_With_World_Id_Variance_FieldsResolvers<ContextType>;
  species_stddev_fields?: Species_Stddev_FieldsResolvers<ContextType>;
  species_stddev_pop_fields?: Species_Stddev_Pop_FieldsResolvers<ContextType>;
  species_stddev_samp_fields?: Species_Stddev_Samp_FieldsResolvers<ContextType>;
  species_sum_fields?: Species_Sum_FieldsResolvers<ContextType>;
  species_var_pop_fields?: Species_Var_Pop_FieldsResolvers<ContextType>;
  species_var_samp_fields?: Species_Var_Samp_FieldsResolvers<ContextType>;
  species_variance_fields?: Species_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_avg_fields?: Users_Avg_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  users_stddev_fields?: Users_Stddev_FieldsResolvers<ContextType>;
  users_stddev_pop_fields?: Users_Stddev_Pop_FieldsResolvers<ContextType>;
  users_stddev_samp_fields?: Users_Stddev_Samp_FieldsResolvers<ContextType>;
  users_sum_fields?: Users_Sum_FieldsResolvers<ContextType>;
  users_var_pop_fields?: Users_Var_Pop_FieldsResolvers<ContextType>;
  users_var_samp_fields?: Users_Var_Samp_FieldsResolvers<ContextType>;
  users_variance_fields?: Users_Variance_FieldsResolvers<ContextType>;
  uuid?: GraphQLScalarType;
  world_citizens?: World_CitizensResolvers<ContextType>;
  world_citizens_aggregate?: World_Citizens_AggregateResolvers<ContextType>;
  world_citizens_aggregate_fields?: World_Citizens_Aggregate_FieldsResolvers<ContextType>;
  world_citizens_avg_fields?: World_Citizens_Avg_FieldsResolvers<ContextType>;
  world_citizens_max_fields?: World_Citizens_Max_FieldsResolvers<ContextType>;
  world_citizens_min_fields?: World_Citizens_Min_FieldsResolvers<ContextType>;
  world_citizens_mutation_response?: World_Citizens_Mutation_ResponseResolvers<ContextType>;
  world_citizens_stddev_fields?: World_Citizens_Stddev_FieldsResolvers<ContextType>;
  world_citizens_stddev_pop_fields?: World_Citizens_Stddev_Pop_FieldsResolvers<ContextType>;
  world_citizens_stddev_samp_fields?: World_Citizens_Stddev_Samp_FieldsResolvers<ContextType>;
  world_citizens_sum_fields?: World_Citizens_Sum_FieldsResolvers<ContextType>;
  world_citizens_var_pop_fields?: World_Citizens_Var_Pop_FieldsResolvers<ContextType>;
  world_citizens_var_samp_fields?: World_Citizens_Var_Samp_FieldsResolvers<ContextType>;
  world_citizens_variance_fields?: World_Citizens_Variance_FieldsResolvers<ContextType>;
  world_comment_reactions?: World_Comment_ReactionsResolvers<ContextType>;
  world_comment_reactions_aggregate?: World_Comment_Reactions_AggregateResolvers<ContextType>;
  world_comment_reactions_aggregate_fields?: World_Comment_Reactions_Aggregate_FieldsResolvers<ContextType>;
  world_comment_reactions_avg_fields?: World_Comment_Reactions_Avg_FieldsResolvers<ContextType>;
  world_comment_reactions_max_fields?: World_Comment_Reactions_Max_FieldsResolvers<ContextType>;
  world_comment_reactions_min_fields?: World_Comment_Reactions_Min_FieldsResolvers<ContextType>;
  world_comment_reactions_mutation_response?: World_Comment_Reactions_Mutation_ResponseResolvers<ContextType>;
  world_comment_reactions_stddev_fields?: World_Comment_Reactions_Stddev_FieldsResolvers<ContextType>;
  world_comment_reactions_stddev_pop_fields?: World_Comment_Reactions_Stddev_Pop_FieldsResolvers<ContextType>;
  world_comment_reactions_stddev_samp_fields?: World_Comment_Reactions_Stddev_Samp_FieldsResolvers<ContextType>;
  world_comment_reactions_sum_fields?: World_Comment_Reactions_Sum_FieldsResolvers<ContextType>;
  world_comment_reactions_var_pop_fields?: World_Comment_Reactions_Var_Pop_FieldsResolvers<ContextType>;
  world_comment_reactions_var_samp_fields?: World_Comment_Reactions_Var_Samp_FieldsResolvers<ContextType>;
  world_comment_reactions_variance_fields?: World_Comment_Reactions_Variance_FieldsResolvers<ContextType>;
  world_comments?: World_CommentsResolvers<ContextType>;
  world_comments_aggregate?: World_Comments_AggregateResolvers<ContextType>;
  world_comments_aggregate_fields?: World_Comments_Aggregate_FieldsResolvers<ContextType>;
  world_comments_max_fields?: World_Comments_Max_FieldsResolvers<ContextType>;
  world_comments_min_fields?: World_Comments_Min_FieldsResolvers<ContextType>;
  world_comments_mutation_response?: World_Comments_Mutation_ResponseResolvers<ContextType>;
  world_histories?: World_HistoriesResolvers<ContextType>;
  world_histories_aggregate?: World_Histories_AggregateResolvers<ContextType>;
  world_histories_aggregate_fields?: World_Histories_Aggregate_FieldsResolvers<ContextType>;
  world_histories_avg_fields?: World_Histories_Avg_FieldsResolvers<ContextType>;
  world_histories_max_fields?: World_Histories_Max_FieldsResolvers<ContextType>;
  world_histories_min_fields?: World_Histories_Min_FieldsResolvers<ContextType>;
  world_histories_mutation_response?: World_Histories_Mutation_ResponseResolvers<ContextType>;
  world_histories_stddev_fields?: World_Histories_Stddev_FieldsResolvers<ContextType>;
  world_histories_stddev_pop_fields?: World_Histories_Stddev_Pop_FieldsResolvers<ContextType>;
  world_histories_stddev_samp_fields?: World_Histories_Stddev_Samp_FieldsResolvers<ContextType>;
  world_histories_sum_fields?: World_Histories_Sum_FieldsResolvers<ContextType>;
  world_histories_var_pop_fields?: World_Histories_Var_Pop_FieldsResolvers<ContextType>;
  world_histories_var_samp_fields?: World_Histories_Var_Samp_FieldsResolvers<ContextType>;
  world_histories_variance_fields?: World_Histories_Variance_FieldsResolvers<ContextType>;
  world_laws?: World_LawsResolvers<ContextType>;
  world_laws_aggregate?: World_Laws_AggregateResolvers<ContextType>;
  world_laws_aggregate_fields?: World_Laws_Aggregate_FieldsResolvers<ContextType>;
  world_laws_max_fields?: World_Laws_Max_FieldsResolvers<ContextType>;
  world_laws_min_fields?: World_Laws_Min_FieldsResolvers<ContextType>;
  world_laws_mutation_response?: World_Laws_Mutation_ResponseResolvers<ContextType>;
  world_reactions?: World_ReactionsResolvers<ContextType>;
  world_reactions_aggregate?: World_Reactions_AggregateResolvers<ContextType>;
  world_reactions_aggregate_fields?: World_Reactions_Aggregate_FieldsResolvers<ContextType>;
  world_reactions_avg_fields?: World_Reactions_Avg_FieldsResolvers<ContextType>;
  world_reactions_max_fields?: World_Reactions_Max_FieldsResolvers<ContextType>;
  world_reactions_min_fields?: World_Reactions_Min_FieldsResolvers<ContextType>;
  world_reactions_mutation_response?: World_Reactions_Mutation_ResponseResolvers<ContextType>;
  world_reactions_stddev_fields?: World_Reactions_Stddev_FieldsResolvers<ContextType>;
  world_reactions_stddev_pop_fields?: World_Reactions_Stddev_Pop_FieldsResolvers<ContextType>;
  world_reactions_stddev_samp_fields?: World_Reactions_Stddev_Samp_FieldsResolvers<ContextType>;
  world_reactions_sum_fields?: World_Reactions_Sum_FieldsResolvers<ContextType>;
  world_reactions_var_pop_fields?: World_Reactions_Var_Pop_FieldsResolvers<ContextType>;
  world_reactions_var_samp_fields?: World_Reactions_Var_Samp_FieldsResolvers<ContextType>;
  world_reactions_variance_fields?: World_Reactions_Variance_FieldsResolvers<ContextType>;
  worlds?: WorldsResolvers<ContextType>;
  worlds_aggregate?: Worlds_AggregateResolvers<ContextType>;
  worlds_aggregate_fields?: Worlds_Aggregate_FieldsResolvers<ContextType>;
  worlds_avg_fields?: Worlds_Avg_FieldsResolvers<ContextType>;
  worlds_max_fields?: Worlds_Max_FieldsResolvers<ContextType>;
  worlds_min_fields?: Worlds_Min_FieldsResolvers<ContextType>;
  worlds_mutation_response?: Worlds_Mutation_ResponseResolvers<ContextType>;
  worlds_stddev_fields?: Worlds_Stddev_FieldsResolvers<ContextType>;
  worlds_stddev_pop_fields?: Worlds_Stddev_Pop_FieldsResolvers<ContextType>;
  worlds_stddev_samp_fields?: Worlds_Stddev_Samp_FieldsResolvers<ContextType>;
  worlds_sum_fields?: Worlds_Sum_FieldsResolvers<ContextType>;
  worlds_var_pop_fields?: Worlds_Var_Pop_FieldsResolvers<ContextType>;
  worlds_var_samp_fields?: Worlds_Var_Samp_FieldsResolvers<ContextType>;
  worlds_variance_fields?: Worlds_Variance_FieldsResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};

export type FindUserQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name: string, icon_url?: string | null, is_first_time: boolean, login_bonus_timestamp?: string | null, age?: number | null, gender?: number | null }>, maintenances: Array<{ __typename?: 'maintenances', id: string, start_timestamp?: string | null, updated_at: string, end_timestamp?: string | null, created_at: string }> };

export type CreateUserMutationVariables = Exact<{
  authentication_id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', id: string }> } | null };

export type CreateWorldMutationVariables = Exact<{
  objects?: InputMaybe<Array<Worlds_Insert_Input> | Worlds_Insert_Input>;
}>;


export type CreateWorldMutation = { __typename?: 'mutation_root', insert_worlds?: { __typename?: 'worlds_mutation_response', returning: Array<{ __typename?: 'worlds', id: string }> } | null };

export type FindWorldQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindWorldQuery = { __typename?: 'query_root', worlds_by_pk?: { __typename?: 'worlds', id: string, author_id: string, user: { __typename?: 'users', icon_url?: string | null, id: string, name: string }, species_percentage: Array<{ __typename?: 'species_percentage_view_with_world_id', percentage?: any | null, species_name?: string | null, species_auto_incremental_id?: number | null }>, world_citizens_aggregate: { __typename?: 'world_citizens_aggregate', aggregate?: { __typename?: 'world_citizens_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'world_citizens', citizen: { __typename?: 'citizens', name: string, id: string, species_asset: { __typename?: 'species_assets', image_url: string, species: { __typename?: 'species', name: string } } } }> }, world_histories: Array<{ __typename?: 'world_histories', description: string, title: string, id: string, official_language: string, public_security: number, world_image_url: string, block_json?: any | null }>, world_laws: Array<{ __typename?: 'world_laws', law: { __typename?: 'laws', id: string, law_revisions: Array<{ __typename?: 'law_revisions', title: string }> } }> } | null };

export type FindWorldsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worlds_Order_By> | Worlds_Order_By>;
  where?: InputMaybe<Worlds_Bool_Exp>;
  like?: InputMaybe<Scalars['Int']['input']>;
  star?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindWorldsQuery = { __typename?: 'query_root', worlds: Array<{ __typename?: 'worlds', id: string, species_percentage: Array<{ __typename?: 'species_percentage_view_with_world_id', percentage?: any | null, species_name?: string | null, species_auto_incremental_id?: number | null }>, world_laws_aggregate: { __typename?: 'world_laws_aggregate', aggregate?: { __typename?: 'world_laws_aggregate_fields', count: number } | null }, world_histories: Array<{ __typename?: 'world_histories', description: string, title: string, id: string, official_language: string, public_security: number, world_image_url: string }>, world_laws: Array<{ __typename?: 'world_laws', law: { __typename?: 'laws', id: string, law_revisions: Array<{ __typename?: 'law_revisions', title: string }> } }>, user: { __typename?: 'users', id: string, name: string, icon_url?: string | null }, world_citizens_aggregate: { __typename?: 'world_citizens_aggregate', aggregate?: { __typename?: 'world_citizens_aggregate_fields', count: number } | null }, likeCount: { __typename?: 'world_reactions_aggregate', aggregate?: { __typename?: 'world_reactions_aggregate_fields', count: number } | null }, starCount: { __typename?: 'world_reactions_aggregate', aggregate?: { __typename?: 'world_reactions_aggregate_fields', count: number } | null }, world_comments_aggregate: { __typename?: 'world_comments_aggregate', aggregate?: { __typename?: 'world_comments_aggregate_fields', count: number } | null } }> };

export type FindWorldReactionQueryVariables = Exact<{
  like?: InputMaybe<Scalars['Int']['input']>;
  star?: InputMaybe<Scalars['Int']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindWorldReactionQuery = { __typename?: 'query_root', worlds_by_pk?: { __typename?: 'worlds', id: string, likeCount: { __typename?: 'world_reactions_aggregate', aggregate?: { __typename?: 'world_reactions_aggregate_fields', count: number } | null }, starCount: { __typename?: 'world_reactions_aggregate', aggregate?: { __typename?: 'world_reactions_aggregate_fields', count: number } | null }, world_citizens_aggregate: { __typename?: 'world_citizens_aggregate', aggregate?: { __typename?: 'world_citizens_aggregate_fields', count: number } | null }, isLiked: Array<{ __typename?: 'world_reactions', user_id: string, world_id: string }>, isStared: Array<{ __typename?: 'world_reactions', user_id: string, world_id: string }>, world_comments_aggregate: { __typename?: 'world_comments_aggregate', aggregate?: { __typename?: 'world_comments_aggregate_fields', count: number } | null } } | null };

export type CreateReactionForWorldMutationVariables = Exact<{
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type CreateReactionForWorldMutation = { __typename?: 'mutation_root', insert_world_reactions_one?: { __typename?: 'world_reactions', user_id: string, world_id: string } | null };

export type DeleteReactionForWorldMutationVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  world_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeleteReactionForWorldMutation = { __typename?: 'mutation_root', delete_world_reactions_by_pk?: { __typename?: 'world_reactions', user_id: string, world_id: string, type: number } | null };

export type FindCitizensQueryVariables = Exact<{
  order_by?: InputMaybe<Array<Citizens_Order_By> | Citizens_Order_By>;
  where?: InputMaybe<Citizens_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindCitizensQuery = { __typename?: 'query_root', citizens: Array<{ __typename?: 'citizens', id: string, gender: number, name: string, species_asset: { __typename?: 'species_assets', image_url: string, personality: string, species: { __typename?: 'species', name: string, description: string } } }> };

export type FindCitizensNotBelongToWorldByUserIdQueryVariables = Exact<{
  order_by?: InputMaybe<Array<Citizens_Order_By> | Citizens_Order_By>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Citizens_Bool_Exp>;
  id: Scalars['uuid']['input'];
}>;


export type FindCitizensNotBelongToWorldByUserIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', citizens: Array<{ __typename?: 'citizens', id: string, name: string, species_asset: { __typename?: 'species_assets', image_url: string, personality: string, species: { __typename?: 'species', name: string } } }> } | null };

export type CreateWorldCitizensMutationVariables = Exact<{
  objects?: InputMaybe<Array<World_Citizens_Insert_Input> | World_Citizens_Insert_Input>;
}>;


export type CreateWorldCitizensMutation = { __typename?: 'mutation_root', insert_world_citizens?: { __typename?: 'world_citizens_mutation_response', returning: Array<{ __typename?: 'world_citizens', citizen_id: string, world_id: string }> } | null };

export type FindLawsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By> | Laws_Order_By>;
  where?: InputMaybe<Laws_Bool_Exp>;
  like?: InputMaybe<Scalars['Int']['input']>;
  bookmark?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindLawsQuery = { __typename?: 'query_root', laws: Array<{ __typename?: 'laws', id: string, type: number, place: string, newness: number, law_comments_aggregate: { __typename?: 'law_comments_aggregate', aggregate?: { __typename?: 'law_comments_aggregate_fields', count: number } | null }, likeCount: { __typename?: 'law_reactions_aggregate', aggregate?: { __typename?: 'law_reactions_aggregate_fields', count: number } | null }, bookmarkCount: { __typename?: 'law_reactions_aggregate', aggregate?: { __typename?: 'law_reactions_aggregate_fields', count: number } | null }, law_star_rates_aggregate: { __typename?: 'law_star_rates_aggregate', aggregate?: { __typename?: 'law_star_rates_aggregate_fields', avg?: { __typename?: 'law_star_rates_avg_fields', rate?: number | null } | null } | null }, world_laws_aggregate: { __typename?: 'world_laws_aggregate', aggregate?: { __typename?: 'world_laws_aggregate_fields', count: number } | null }, law_revisions: Array<{ __typename?: 'law_revisions', id: string, title: string, description: string, law_image_url: string, law_category?: string | null }>, law_revisions_aggregate: { __typename?: 'law_revisions_aggregate', aggregate?: { __typename?: 'law_revisions_aggregate_fields', count: number } | null }, user?: { __typename?: 'users', name: string, id: string } | null }> };

export type FindLawCommentsQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Law_Comments_Order_By> | Law_Comments_Order_By>;
  where?: InputMaybe<Law_Comment_Reactions_Bool_Exp>;
}>;


export type FindLawCommentsQuery = { __typename?: 'query_root', laws_by_pk?: { __typename?: 'laws', id: string, law_comments: Array<{ __typename?: 'law_comments', id: string, created_at: string, text: string, user: { __typename?: 'users', icon_url?: string | null, id: string, name: string }, likeCount: { __typename?: 'law_comment_reactions_aggregate', aggregate?: { __typename?: 'law_comment_reactions_aggregate_fields', count: number } | null }, isLiked: Array<{ __typename?: 'law_comment_reactions', user_id: string }> }>, law_comments_aggregate: { __typename?: 'law_comments_aggregate', aggregate?: { __typename?: 'law_comments_aggregate_fields', count: number } | null } } | null };

export type FindLawQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindLawQuery = { __typename?: 'query_root', laws_by_pk?: { __typename?: 'laws', id: string, type: number, author_id?: string | null, newness: number, place: string, law_revisions: Array<{ __typename?: 'law_revisions', title: string, id: string, description: string, law_image_url: string, created_at: string, data_xml?: string | null, block_json?: any | null, law_status?: number | null, law_type?: number | null, law_category?: string | null }>, user?: { __typename?: 'users', name: string } | null, world_laws: Array<{ __typename?: 'world_laws', world: { __typename?: 'worlds', id: string, world_histories: Array<{ __typename?: 'world_histories', title: string, description: string }> } }> } | null };

export type FindWorldsByLawQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
  limit1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<World_Laws_Order_By> | World_Laws_Order_By>;
  where1?: InputMaybe<World_Laws_Bool_Exp>;
  offset1?: InputMaybe<Scalars['Int']['input']>;
  limit2?: InputMaybe<Scalars['Int']['input']>;
  offset2?: InputMaybe<Scalars['Int']['input']>;
  order_by2?: InputMaybe<Array<World_Histories_Order_By> | World_Histories_Order_By>;
  where2?: InputMaybe<World_Histories_Bool_Exp>;
}>;


export type FindWorldsByLawQuery = { __typename?: 'query_root', laws_by_pk?: { __typename?: 'laws', world_laws: Array<{ __typename?: 'world_laws', world: { __typename?: 'worlds', id: string, world_histories: Array<{ __typename?: 'world_histories', title: string, description: string, id: string }> } }> } | null };

export type CreateLawMutationVariables = Exact<{
  author_id: Scalars['uuid']['input'];
  law_revisions?: InputMaybe<Law_Revisions_Arr_Rel_Insert_Input>;
  newness?: InputMaybe<Scalars['Int']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateLawMutation = { __typename?: 'mutation_root', insert_laws_one?: { __typename?: 'laws', id: string } | null };

export type FindLawReactionsQueryVariables = Exact<{
  law_id: Scalars['uuid']['input'];
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  like?: InputMaybe<Scalars['Int']['input']>;
  star?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindLawReactionsQuery = { __typename?: 'query_root', laws_by_pk?: { __typename?: 'laws', id: string, like: { __typename?: 'law_reactions_aggregate', aggregate?: { __typename?: 'law_reactions_aggregate_fields', count: number } | null }, star: { __typename?: 'law_reactions_aggregate', aggregate?: { __typename?: 'law_reactions_aggregate_fields', count: number } | null }, is_liked: Array<{ __typename?: 'law_reactions', user_id: string }>, is_stared: Array<{ __typename?: 'law_reactions', user_id: string }>, law_star_rates_aggregate: { __typename?: 'law_star_rates_aggregate', aggregate?: { __typename?: 'law_star_rates_aggregate_fields', avg?: { __typename?: 'law_star_rates_avg_fields', rate?: number | null } | null } | null }, user_rate: Array<{ __typename?: 'law_star_rates', rate: number }> } | null };

export type CreateLawReactionMutationVariables = Exact<{
  law_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
}>;


export type CreateLawReactionMutation = { __typename?: 'mutation_root', insert_law_reactions_one?: { __typename?: 'law_reactions', law_id: string, user_id: string } | null };

export type DeleteLawReactionMutationVariables = Exact<{
  law_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
}>;


export type DeleteLawReactionMutation = { __typename?: 'mutation_root', delete_law_reactions_by_pk?: { __typename?: 'law_reactions', law_id: string, user_id: string } | null };

export type UpdateStarRateMutationVariables = Exact<{
  law_id: Scalars['uuid']['input'];
  rate: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
}>;


export type UpdateStarRateMutation = { __typename?: 'mutation_root', insert_law_star_rates_one?: { __typename?: 'law_star_rates', law_id: string, user_id: string } | null };

export type CreateLawCommentMutationVariables = Exact<{
  law_id: Scalars['uuid']['input'];
  author_id: Scalars['uuid']['input'];
  text: Scalars['String']['input'];
}>;


export type CreateLawCommentMutation = { __typename?: 'mutation_root', insert_law_comments_one?: { __typename?: 'law_comments', id: string } | null };

export type CreateWorldCommentMutationVariables = Exact<{
  author_id: Scalars['uuid']['input'];
  world_id: Scalars['uuid']['input'];
  text: Scalars['String']['input'];
}>;


export type CreateWorldCommentMutation = { __typename?: 'mutation_root', insert_world_comments_one?: { __typename?: 'world_comments', id: string } | null };

export type FindWorldCommentsQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<World_Comments_Order_By> | World_Comments_Order_By>;
  where?: InputMaybe<World_Comments_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
}>;


export type FindWorldCommentsQuery = { __typename?: 'query_root', worlds_by_pk?: { __typename?: 'worlds', id: string, world_comments: Array<{ __typename?: 'world_comments', id: string, text: string, created_at: string, user: { __typename?: 'users', icon_url?: string | null, id: string, name: string }, likeCount: { __typename?: 'world_comment_reactions_aggregate', aggregate?: { __typename?: 'world_comment_reactions_aggregate_fields', count: number } | null }, isLiked: Array<{ __typename?: 'world_comment_reactions', user_id: string }> }> } | null };

export type CreateWorldCommentReactionMutationVariables = Exact<{
  comment_id: Scalars['uuid']['input'];
  type: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
}>;


export type CreateWorldCommentReactionMutation = { __typename?: 'mutation_root', insert_world_comment_reactions_one?: { __typename?: 'world_comment_reactions', comment_id: string, user_id: string } | null };

export type RemoveWorldCommentReactionMutationVariables = Exact<{
  comment_id: Scalars['uuid']['input'];
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['uuid']['input'];
}>;


export type RemoveWorldCommentReactionMutation = { __typename?: 'mutation_root', delete_world_comment_reactions_by_pk?: { __typename?: 'world_comment_reactions', comment_id: string, user_id: string } | null };

export type FindLawsForCreateWorldQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laws_Order_By> | Laws_Order_By>;
  where?: InputMaybe<Laws_Bool_Exp>;
  limit1?: InputMaybe<Scalars['Int']['input']>;
  order_by1?: InputMaybe<Array<Law_Revisions_Order_By> | Law_Revisions_Order_By>;
}>;


export type FindLawsForCreateWorldQuery = { __typename?: 'query_root', laws: Array<{ __typename?: 'laws', id: string, type: number, law_revisions: Array<{ __typename?: 'law_revisions', id: string, description: string, title: string, law_image_url: string }>, user?: { __typename?: 'users', id: string, icon_url?: string | null, name: string } | null }> };

export type CreateLawCommentReactionMutationVariables = Exact<{
  comment_id: Scalars['uuid']['input'];
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['uuid']['input'];
}>;


export type CreateLawCommentReactionMutation = { __typename?: 'mutation_root', insert_law_comment_reactions_one?: { __typename?: 'law_comment_reactions', comment_id: string, user_id: string } | null };

export type DeleteLawCommentReactionMutationVariables = Exact<{
  comment_id: Scalars['uuid']['input'];
  type?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['uuid']['input'];
}>;


export type DeleteLawCommentReactionMutation = { __typename?: 'mutation_root', delete_law_comment_reactions_by_pk?: { __typename?: 'law_comment_reactions', comment_id: string, user_id: string } | null };

export type CreateRawMutationVariables = Exact<{
  author_id: Scalars['uuid']['input'];
  type?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  law_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateRawMutation = { __typename?: 'mutation_root', insert_laws_one?: { __typename?: 'laws', id: string } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  _set?: InputMaybe<Users_Set_Input>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: string, name: string, icon_url?: string | null, is_first_time: boolean, login_bonus_timestamp?: string | null } | null };

export type FindLoginBonusDateQueryVariables = Exact<{
  authentication_id?: InputMaybe<String_Comparison_Exp>;
}>;


export type FindLoginBonusDateQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, login_bonus_timestamp?: string | null }> };

export type FindRandomSpeciesAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRandomSpeciesAssetsQuery = { __typename?: 'query_root', random_species_assets_view: Array<{ __typename?: 'random_species_assets_view', species_asset_id?: string | null }> };

export type CreateCitizensMutationVariables = Exact<{
  objects?: InputMaybe<Array<Citizens_Insert_Input> | Citizens_Insert_Input>;
  id: Scalars['uuid']['input'];
  login_bonus_timestamp: Scalars['timestamptz']['input'];
}>;


export type CreateCitizensMutation = { __typename?: 'mutation_root', insert_citizens?: { __typename?: 'citizens_mutation_response', returning: Array<{ __typename?: 'citizens', id: string, name: string, species_asset: { __typename?: 'species_assets', image_url: string, species: { __typename?: 'species', name: string } } }> } | null, update_users_by_pk?: { __typename?: 'users', id: string } | null };

export type FindUserDescriptionQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type FindUserDescriptionQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', age?: number | null, created_at: string, gender?: number | null, icon_url?: string | null, id: string, name: string, worlds_aggregate: { __typename?: 'worlds_aggregate', aggregate?: { __typename?: 'worlds_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'worlds', id: string, world_histories: Array<{ __typename?: 'world_histories', id: string, title: string, description: string }> }> }, laws_aggregate: { __typename?: 'laws_aggregate', aggregate?: { __typename?: 'laws_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'laws', id: string, created_at: string, law_revisions: Array<{ __typename?: 'law_revisions', id: string, description: string, title: string }> }> }, citizens_aggregate: { __typename?: 'citizens_aggregate', aggregate?: { __typename?: 'citizens_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'citizens', id: string, name: string, world_citizens: Array<{ __typename?: 'world_citizens', world: { __typename?: 'worlds', world_histories: Array<{ __typename?: 'world_histories', title: string, id: string }> } }>, species_asset: { __typename?: 'species_assets', image_url: string, personality: string, species: { __typename?: 'species', name: string, description: string } } }> } } | null };

export type FindLawThumbnailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type FindLawThumbnailQuery = { __typename?: 'query_root', laws_by_pk?: { __typename?: 'laws', id: string, law_revisions: Array<{ __typename?: 'law_revisions', description: string, title: string, law_image_url: string }> } | null };

export type CreateLawRevisionMutationVariables = Exact<{
  object?: InputMaybe<Law_Revisions_Insert_Input>;
}>;


export type CreateLawRevisionMutation = { __typename?: 'mutation_root', insert_law_revisions_one?: { __typename?: 'law_revisions', id: string } | null };

export type CreateWorldHistoriesMutationVariables = Exact<{
  object?: InputMaybe<World_Histories_Insert_Input>;
}>;


export type CreateWorldHistoriesMutation = { __typename?: 'mutation_root', insert_world_histories_one?: { __typename?: 'world_histories', id: string } | null };

export type GetSitemapInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSitemapInfoQuery = { __typename?: 'query_root', laws: Array<{ __typename?: 'laws', id: string }>, worlds: Array<{ __typename?: 'worlds', id: string }> };


export const FindUserDocument = gql`
    query findUser($_eq: String = "") {
  users(where: {authentication_id: {_eq: $_eq}}) {
    id
    name
    icon_url
    is_first_time
    login_bonus_timestamp
    age
    gender
  }
  maintenances(limit: 1, order_by: {created_at: desc}) {
    id
    start_timestamp
    updated_at
    end_timestamp
    created_at
  }
}
    `;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions?: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export function useFindUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserSuspenseQueryHookResult = ReturnType<typeof useFindUserSuspenseQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($authentication_id: String, $name: String, $icon_url: String, $email: String) {
  insert_users(
    objects: {authentication_id: $authentication_id, name: $name, icon_url: $icon_url, email: $email}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      authentication_id: // value for 'authentication_id'
 *      name: // value for 'name'
 *      icon_url: // value for 'icon_url'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateWorldDocument = gql`
    mutation createWorld($objects: [worlds_insert_input!] = []) {
  insert_worlds(objects: $objects) {
    returning {
      id
    }
  }
}
    `;
export type CreateWorldMutationFn = Apollo.MutationFunction<CreateWorldMutation, CreateWorldMutationVariables>;

/**
 * __useCreateWorldMutation__
 *
 * To run a mutation, you first call `useCreateWorldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorldMutation, { data, loading, error }] = useCreateWorldMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateWorldMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorldMutation, CreateWorldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorldMutation, CreateWorldMutationVariables>(CreateWorldDocument, options);
      }
export type CreateWorldMutationHookResult = ReturnType<typeof useCreateWorldMutation>;
export type CreateWorldMutationResult = Apollo.MutationResult<CreateWorldMutation>;
export type CreateWorldMutationOptions = Apollo.BaseMutationOptions<CreateWorldMutation, CreateWorldMutationVariables>;
export const FindWorldDocument = gql`
    query findWorld($id: uuid = "") {
  worlds_by_pk(id: $id) {
    id
    author_id
    user {
      icon_url
      id
      name
    }
    species_percentage {
      percentage
      species_name
      species_auto_incremental_id
    }
    world_citizens_aggregate {
      aggregate {
        count
      }
      nodes {
        citizen {
          name
          id
          species_asset {
            species {
              name
            }
            image_url
          }
        }
      }
    }
    world_histories(limit: 1, order_by: {created_at: desc}) {
      description
      title
      id
      official_language
      public_security
      world_image_url
      block_json
    }
    world_laws {
      law {
        id
        law_revisions {
          title
        }
      }
    }
  }
}
    `;

/**
 * __useFindWorldQuery__
 *
 * To run a query within a React component, call `useFindWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindWorldQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindWorldQuery(baseOptions?: Apollo.QueryHookOptions<FindWorldQuery, FindWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindWorldQuery, FindWorldQueryVariables>(FindWorldDocument, options);
      }
export function useFindWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindWorldQuery, FindWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindWorldQuery, FindWorldQueryVariables>(FindWorldDocument, options);
        }
export function useFindWorldSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindWorldQuery, FindWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindWorldQuery, FindWorldQueryVariables>(FindWorldDocument, options);
        }
export type FindWorldQueryHookResult = ReturnType<typeof useFindWorldQuery>;
export type FindWorldLazyQueryHookResult = ReturnType<typeof useFindWorldLazyQuery>;
export type FindWorldSuspenseQueryHookResult = ReturnType<typeof useFindWorldSuspenseQuery>;
export type FindWorldQueryResult = Apollo.QueryResult<FindWorldQuery, FindWorldQueryVariables>;
export const FindWorldsDocument = gql`
    query findWorlds($limit: Int, $offset: Int, $order_by: [worlds_order_by!] = {}, $where: worlds_bool_exp = {}, $like: Int = 0, $star: Int = 1) {
  worlds(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    species_percentage {
      percentage
      species_name
      species_auto_incremental_id
    }
    world_laws_aggregate {
      aggregate {
        count
      }
    }
    world_histories(limit: 1, order_by: {created_at: desc}) {
      description
      title
      id
      official_language
      public_security
      world_image_url
    }
    world_laws {
      law {
        id
        law_revisions {
          title
        }
      }
    }
    id
    user {
      id
      name
      icon_url
    }
    world_citizens_aggregate {
      aggregate {
        count
      }
    }
    likeCount: world_reactions_aggregate(where: {type: {_eq: $like}}) {
      aggregate {
        count
      }
    }
    starCount: world_reactions_aggregate(where: {type: {_eq: $star}}) {
      aggregate {
        count
      }
    }
    world_comments_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useFindWorldsQuery__
 *
 * To run a query within a React component, call `useFindWorldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindWorldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindWorldsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *      like: // value for 'like'
 *      star: // value for 'star'
 *   },
 * });
 */
export function useFindWorldsQuery(baseOptions?: Apollo.QueryHookOptions<FindWorldsQuery, FindWorldsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindWorldsQuery, FindWorldsQueryVariables>(FindWorldsDocument, options);
      }
export function useFindWorldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindWorldsQuery, FindWorldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindWorldsQuery, FindWorldsQueryVariables>(FindWorldsDocument, options);
        }
export function useFindWorldsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindWorldsQuery, FindWorldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindWorldsQuery, FindWorldsQueryVariables>(FindWorldsDocument, options);
        }
export type FindWorldsQueryHookResult = ReturnType<typeof useFindWorldsQuery>;
export type FindWorldsLazyQueryHookResult = ReturnType<typeof useFindWorldsLazyQuery>;
export type FindWorldsSuspenseQueryHookResult = ReturnType<typeof useFindWorldsSuspenseQuery>;
export type FindWorldsQueryResult = Apollo.QueryResult<FindWorldsQuery, FindWorldsQueryVariables>;
export const FindWorldReactionDocument = gql`
    query findWorldReaction($like: Int, $star: Int, $world_id: uuid = "", $user_id: uuid = "00000000-0000-0000-0000-000000000000") {
  worlds_by_pk(id: $world_id) {
    id
    likeCount: world_reactions_aggregate(where: {type: {_eq: $like}}) {
      aggregate {
        count
      }
    }
    starCount: world_reactions_aggregate(where: {type: {_eq: $star}}) {
      aggregate {
        count
      }
    }
    world_citizens_aggregate {
      aggregate {
        count
      }
    }
    isLiked: world_reactions(where: {user_id: {_eq: $user_id}, type: {_eq: $like}}) {
      user_id
      world_id
    }
    isStared: world_reactions(where: {user_id: {_eq: $user_id}, type: {_eq: $star}}) {
      user_id
      world_id
    }
    world_comments_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useFindWorldReactionQuery__
 *
 * To run a query within a React component, call `useFindWorldReactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindWorldReactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindWorldReactionQuery({
 *   variables: {
 *      like: // value for 'like'
 *      star: // value for 'star'
 *      world_id: // value for 'world_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useFindWorldReactionQuery(baseOptions?: Apollo.QueryHookOptions<FindWorldReactionQuery, FindWorldReactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindWorldReactionQuery, FindWorldReactionQueryVariables>(FindWorldReactionDocument, options);
      }
export function useFindWorldReactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindWorldReactionQuery, FindWorldReactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindWorldReactionQuery, FindWorldReactionQueryVariables>(FindWorldReactionDocument, options);
        }
export function useFindWorldReactionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindWorldReactionQuery, FindWorldReactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindWorldReactionQuery, FindWorldReactionQueryVariables>(FindWorldReactionDocument, options);
        }
export type FindWorldReactionQueryHookResult = ReturnType<typeof useFindWorldReactionQuery>;
export type FindWorldReactionLazyQueryHookResult = ReturnType<typeof useFindWorldReactionLazyQuery>;
export type FindWorldReactionSuspenseQueryHookResult = ReturnType<typeof useFindWorldReactionSuspenseQuery>;
export type FindWorldReactionQueryResult = Apollo.QueryResult<FindWorldReactionQuery, FindWorldReactionQueryVariables>;
export const CreateReactionForWorldDocument = gql`
    mutation createReactionForWorld($type: Int = 0, $user_id: uuid = "", $world_id: uuid = "") {
  insert_world_reactions_one(
    object: {type: $type, user_id: $user_id, world_id: $world_id}
  ) {
    user_id
    world_id
  }
}
    `;
export type CreateReactionForWorldMutationFn = Apollo.MutationFunction<CreateReactionForWorldMutation, CreateReactionForWorldMutationVariables>;

/**
 * __useCreateReactionForWorldMutation__
 *
 * To run a mutation, you first call `useCreateReactionForWorldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReactionForWorldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReactionForWorldMutation, { data, loading, error }] = useCreateReactionForWorldMutation({
 *   variables: {
 *      type: // value for 'type'
 *      user_id: // value for 'user_id'
 *      world_id: // value for 'world_id'
 *   },
 * });
 */
export function useCreateReactionForWorldMutation(baseOptions?: Apollo.MutationHookOptions<CreateReactionForWorldMutation, CreateReactionForWorldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReactionForWorldMutation, CreateReactionForWorldMutationVariables>(CreateReactionForWorldDocument, options);
      }
export type CreateReactionForWorldMutationHookResult = ReturnType<typeof useCreateReactionForWorldMutation>;
export type CreateReactionForWorldMutationResult = Apollo.MutationResult<CreateReactionForWorldMutation>;
export type CreateReactionForWorldMutationOptions = Apollo.BaseMutationOptions<CreateReactionForWorldMutation, CreateReactionForWorldMutationVariables>;
export const DeleteReactionForWorldDocument = gql`
    mutation deleteReactionForWorld($user_id: uuid = "", $world_id: uuid = "", $type: Int = 0) {
  delete_world_reactions_by_pk(
    type: $type
    user_id: $user_id
    world_id: $world_id
  ) {
    user_id
    world_id
    type
  }
}
    `;
export type DeleteReactionForWorldMutationFn = Apollo.MutationFunction<DeleteReactionForWorldMutation, DeleteReactionForWorldMutationVariables>;

/**
 * __useDeleteReactionForWorldMutation__
 *
 * To run a mutation, you first call `useDeleteReactionForWorldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReactionForWorldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReactionForWorldMutation, { data, loading, error }] = useDeleteReactionForWorldMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      world_id: // value for 'world_id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useDeleteReactionForWorldMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReactionForWorldMutation, DeleteReactionForWorldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReactionForWorldMutation, DeleteReactionForWorldMutationVariables>(DeleteReactionForWorldDocument, options);
      }
export type DeleteReactionForWorldMutationHookResult = ReturnType<typeof useDeleteReactionForWorldMutation>;
export type DeleteReactionForWorldMutationResult = Apollo.MutationResult<DeleteReactionForWorldMutation>;
export type DeleteReactionForWorldMutationOptions = Apollo.BaseMutationOptions<DeleteReactionForWorldMutation, DeleteReactionForWorldMutationVariables>;
export const FindCitizensDocument = gql`
    query findCitizens($order_by: [citizens_order_by!] = {}, $where: citizens_bool_exp = {}, $limit: Int, $offset: Int) {
  citizens(where: $where, order_by: $order_by, limit: $limit, offset: $offset) {
    id
    gender
    name
    species_asset {
      image_url
      personality
      species {
        name
        description
      }
    }
  }
}
    `;

/**
 * __useFindCitizensQuery__
 *
 * To run a query within a React component, call `useFindCitizensQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCitizensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCitizensQuery({
 *   variables: {
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFindCitizensQuery(baseOptions?: Apollo.QueryHookOptions<FindCitizensQuery, FindCitizensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCitizensQuery, FindCitizensQueryVariables>(FindCitizensDocument, options);
      }
export function useFindCitizensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCitizensQuery, FindCitizensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCitizensQuery, FindCitizensQueryVariables>(FindCitizensDocument, options);
        }
export function useFindCitizensSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindCitizensQuery, FindCitizensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCitizensQuery, FindCitizensQueryVariables>(FindCitizensDocument, options);
        }
export type FindCitizensQueryHookResult = ReturnType<typeof useFindCitizensQuery>;
export type FindCitizensLazyQueryHookResult = ReturnType<typeof useFindCitizensLazyQuery>;
export type FindCitizensSuspenseQueryHookResult = ReturnType<typeof useFindCitizensSuspenseQuery>;
export type FindCitizensQueryResult = Apollo.QueryResult<FindCitizensQuery, FindCitizensQueryVariables>;
export const FindCitizensNotBelongToWorldByUserIdDocument = gql`
    query findCitizensNotBelongToWorldByUserId($order_by: [citizens_order_by!] = {}, $offset: Int, $limit: Int, $where: citizens_bool_exp = {}, $id: uuid!) {
  users_by_pk(id: $id) {
    citizens(order_by: $order_by, offset: $offset, limit: $limit, where: $where) {
      id
      name
      species_asset {
        image_url
        personality
        species {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useFindCitizensNotBelongToWorldByUserIdQuery__
 *
 * To run a query within a React component, call `useFindCitizensNotBelongToWorldByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCitizensNotBelongToWorldByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCitizensNotBelongToWorldByUserIdQuery({
 *   variables: {
 *      order_by: // value for 'order_by'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      where: // value for 'where'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindCitizensNotBelongToWorldByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables> & ({ variables: FindCitizensNotBelongToWorldByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>(FindCitizensNotBelongToWorldByUserIdDocument, options);
      }
export function useFindCitizensNotBelongToWorldByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>(FindCitizensNotBelongToWorldByUserIdDocument, options);
        }
export function useFindCitizensNotBelongToWorldByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>(FindCitizensNotBelongToWorldByUserIdDocument, options);
        }
export type FindCitizensNotBelongToWorldByUserIdQueryHookResult = ReturnType<typeof useFindCitizensNotBelongToWorldByUserIdQuery>;
export type FindCitizensNotBelongToWorldByUserIdLazyQueryHookResult = ReturnType<typeof useFindCitizensNotBelongToWorldByUserIdLazyQuery>;
export type FindCitizensNotBelongToWorldByUserIdSuspenseQueryHookResult = ReturnType<typeof useFindCitizensNotBelongToWorldByUserIdSuspenseQuery>;
export type FindCitizensNotBelongToWorldByUserIdQueryResult = Apollo.QueryResult<FindCitizensNotBelongToWorldByUserIdQuery, FindCitizensNotBelongToWorldByUserIdQueryVariables>;
export const CreateWorldCitizensDocument = gql`
    mutation createWorldCitizens($objects: [world_citizens_insert_input!] = {}) {
  insert_world_citizens(objects: $objects) {
    returning {
      citizen_id
      world_id
    }
  }
}
    `;
export type CreateWorldCitizensMutationFn = Apollo.MutationFunction<CreateWorldCitizensMutation, CreateWorldCitizensMutationVariables>;

/**
 * __useCreateWorldCitizensMutation__
 *
 * To run a mutation, you first call `useCreateWorldCitizensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorldCitizensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorldCitizensMutation, { data, loading, error }] = useCreateWorldCitizensMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateWorldCitizensMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorldCitizensMutation, CreateWorldCitizensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorldCitizensMutation, CreateWorldCitizensMutationVariables>(CreateWorldCitizensDocument, options);
      }
export type CreateWorldCitizensMutationHookResult = ReturnType<typeof useCreateWorldCitizensMutation>;
export type CreateWorldCitizensMutationResult = Apollo.MutationResult<CreateWorldCitizensMutation>;
export type CreateWorldCitizensMutationOptions = Apollo.BaseMutationOptions<CreateWorldCitizensMutation, CreateWorldCitizensMutationVariables>;
export const FindLawsDocument = gql`
    query findLaws($limit: Int, $offset: Int, $order_by: [laws_order_by!] = {}, $where: laws_bool_exp = {}, $like: Int = 0, $bookmark: Int = 1) {
  laws(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    id
    type
    place
    newness
    law_comments_aggregate {
      aggregate {
        count
      }
    }
    likeCount: law_reactions_aggregate(where: {type: {_eq: $like}}) {
      aggregate {
        count
      }
    }
    bookmarkCount: law_reactions_aggregate(where: {type: {_eq: $bookmark}}) {
      aggregate {
        count
      }
    }
    law_star_rates_aggregate {
      aggregate {
        avg {
          rate
        }
      }
    }
    world_laws_aggregate {
      aggregate {
        count
      }
    }
    law_revisions(limit: 1, order_by: {created_at: desc}) {
      id
      title
      description
      law_image_url
      law_category
    }
    law_revisions_aggregate {
      aggregate {
        count
      }
    }
    user {
      name
      id
    }
  }
}
    `;

/**
 * __useFindLawsQuery__
 *
 * To run a query within a React component, call `useFindLawsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLawsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLawsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *      like: // value for 'like'
 *      bookmark: // value for 'bookmark'
 *   },
 * });
 */
export function useFindLawsQuery(baseOptions?: Apollo.QueryHookOptions<FindLawsQuery, FindLawsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLawsQuery, FindLawsQueryVariables>(FindLawsDocument, options);
      }
export function useFindLawsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLawsQuery, FindLawsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLawsQuery, FindLawsQueryVariables>(FindLawsDocument, options);
        }
export function useFindLawsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLawsQuery, FindLawsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLawsQuery, FindLawsQueryVariables>(FindLawsDocument, options);
        }
export type FindLawsQueryHookResult = ReturnType<typeof useFindLawsQuery>;
export type FindLawsLazyQueryHookResult = ReturnType<typeof useFindLawsLazyQuery>;
export type FindLawsSuspenseQueryHookResult = ReturnType<typeof useFindLawsSuspenseQuery>;
export type FindLawsQueryResult = Apollo.QueryResult<FindLawsQuery, FindLawsQueryVariables>;
export const FindLawCommentsDocument = gql`
    query findLawComments($id: uuid!, $limit: Int, $offset: Int, $order_by: [law_comments_order_by!] = {}, $where: law_comment_reactions_bool_exp = {}) {
  laws_by_pk(id: $id) {
    id
    law_comments(limit: $limit, offset: $offset, order_by: $order_by) {
      id
      created_at
      user {
        icon_url
        id
        name
      }
      text
      likeCount: law_comment_reactions_aggregate(where: {type: {_eq: 0}}) {
        aggregate {
          count
        }
      }
      isLiked: law_comment_reactions(where: $where) {
        user_id
      }
    }
    law_comments_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useFindLawCommentsQuery__
 *
 * To run a query within a React component, call `useFindLawCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLawCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLawCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindLawCommentsQuery(baseOptions: Apollo.QueryHookOptions<FindLawCommentsQuery, FindLawCommentsQueryVariables> & ({ variables: FindLawCommentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLawCommentsQuery, FindLawCommentsQueryVariables>(FindLawCommentsDocument, options);
      }
export function useFindLawCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLawCommentsQuery, FindLawCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLawCommentsQuery, FindLawCommentsQueryVariables>(FindLawCommentsDocument, options);
        }
export function useFindLawCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLawCommentsQuery, FindLawCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLawCommentsQuery, FindLawCommentsQueryVariables>(FindLawCommentsDocument, options);
        }
export type FindLawCommentsQueryHookResult = ReturnType<typeof useFindLawCommentsQuery>;
export type FindLawCommentsLazyQueryHookResult = ReturnType<typeof useFindLawCommentsLazyQuery>;
export type FindLawCommentsSuspenseQueryHookResult = ReturnType<typeof useFindLawCommentsSuspenseQuery>;
export type FindLawCommentsQueryResult = Apollo.QueryResult<FindLawCommentsQuery, FindLawCommentsQueryVariables>;
export const FindLawDocument = gql`
    query findLaw($id: uuid!, $limit: Int, $offset: Int) {
  laws_by_pk(id: $id) {
    id
    type
    author_id
    law_revisions(limit: $limit, offset: $offset, order_by: {created_at: desc}) {
      title
      id
      description
      law_image_url
      created_at
      data_xml
      block_json
      law_status
      law_type
      law_category
    }
    newness
    place
    user {
      name
    }
    world_laws {
      world {
        id
        world_histories(order_by: {created_at: desc}, limit: 1) {
          title
          description
        }
      }
    }
  }
}
    `;

/**
 * __useFindLawQuery__
 *
 * To run a query within a React component, call `useFindLawQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLawQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLawQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFindLawQuery(baseOptions: Apollo.QueryHookOptions<FindLawQuery, FindLawQueryVariables> & ({ variables: FindLawQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLawQuery, FindLawQueryVariables>(FindLawDocument, options);
      }
export function useFindLawLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLawQuery, FindLawQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLawQuery, FindLawQueryVariables>(FindLawDocument, options);
        }
export function useFindLawSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLawQuery, FindLawQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLawQuery, FindLawQueryVariables>(FindLawDocument, options);
        }
export type FindLawQueryHookResult = ReturnType<typeof useFindLawQuery>;
export type FindLawLazyQueryHookResult = ReturnType<typeof useFindLawLazyQuery>;
export type FindLawSuspenseQueryHookResult = ReturnType<typeof useFindLawSuspenseQuery>;
export type FindLawQueryResult = Apollo.QueryResult<FindLawQuery, FindLawQueryVariables>;
export const FindWorldsByLawDocument = gql`
    query findWorldsByLaw($id: uuid!, $limit1: Int, $order_by1: [world_laws_order_by!] = {}, $where1: world_laws_bool_exp = {}, $offset1: Int, $limit2: Int, $offset2: Int, $order_by2: [world_histories_order_by!] = {}, $where2: world_histories_bool_exp = {}) {
  laws_by_pk(id: $id) {
    world_laws(
      order_by: $order_by1
      where: $where1
      offset: $offset1
      limit: $limit1
    ) {
      world {
        id
        world_histories(
          limit: $limit2
          offset: $offset2
          order_by: $order_by2
          where: $where2
        ) {
          title
          description
          id
        }
      }
    }
  }
}
    `;

/**
 * __useFindWorldsByLawQuery__
 *
 * To run a query within a React component, call `useFindWorldsByLawQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindWorldsByLawQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindWorldsByLawQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit1: // value for 'limit1'
 *      order_by1: // value for 'order_by1'
 *      where1: // value for 'where1'
 *      offset1: // value for 'offset1'
 *      limit2: // value for 'limit2'
 *      offset2: // value for 'offset2'
 *      order_by2: // value for 'order_by2'
 *      where2: // value for 'where2'
 *   },
 * });
 */
export function useFindWorldsByLawQuery(baseOptions: Apollo.QueryHookOptions<FindWorldsByLawQuery, FindWorldsByLawQueryVariables> & ({ variables: FindWorldsByLawQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindWorldsByLawQuery, FindWorldsByLawQueryVariables>(FindWorldsByLawDocument, options);
      }
export function useFindWorldsByLawLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindWorldsByLawQuery, FindWorldsByLawQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindWorldsByLawQuery, FindWorldsByLawQueryVariables>(FindWorldsByLawDocument, options);
        }
export function useFindWorldsByLawSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindWorldsByLawQuery, FindWorldsByLawQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindWorldsByLawQuery, FindWorldsByLawQueryVariables>(FindWorldsByLawDocument, options);
        }
export type FindWorldsByLawQueryHookResult = ReturnType<typeof useFindWorldsByLawQuery>;
export type FindWorldsByLawLazyQueryHookResult = ReturnType<typeof useFindWorldsByLawLazyQuery>;
export type FindWorldsByLawSuspenseQueryHookResult = ReturnType<typeof useFindWorldsByLawSuspenseQuery>;
export type FindWorldsByLawQueryResult = Apollo.QueryResult<FindWorldsByLawQuery, FindWorldsByLawQueryVariables>;
export const CreateLawDocument = gql`
    mutation createLaw($author_id: uuid!, $law_revisions: law_revisions_arr_rel_insert_input = {data: {}}, $newness: Int, $place: String) {
  insert_laws_one(
    object: {author_id: $author_id, law_revisions: $law_revisions, newness: $newness, place: $place}
  ) {
    id
  }
}
    `;
export type CreateLawMutationFn = Apollo.MutationFunction<CreateLawMutation, CreateLawMutationVariables>;

/**
 * __useCreateLawMutation__
 *
 * To run a mutation, you first call `useCreateLawMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLawMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLawMutation, { data, loading, error }] = useCreateLawMutation({
 *   variables: {
 *      author_id: // value for 'author_id'
 *      law_revisions: // value for 'law_revisions'
 *      newness: // value for 'newness'
 *      place: // value for 'place'
 *   },
 * });
 */
export function useCreateLawMutation(baseOptions?: Apollo.MutationHookOptions<CreateLawMutation, CreateLawMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLawMutation, CreateLawMutationVariables>(CreateLawDocument, options);
      }
export type CreateLawMutationHookResult = ReturnType<typeof useCreateLawMutation>;
export type CreateLawMutationResult = Apollo.MutationResult<CreateLawMutation>;
export type CreateLawMutationOptions = Apollo.BaseMutationOptions<CreateLawMutation, CreateLawMutationVariables>;
export const FindLawReactionsDocument = gql`
    query findLawReactions($law_id: uuid!, $user_id: uuid, $like: Int = 0, $star: Int = 1) {
  laws_by_pk(id: $law_id) {
    id
    like: law_reactions_aggregate(where: {type: {_eq: $like}}) {
      aggregate {
        count
      }
    }
    star: law_reactions_aggregate(where: {type: {_eq: $star}}) {
      aggregate {
        count
      }
    }
    is_liked: law_reactions(where: {user_id: {_eq: $user_id}, type: {_eq: $like}}) {
      user_id
    }
    is_stared: law_reactions(where: {user_id: {_eq: $user_id}, type: {_eq: $star}}) {
      user_id
    }
    law_star_rates_aggregate {
      aggregate {
        avg {
          rate
        }
      }
    }
    user_rate: law_star_rates(where: {law_id: {_eq: $law_id}}) {
      rate
    }
  }
}
    `;

/**
 * __useFindLawReactionsQuery__
 *
 * To run a query within a React component, call `useFindLawReactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLawReactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLawReactionsQuery({
 *   variables: {
 *      law_id: // value for 'law_id'
 *      user_id: // value for 'user_id'
 *      like: // value for 'like'
 *      star: // value for 'star'
 *   },
 * });
 */
export function useFindLawReactionsQuery(baseOptions: Apollo.QueryHookOptions<FindLawReactionsQuery, FindLawReactionsQueryVariables> & ({ variables: FindLawReactionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLawReactionsQuery, FindLawReactionsQueryVariables>(FindLawReactionsDocument, options);
      }
export function useFindLawReactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLawReactionsQuery, FindLawReactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLawReactionsQuery, FindLawReactionsQueryVariables>(FindLawReactionsDocument, options);
        }
export function useFindLawReactionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLawReactionsQuery, FindLawReactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLawReactionsQuery, FindLawReactionsQueryVariables>(FindLawReactionsDocument, options);
        }
export type FindLawReactionsQueryHookResult = ReturnType<typeof useFindLawReactionsQuery>;
export type FindLawReactionsLazyQueryHookResult = ReturnType<typeof useFindLawReactionsLazyQuery>;
export type FindLawReactionsSuspenseQueryHookResult = ReturnType<typeof useFindLawReactionsSuspenseQuery>;
export type FindLawReactionsQueryResult = Apollo.QueryResult<FindLawReactionsQuery, FindLawReactionsQueryVariables>;
export const CreateLawReactionDocument = gql`
    mutation createLawReaction($law_id: uuid!, $user_id: uuid!, $type: Int!) {
  insert_law_reactions_one(
    object: {law_id: $law_id, user_id: $user_id, type: $type}
  ) {
    law_id
    user_id
  }
}
    `;
export type CreateLawReactionMutationFn = Apollo.MutationFunction<CreateLawReactionMutation, CreateLawReactionMutationVariables>;

/**
 * __useCreateLawReactionMutation__
 *
 * To run a mutation, you first call `useCreateLawReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLawReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLawReactionMutation, { data, loading, error }] = useCreateLawReactionMutation({
 *   variables: {
 *      law_id: // value for 'law_id'
 *      user_id: // value for 'user_id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateLawReactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateLawReactionMutation, CreateLawReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLawReactionMutation, CreateLawReactionMutationVariables>(CreateLawReactionDocument, options);
      }
export type CreateLawReactionMutationHookResult = ReturnType<typeof useCreateLawReactionMutation>;
export type CreateLawReactionMutationResult = Apollo.MutationResult<CreateLawReactionMutation>;
export type CreateLawReactionMutationOptions = Apollo.BaseMutationOptions<CreateLawReactionMutation, CreateLawReactionMutationVariables>;
export const DeleteLawReactionDocument = gql`
    mutation deleteLawReaction($law_id: uuid!, $type: Int!, $user_id: uuid!) {
  delete_law_reactions_by_pk(law_id: $law_id, type: $type, user_id: $user_id) {
    law_id
    user_id
  }
}
    `;
export type DeleteLawReactionMutationFn = Apollo.MutationFunction<DeleteLawReactionMutation, DeleteLawReactionMutationVariables>;

/**
 * __useDeleteLawReactionMutation__
 *
 * To run a mutation, you first call `useDeleteLawReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLawReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLawReactionMutation, { data, loading, error }] = useDeleteLawReactionMutation({
 *   variables: {
 *      law_id: // value for 'law_id'
 *      type: // value for 'type'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useDeleteLawReactionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLawReactionMutation, DeleteLawReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLawReactionMutation, DeleteLawReactionMutationVariables>(DeleteLawReactionDocument, options);
      }
export type DeleteLawReactionMutationHookResult = ReturnType<typeof useDeleteLawReactionMutation>;
export type DeleteLawReactionMutationResult = Apollo.MutationResult<DeleteLawReactionMutation>;
export type DeleteLawReactionMutationOptions = Apollo.BaseMutationOptions<DeleteLawReactionMutation, DeleteLawReactionMutationVariables>;
export const UpdateStarRateDocument = gql`
    mutation updateStarRate($law_id: uuid!, $rate: Int!, $user_id: uuid!) {
  insert_law_star_rates_one(
    object: {law_id: $law_id, rate: $rate, user_id: $user_id}
    on_conflict: {constraint: law_star_rates_pkey, update_columns: rate}
  ) {
    law_id
    user_id
  }
}
    `;
export type UpdateStarRateMutationFn = Apollo.MutationFunction<UpdateStarRateMutation, UpdateStarRateMutationVariables>;

/**
 * __useUpdateStarRateMutation__
 *
 * To run a mutation, you first call `useUpdateStarRateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStarRateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStarRateMutation, { data, loading, error }] = useUpdateStarRateMutation({
 *   variables: {
 *      law_id: // value for 'law_id'
 *      rate: // value for 'rate'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUpdateStarRateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStarRateMutation, UpdateStarRateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStarRateMutation, UpdateStarRateMutationVariables>(UpdateStarRateDocument, options);
      }
export type UpdateStarRateMutationHookResult = ReturnType<typeof useUpdateStarRateMutation>;
export type UpdateStarRateMutationResult = Apollo.MutationResult<UpdateStarRateMutation>;
export type UpdateStarRateMutationOptions = Apollo.BaseMutationOptions<UpdateStarRateMutation, UpdateStarRateMutationVariables>;
export const CreateLawCommentDocument = gql`
    mutation createLawComment($law_id: uuid!, $author_id: uuid!, $text: String!) {
  insert_law_comments_one(
    object: {law_id: $law_id, author_id: $author_id, text: $text}
  ) {
    id
  }
}
    `;
export type CreateLawCommentMutationFn = Apollo.MutationFunction<CreateLawCommentMutation, CreateLawCommentMutationVariables>;

/**
 * __useCreateLawCommentMutation__
 *
 * To run a mutation, you first call `useCreateLawCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLawCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLawCommentMutation, { data, loading, error }] = useCreateLawCommentMutation({
 *   variables: {
 *      law_id: // value for 'law_id'
 *      author_id: // value for 'author_id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCreateLawCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateLawCommentMutation, CreateLawCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLawCommentMutation, CreateLawCommentMutationVariables>(CreateLawCommentDocument, options);
      }
export type CreateLawCommentMutationHookResult = ReturnType<typeof useCreateLawCommentMutation>;
export type CreateLawCommentMutationResult = Apollo.MutationResult<CreateLawCommentMutation>;
export type CreateLawCommentMutationOptions = Apollo.BaseMutationOptions<CreateLawCommentMutation, CreateLawCommentMutationVariables>;
export const CreateWorldCommentDocument = gql`
    mutation createWorldComment($author_id: uuid!, $world_id: uuid!, $text: String!) {
  insert_world_comments_one(
    object: {text: $text, author_id: $author_id, world_id: $world_id}
  ) {
    id
  }
}
    `;
export type CreateWorldCommentMutationFn = Apollo.MutationFunction<CreateWorldCommentMutation, CreateWorldCommentMutationVariables>;

/**
 * __useCreateWorldCommentMutation__
 *
 * To run a mutation, you first call `useCreateWorldCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorldCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorldCommentMutation, { data, loading, error }] = useCreateWorldCommentMutation({
 *   variables: {
 *      author_id: // value for 'author_id'
 *      world_id: // value for 'world_id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCreateWorldCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorldCommentMutation, CreateWorldCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorldCommentMutation, CreateWorldCommentMutationVariables>(CreateWorldCommentDocument, options);
      }
export type CreateWorldCommentMutationHookResult = ReturnType<typeof useCreateWorldCommentMutation>;
export type CreateWorldCommentMutationResult = Apollo.MutationResult<CreateWorldCommentMutation>;
export type CreateWorldCommentMutationOptions = Apollo.BaseMutationOptions<CreateWorldCommentMutation, CreateWorldCommentMutationVariables>;
export const FindWorldCommentsDocument = gql`
    query findWorldComments($id: uuid!, $limit: Int, $offset: Int, $order_by: [world_comments_order_by!] = {}, $where: world_comments_bool_exp = {}, $user_id: uuid_comparison_exp = {}) {
  worlds_by_pk(id: $id) {
    id
    world_comments(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      id
      text
      created_at
      user {
        icon_url
        id
        name
      }
      likeCount: world_comment_reactions_aggregate(where: {type: {_eq: 0}}) {
        aggregate {
          count
        }
      }
      isLiked: world_comment_reactions(where: {user_id: $user_id}) {
        user_id
      }
    }
  }
}
    `;

/**
 * __useFindWorldCommentsQuery__
 *
 * To run a query within a React component, call `useFindWorldCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindWorldCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindWorldCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useFindWorldCommentsQuery(baseOptions: Apollo.QueryHookOptions<FindWorldCommentsQuery, FindWorldCommentsQueryVariables> & ({ variables: FindWorldCommentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindWorldCommentsQuery, FindWorldCommentsQueryVariables>(FindWorldCommentsDocument, options);
      }
export function useFindWorldCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindWorldCommentsQuery, FindWorldCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindWorldCommentsQuery, FindWorldCommentsQueryVariables>(FindWorldCommentsDocument, options);
        }
export function useFindWorldCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindWorldCommentsQuery, FindWorldCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindWorldCommentsQuery, FindWorldCommentsQueryVariables>(FindWorldCommentsDocument, options);
        }
export type FindWorldCommentsQueryHookResult = ReturnType<typeof useFindWorldCommentsQuery>;
export type FindWorldCommentsLazyQueryHookResult = ReturnType<typeof useFindWorldCommentsLazyQuery>;
export type FindWorldCommentsSuspenseQueryHookResult = ReturnType<typeof useFindWorldCommentsSuspenseQuery>;
export type FindWorldCommentsQueryResult = Apollo.QueryResult<FindWorldCommentsQuery, FindWorldCommentsQueryVariables>;
export const CreateWorldCommentReactionDocument = gql`
    mutation createWorldCommentReaction($comment_id: uuid!, $type: Int!, $user_id: uuid!) {
  insert_world_comment_reactions_one(
    object: {comment_id: $comment_id, type: $type, user_id: $user_id}
  ) {
    comment_id
    user_id
  }
}
    `;
export type CreateWorldCommentReactionMutationFn = Apollo.MutationFunction<CreateWorldCommentReactionMutation, CreateWorldCommentReactionMutationVariables>;

/**
 * __useCreateWorldCommentReactionMutation__
 *
 * To run a mutation, you first call `useCreateWorldCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorldCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorldCommentReactionMutation, { data, loading, error }] = useCreateWorldCommentReactionMutation({
 *   variables: {
 *      comment_id: // value for 'comment_id'
 *      type: // value for 'type'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCreateWorldCommentReactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorldCommentReactionMutation, CreateWorldCommentReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorldCommentReactionMutation, CreateWorldCommentReactionMutationVariables>(CreateWorldCommentReactionDocument, options);
      }
export type CreateWorldCommentReactionMutationHookResult = ReturnType<typeof useCreateWorldCommentReactionMutation>;
export type CreateWorldCommentReactionMutationResult = Apollo.MutationResult<CreateWorldCommentReactionMutation>;
export type CreateWorldCommentReactionMutationOptions = Apollo.BaseMutationOptions<CreateWorldCommentReactionMutation, CreateWorldCommentReactionMutationVariables>;
export const RemoveWorldCommentReactionDocument = gql`
    mutation removeWorldCommentReaction($comment_id: uuid!, $type: Int = 0, $user_id: uuid!) {
  delete_world_comment_reactions_by_pk(
    comment_id: $comment_id
    type: $type
    user_id: $user_id
  ) {
    comment_id
    user_id
  }
}
    `;
export type RemoveWorldCommentReactionMutationFn = Apollo.MutationFunction<RemoveWorldCommentReactionMutation, RemoveWorldCommentReactionMutationVariables>;

/**
 * __useRemoveWorldCommentReactionMutation__
 *
 * To run a mutation, you first call `useRemoveWorldCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveWorldCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeWorldCommentReactionMutation, { data, loading, error }] = useRemoveWorldCommentReactionMutation({
 *   variables: {
 *      comment_id: // value for 'comment_id'
 *      type: // value for 'type'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useRemoveWorldCommentReactionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveWorldCommentReactionMutation, RemoveWorldCommentReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveWorldCommentReactionMutation, RemoveWorldCommentReactionMutationVariables>(RemoveWorldCommentReactionDocument, options);
      }
export type RemoveWorldCommentReactionMutationHookResult = ReturnType<typeof useRemoveWorldCommentReactionMutation>;
export type RemoveWorldCommentReactionMutationResult = Apollo.MutationResult<RemoveWorldCommentReactionMutation>;
export type RemoveWorldCommentReactionMutationOptions = Apollo.BaseMutationOptions<RemoveWorldCommentReactionMutation, RemoveWorldCommentReactionMutationVariables>;
export const FindLawsForCreateWorldDocument = gql`
    query findLawsForCreateWorld($limit: Int, $offset: Int, $order_by: [laws_order_by!] = {}, $where: laws_bool_exp = {}, $limit1: Int, $order_by1: [law_revisions_order_by!] = {}) {
  laws(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    id
    type
    law_revisions(limit: $limit1, order_by: $order_by1) {
      id
      description
      id
      title
      law_image_url
    }
    user {
      id
      icon_url
      name
    }
  }
}
    `;

/**
 * __useFindLawsForCreateWorldQuery__
 *
 * To run a query within a React component, call `useFindLawsForCreateWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLawsForCreateWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLawsForCreateWorldQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *      limit1: // value for 'limit1'
 *      order_by1: // value for 'order_by1'
 *   },
 * });
 */
export function useFindLawsForCreateWorldQuery(baseOptions?: Apollo.QueryHookOptions<FindLawsForCreateWorldQuery, FindLawsForCreateWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLawsForCreateWorldQuery, FindLawsForCreateWorldQueryVariables>(FindLawsForCreateWorldDocument, options);
      }
export function useFindLawsForCreateWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLawsForCreateWorldQuery, FindLawsForCreateWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLawsForCreateWorldQuery, FindLawsForCreateWorldQueryVariables>(FindLawsForCreateWorldDocument, options);
        }
export function useFindLawsForCreateWorldSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLawsForCreateWorldQuery, FindLawsForCreateWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLawsForCreateWorldQuery, FindLawsForCreateWorldQueryVariables>(FindLawsForCreateWorldDocument, options);
        }
export type FindLawsForCreateWorldQueryHookResult = ReturnType<typeof useFindLawsForCreateWorldQuery>;
export type FindLawsForCreateWorldLazyQueryHookResult = ReturnType<typeof useFindLawsForCreateWorldLazyQuery>;
export type FindLawsForCreateWorldSuspenseQueryHookResult = ReturnType<typeof useFindLawsForCreateWorldSuspenseQuery>;
export type FindLawsForCreateWorldQueryResult = Apollo.QueryResult<FindLawsForCreateWorldQuery, FindLawsForCreateWorldQueryVariables>;
export const CreateLawCommentReactionDocument = gql`
    mutation createLawCommentReaction($comment_id: uuid!, $type: Int = 0, $user_id: uuid!) {
  insert_law_comment_reactions_one(
    object: {comment_id: $comment_id, type: $type, user_id: $user_id}
  ) {
    comment_id
    user_id
  }
}
    `;
export type CreateLawCommentReactionMutationFn = Apollo.MutationFunction<CreateLawCommentReactionMutation, CreateLawCommentReactionMutationVariables>;

/**
 * __useCreateLawCommentReactionMutation__
 *
 * To run a mutation, you first call `useCreateLawCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLawCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLawCommentReactionMutation, { data, loading, error }] = useCreateLawCommentReactionMutation({
 *   variables: {
 *      comment_id: // value for 'comment_id'
 *      type: // value for 'type'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCreateLawCommentReactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateLawCommentReactionMutation, CreateLawCommentReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLawCommentReactionMutation, CreateLawCommentReactionMutationVariables>(CreateLawCommentReactionDocument, options);
      }
export type CreateLawCommentReactionMutationHookResult = ReturnType<typeof useCreateLawCommentReactionMutation>;
export type CreateLawCommentReactionMutationResult = Apollo.MutationResult<CreateLawCommentReactionMutation>;
export type CreateLawCommentReactionMutationOptions = Apollo.BaseMutationOptions<CreateLawCommentReactionMutation, CreateLawCommentReactionMutationVariables>;
export const DeleteLawCommentReactionDocument = gql`
    mutation deleteLawCommentReaction($comment_id: uuid!, $type: Int = 0, $user_id: uuid!) {
  delete_law_comment_reactions_by_pk(
    comment_id: $comment_id
    type: $type
    user_id: $user_id
  ) {
    comment_id
    user_id
  }
}
    `;
export type DeleteLawCommentReactionMutationFn = Apollo.MutationFunction<DeleteLawCommentReactionMutation, DeleteLawCommentReactionMutationVariables>;

/**
 * __useDeleteLawCommentReactionMutation__
 *
 * To run a mutation, you first call `useDeleteLawCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLawCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLawCommentReactionMutation, { data, loading, error }] = useDeleteLawCommentReactionMutation({
 *   variables: {
 *      comment_id: // value for 'comment_id'
 *      type: // value for 'type'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useDeleteLawCommentReactionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLawCommentReactionMutation, DeleteLawCommentReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLawCommentReactionMutation, DeleteLawCommentReactionMutationVariables>(DeleteLawCommentReactionDocument, options);
      }
export type DeleteLawCommentReactionMutationHookResult = ReturnType<typeof useDeleteLawCommentReactionMutation>;
export type DeleteLawCommentReactionMutationResult = Apollo.MutationResult<DeleteLawCommentReactionMutation>;
export type DeleteLawCommentReactionMutationOptions = Apollo.BaseMutationOptions<DeleteLawCommentReactionMutation, DeleteLawCommentReactionMutationVariables>;
export const CreateRawDocument = gql`
    mutation createRaw($author_id: uuid!, $type: Int = 0, $description: String, $law_url: String, $title: String) {
  insert_laws_one(
    object: {author_id: $author_id, type: $type, law_revisions: {data: {description: $description, law_image_url: $law_url, title: $title}}}
  ) {
    id
  }
}
    `;
export type CreateRawMutationFn = Apollo.MutationFunction<CreateRawMutation, CreateRawMutationVariables>;

/**
 * __useCreateRawMutation__
 *
 * To run a mutation, you first call `useCreateRawMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRawMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRawMutation, { data, loading, error }] = useCreateRawMutation({
 *   variables: {
 *      author_id: // value for 'author_id'
 *      type: // value for 'type'
 *      description: // value for 'description'
 *      law_url: // value for 'law_url'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateRawMutation(baseOptions?: Apollo.MutationHookOptions<CreateRawMutation, CreateRawMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRawMutation, CreateRawMutationVariables>(CreateRawDocument, options);
      }
export type CreateRawMutationHookResult = ReturnType<typeof useCreateRawMutation>;
export type CreateRawMutationResult = Apollo.MutationResult<CreateRawMutation>;
export type CreateRawMutationOptions = Apollo.BaseMutationOptions<CreateRawMutation, CreateRawMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($id: uuid!, $_set: users_set_input = {}) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    name
    icon_url
    is_first_time
    login_bonus_timestamp
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      _set: // value for '_set'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const FindLoginBonusDateDocument = gql`
    query findLoginBonusDate($authentication_id: String_comparison_exp = {}) {
  users(where: {authentication_id: $authentication_id}) {
    id
    login_bonus_timestamp
  }
}
    `;

/**
 * __useFindLoginBonusDateQuery__
 *
 * To run a query within a React component, call `useFindLoginBonusDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLoginBonusDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLoginBonusDateQuery({
 *   variables: {
 *      authentication_id: // value for 'authentication_id'
 *   },
 * });
 */
export function useFindLoginBonusDateQuery(baseOptions?: Apollo.QueryHookOptions<FindLoginBonusDateQuery, FindLoginBonusDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLoginBonusDateQuery, FindLoginBonusDateQueryVariables>(FindLoginBonusDateDocument, options);
      }
export function useFindLoginBonusDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLoginBonusDateQuery, FindLoginBonusDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLoginBonusDateQuery, FindLoginBonusDateQueryVariables>(FindLoginBonusDateDocument, options);
        }
export function useFindLoginBonusDateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLoginBonusDateQuery, FindLoginBonusDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLoginBonusDateQuery, FindLoginBonusDateQueryVariables>(FindLoginBonusDateDocument, options);
        }
export type FindLoginBonusDateQueryHookResult = ReturnType<typeof useFindLoginBonusDateQuery>;
export type FindLoginBonusDateLazyQueryHookResult = ReturnType<typeof useFindLoginBonusDateLazyQuery>;
export type FindLoginBonusDateSuspenseQueryHookResult = ReturnType<typeof useFindLoginBonusDateSuspenseQuery>;
export type FindLoginBonusDateQueryResult = Apollo.QueryResult<FindLoginBonusDateQuery, FindLoginBonusDateQueryVariables>;
export const FindRandomSpeciesAssetsDocument = gql`
    query findRandomSpeciesAssets {
  random_species_assets_view {
    species_asset_id
  }
}
    `;

/**
 * __useFindRandomSpeciesAssetsQuery__
 *
 * To run a query within a React component, call `useFindRandomSpeciesAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRandomSpeciesAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRandomSpeciesAssetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRandomSpeciesAssetsQuery(baseOptions?: Apollo.QueryHookOptions<FindRandomSpeciesAssetsQuery, FindRandomSpeciesAssetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRandomSpeciesAssetsQuery, FindRandomSpeciesAssetsQueryVariables>(FindRandomSpeciesAssetsDocument, options);
      }
export function useFindRandomSpeciesAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRandomSpeciesAssetsQuery, FindRandomSpeciesAssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRandomSpeciesAssetsQuery, FindRandomSpeciesAssetsQueryVariables>(FindRandomSpeciesAssetsDocument, options);
        }
export function useFindRandomSpeciesAssetsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindRandomSpeciesAssetsQuery, FindRandomSpeciesAssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindRandomSpeciesAssetsQuery, FindRandomSpeciesAssetsQueryVariables>(FindRandomSpeciesAssetsDocument, options);
        }
export type FindRandomSpeciesAssetsQueryHookResult = ReturnType<typeof useFindRandomSpeciesAssetsQuery>;
export type FindRandomSpeciesAssetsLazyQueryHookResult = ReturnType<typeof useFindRandomSpeciesAssetsLazyQuery>;
export type FindRandomSpeciesAssetsSuspenseQueryHookResult = ReturnType<typeof useFindRandomSpeciesAssetsSuspenseQuery>;
export type FindRandomSpeciesAssetsQueryResult = Apollo.QueryResult<FindRandomSpeciesAssetsQuery, FindRandomSpeciesAssetsQueryVariables>;
export const CreateCitizensDocument = gql`
    mutation createCitizens($objects: [citizens_insert_input!] = {}, $id: uuid!, $login_bonus_timestamp: timestamptz!) {
  insert_citizens(objects: $objects, on_conflict: {constraint: citizens_pkey}) {
    returning {
      id
      species_asset {
        image_url
        species {
          name
        }
      }
      name
    }
  }
  update_users_by_pk(
    pk_columns: {id: $id}
    _set: {login_bonus_timestamp: $login_bonus_timestamp}
  ) {
    id
  }
}
    `;
export type CreateCitizensMutationFn = Apollo.MutationFunction<CreateCitizensMutation, CreateCitizensMutationVariables>;

/**
 * __useCreateCitizensMutation__
 *
 * To run a mutation, you first call `useCreateCitizensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCitizensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCitizensMutation, { data, loading, error }] = useCreateCitizensMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      id: // value for 'id'
 *      login_bonus_timestamp: // value for 'login_bonus_timestamp'
 *   },
 * });
 */
export function useCreateCitizensMutation(baseOptions?: Apollo.MutationHookOptions<CreateCitizensMutation, CreateCitizensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCitizensMutation, CreateCitizensMutationVariables>(CreateCitizensDocument, options);
      }
export type CreateCitizensMutationHookResult = ReturnType<typeof useCreateCitizensMutation>;
export type CreateCitizensMutationResult = Apollo.MutationResult<CreateCitizensMutation>;
export type CreateCitizensMutationOptions = Apollo.BaseMutationOptions<CreateCitizensMutation, CreateCitizensMutationVariables>;
export const FindUserDescriptionDocument = gql`
    query findUserDescription($id: uuid!) {
  users_by_pk(id: $id) {
    age
    created_at
    gender
    icon_url
    id
    name
    worlds_aggregate {
      aggregate {
        count
      }
      nodes {
        id
        world_histories(order_by: {created_at: desc}, limit: 1) {
          id
          title
          description
        }
      }
    }
    laws_aggregate {
      aggregate {
        count
      }
      nodes {
        id
        created_at
        law_revisions(limit: 1, order_by: {created_at: desc}) {
          id
          description
          title
        }
      }
    }
    citizens_aggregate {
      aggregate {
        count
      }
      nodes {
        id
        name
        world_citizens {
          world {
            world_histories(order_by: {created_at: desc}, limit: 1) {
              title
              id
            }
          }
        }
        species_asset {
          image_url
          personality
          species {
            name
            description
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFindUserDescriptionQuery__
 *
 * To run a query within a React component, call `useFindUserDescriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserDescriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserDescriptionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindUserDescriptionQuery(baseOptions: Apollo.QueryHookOptions<FindUserDescriptionQuery, FindUserDescriptionQueryVariables> & ({ variables: FindUserDescriptionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserDescriptionQuery, FindUserDescriptionQueryVariables>(FindUserDescriptionDocument, options);
      }
export function useFindUserDescriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserDescriptionQuery, FindUserDescriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserDescriptionQuery, FindUserDescriptionQueryVariables>(FindUserDescriptionDocument, options);
        }
export function useFindUserDescriptionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUserDescriptionQuery, FindUserDescriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserDescriptionQuery, FindUserDescriptionQueryVariables>(FindUserDescriptionDocument, options);
        }
export type FindUserDescriptionQueryHookResult = ReturnType<typeof useFindUserDescriptionQuery>;
export type FindUserDescriptionLazyQueryHookResult = ReturnType<typeof useFindUserDescriptionLazyQuery>;
export type FindUserDescriptionSuspenseQueryHookResult = ReturnType<typeof useFindUserDescriptionSuspenseQuery>;
export type FindUserDescriptionQueryResult = Apollo.QueryResult<FindUserDescriptionQuery, FindUserDescriptionQueryVariables>;
export const FindLawThumbnailDocument = gql`
    query findLawThumbnail($id: uuid = "") {
  laws_by_pk(id: $id) {
    id
    law_revisions(order_by: {created_at: desc}, limit: 1) {
      description
      title
      law_image_url
    }
  }
}
    `;

/**
 * __useFindLawThumbnailQuery__
 *
 * To run a query within a React component, call `useFindLawThumbnailQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLawThumbnailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLawThumbnailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindLawThumbnailQuery(baseOptions?: Apollo.QueryHookOptions<FindLawThumbnailQuery, FindLawThumbnailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLawThumbnailQuery, FindLawThumbnailQueryVariables>(FindLawThumbnailDocument, options);
      }
export function useFindLawThumbnailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLawThumbnailQuery, FindLawThumbnailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLawThumbnailQuery, FindLawThumbnailQueryVariables>(FindLawThumbnailDocument, options);
        }
export function useFindLawThumbnailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindLawThumbnailQuery, FindLawThumbnailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindLawThumbnailQuery, FindLawThumbnailQueryVariables>(FindLawThumbnailDocument, options);
        }
export type FindLawThumbnailQueryHookResult = ReturnType<typeof useFindLawThumbnailQuery>;
export type FindLawThumbnailLazyQueryHookResult = ReturnType<typeof useFindLawThumbnailLazyQuery>;
export type FindLawThumbnailSuspenseQueryHookResult = ReturnType<typeof useFindLawThumbnailSuspenseQuery>;
export type FindLawThumbnailQueryResult = Apollo.QueryResult<FindLawThumbnailQuery, FindLawThumbnailQueryVariables>;
export const CreateLawRevisionDocument = gql`
    mutation createLawRevision($object: law_revisions_insert_input = {}) {
  insert_law_revisions_one(object: $object) {
    id
  }
}
    `;
export type CreateLawRevisionMutationFn = Apollo.MutationFunction<CreateLawRevisionMutation, CreateLawRevisionMutationVariables>;

/**
 * __useCreateLawRevisionMutation__
 *
 * To run a mutation, you first call `useCreateLawRevisionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLawRevisionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLawRevisionMutation, { data, loading, error }] = useCreateLawRevisionMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateLawRevisionMutation(baseOptions?: Apollo.MutationHookOptions<CreateLawRevisionMutation, CreateLawRevisionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLawRevisionMutation, CreateLawRevisionMutationVariables>(CreateLawRevisionDocument, options);
      }
export type CreateLawRevisionMutationHookResult = ReturnType<typeof useCreateLawRevisionMutation>;
export type CreateLawRevisionMutationResult = Apollo.MutationResult<CreateLawRevisionMutation>;
export type CreateLawRevisionMutationOptions = Apollo.BaseMutationOptions<CreateLawRevisionMutation, CreateLawRevisionMutationVariables>;
export const CreateWorldHistoriesDocument = gql`
    mutation createWorldHistories($object: world_histories_insert_input = {}) {
  insert_world_histories_one(object: $object) {
    id
  }
}
    `;
export type CreateWorldHistoriesMutationFn = Apollo.MutationFunction<CreateWorldHistoriesMutation, CreateWorldHistoriesMutationVariables>;

/**
 * __useCreateWorldHistoriesMutation__
 *
 * To run a mutation, you first call `useCreateWorldHistoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorldHistoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorldHistoriesMutation, { data, loading, error }] = useCreateWorldHistoriesMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateWorldHistoriesMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorldHistoriesMutation, CreateWorldHistoriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorldHistoriesMutation, CreateWorldHistoriesMutationVariables>(CreateWorldHistoriesDocument, options);
      }
export type CreateWorldHistoriesMutationHookResult = ReturnType<typeof useCreateWorldHistoriesMutation>;
export type CreateWorldHistoriesMutationResult = Apollo.MutationResult<CreateWorldHistoriesMutation>;
export type CreateWorldHistoriesMutationOptions = Apollo.BaseMutationOptions<CreateWorldHistoriesMutation, CreateWorldHistoriesMutationVariables>;
export const GetSitemapInfoDocument = gql`
    query getSitemapInfo {
  laws {
    id
  }
  worlds {
    id
  }
}
    `;

/**
 * __useGetSitemapInfoQuery__
 *
 * To run a query within a React component, call `useGetSitemapInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSitemapInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSitemapInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSitemapInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetSitemapInfoQuery, GetSitemapInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSitemapInfoQuery, GetSitemapInfoQueryVariables>(GetSitemapInfoDocument, options);
      }
export function useGetSitemapInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSitemapInfoQuery, GetSitemapInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSitemapInfoQuery, GetSitemapInfoQueryVariables>(GetSitemapInfoDocument, options);
        }
export function useGetSitemapInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSitemapInfoQuery, GetSitemapInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSitemapInfoQuery, GetSitemapInfoQueryVariables>(GetSitemapInfoDocument, options);
        }
export type GetSitemapInfoQueryHookResult = ReturnType<typeof useGetSitemapInfoQuery>;
export type GetSitemapInfoLazyQueryHookResult = ReturnType<typeof useGetSitemapInfoLazyQuery>;
export type GetSitemapInfoSuspenseQueryHookResult = ReturnType<typeof useGetSitemapInfoSuspenseQuery>;
export type GetSitemapInfoQueryResult = Apollo.QueryResult<GetSitemapInfoQuery, GetSitemapInfoQueryVariables>;